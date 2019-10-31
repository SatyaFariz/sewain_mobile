/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SameCategoryProductItem_product$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SameCategoryProductsList_product$ref: FragmentReference;
declare export opaque type SameCategoryProductsList_product$fragmentType: SameCategoryProductsList_product$ref;
export type SameCategoryProductsList_product = {|
  +id: ?string,
  +category: ?{|
    +name: ?string
  |},
  +sameCategoryProducts: ?$ReadOnlyArray<?{|
    +$fragmentRefs: SameCategoryProductItem_product$ref
  |}>,
  +$refType: SameCategoryProductsList_product$ref,
|};
export type SameCategoryProductsList_product$data = SameCategoryProductsList_product;
export type SameCategoryProductsList_product$key = {
  +$data?: SameCategoryProductsList_product$data,
  +$fragmentRefs: SameCategoryProductsList_product$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SameCategoryProductsList_product",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "category",
      "storageKey": null,
      "args": null,
      "concreteType": "Category",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sameCategoryProducts",
      "storageKey": null,
      "args": null,
      "concreteType": "Product",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "SameCategoryProductItem_product",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4a3cf78cab41eaecd8fe883e48f08015';
module.exports = node;
