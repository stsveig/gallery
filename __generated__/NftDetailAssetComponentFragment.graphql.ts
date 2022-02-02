/**
 * @generated SignedSource<<c51e29601143a2a9a76c2b133d29fc9a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftDetailAssetComponentFragment$data = {
  readonly __typename: "ImageNft";
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailImageFragment">;
  readonly " $fragmentType": "NftDetailAssetComponentFragment";
} | {
  readonly __typename: "AudioNft";
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailAudioFragment">;
  readonly " $fragmentType": "NftDetailAssetComponentFragment";
} | {
  readonly __typename: "VideoNft";
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailVideoFragment">;
  readonly " $fragmentType": "NftDetailAssetComponentFragment";
} | {
  readonly __typename: "IFrameNft";
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailAnimationFragment">;
  readonly " $fragmentType": "NftDetailAssetComponentFragment";
} | {
  readonly __typename: "ThreeDModelNft";
  readonly __typename: "ThreeDModelNft";
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailModelFragment">;
  readonly " $fragmentType": "NftDetailAssetComponentFragment";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "NftDetailAssetComponentFragment";
};
export type NftDetailAssetComponentFragment = NftDetailAssetComponentFragment$data;
export type NftDetailAssetComponentFragment$key = {
  readonly " $data"?: NftDetailAssetComponentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NftDetailAssetComponentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NftDetailAssetComponentFragment",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "NftDetailImageFragment"
        }
      ],
      "type": "ImageNft",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "NftDetailAudioFragment"
        }
      ],
      "type": "AudioNft",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "NftDetailVideoFragment"
        }
      ],
      "type": "VideoNft",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "NftDetailAnimationFragment"
        }
      ],
      "type": "IFrameNft",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "NftDetailModelFragment"
        }
      ],
      "type": "ThreeDModelNft",
      "abstractKey": null
    }
  ],
  "type": "Nft",
  "abstractKey": "__isNft"
};

(node as any).hash = "fca3f6b2e7fbb4b957c82bf08dcc1257";

export default node;
