/**
 * @generated SignedSource<<20e83719a6359f29fa6aba45c92aa33d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserGalleryQuery$variables = {
  username: string;
};
export type UserGalleryQueryVariables = UserGalleryQuery$variables;
export type UserGalleryQuery$data = {
  readonly userByUsername: {
    readonly __typename: "NotFound";
    readonly message: string;
  } | {
    readonly __typename: "GalleryUser";
    readonly id: string;
    readonly gallery: {
      readonly " $fragmentSpreads": FragmentRefs<"UserGalleryCollectionsFragment">;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"UserGalleryHeaderFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  } | null;
};
export type UserGalleryQueryResponse = UserGalleryQuery$data;
export type UserGalleryQuery = {
  variables: UserGalleryQueryVariables;
  response: UserGalleryQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "username"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "username",
    "variableName": "username"
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
  "name": "id",
  "storageKey": null
},
v5 = {
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
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserGalleryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "userByUsername",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Gallery",
                "kind": "LinkedField",
                "name": "gallery",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "UserGalleryCollectionsFragment"
                  }
                ],
                "storageKey": null
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "UserGalleryHeaderFragment"
              }
            ],
            "type": "GalleryUser",
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
    "name": "UserGalleryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "userByUsername",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
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
                        "name": "isAuthenticatedUser",
                        "storageKey": null
                      },
                      (v4/*: any*/)
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
                      (v4/*: any*/),
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
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "GalleryCollection",
                            "kind": "LinkedField",
                            "name": "collection",
                            "plural": false,
                            "selections": [
                              (v4/*: any*/),
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          },
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
                                  (v6/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "tokenCollectionName",
                                    "storageKey": null
                                  }
                                ],
                                "type": "NftInterface",
                                "abstractKey": "__isNftInterface"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v6/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "imageUrl",
                                    "storageKey": null
                                  }
                                ],
                                "type": "ImageNft",
                                "abstractKey": null
                              },
                              (v7/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "collectorsNote",
                        "storageKey": null
                      },
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
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
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d72754284f6d6d6f4fe0b60c9a6c1916",
    "id": null,
    "metadata": {},
    "name": "UserGalleryQuery",
    "operationKind": "query",
    "text": "query UserGalleryQuery(\n  $username: String!\n) {\n  userByUsername(username: $username) {\n    __typename\n    ... on NotFound {\n      message\n    }\n    ... on GalleryUser {\n      id\n      gallery {\n        ...UserGalleryCollectionsFragment\n        id\n      }\n      ...UserGalleryHeaderFragment\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment NftPreviewAssetFragment on Nft {\n  __isNft: __typename\n  __typename\n  ... on ImageNft {\n    name\n    imageUrl\n    ...nftGetResizedNftImageUrlWithFallbackFragment\n  }\n}\n\nfragment NftPreviewFragment on GalleryNft {\n  id\n  collection {\n    id\n    layout {\n      columns\n    }\n  }\n  nft {\n    __typename\n    ...NftPreviewLabel\n    ...NftPreviewAssetFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment NftPreviewLabel on Nft {\n  __isNft: __typename\n  ... on NftInterface {\n    __isNftInterface: __typename\n    name\n    tokenCollectionName\n  }\n}\n\nfragment UserGalleryCollectionFragment on GalleryCollection {\n  name\n  collectorsNote\n  layout {\n    columns\n  }\n  nfts {\n    id\n    ...NftPreviewFragment\n  }\n}\n\nfragment UserGalleryCollectionsFragment on Gallery {\n  owner {\n    isAuthenticatedUser\n    id\n  }\n  collections {\n    id\n    hidden\n    nfts {\n      id\n    }\n    ...UserGalleryCollectionFragment\n  }\n}\n\nfragment UserGalleryHeaderFragment on GalleryUser {\n  username\n  bio\n}\n\nfragment nftGetResizedNftImageUrlWithFallbackFragment on ImageNft {\n  imageUrl\n}\n"
  }
};
})();

(node as any).hash = "2589a5b0a37f7c3a32bd8682a300b87e";

export default node;
