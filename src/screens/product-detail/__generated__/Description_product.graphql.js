/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Description_product$ref: FragmentReference;
declare export opaque type Description_product$fragmentType: Description_product$ref;
export type Description_product = {|
  +id: ?string,
  +description: ?string,
  +$refType: Description_product$ref,
|};
export type Description_product$data = Description_product;
export type Description_product$key = {
  +$data?: Description_product$data,
  +$fragmentRefs: Description_product$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Description_product",
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
      "name": "description",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '896b4162d0cfb502ba3bed7c67f65028';
module.exports = node;
