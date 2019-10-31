/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SameCategoryProductItem_product$ref: FragmentReference;
declare export opaque type SameCategoryProductItem_product$fragmentType: SameCategoryProductItem_product$ref;
export type SameCategoryProductItem_product = {|
  +id: ?string,
  +productID: ?number,
  +name: ?string,
  +rentalPricePerDayText: ?string,
  +promotionalPriceText: ?string,
  +displayImage: ?{|
    +id: ?string,
    +secureUrl: ?string,
  |},
  +$refType: SameCategoryProductItem_product$ref,
|};
export type SameCategoryProductItem_product$data = SameCategoryProductItem_product;
export type SameCategoryProductItem_product$key = {
  +$data?: SameCategoryProductItem_product$data,
  +$fragmentRefs: SameCategoryProductItem_product$ref,
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
  "name": "SameCategoryProductItem_product",
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
(node/*: any*/).hash = 'a8987f2e44fd85b525ad81b0658b90c2';
module.exports = node;
