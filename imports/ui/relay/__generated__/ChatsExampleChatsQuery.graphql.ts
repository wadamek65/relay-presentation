/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ChatsExampleChatsQueryVariables = {};
export type ChatsExampleChatsQueryResponse = {
    readonly chats: {
        readonly result: ReadonlyArray<{
            readonly id: string;
            readonly messages: ReadonlyArray<{
                readonly id: string;
                readonly text: string;
            }>;
            readonly participants: ReadonlyArray<{
                readonly id: string;
                readonly name: string;
            }>;
        }>;
    };
};
export type ChatsExampleChatsQuery = {
    readonly response: ChatsExampleChatsQueryResponse;
    readonly variables: ChatsExampleChatsQueryVariables;
};



/*
query ChatsExampleChatsQuery {
  chats {
    result {
      id
      messages {
        id
        text
      }
      participants {
        id
        name
      }
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any), v1 = [
        ({
            "alias": null,
            "args": null,
            "concreteType": "ChatsPayload",
            "kind": "LinkedField",
            "name": "chats",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Chat",
                    "kind": "LinkedField",
                    "name": "result",
                    "plural": true,
                    "selections": [
                        (v0 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Message",
                            "kind": "LinkedField",
                            "name": "messages",
                            "plural": true,
                            "selections": [
                                (v0 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "text",
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Person",
                            "kind": "LinkedField",
                            "name": "participants",
                            "plural": true,
                            "selections": [
                                (v0 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "name",
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ],
            "storageKey": null
        } as any)
    ];
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "ChatsExampleChatsQuery",
            "selections": (v1 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "ChatsExampleChatsQuery",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "f49b133f6a3438e81c095ee343f254a7",
            "id": null,
            "metadata": {},
            "name": "ChatsExampleChatsQuery",
            "operationKind": "query",
            "text": "query ChatsExampleChatsQuery {\n  chats {\n    result {\n      id\n      messages {\n        id\n        text\n      }\n      participants {\n        id\n        name\n      }\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'c04aefaf1e26e1993fa6331f2a086528';
export default node;
