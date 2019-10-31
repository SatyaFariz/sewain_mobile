/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CartedProductItem_product$ref: FragmentReference;
declare export opaque type CartedProductItem_product$fragmentType: CartedProductItem_product$ref;
export type CartedProductItem_product = {|
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
  +$refType: CartedProductItem_product$ref,
|};
export type CartedProductItem_product$data = CartedProductItem_product;
export type CartedProductItem_product$key = {
  +$data?: CartedProductItem_product$data,
  +$fragmentRefs: CartedProductItem_product$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CartedProductItem_product",
  "type": "CartedProduct",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
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
        (v0/*: any*/),
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bb742efcd5f9fb7f7c217ca4c6755527';
module.exports = node;
