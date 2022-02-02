/**
 * @generated SignedSource<<ea07708f52fd0f742c458d84d9e8ece3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftDetailPageFragment$data = {
  readonly nft: {
    readonly __typename: string;
    readonly name?: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"NftDetailAssetFragment" | "NftDetailTextFragment">;
  };
  readonly collection: {
    readonly id: string;
    readonly gallery: {
      readonly owner: {
        readonly username: string | null;
      } | null;
    } | null;
  } | null;
  readonly " $fragmentType": "NftDetailPageFragment";
};
export type NftDetailPageFragment = NftDetailPageFragment$data;
export type NftDetailPageFragment$key = {
  readonly " $data"?: NftDetailPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailPageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftDetailPageFragment",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "nft",
        "plural": false,
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
              }
            ],
            "type": "NftInterface",
            "abstractKey": "__isNftInterface"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NftDetailAssetFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NftDetailTextFragment"
          }
        ],
        "storageKey": null
      },
      "action": "THROW",
      "path": "nft"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "GalleryCollection",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Gallery",
          "kind": "LinkedField",
          "name": "gallery",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "GalleryUser",
              "kind": "LinkedField",
              "name": "owner",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "username",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GalleryNft",
  "abstractKey": null
};

(node as any).hash = "9c537e564accd0fafe16d74514bf1c97";

export default node;
