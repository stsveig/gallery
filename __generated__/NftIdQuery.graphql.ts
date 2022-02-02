/**
 * @generated SignedSource<<0ccb038c4b49291229d8570f0a6f922c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NftIdQuery$variables = {
  nftId: string;
};
export type NftIdQueryVariables = NftIdQuery$variables;
export type NftIdQuery$data = {
  readonly nftById: {
    readonly __typename: "NotFound";
    readonly message: string;
  } | {
    readonly __typename: "GalleryNft";
    readonly __typename: "GalleryNft";
    readonly " $fragmentSpreads": FragmentRefs<"NftDetailPageFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  } | null;
};
export type NftIdQueryResponse = NftIdQuery$data;
export type NftIdQuery = {
  variables: NftIdQueryVariables;
  response: NftIdQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "nftId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "nftId",
    "variableName": "nftId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
  "type": "NotFound",
  "abstractKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "address",
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "kind": "InlineFragment",
  "selections": [
    (v7/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NftIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "nftById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "NftDetailPageFragment"
              }
            ],
            "type": "GalleryNft",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NftIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "nftById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "nft",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isNft"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/),
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
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "owner",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": (v5/*: any*/),
                            "type": "Wallet",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v6/*: any*/)
                            ],
                            "type": "GalleryUser",
                            "abstractKey": null
                          },
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetContractInfo",
                        "kind": "LinkedField",
                        "name": "assetContract",
                        "plural": false,
                        "selections": (v5/*: any*/),
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
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v9/*: any*/),
                      (v4/*: any*/)
                    ],
                    "type": "ImageNft",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "audioUrl",
                        "storageKey": null
                      },
                      (v4/*: any*/),
                      (v9/*: any*/)
                    ],
                    "type": "AudioNft",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "videoUrl",
                        "storageKey": null
                      }
                    ],
                    "type": "VideoNft",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "iframeUrl",
                        "storageKey": null
                      }
                    ],
                    "type": "IFrameNft",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "modelUrl",
                        "storageKey": null
                      }
                    ],
                    "type": "ThreeDModelNft",
                    "abstractKey": null
                  },
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "GalleryCollection",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
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
                          (v6/*: any*/),
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "type": "GalleryNft",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "94ae9b89ca05fab3ed82071f2cff26e3",
    "id": null,
    "metadata": {},
    "name": "NftIdQuery",
    "operationKind": "query",
    "text": "query NftIdQuery(\n  $nftId: String!\n) {\n  nftById(nftId: $nftId) {\n    __typename\n    ... on NotFound {\n      message\n    }\n    ... on GalleryNft {\n      __typename\n      ...NftDetailPageFragment\n      id\n    }\n  }\n}\n\nfragment NftAdditionalDetailsFragment on NftInterface {\n  __isNftInterface: __typename\n  __typename\n  assetContract {\n    address\n  }\n  openseaTokenId\n  openseaExternalUrl\n  externalUrl\n}\n\nfragment NftDetailAnimationFragment on IFrameNft {\n  __typename\n  iframeUrl\n}\n\nfragment NftDetailAssetComponentFragment on Nft {\n  __isNft: __typename\n  __typename\n  ... on ImageNft {\n    ...NftDetailImageFragment\n  }\n  ... on AudioNft {\n    ...NftDetailAudioFragment\n  }\n  ... on VideoNft {\n    ...NftDetailVideoFragment\n  }\n  ... on IFrameNft {\n    ...NftDetailAnimationFragment\n  }\n  ... on ThreeDModelNft {\n    __typename\n    ...NftDetailModelFragment\n  }\n}\n\nfragment NftDetailAssetFragment on Nft {\n  __isNft: __typename\n  __typename\n  ...NftDetailAssetComponentFragment\n}\n\nfragment NftDetailAudioFragment on AudioNft {\n  audioUrl\n  name\n  imageUrl\n}\n\nfragment NftDetailImageFragment on ImageNft {\n  imageUrl\n  name\n}\n\nfragment NftDetailModelFragment on ThreeDModelNft {\n  modelUrl\n}\n\nfragment NftDetailPageFragment on GalleryNft {\n  nft {\n    __typename\n    ... on NftInterface {\n      __isNftInterface: __typename\n      name\n    }\n    ...NftDetailAssetFragment\n    ...NftDetailTextFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  collection {\n    id\n    gallery {\n      owner {\n        username\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment NftDetailTextFragment on NftInterface {\n  __isNftInterface: __typename\n  __typename\n  name\n  tokenCollectionName\n  description\n  creatorName\n  creatorAddress\n  ...NftDetailTextOwnerLinkFragment\n  ...NftAdditionalDetailsFragment\n}\n\nfragment NftDetailTextOwnerLinkFragment on NftInterface {\n  __isNftInterface: __typename\n  owner {\n    __typename\n    ... on Wallet {\n      address\n    }\n    ... on GalleryUser {\n      username\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment NftDetailVideoFragment on VideoNft {\n  videoUrl\n}\n"
  }
};
})();

(node as any).hash = "61a34d9d1b0a30ba3315eea6dc4df555";

export default node;
