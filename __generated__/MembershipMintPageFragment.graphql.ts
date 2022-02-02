/**
 * @generated SignedSource<<c89d6b9f2a986c906f8e52e4aed5e3b3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MembershipMintPageFragment$data = {
  readonly title: string | null;
  readonly price: string | null;
  readonly description: string | null;
  readonly totalSupply: number | null;
  readonly canMintToken: boolean | null;
  readonly remainingSupply: number | null;
  readonly tokenId: number;
  readonly videoUrl: string;
  readonly " $fragmentType": "MembershipMintPageFragment";
};
export type MembershipMintPageFragment = MembershipMintPageFragment$data;
export type MembershipMintPageFragment$key = {
  readonly " $data"?: MembershipMintPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MembershipMintPageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MembershipMintPageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "price",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalSupply",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "canMintToken",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "remainingSupply",
      "storageKey": null
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "tokenId",
        "storageKey": null
      },
      "action": "THROW",
      "path": "tokenId"
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "videoUrl",
        "storageKey": null
      },
      "action": "THROW",
      "path": "videoUrl"
    }
  ],
  "type": "MembershipNftMintCard",
  "abstractKey": null
};

(node as any).hash = "a1f5078edd616c2a693d91e3624ff4d8";

export default node;
