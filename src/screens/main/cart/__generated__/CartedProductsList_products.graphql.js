/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CartedProductItem_product$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CartedProductsList_products$ref: FragmentReference;
declare export opaque type CartedProductsList_products$fragmentType: CartedProductsList_products$ref;
export type CartedProductsList_products = $ReadOnlyArray<{|
  +id: ?string,
  +$fragmentRefs: CartedProductItem_product$ref,
  +$refType: CartedProductsList_products$ref,
|}>;
export type CartedProductsList_products$data = CartedProductsList_products;
export type CartedProductsList_products$key = $ReadOnlyArray<{
  +$data?: CartedProductsList_products$data,
  +$fragmentRefs: CartedProductsList_products$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CartedProductsList_products",
  "type": "CartedProduct",
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
      "name": "CartedProductItem_product",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7b0427fe976dfc7d2791b25435c46359';
module.exports = node;
