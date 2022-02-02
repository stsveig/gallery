/**
 * @generated SignedSource<<f78682e8af2a36591fdab191838daf61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type goldQuery$variables = {
  title: string;
};
export type goldQueryVariables = goldQuery$variables;
export type goldQuery$data = {
  readonly membershipNftByTitle: {
    readonly __typename: "NotFound";
    readonly message: string;
  } | {
    readonly __typename: "MembershipNftMintCard";
    readonly " $fragmentSpreads": FragmentRefs<"PremiumMembershipMintPageFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  } | null;
};
export type goldQueryResponse = goldQuery$data;
export type goldQuery = {
  variables: goldQueryVariables;
  response: goldQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "title"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "title",
    "variableName": "title"
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "goldQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "membershipNftByTitle",
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
                "name": "PremiumMembershipMintPageFragment"
              }
            ],
            "type": "MembershipNftMintCard",
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
    "name": "goldQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "membershipNftByTitle",
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
                "kind": "ScalarField",
                "name": "price",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
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
                "name": "totalSupply",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "canMintToken",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "remainingSupply",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "tokenId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "videoUrl",
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "type": "MembershipNftMintCard",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/)
            ],
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "515ac707e888ff5be028ba1d8b1e9376",
    "id": null,
    "metadata": {},
    "name": "goldQuery",
    "operationKind": "query",
    "text": "query goldQuery(\n  $title: String!\n) {\n  membershipNftByTitle(title: $title) {\n    __typename\n    ... on NotFound {\n      message\n    }\n    ... on MembershipNftMintCard {\n      ...PremiumMembershipMintPageFragment\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment MembershipMintPageFragment on MembershipNftMintCard {\n  title\n  price\n  description\n  totalSupply\n  canMintToken\n  remainingSupply\n  tokenId\n  videoUrl\n}\n\nfragment PremiumMembershipMintPageFragment on MembershipNftMintCard {\n  price\n  ...MembershipMintPageFragment\n  id\n}\n"
  }
};
})();

(node as any).hash = "c8ecda968a6ea9ea69f261239c410990";

export default node;
