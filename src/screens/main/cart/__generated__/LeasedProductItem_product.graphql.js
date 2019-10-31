/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LeasedProductItem_product$ref: FragmentReference;
declare export opaque type LeasedProductItem_product$fragmentType: LeasedProductItem_product$ref;
export type LeasedProductItem_product = {|
  +id: ?string,
  +name: ?string,
  +quantity: ?number,
  +totalDays: ?number,
  +rentalDatesText: ?string,
  +isDueToday: ?boolean,
  +totalDaysOverdue: ?number,
  +returnDate: ?string,
  +displayImage: ?{|
    +id: ?string,
    +secureUrl: ?string,
  |},
  +$refType: LeasedProductItem_product$ref,
|};
export type LeasedProductItem_product$data = LeasedProductItem_product;
export type LeasedProductItem_product$key = {
  +$data?: LeasedProductItem_product$data,
  +$fragmentRefs: LeasedProductItem_product$ref,
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
  "name": "LeasedProductItem_product",
  "type": "LeasedProduct",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
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
      "name": "quantity",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalDays",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "rentalDatesText",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isDueToday",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalDaysOverdue",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "returnDate",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "displayImage",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "secureUrl",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '0da9c692dba8d6a98c967479260c6985';
module.exports = node;
