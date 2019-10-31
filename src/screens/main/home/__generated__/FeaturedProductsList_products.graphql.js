/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FeaturedProductItem_product$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FeaturedProductsList_products$ref: FragmentReference;
declare export opaque type FeaturedProductsList_products$fragmentType: FeaturedProductsList_products$ref;
export type FeaturedProductsList_products = $ReadOnlyArray<{|
  +id: ?string,
  +$fragmentRefs: FeaturedProductItem_product$ref,
  +$refType: FeaturedProductsList_products$ref,
|}>;
export type FeaturedProductsList_products$data = FeaturedProductsList_products;
export type FeaturedProductsList_products$key = $ReadOnlyArray<{
  +$data?: FeaturedProductsList_products$data,
  +$fragmentRefs: FeaturedProductsList_products$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FeaturedProductsList_products",
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
      "name": "FeaturedProductItem_product",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '64b3296c2bf50f80ab219aac61793da8';
module.exports = node;
