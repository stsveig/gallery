/**
 * @generated SignedSource<<41743193fc6cb8eef9a389c95f261552>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftDetailModelFragment$data = {
  readonly modelUrl: string | null;
  readonly " $fragmentType": "NftDetailModelFragment";
};
export type NftDetailModelFragment = NftDetailModelFragment$data;
export type NftDetailModelFragment$key = {
  readonly " $data"?: NftDetailModelFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailModelFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftDetailModelFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "modelUrl",
      "storageKey": null
    }
  ],
  "type": "ThreeDModelNft",
  "abstractKey": null
};

(node as any).hash = "ed684be21c196a8b0ae82f75754990aa";

export default node;
