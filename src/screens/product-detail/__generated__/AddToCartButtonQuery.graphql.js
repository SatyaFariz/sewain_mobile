/**
 * @flow
 * @relayHash 585bdf8c957dec968052cba39c75e4ee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddToCartButtonQueryVariables = {|
  productID: number
|};
export type AddToCartButtonQueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +isAuthenticated: ?boolean,
    +userData: ?{|
      +id: ?string,
      +address: ?string,
    |},
    +product: ?{|
      +id: ?string,
      +productID: ?number,
      +availableItems: ?number,
    |},
  |}
|};
export type AddToCartButtonQuery = {|
  variables: AddToCartButtonQueryVariables,
  response: AddToCartButtonQueryResponse,
|};
*/


/*
query AddToCartButtonQuery(
  $productID: Int!
) {
  viewer {
    id
    isAuthenticated
    userData {
      id
      address
    }
    product(productID: $productID) {
      id
      productID
      availableItems
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "productID",
    "type": "Int!",
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
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "Viewer",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "isAuthenticated",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userData",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "address",
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
        "args": [
          {
            "kind": "Variable",
            "name": "productID",
            "variableName": "productID"
          }
        ],
        "concreteType": "Product",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "productID",
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
    "name": "AddToCartButtonQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddToCartButtonQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AddToCartButtonQuery",
    "id": null,
    "text": "query AddToCartButtonQuery(\n  $productID: Int!\n) {\n  viewer {\n    id\n    isAuthenticated\n    userData {\n      id\n      address\n    }\n    product(productID: $productID) {\n      id\n      productID\n      availableItems\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8cb1deb050ef94f3b262b7e313098bf5';
module.exports = node;
