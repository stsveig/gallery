/**
 * @generated SignedSource<<9a293a30db0305989ccbb524328c762c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type generalQuery$variables = {
  title: string;
};
export type generalQueryVariables = generalQuery$variables;
export type generalQuery$data = {
  readonly membershipNftByTitle: {
    readonly __typename: "NotFound";
    readonly message: string;
  } | {
    readonly __typename: "MembershipNftMintCard";
    readonly isFeatureEnabled: boolean | null;
    readonly " $fragmentSpreads": FragmentRefs<"GeneralMembershipMintPageFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  } | null;
};
export type generalQueryResponse = generalQuery$data;
export type generalQuery = {
  variables: generalQueryVariables;
  response: generalQuery$data;
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
  "name": "isFeatureEnabled",
  "storageKey": null
},
v5 = {
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
    "name": "generalQuery",
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
              (v4/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "GeneralMembershipMintPageFragment"
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
    "name": "generalQuery",
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
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "allowlist",
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
                "name": "price",
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
              (v5/*: any*/)
            ],
            "type": "MembershipNftMintCard",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/)
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
    "cacheID": "eb1891aa717c31e24d0cf922ecf95ef3",
    "id": null,
    "metadata": {},
    "name": "generalQuery",
    "operationKind": "query",
    "text": "query generalQuery(\n  $title: String!\n) {\n  membershipNftByTitle(title: $title) {\n    __typename\n    ... on NotFound {\n      message\n    }\n    ... on MembershipNftMintCard {\n      isFeatureEnabled\n      ...GeneralMembershipMintPageFragment\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment GeneralMembershipMintPageFragment on MembershipNftMintCard {\n  __typename\n  allowlist\n  ...MembershipMintPageFragment\n  id\n}\n\nfragment MembershipMintPageFragment on MembershipNftMintCard {\n  title\n  price\n  description\n  totalSupply\n  canMintToken\n  remainingSupply\n  tokenId\n  videoUrl\n}\n"
  }
};
})();

(node as any).hash = "fc0f15d8cd7316c4208658f406eb97b4";

export default node;
