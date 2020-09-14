/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Author_author = {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly " $refType": "Author_author";
};
export type Author_author$data = Author_author;
export type Author_author$key = {
    readonly " $data"?: Author_author$data;
    readonly " $fragmentRefs": FragmentRefs<"Author_author">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Author_author",
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
            "name": "name",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
        }
    ],
    "type": "Person",
    "abstractKey": null
} as any);
(node as any).hash = '812c4e252c9e62319611cd275d133c3c';
export default node;
