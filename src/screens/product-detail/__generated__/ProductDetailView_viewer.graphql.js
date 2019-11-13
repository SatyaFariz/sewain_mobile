/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AddToCartButton_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductDetailView_viewer$ref: FragmentReference;
declare export opaque type ProductDetailView_viewer$fragmentType: ProductDetailView_viewer$ref;
export type ProductDetailView_viewer = {|
  +id: ?string,
  +$fragmentRefs: AddToCartButton_viewer$ref,
  +$refType: ProductDetailView_viewer$ref,
|};
export type ProductDetailView_viewer$data = ProductDetailView_viewer;
export type ProductDetailView_viewer$key = {
  +$data?: ProductDetailView_viewer$data,
  +$fragmentRefs: ProductDetailView_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProductDetailView_viewer",
  "type": "Viewer",
  "metadata": null,
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
      "name": "AddToCartButton_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '985a3a031fd4a15b7bdf5ca176aea0c7';
module.exports = node;
