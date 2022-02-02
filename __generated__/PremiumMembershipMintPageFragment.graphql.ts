/**
 * @generated SignedSource<<db52faf1e834028f738d047cdb4105a9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PremiumMembershipMintPageFragment$data = {
  readonly price: string | null;
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"MembershipMintPageFragment">;
  readonly " $fragmentType": "PremiumMembershipMintPageFragment";
};
export type PremiumMembershipMintPageFragment = PremiumMembershipMintPageFragment$data;
export type PremiumMembershipMintPageFragment$key = {
  readonly " $data"?: PremiumMembershipMintPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PremiumMembershipMintPageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./PremiumMembershipMintPageRefresh.graphql'),
      "identifierField": "id"
    }
  },
  "name": "PremiumMembershipMintPageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "price",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MembershipMintPageFragment"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "MembershipNftMintCard",
  "abstractKey": null
};

(node as any).hash = "eeebdf08ff8794b6904455134f4e6370";

export default node;
