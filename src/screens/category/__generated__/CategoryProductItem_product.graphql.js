/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoryProductItem_product$ref: FragmentReference;
declare export opaque type CategoryProductItem_product$fragmentType: CategoryProductItem_product$ref;
export type CategoryProductItem_product = {|
  +id: ?string,
  +productID: ?number,
  +name: ?string,
  +rentalPricePerDayText: ?string,
  +promotionalPriceText: ?string,
  +displayImage: ?{|
    +id: ?string,
    +secureUrl: ?string,
  |},
  +$refType: CategoryProductItem_product$ref,
|};
export type CategoryProductItem_product$data = CategoryProductItem_product;
export type CategoryProductItem_product$key = {
  +$data?: CategoryProductItem_product$data,
  +$fragmentRefs: CategoryProductItem_product$ref,
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
  "name": "CategoryProductItem_product",
  "type": "Product",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
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
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "rentalPricePerDayText",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "promotionalPriceText",
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
(node/*: any*/).hash = '2cd41d0f9de04b8d4098fb1878888dbb';
module.exports = node;
