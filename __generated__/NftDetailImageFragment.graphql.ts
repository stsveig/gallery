/**
 * @generated SignedSource<<850ca5ef16409e9e7954b162901edc2b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftDetailImageFragment$data = {
  readonly imageUrl: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "NftDetailImageFragment";
};
export type NftDetailImageFragment = NftDetailImageFragment$data;
export type NftDetailImageFragment$key = {
  readonly " $data"?: NftDetailImageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailImageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftDetailImageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "imageUrl",
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
  "type": "ImageNft",
  "abstractKey": null
};

(node as any).hash = "680f4a2db4cfec7ea1504652fe90fa02";

export default node;
