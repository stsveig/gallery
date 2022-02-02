/**
 * @generated SignedSource<<d22d7819946f45b62a8264bcba1dee49>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GeneralMemberhsipMintPageRefresh$variables = {
  id: string;
};
export type GeneralMemberhsipMintPageRefreshVariables = GeneralMemberhsipMintPageRefresh$variables;
export type GeneralMemberhsipMintPageRefresh$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"GeneralMembershipMintPageFragment">;
  } | null;
};
export type GeneralMemberhsipMintPageRefreshResponse = GeneralMemberhsipMintPageRefresh$data;
export type GeneralMemberhsipMintPageRefresh = {
  variables: GeneralMemberhsipMintPageRefreshVariables;
  response: GeneralMemberhsipMintPageRefresh$data;
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
    "name": "GeneralMemberhsipMintPageRefresh",
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
            "name": "GeneralMembershipMintPageFragment"
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
    "name": "GeneralMemberhsipMintPageRefresh",
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
    "cacheID": "217d351d8f75503bcfb9ad0e4281bff4",
    "id": null,
    "metadata": {},
    "name": "GeneralMemberhsipMintPageRefresh",
    "operationKind": "query",
    "text": "query GeneralMemberhsipMintPageRefresh(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...GeneralMembershipMintPageFragment\n    id\n  }\n}\n\nfragment GeneralMembershipMintPageFragment on MembershipNftMintCard {\n  __typename\n  allowlist\n  ...MembershipMintPageFragment\n  id\n}\n\nfragment MembershipMintPageFragment on MembershipNftMintCard {\n  title\n  price\n  description\n  totalSupply\n  canMintToken\n  remainingSupply\n  tokenId\n  videoUrl\n}\n"
  }
};
})();

(node as any).hash = "53b06635045f5e2bca0606718e49a314";

export default node;
