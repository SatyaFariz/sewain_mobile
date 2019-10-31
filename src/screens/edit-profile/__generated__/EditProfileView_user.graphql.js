/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditProfileView_user$ref: FragmentReference;
declare export opaque type EditProfileView_user$fragmentType: EditProfileView_user$ref;
export type EditProfileView_user = {|
  +id: ?string,
  +name: ?string,
  +username: ?string,
  +email: ?string,
  +phone: ?string,
  +address: ?string,
  +$refType: EditProfileView_user$ref,
|};
export type EditProfileView_user$data = EditProfileView_user;
export type EditProfileView_user$key = {
  +$data?: EditProfileView_user$data,
  +$fragmentRefs: EditProfileView_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "EditProfileView_user",
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
      "name": "username",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "address",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '890a08cffe94640ca5c7878f71f495e8';
module.exports = node;
