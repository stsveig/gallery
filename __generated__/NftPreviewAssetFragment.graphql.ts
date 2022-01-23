/**
 * @generated SignedSource<<f6bf55d397fc19d33d47389e263448e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftPreviewAssetFragment$data = {
  readonly __typename: "ImageNft";
  readonly name: string | null;
  readonly imageUrl: string;
  readonly " $fragmentSpreads": FragmentRefs<"nftGetResizedNftImageUrlWithFallbackFragment">;
  readonly " $fragmentType": "NftPreviewAssetFragment";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "NftPreviewAssetFragment";
};
export type NftPreviewAssetFragment = NftPreviewAssetFragment$data;
export type NftPreviewAssetFragment$key = {
  readonly " $data"?: NftPreviewAssetFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftPreviewAssetFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftPreviewAssetFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
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
          "kind": "RequiredField",
          "field": (v0/*: any*/),
          "action": "THROW",
          "path": "imageUrl"
        },
        {
          "kind": "InlineDataFragmentSpread",
          "name": "nftGetResizedNftImageUrlWithFallbackFragment",
          "selections": [
            (v0/*: any*/)
          ]
        }
      ],
      "type": "ImageNft",
      "abstractKey": null
    }
  ],
  "type": "Nft",
  "abstractKey": "__isNft"
};
})();

(node as any).hash = "f07a13747d5405c2c96245023fb8b054";

export default node;
