/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AddToCartButton_product$ref: FragmentReference;
declare export opaque type AddToCartButton_product$fragmentType: AddToCartButton_product$ref;
export type AddToCartButton_product = {|
  +id: ?string,
  +productID: ?number,
  +availableItems: ?number,
  +$refType: AddToCartButton_product$ref,
|};
export type AddToCartButton_product$data = AddToCartButton_product;
export type AddToCartButton_product$key = {
  +$data?: AddToCartButton_product$data,
  +$fragmentRefs: AddToCartButton_product$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AddToCartButton_product",
  "type": "Product",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "productID",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "availableItems",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '19bad67dfef465bf2d72fdef33e2230a';
module.exports = node;
