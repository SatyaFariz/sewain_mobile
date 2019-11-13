/**
 * @flow
 * @relayHash 87f7874df2728690919fd7021b9e012c
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
    +cartItem: ?{|
      +id: ?string,
      +cartedProductID: ?number,
      +name: ?string,
      +quantity: ?number,
      +totalDays: ?number,
      +totalPriceText: ?string,
      +rentalDatesText: ?string,
      +displayImage: ?{|
        +id: ?string,
        +secureUrl: ?string,
      |},
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
    cartItem {
      id
      cartedProductID
      name
      quantity
      totalDays
      totalPriceText
      rentalDatesText
      displayImage {
        id
        secureUrl
      }
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
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
    "concreteType": "AddProductToCartPayload",
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
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "availableItems",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "cartItem",
        "storageKey": null,
        "args": null,
        "concreteType": "CartedProduct",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cartedProductID",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "quantity",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalDays",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalPriceText",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "rentalDatesText",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "displayImage",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "secureUrl",
                "args": null,
                "storageKey": null
              }
            ]
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
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddProductToCartMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddProductToCartMutation",
    "id": null,
    "text": "mutation AddProductToCartMutation(\n  $input: AddProductToCartInput!\n) {\n  addProductToCart(input: $input) {\n    actionInfo {\n      success\n      message\n    }\n    product {\n      id\n      availableItems\n    }\n    cartItem {\n      id\n      cartedProductID\n      name\n      quantity\n      totalDays\n      totalPriceText\n      rentalDatesText\n      displayImage {\n        id\n        secureUrl\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3db7254b00424f1f56f2daedcc8dac5f';
module.exports = node;
