/**
 * @flow
 * @relayHash 2472fdf9355c235d217351d372d3f8d5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddressUpdateMutationVariables = {|
  address: string
|};
export type AddressUpdateMutationResponse = {|
  +addressUpdate: ?{|
    +id: ?string,
    +address: ?string,
  |}
|};
export type AddressUpdateMutation = {|
  variables: AddressUpdateMutationVariables,
  response: AddressUpdateMutationResponse,
|};
*/


/*
mutation AddressUpdateMutation(
  $address: String!
) {
  addressUpdate(address: $address) {
    id
    address
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "address",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addressUpdate",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "address",
        "variableName": "address"
      }
    ],
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "address",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddressUpdateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddressUpdateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddressUpdateMutation",
    "id": null,
    "text": "mutation AddressUpdateMutation(\n  $address: String!\n) {\n  addressUpdate(address: $address) {\n    id\n    address\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ac65215591a5a3f8dae45d206a34553e';
module.exports = node;
