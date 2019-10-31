/**
 * @flow
 * @relayHash 11e0939f27a7172df7815a675c013507
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveProductFromCartMutationVariables = {|
  cartedProductID: number
|};
export type RemoveProductFromCartMutationResponse = {|
  +removeProductFromCart: ?{|
    +actionInfo: ?{|
      +success: ?boolean,
      +message: ?string,
    |},
    +deletedID: ?number,
  |}
|};
export type RemoveProductFromCartMutation = {|
  variables: RemoveProductFromCartMutationVariables,
  response: RemoveProductFromCartMutationResponse,
|};
*/


/*
mutation RemoveProductFromCartMutation(
  $cartedProductID: Int!
) {
  removeProductFromCart(cartedProductID: $cartedProductID) {
    actionInfo {
      success
      message
    }
    deletedID
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "cartedProductID",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removeProductFromCart",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "cartedProductID",
        "variableName": "cartedProductID"
      }
    ],
    "concreteType": "DeletePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "actionInfo",
        "storageKey": null,
        "args": null,
        "concreteType": "ActionInfo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "success",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "message",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedID",
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
    "name": "RemoveProductFromCartMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveProductFromCartMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RemoveProductFromCartMutation",
    "id": null,
    "text": "mutation RemoveProductFromCartMutation(\n  $cartedProductID: Int!\n) {\n  removeProductFromCart(cartedProductID: $cartedProductID) {\n    actionInfo {\n      success\n      message\n    }\n    deletedID\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '629cb46a6007b613acd724bc6d854712';
module.exports = node;
