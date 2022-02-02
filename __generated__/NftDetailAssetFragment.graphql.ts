/**
 * @generated SignedSource<<d8c3bf55799e2e27f4fbb86e1f54d764>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftDetailAssetFragment$data = {
  readonly __typename: string;
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailAssetComponentFragment">;
  readonly " $fragmentType": "NftDetailAssetFragment";
};
export type NftDetailAssetFragment = NftDetailAssetFragment$data;
export type NftDetailAssetFragment$key = {
  readonly " $data"?: NftDetailAssetFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailAssetFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftDetailAssetFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NftDetailAssetComponentFragment"
    }
  ],
  "type": "Nft",
  "abstractKey": "__isNft"
};

(node as any).hash = "f46fa488bca6c62a8f4a4c1239a302a0";

export default node;
