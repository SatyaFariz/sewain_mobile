/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AddToCartButton_viewer$ref: FragmentReference;
declare export opaque type AddToCartButton_viewer$fragmentType: AddToCartButton_viewer$ref;
export type AddToCartButton_viewer = {|
  +id: ?string,
  +isAuthenticated: ?boolean,
  +userData: ?{|
    +id: ?string,
    +address: ?string,
  |},
  +$refType: AddToCartButton_viewer$ref,
|};
export type AddToCartButton_viewer$data = AddToCartButton_viewer;
export type AddToCartButton_viewer$key = {
  +$data?: AddToCartButton_viewer$data,
  +$fragmentRefs: AddToCartButton_viewer$ref,
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
  "name": "AddToCartButton_viewer",
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
      "name": "userData",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "address",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ac5f700fcf54a059255859993715348f';
module.exports = node;
