/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NotificationsList_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NotificationView_viewer$ref: FragmentReference;
declare export opaque type NotificationView_viewer$fragmentType: NotificationView_viewer$ref;
export type NotificationView_viewer = {|
  +id: ?string,
  +$fragmentRefs: NotificationsList_viewer$ref,
  +$refType: NotificationView_viewer$ref,
|};
export type NotificationView_viewer$data = NotificationView_viewer;
export type NotificationView_viewer$key = {
  +$data?: NotificationView_viewer$data,
  +$fragmentRefs: NotificationView_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "NotificationView_viewer",
  "type": "Viewer",
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
      "kind": "FragmentSpread",
      "name": "NotificationsList_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '315f51a72354ff34102011015339c8b7';
module.exports = node;
