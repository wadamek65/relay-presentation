import { ApolloServer } from 'apollo-server-express';
import { WebApp } from 'meteor/webapp';
import typeDefs from '../schema.graphql';

const chats = () => ({
  result: [{
    id: 1,
    author: {
      id: 2,
      email: 'konrad@vazco.eu',
      name: 'Konrad',
    }
  }]
})

const me = () => ({
  id: 2,
  email: 'konrad@vazco.eu',
  name: 'Konrad',
})

const resolvers = {
  Query: {
    chats,
    me,
    viewer: () => ({
      chats,
      me,
    })
  },
  Mutation: {
    editPerson: (parent, {input: {id, name}}) => ({
      result: {
        id,
        name,
        email: 'radek@vazco.eu'
      }
    })
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql'
});

WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end();
  }
});
