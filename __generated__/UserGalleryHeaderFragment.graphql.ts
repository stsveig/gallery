/**
 * @generated SignedSource<<19f8b741f766376f6fa8e09e4d224d9a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserGalleryHeaderFragment$data = {
  readonly username: string | null;
  readonly bio: string | null;
  readonly " $fragmentType": "UserGalleryHeaderFragment";
};
export type UserGalleryHeaderFragment = UserGalleryHeaderFragment$data;
export type UserGalleryHeaderFragment$key = {
  readonly " $data"?: UserGalleryHeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserGalleryHeaderFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserGalleryHeaderFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
      "storageKey": null
    }
  ],
  "type": "GalleryUser",
  "abstractKey": null
};

(node as any).hash = "d5d4b96686caac9720afca43e25d923a";

export default node;
