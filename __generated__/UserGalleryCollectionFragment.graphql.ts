/**
 * @generated SignedSource<<2a95d4aa177af59b7b0a5d411f5f5402>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserGalleryCollectionFragment$data = {
  readonly name: string | null;
  readonly collectorsNote: string | null;
  readonly layout: {
    readonly columns: number | null;
  } | null;
  readonly nfts: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"NftPreviewFragment">;
  } | null> | null;
  readonly " $fragmentType": "UserGalleryCollectionFragment";
};
export type UserGalleryCollectionFragment = UserGalleryCollectionFragment$data;
export type UserGalleryCollectionFragment$key = {
  readonly " $data"?: UserGalleryCollectionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserGalleryCollectionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserGalleryCollectionFragment",
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
      "name": "collectorsNote",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "GalleryCollectionLayout",
      "kind": "LinkedField",
      "name": "layout",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "columns",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "GalleryNft",
      "kind": "LinkedField",
      "name": "nfts",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "NftPreviewFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GalleryCollection",
  "abstractKey": null
};

(node as any).hash = "87764ce526e1858e040574e9f2c9dd9f";

export default node;
