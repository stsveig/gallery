/**
 * @generated SignedSource<<cbf3d5168c1ae6195c08792c1c33502e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GeneralMembershipMintPageFragment$data = {
  readonly allowlist: ReadonlyArray<string | null>;
  readonly id: string;
  readonly __typename: "MembershipNftMintCard";
  readonly " $fragmentSpreads": FragmentRefs<"MembershipMintPageFragment">;
  readonly " $fragmentType": "GeneralMembershipMintPageFragment";
};
export type GeneralMembershipMintPageFragment = GeneralMembershipMintPageFragment$data;
export type GeneralMembershipMintPageFragment$key = {
  readonly " $data"?: GeneralMembershipMintPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GeneralMembershipMintPageFragment">;
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
      "operation": require('./GeneralMemberhsipMintPageRefresh.graphql'),
      "identifierField": "id"
    }
  },
  "name": "GeneralMembershipMintPageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "allowlist",
        "storageKey": null
      },
      "action": "THROW",
      "path": "allowlist"
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

(node as any).hash = "53b06635045f5e2bca0606718e49a314";

export default node;
