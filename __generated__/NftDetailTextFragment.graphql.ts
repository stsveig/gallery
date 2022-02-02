/**
 * @generated SignedSource<<a9de864129f5b7abfecab756f74c2f37>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftDetailTextFragment$data = {
  readonly __typename: string;
  readonly name: string | null;
  readonly tokenCollectionName: string | null;
  readonly description: string | null;
  readonly creatorName: string | null;
  readonly creatorAddress: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailTextOwnerLinkFragment" | "NftAdditionalDetailsFragment">;
  readonly " $fragmentType": "NftDetailTextFragment";
};
export type NftDetailTextFragment = NftDetailTextFragment$data;
export type NftDetailTextFragment$key = {
  readonly " $data"?: NftDetailTextFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailTextFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftDetailTextFragment",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tokenCollectionName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "creatorName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "creatorAddress",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NftDetailTextOwnerLinkFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NftAdditionalDetailsFragment"
    }
  ],
  "type": "NftInterface",
  "abstractKey": "__isNftInterface"
};

(node as any).hash = "657e39e4e52ed07d3bd05095c079f0a8";

export default node;
