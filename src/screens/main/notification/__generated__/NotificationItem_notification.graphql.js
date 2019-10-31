/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NotificationItem_notification$ref: FragmentReference;
declare export opaque type NotificationItem_notification$fragmentType: NotificationItem_notification$ref;
export type NotificationItem_notification = {|
  +id: ?string,
  +rowID: ?number,
  +title: ?string,
  +text: ?string,
  +ref: ?string,
  +refID: ?number,
  +mobilePressAction: ?string,
  +url: ?string,
  +date: ?string,
  +$refType: NotificationItem_notification$ref,
|};
export type NotificationItem_notification$data = NotificationItem_notification;
export type NotificationItem_notification$key = {
  +$data?: NotificationItem_notification$data,
  +$fragmentRefs: NotificationItem_notification$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "NotificationItem_notification",
  "type": "Notification",
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
      "name": "rowID",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "text",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "ref",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "refID",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "mobilePressAction",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'eabef15dd374a27d6d09cfd2de3acbf1';
module.exports = node;
