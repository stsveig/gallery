/**
 * @generated SignedSource<<c36b8af4fd3e2a89a19f7e1c89eaba2b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftDetailTextOwnerLinkFragment$data = {
  readonly owner: {
    readonly __typename: "Wallet";
    readonly address: string | null;
  } | {
    readonly __typename: "GalleryUser";
    readonly username: string | null;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  } | null;
  readonly " $fragmentType": "NftDetailTextOwnerLinkFragment";
};
export type NftDetailTextOwnerLinkFragment = NftDetailTextOwnerLinkFragment$data;
export type NftDetailTextOwnerLinkFragment$key = {
  readonly " $data"?: NftDetailTextOwnerLinkFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailTextOwnerLinkFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftDetailTextOwnerLinkFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "owner",
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
              "name": "address",
              "storageKey": null
            }
          ],
          "type": "Wallet",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "username",
              "storageKey": null
            }
          ],
          "type": "GalleryUser",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "NftInterface",
  "abstractKey": "__isNftInterface"
};

(node as any).hash = "b63c2f31e6f66110255c3c84d259c8a5";

export default node;
