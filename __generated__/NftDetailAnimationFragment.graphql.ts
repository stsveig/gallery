/**
 * @generated SignedSource<<083543306f76a088e484dc35cae113ac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftDetailAnimationFragment$data = {
  readonly iframeUrl: string | null;
  readonly __typename: "IFrameNft";
  readonly " $fragmentType": "NftDetailAnimationFragment";
};
export type NftDetailAnimationFragment = NftDetailAnimationFragment$data;
export type NftDetailAnimationFragment$key = {
  readonly " $data"?: NftDetailAnimationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailAnimationFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftDetailAnimationFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "iframeUrl",
      "storageKey": null
    }
  ],
  "type": "IFrameNft",
  "abstractKey": null
};

(node as any).hash = "dca307020d528da2dd6954d413efac7a";

export default node;
