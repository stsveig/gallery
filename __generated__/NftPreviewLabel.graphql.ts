/**
 * @generated SignedSource<<32b7f73d4ae6c739698afc6d67163ca3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftPreviewLabel$data = {
  readonly name?: string | null;
  readonly tokenCollectionName?: string | null;
  readonly " $fragmentType": "NftPreviewLabel";
};
export type NftPreviewLabel = NftPreviewLabel$data;
export type NftPreviewLabel$key = {
  readonly " $data"?: NftPreviewLabel$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftPreviewLabel">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftPreviewLabel",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
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
          "name": "tokenCollectionName",
          "storageKey": null
        }
      ],
      "type": "NftInterface",
      "abstractKey": "__isNftInterface"
    }
  ],
  "type": "Nft",
  "abstractKey": "__isNft"
};

(node as any).hash = "c5cc5c35c74793b7764fc8ce46bcb9a2";

export default node;
