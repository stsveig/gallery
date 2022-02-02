/**
 * @generated SignedSource<<3293ee0a14030e5d377dbfefb088bf1a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftDetailVideoFragment$data = {
  readonly videoUrl: string | null;
  readonly " $fragmentType": "NftDetailVideoFragment";
};
export type NftDetailVideoFragment = NftDetailVideoFragment$data;
export type NftDetailVideoFragment$key = {
  readonly " $data"?: NftDetailVideoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailVideoFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftDetailVideoFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "videoUrl",
      "storageKey": null
    }
  ],
  "type": "VideoNft",
  "abstractKey": null
};

(node as any).hash = "c52ab9d871a2977abad7e8a9ea148250";

export default node;
