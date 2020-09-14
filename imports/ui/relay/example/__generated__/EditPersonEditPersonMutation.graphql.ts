/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type EditPersonInput = {
    id: string;
    name: string;
};
export type EditPersonEditPersonMutationVariables = {
    input: EditPersonInput;
};
export type EditPersonEditPersonMutationResponse = {
    readonly editPerson: {
        readonly result: {
            readonly id: string;
            readonly email: string;
            readonly name: string;
        };
    };
};
export type EditPersonEditPersonMutation = {
    readonly response: EditPersonEditPersonMutationResponse;
    readonly variables: EditPersonEditPersonMutationVariables;
};



/*
mutation EditPersonEditPersonMutation(
  $input: EditPersonInput!
) {
  editPerson(input: $input) {
    result {
      id
      email
      name
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "input"
        } as any)
    ], v1 = [
        ({
            "alias": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "EditPersonPayload",
            "kind": "LinkedField",
            "name": "editPerson",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Person",
                    "kind": "LinkedField",
                    "name": "result",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "id",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "email",
                            "storageKey": null
                        },
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
        } as any)
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "EditPersonEditPersonMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "EditPersonEditPersonMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "32ac890f336eb38257b777443986395e",
            "id": null,
            "metadata": {},
            "name": "EditPersonEditPersonMutation",
            "operationKind": "mutation",
            "text": "mutation EditPersonEditPersonMutation(\n  $input: EditPersonInput!\n) {\n  editPerson(input: $input) {\n    result {\n      id\n      email\n      name\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'a5be78002ffdcde0fd9febe912944999';
export default node;
