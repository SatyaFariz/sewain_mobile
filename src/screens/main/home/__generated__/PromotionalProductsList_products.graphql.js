/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PromotionalProductItem_product$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PromotionalProductsList_products$ref: FragmentReference;
declare export opaque type PromotionalProductsList_products$fragmentType: PromotionalProductsList_products$ref;
export type PromotionalProductsList_products = $ReadOnlyArray<{|
  +id: ?string,
  +$fragmentRefs: PromotionalProductItem_product$ref,
  +$refType: PromotionalProductsList_products$ref,
|}>;
export type PromotionalProductsList_products$data = PromotionalProductsList_products;
export type PromotionalProductsList_products$key = $ReadOnlyArray<{
  +$data?: PromotionalProductsList_products$data,
  +$fragmentRefs: PromotionalProductsList_products$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PromotionalProductsList_products",
  "type": "Product",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PromotionalProductItem_product",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'bbd540f36826678e4c751fbc1c8e8deb';
module.exports = node;
