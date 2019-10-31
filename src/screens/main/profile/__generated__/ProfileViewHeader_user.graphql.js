/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProfileViewHeader_user$ref: FragmentReference;
declare export opaque type ProfileViewHeader_user$fragmentType: ProfileViewHeader_user$ref;
export type ProfileViewHeader_user = {|
  +id: ?string,
  +name: ?string,
  +email: ?string,
  +$refType: ProfileViewHeader_user$ref,
|};
export type ProfileViewHeader_user$data = ProfileViewHeader_user;
export type ProfileViewHeader_user$key = {
  +$data?: ProfileViewHeader_user$data,
  +$fragmentRefs: ProfileViewHeader_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProfileViewHeader_user",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9d76140303f5ee0161d782f9b827c5d9';
module.exports = node;
