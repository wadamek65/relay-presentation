/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChatsChatsQueryVariables = {};
export type ChatsChatsQueryResponse = {
    readonly viewer: {
        readonly me: {
            readonly " $fragmentRefs": FragmentRefs<"Navbar_me">;
        };
        readonly chats: {
            readonly result: ReadonlyArray<{
                readonly id: string;
                readonly author: {
                    readonly " $fragmentRefs": FragmentRefs<"Author_author" | "Stats_author">;
                };
            }>;
        };
    };
};
export type ChatsChatsQuery = {
    readonly response: ChatsChatsQueryResponse;
    readonly variables: ChatsChatsQueryVariables;
};



/*
query ChatsChatsQuery {
  viewer {
    me {
      ...Navbar_me
      id
    }
    chats {
      result {
        id
        author {
          ...Author_author
          ...Stats_author
          id
        }
      }
    }
  }
}

fragment Author_author on Person {
  id
  name
  email
}

fragment Navbar_me on Person {
  id
  name
  email
}

fragment Stats_author on Person {
  id
  name
  email
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
        (v0 /*: any*/),
        ({
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
        } as any),
        ({
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
        } as any)
    ];
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "ChatsChatsQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Viewer",
                    "kind": "LinkedField",
                    "name": "viewer",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Person",
                            "kind": "LinkedField",
                            "name": "me",
                            "plural": false,
                            "selections": [
                                {
                                    "args": null,
                                    "kind": "FragmentSpread",
                                    "name": "Navbar_me"
                                }
                            ],
                            "storageKey": null
                        },
                        {
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
                                            "concreteType": "Person",
                                            "kind": "LinkedField",
                                            "name": "author",
                                            "plural": false,
                                            "selections": [
                                                {
                                                    "args": null,
                                                    "kind": "FragmentSpread",
                                                    "name": "Author_author"
                                                },
                                                {
                                                    "args": null,
                                                    "kind": "FragmentSpread",
                                                    "name": "Stats_author"
                                                }
                                            ],
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
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "ChatsChatsQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Viewer",
                    "kind": "LinkedField",
                    "name": "viewer",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Person",
                            "kind": "LinkedField",
                            "name": "me",
                            "plural": false,
                            "selections": (v1 /*: any*/),
                            "storageKey": null
                        },
                        {
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
                                            "concreteType": "Person",
                                            "kind": "LinkedField",
                                            "name": "author",
                                            "plural": false,
                                            "selections": (v1 /*: any*/),
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
                }
            ]
        },
        "params": {
            "cacheID": "1feb4883eeb93b00e643c65fa972b2e3",
            "id": null,
            "metadata": {},
            "name": "ChatsChatsQuery",
            "operationKind": "query",
            "text": "query ChatsChatsQuery {\n  viewer {\n    me {\n      ...Navbar_me\n      id\n    }\n    chats {\n      result {\n        id\n        author {\n          ...Author_author\n          ...Stats_author\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment Author_author on Person {\n  id\n  name\n  email\n}\n\nfragment Navbar_me on Person {\n  id\n  name\n  email\n}\n\nfragment Stats_author on Person {\n  id\n  name\n  email\n}\n"
        }
    } as any;
})();
(node as any).hash = '89b4f359d4679e1bb929930c6cefe539';
export default node;
