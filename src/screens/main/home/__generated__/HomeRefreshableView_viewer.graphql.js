/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HomeView_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeRefreshableView_viewer$ref: FragmentReference;
declare export opaque type HomeRefreshableView_viewer$fragmentType: HomeRefreshableView_viewer$ref;
export type HomeRefreshableView_viewer = {|
  +$fragmentRefs: HomeView_viewer$ref,
  +$refType: HomeRefreshableView_viewer$ref,
|};
export type HomeRefreshableView_viewer$data = HomeRefreshableView_viewer;
export type HomeRefreshableView_viewer$key = {
  +$data?: HomeRefreshableView_viewer$data,
  +$fragmentRefs: HomeRefreshableView_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HomeRefreshableView_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "HomeView_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9ee221d6b6f675d44c4c63340ead0b09';
module.exports = node;
