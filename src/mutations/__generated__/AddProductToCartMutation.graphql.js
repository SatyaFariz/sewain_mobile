/**
 * @flow
 * @relayHash be657b7a0275ccbc89a7277d07041816
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddProductToCartInput = {|
  productID: number,
  startDate: any,
  endDate: any,
  quantity?: ?number,
  note?: ?string,
  deliveryAddress: string,
|};
export type AddProductToCartMutationVariables = {|
  input: AddProductToCartInput
|};
export type AddProductToCartMutationResponse = {|
  +addProductToCart: ?{|
    +actionInfo: ?{|
      +success: ?boolean,
      +message: ?string,
    |},
    +product: ?{|
      +id: ?string,
      +availableItems: ?number,
    |},
  |}
|};
export type AddProductToCartMutation = {|
  variables: AddProductToCartMutationVariables,
  response: AddProductToCartMutationResponse,
|};
*/


/*
mutation AddProductToCartMutation(
  $input: AddProductToCartInput!
) {
  addProductToCart(input: $input) {
    actionInfo {
      success
      message
    }
    product {
      id
      availableItems
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddProductToCartInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addProductToCart",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ProductActionPayload",
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
        "kind": "LinkedField",
        "alias": null,
        "name": "product",
        "storageKey": null,
        "args": null,
        "concreteType": "Product",
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
            "name": "availableItems",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddProductToCartMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddProductToCartMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddProductToCartMutation",
    "id": null,
    "text": "mutation AddProductToCartMutation(\n  $input: AddProductToCartInput!\n) {\n  addProductToCart(input: $input) {\n    actionInfo {\n      success\n      message\n    }\n    product {\n      id\n      availableItems\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '46977ee750074f54d1b681fcc65d09c8';
module.exports = node;
