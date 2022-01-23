/**
 * @generated SignedSource<<06eeca175f8f42cc3855c2b041b1b1c1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftPreviewFragment$data = {
  readonly id: string;
  readonly collection: {
    readonly id: string;
    readonly layout: {
      readonly columns: number | null;
    } | null;
  };
  readonly nft: {
    readonly " $fragmentSpreads": FragmentRefs<"NftPreviewLabel" | "NftPreviewAssetFragment">;
  };
  readonly " $fragmentType": "NftPreviewFragment";
};
export type NftPreviewFragment = NftPreviewFragment$data;
export type NftPreviewFragment$key = {
  readonly " $data"?: NftPreviewFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftPreviewFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftPreviewFragment",
  "selections": [
    (v0/*: any*/),
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "concreteType": "GalleryCollection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
          }
        ],
        "storageKey": null
      },
      "action": "THROW",
      "path": "collection"
    },
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "NftPreviewLabel"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NftPreviewAssetFragment"
          }
        ],
        "storageKey": null
      },
      "action": "THROW",
      "path": "nft"
    }
  ],
  "type": "GalleryNft",
  "abstractKey": null
};
})();

(node as any).hash = "e732eb3c57f10c38c3d3cc4938733a50";

export default node;
