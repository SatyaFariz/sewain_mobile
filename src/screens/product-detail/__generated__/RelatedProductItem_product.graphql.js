/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RelatedProductItem_product$ref: FragmentReference;
declare export opaque type RelatedProductItem_product$fragmentType: RelatedProductItem_product$ref;
export type RelatedProductItem_product = {|
  +id: ?string,
  +productID: ?number,
  +name: ?string,
  +rentalPricePerDayText: ?string,
  +promotionalPriceText: ?string,
  +displayImage: ?{|
    +id: ?string,
    +secureUrl: ?string,
  |},
  +$refType: RelatedProductItem_product$ref,
|};
export type RelatedProductItem_product$data = RelatedProductItem_product;
export type RelatedProductItem_product$key = {
  +$data?: RelatedProductItem_product$data,
  +$fragmentRefs: RelatedProductItem_product$ref,
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
  "name": "RelatedProductItem_product",
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
(node/*: any*/).hash = 'cfd5ea49eb3a77e93b010b35bbe1705d';
module.exports = node;
