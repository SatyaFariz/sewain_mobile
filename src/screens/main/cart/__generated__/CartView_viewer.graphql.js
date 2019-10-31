/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CartedProductsList_products$ref = any;
type LeasedProductsList_products$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CartView_viewer$ref: FragmentReference;
declare export opaque type CartView_viewer$fragmentType: CartView_viewer$ref;
export type CartView_viewer = {|
  +id: ?string,
  +cart: ?$ReadOnlyArray<?{|
    +$fragmentRefs: CartedProductsList_products$ref
  |}>,
  +leasedProducts: ?$ReadOnlyArray<?{|
    +$fragmentRefs: LeasedProductsList_products$ref
  |}>,
  +$refType: CartView_viewer$ref,
|};
export type CartView_viewer$data = CartView_viewer;
export type CartView_viewer$key = {
  +$data?: CartView_viewer$data,
  +$fragmentRefs: CartView_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CartView_viewer",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "cart",
      "storageKey": null,
      "args": null,
      "concreteType": "CartedProduct",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "CartedProductsList_products",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "leasedProducts",
      "storageKey": null,
      "args": null,
      "concreteType": "LeasedProduct",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "LeasedProductsList_products",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e65db1899589569d06cc47ff5e56110c';
module.exports = node;
