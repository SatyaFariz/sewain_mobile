/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Categories_categories$ref: FragmentReference;
declare export opaque type Categories_categories$fragmentType: Categories_categories$ref;
export type Categories_categories = $ReadOnlyArray<{|
  +id: ?string,
  +categoryID: ?string,
  +name: ?string,
  +backgroundColor: ?string,
  +icon: ?string,
  +$refType: Categories_categories$ref,
|}>;
export type Categories_categories$data = Categories_categories;
export type Categories_categories$key = $ReadOnlyArray<{
  +$data?: Categories_categories$data,
  +$fragmentRefs: Categories_categories$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Categories_categories",
  "type": "Category",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "categoryID",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "backgroundColor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "icon",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8247aae12400bfd1500060c71bfba7ef';
module.exports = node;
