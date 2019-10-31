/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Attributes_attributes$ref: FragmentReference;
declare export opaque type Attributes_attributes$fragmentType: Attributes_attributes$ref;
export type Attributes_attributes = $ReadOnlyArray<{|
  +name: ?string,
  +value: ?string,
  +$refType: Attributes_attributes$ref,
|}>;
export type Attributes_attributes$data = Attributes_attributes;
export type Attributes_attributes$key = $ReadOnlyArray<{
  +$data?: Attributes_attributes$data,
  +$fragmentRefs: Attributes_attributes$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Attributes_attributes",
  "type": "Attribute",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
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
      "name": "value",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9471a9c643578db3f233dcf02fb87797';
module.exports = node;
