/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type LeasedProductItem_product$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LeasedProductsList_products$ref: FragmentReference;
declare export opaque type LeasedProductsList_products$fragmentType: LeasedProductsList_products$ref;
export type LeasedProductsList_products = $ReadOnlyArray<{|
  +id: ?string,
  +$fragmentRefs: LeasedProductItem_product$ref,
  +$refType: LeasedProductsList_products$ref,
|}>;
export type LeasedProductsList_products$data = LeasedProductsList_products;
export type LeasedProductsList_products$key = $ReadOnlyArray<{
  +$data?: LeasedProductsList_products$data,
  +$fragmentRefs: LeasedProductsList_products$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "LeasedProductsList_products",
  "type": "LeasedProduct",
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
      "name": "LeasedProductItem_product",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e09937ad900e840e29af89d33904d4e1';
module.exports = node;
