/**
 * @generated SignedSource<<24286b4d69a14986b6c464824fff03d4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserGalleryCollectionsFragment$data = {
  readonly owner: {
    readonly isAuthenticatedUser: boolean | null;
  } | null;
  readonly collections: ReadonlyArray<{
    readonly id: string;
    readonly hidden: boolean | null;
    readonly nfts: ReadonlyArray<{
      readonly id: string;
    } | null> | null;
    readonly " $fragmentSpreads": FragmentRefs<"UserGalleryCollectionFragment">;
  } | null> | null;
  readonly " $fragmentType": "UserGalleryCollectionsFragment";
};
export type UserGalleryCollectionsFragment = UserGalleryCollectionsFragment$data;
export type UserGalleryCollectionsFragment$key = {
  readonly " $data"?: UserGalleryCollectionsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserGalleryCollectionsFragment">;
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
  "name": "UserGalleryCollectionsFragment",
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
          "name": "isAuthenticatedUser",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "GalleryCollection",
      "kind": "LinkedField",
      "name": "collections",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hidden",
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
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "UserGalleryCollectionFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Gallery",
  "abstractKey": null
};
})();

(node as any).hash = "e84c9c789c98eae927e1ed18b151ab27";

export default node;
