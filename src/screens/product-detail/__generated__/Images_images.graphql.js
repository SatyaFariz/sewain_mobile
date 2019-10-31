/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Images_images$ref: FragmentReference;
declare export opaque type Images_images$fragmentType: Images_images$ref;
export type Images_images = $ReadOnlyArray<{|
  +id: ?string,
  +secureUrl: ?string,
  +$refType: Images_images$ref,
|}>;
export type Images_images$data = Images_images;
export type Images_images$key = $ReadOnlyArray<{
  +$data?: Images_images$data,
  +$fragmentRefs: Images_images$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Images_images",
  "type": "Image",
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
      "name": "secureUrl",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '83b3dcf67c773496ebaf9ef14d454b66';
module.exports = node;
