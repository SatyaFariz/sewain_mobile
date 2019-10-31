/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MainBottomNavigation_viewer$ref: FragmentReference;
declare export opaque type MainBottomNavigation_viewer$fragmentType: MainBottomNavigation_viewer$ref;
export type MainBottomNavigation_viewer = {|
  +officialWhatsApp: ?string,
  +unreadNotificationsCount: ?number,
  +isAuthenticated: ?boolean,
  +$refType: MainBottomNavigation_viewer$ref,
|};
export type MainBottomNavigation_viewer$data = MainBottomNavigation_viewer;
export type MainBottomNavigation_viewer$key = {
  +$data?: MainBottomNavigation_viewer$data,
  +$fragmentRefs: MainBottomNavigation_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MainBottomNavigation_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "officialWhatsApp",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "unreadNotificationsCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isAuthenticated",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8a835a57cb73b3b34129c770a14921bc';
module.exports = node;
