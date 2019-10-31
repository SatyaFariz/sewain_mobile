/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Title_product$ref: FragmentReference;
declare export opaque type Title_product$fragmentType: Title_product$ref;
export type Title_product = {|
  +id: ?string,
  +name: ?string,
  +availableItems: ?number,
  +category: ?{|
    +id: ?string,
    +name: ?string,
  |},
  +$refType: Title_product$ref,
|};
export type Title_product$data = Title_product;
export type Title_product$key = {
  +$data?: Title_product$data,
  +$fragmentRefs: Title_product$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Title_product",
  "type": "Product",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
      "name": "category",
      "storageKey": null,
      "args": null,
      "concreteType": "Category",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/)
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '76a6d74800f040b4c30658e83b9a341f';
module.exports = node;
