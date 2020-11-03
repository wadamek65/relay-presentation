import { ApolloServer, PubSub } from 'apollo-server-express';
import { execute, subscribe } from 'graphql';
import { WebApp } from 'meteor/webapp';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import typeDefs from '../schema.graphql';

const pubSub = new PubSub();
const CHAT_UPDATES = 'CHAT_UPDATES';
const chatMessages = [
  {
    id: Math.random().toString(36).substr(2, 5),
    author: 'user 1',
    text: 'message 1',
    sentAt: new Date().toLocaleString()
  },
  {
    id: Math.random().toString(36).substr(2, 5),
    author: 'user 1',
    text: 'message 2',
    sentAt: new Date().toLocaleString()
  },
  {
    id: Math.random().toString(36).substr(2, 5),
    author: 'user 2',
    text: 'message 3',
    sentAt: new Date().toLocaleString()
  },
  {
    id: Math.random().toString(36).substr(2, 5),
    author: 'user 3',
    text: 'message 4',
    sentAt: new Date().toLocaleString()
  },
  {
    id: Math.random().toString(36).substr(2, 5),
    author: 'user 1',
    text: 'message 5',
    sentAt: new Date().toLocaleString()
  },
];

const chatObject = {
  id: 'Chat:1',
  title: 'Workshop chat',
  messages: ({before, after, last, first}) => {
    let messagesCopy = [...chatMessages];
    let hasNextPage = false;
    let hasPreviousPage = false;

    if (after) {
      messagesCopy = messagesCopy.slice(+after + 1);
    }

    if (before) {
      messagesCopy = messagesCopy.slice(0, +before);
    }

    if (first) {
      const initialLength = messagesCopy.length;
      messagesCopy = messagesCopy.slice(0, first);
      if (initialLength > messagesCopy.length) {
        hasNextPage = true;
      }
    }

    if (last) {
      const initialLength = messagesCopy.length;
      messagesCopy = messagesCopy.slice(messagesCopy.length - 1 - last, messagesCopy.length - 1);
      if (initialLength > messagesCopy.length) {
        hasPreviousPage = true;
      }
    }

    const start = chatMessages.findIndex(message => message.id === messagesCopy[0]?.id);
    const end = chatMessages.findIndex(message => message.id === messagesCopy?.[messagesCopy.length - 1]?.id);

    return {
      pageInfo: {
        hasPreviousPage,
        hasNextPage,
        startCursor: start === -1 ? null : start,
        endCursor: end === -1 ? null : end,
      },
      edges: messagesCopy.map(message => ({
        node: message,
        cursor: chatMessages.findIndex(msg => msg.id === message.id)
      }))
    };
  }
}

const chat = () => chatObject;

const sendMessage = async (parent, {input: {author, text}}) => {
  const newMessage = {
    id: Math.random().toString(36).substr(2, 5),
    author,
    text
  };
  chatMessages.push(newMessage);

  await pubSub.publish(CHAT_UPDATES, {newMessage});

  return {
    edge: {
      cursor: chatMessages.length,
      node: newMessage
    }
  }
}

const resolvers = {
  Query: {
    chat,
    viewer: {
      chat
    }
  },
  Mutation: {
    sendMessage
  },
  Subscription: {
    chatUpdates: {
      subscribe: () => pubSub.asyncIterator(CHAT_UPDATES)
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql'
});

new SubscriptionServer({
  schema: typeDefs,
  execute,
  subscribe
}, {
  server: WebApp.httpServer,
  path: '/graphql'
});

WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end();
  }
});
