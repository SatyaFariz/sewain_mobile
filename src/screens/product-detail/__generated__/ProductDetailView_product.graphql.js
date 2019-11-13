/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AddToCartButton_product$ref = any;
type Attributes_attributes$ref = any;
type Description_product$ref = any;
type Images_images$ref = any;
type Price_product$ref = any;
type RelatedProductsList_products$ref = any;
type SameCategoryProductsList_product$ref = any;
type Title_product$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductDetailView_product$ref: FragmentReference;
declare export opaque type ProductDetailView_product$fragmentType: ProductDetailView_product$ref;
export type ProductDetailView_product = {|
  +id: ?string,
  +availableItems: ?number,
  +attributes: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Attributes_attributes$ref
  |}>,
  +allImages: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Images_images$ref
  |}>,
  +relatedProducts: ?$ReadOnlyArray<?{|
    +$fragmentRefs: RelatedProductsList_products$ref
  |}>,
  +$fragmentRefs: Title_product$ref & Price_product$ref & Description_product$ref & SameCategoryProductsList_product$ref & AddToCartButton_product$ref,
  +$refType: ProductDetailView_product$ref,
|};
export type ProductDetailView_product$data = ProductDetailView_product;
export type ProductDetailView_product$key = {
  +$data?: ProductDetailView_product$data,
  +$fragmentRefs: ProductDetailView_product$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProductDetailView_product",
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
      "name": "availableItems",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "attributes",
      "storageKey": null,
      "args": null,
      "concreteType": "Attribute",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Attributes_attributes",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "allImages",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Images_images",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "relatedProducts",
      "storageKey": null,
      "args": null,
      "concreteType": "Product",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "RelatedProductsList_products",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "Title_product",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Price_product",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Description_product",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SameCategoryProductsList_product",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AddToCartButton_product",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b75e9621e01a90239385e947b9d06b56';
module.exports = node;
