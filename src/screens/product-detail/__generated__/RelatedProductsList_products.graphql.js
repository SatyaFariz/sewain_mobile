/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type RelatedProductItem_product$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RelatedProductsList_products$ref: FragmentReference;
declare export opaque type RelatedProductsList_products$fragmentType: RelatedProductsList_products$ref;
export type RelatedProductsList_products = $ReadOnlyArray<{|
  +id: ?string,
  +$fragmentRefs: RelatedProductItem_product$ref,
  +$refType: RelatedProductsList_products$ref,
|}>;
export type RelatedProductsList_products$data = RelatedProductsList_products;
export type RelatedProductsList_products$key = $ReadOnlyArray<{
  +$data?: RelatedProductsList_products$data,
  +$fragmentRefs: RelatedProductsList_products$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "RelatedProductsList_products",
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
      "name": "RelatedProductItem_product",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '0846d883d8da0c308e082038218905ba';
module.exports = node;
