/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Price_product$ref: FragmentReference;
declare export opaque type Price_product$fragmentType: Price_product$ref;
export type Price_product = {|
  +id: ?string,
  +rentalPricePerDayText: ?string,
  +promotionalPriceText: ?string,
  +estimatedBuyPriceText: ?string,
  +$refType: Price_product$ref,
|};
export type Price_product$data = Price_product;
export type Price_product$key = {
  +$data?: Price_product$data,
  +$fragmentRefs: Price_product$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Price_product",
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
      "name": "rentalPricePerDayText",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "promotionalPriceText",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "estimatedBuyPriceText",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '980890717bb9c7dfe97d2bcdc44e0fb3';
module.exports = node;
