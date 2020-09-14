/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Stats_author = {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly " $refType": "Stats_author";
};
export type Stats_author$data = Stats_author;
export type Stats_author$key = {
    readonly " $data"?: Stats_author$data;
    readonly " $fragmentRefs": FragmentRefs<"Stats_author">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Stats_author",
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
(node as any).hash = '1edbfa32fe56e307754131a86d6d8fc0';
export default node;
