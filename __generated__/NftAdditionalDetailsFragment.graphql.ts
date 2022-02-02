/**
 * @generated SignedSource<<10f38f7d21f1c0e0cab07c12fa113984>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftAdditionalDetailsFragment$data = {
  readonly __typename: string;
  readonly assetContract: {
    readonly address: string | null;
  } | null;
  readonly openseaTokenId: string | null;
  readonly openseaExternalUrl: string | null;
  readonly externalUrl: string | null;
  readonly " $fragmentType": "NftAdditionalDetailsFragment";
};
export type NftAdditionalDetailsFragment = NftAdditionalDetailsFragment$data;
export type NftAdditionalDetailsFragment$key = {
  readonly " $data"?: NftAdditionalDetailsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftAdditionalDetailsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftAdditionalDetailsFragment",
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
      "concreteType": "AssetContractInfo",
      "kind": "LinkedField",
      "name": "assetContract",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "address",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "openseaTokenId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "openseaExternalUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "externalUrl",
      "storageKey": null
    }
  ],
  "type": "NftInterface",
  "abstractKey": "__isNftInterface"
};

(node as any).hash = "4e7b4d2abe81643072070f2aee3e8122";

export default node;
