/**
 * @generated SignedSource<<2c6e9b077f1661f7fb5d84176e97539f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type nftGetResizedNftImageUrlWithFallbackFragment$data = {
  readonly imageUrl: string | null;
  readonly " $fragmentType": "nftGetResizedNftImageUrlWithFallbackFragment";
};
export type nftGetResizedNftImageUrlWithFallbackFragment = nftGetResizedNftImageUrlWithFallbackFragment$data;
export type nftGetResizedNftImageUrlWithFallbackFragment$key = {
  readonly " $data"?: nftGetResizedNftImageUrlWithFallbackFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"nftGetResizedNftImageUrlWithFallbackFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "nftGetResizedNftImageUrlWithFallbackFragment"
};

(node as any).hash = "6bbf33641d2ec128e30e7d7368d3c129";

export default node;
