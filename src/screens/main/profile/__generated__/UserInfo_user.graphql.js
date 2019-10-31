/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserInfo_user$ref: FragmentReference;
declare export opaque type UserInfo_user$fragmentType: UserInfo_user$ref;
export type UserInfo_user = {|
  +id: ?string,
  +name: ?string,
  +email: ?string,
  +phone: ?string,
  +$refType: UserInfo_user$ref,
|};
export type UserInfo_user$data = UserInfo_user;
export type UserInfo_user$key = {
  +$data?: UserInfo_user$data,
  +$fragmentRefs: UserInfo_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserInfo_user",
  "type": "User",
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
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "phone",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'dac1453b8019d65388fff9f9d3577a51';
module.exports = node;
