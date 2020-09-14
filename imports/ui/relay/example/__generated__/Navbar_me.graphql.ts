/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Navbar_me = {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly " $refType": "Navbar_me";
};
export type Navbar_me$data = Navbar_me;
export type Navbar_me$key = {
    readonly " $data"?: Navbar_me$data;
    readonly " $fragmentRefs": FragmentRefs<"Navbar_me">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Navbar_me",
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
(node as any).hash = '56f2e0b8f0f8b11c2d31f05585c5f903';
export default node;
