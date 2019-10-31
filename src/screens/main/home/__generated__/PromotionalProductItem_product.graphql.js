/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PromotionalProductItem_product$ref: FragmentReference;
declare export opaque type PromotionalProductItem_product$fragmentType: PromotionalProductItem_product$ref;
export type PromotionalProductItem_product = {|
  +id: ?string,
  +productID: ?number,
  +name: ?string,
  +rentalPricePerDayText: ?string,
  +promotionalPriceText: ?string,
  +displayImage: ?{|
    +id: ?string,
    +secureUrl: ?string,
  |},
  +$refType: PromotionalProductItem_product$ref,
|};
export type PromotionalProductItem_product$data = PromotionalProductItem_product;
export type PromotionalProductItem_product$key = {
  +$data?: PromotionalProductItem_product$data,
  +$fragmentRefs: PromotionalProductItem_product$ref,
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
  "name": "PromotionalProductItem_product",
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
(node/*: any*/).hash = '69f0bf3cc89497d00fab0e4114fa5313';
module.exports = node;
