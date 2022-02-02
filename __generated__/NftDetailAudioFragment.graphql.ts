/**
 * @generated SignedSource<<cc20dbcbdbb72e1ac7bb4482755627ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftDetailAudioFragment$data = {
  readonly audioUrl: string | null;
  readonly name: string | null;
  readonly imageUrl: string | null;
  readonly " $fragmentType": "NftDetailAudioFragment";
};
export type NftDetailAudioFragment = NftDetailAudioFragment$data;
export type NftDetailAudioFragment$key = {
  readonly " $data"?: NftDetailAudioFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailAudioFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftDetailAudioFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "audioUrl",
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
      "name": "imageUrl",
      "storageKey": null
    }
  ],
  "type": "AudioNft",
  "abstractKey": null
};

(node as any).hash = "3a00a8ba54e920c35acd187cbb564b17";

export default node;
