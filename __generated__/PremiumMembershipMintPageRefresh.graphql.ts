/**
 * @generated SignedSource<<fb61df4e34eac0a1bd973948a23a19b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PremiumMembershipMintPageRefresh$variables = {
  id: string;
};
export type PremiumMembershipMintPageRefreshVariables = PremiumMembershipMintPageRefresh$variables;
export type PremiumMembershipMintPageRefresh$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"PremiumMembershipMintPageFragment">;
  } | null;
};
export type PremiumMembershipMintPageRefreshResponse = PremiumMembershipMintPageRefresh$data;
export type PremiumMembershipMintPageRefresh = {
  variables: PremiumMembershipMintPageRefreshVariables;
  response: PremiumMembershipMintPageRefresh$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PremiumMembershipMintPageRefresh",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PremiumMembershipMintPageFragment"
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
    "name": "PremiumMembershipMintPageRefresh",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
              }
            ],
            "type": "MembershipNftMintCard",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b721ee81484739ef1908b4147f94e8cf",
    "id": null,
    "metadata": {},
    "name": "PremiumMembershipMintPageRefresh",
    "operationKind": "query",
    "text": "query PremiumMembershipMintPageRefresh(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...PremiumMembershipMintPageFragment\n    id\n  }\n}\n\nfragment MembershipMintPageFragment on MembershipNftMintCard {\n  title\n  price\n  description\n  totalSupply\n  canMintToken\n  remainingSupply\n  tokenId\n  videoUrl\n}\n\nfragment PremiumMembershipMintPageFragment on MembershipNftMintCard {\n  price\n  ...MembershipMintPageFragment\n  id\n}\n"
  }
};
})();

(node as any).hash = "eeebdf08ff8794b6904455134f4e6370";

export default node;
