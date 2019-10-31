/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Categories_categories$ref = any;
type FeaturedProductsList_products$ref = any;
type PromotionalProductsList_products$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeView_viewer$ref: FragmentReference;
declare export opaque type HomeView_viewer$fragmentType: HomeView_viewer$ref;
export type HomeView_viewer = {|
  +id: ?string,
  +isAuthenticated: ?boolean,
  +categories: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Categories_categories$ref
  |}>,
  +promotionalProducts: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: PromotionalProductsList_products$ref,
  |}>,
  +featuredProducts: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: FeaturedProductsList_products$ref,
  |}>,
  +$refType: HomeView_viewer$ref,
|};
export type HomeView_viewer$data = HomeView_viewer;
export type HomeView_viewer$key = {
  +$data?: HomeView_viewer$data,
  +$fragmentRefs: HomeView_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "HomeView_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isAuthenticated",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "categories",
      "storageKey": null,
      "args": null,
      "concreteType": "Category",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Categories_categories",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "promotionalProducts",
      "storageKey": null,
      "args": null,
      "concreteType": "Product",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "FragmentSpread",
          "name": "PromotionalProductsList_products",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "featuredProducts",
      "storageKey": null,
      "args": null,
      "concreteType": "Product",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "FragmentSpread",
          "name": "FeaturedProductsList_products",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '40c81f8ece6e5f1722bc6ea0ba0b029e';
module.exports = node;
