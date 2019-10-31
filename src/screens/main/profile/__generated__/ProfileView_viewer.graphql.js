/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type UserInfo_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProfileView_viewer$ref: FragmentReference;
declare export opaque type ProfileView_viewer$fragmentType: ProfileView_viewer$ref;
export type ProfileView_viewer = {|
  +id: ?string,
  +usersFeedbackGoogleFormUrl: ?string,
  +officialInstagram: ?string,
  +officialInstagramWeb: ?string,
  +officialFacebook: ?string,
  +officialFacebookWeb: ?string,
  +officialTwitter: ?string,
  +officialTwitterWeb: ?string,
  +playstore: ?string,
  +playstoreWeb: ?string,
  +userData: ?{|
    +id: ?string,
    +$fragmentRefs: UserInfo_user$ref,
  |},
  +$refType: ProfileView_viewer$ref,
|};
export type ProfileView_viewer$data = ProfileView_viewer;
export type ProfileView_viewer$key = {
  +$data?: ProfileView_viewer$data,
  +$fragmentRefs: ProfileView_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ProfileView_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "usersFeedbackGoogleFormUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "officialInstagram",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "officialInstagramWeb",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "officialFacebook",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "officialFacebookWeb",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "officialTwitter",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "officialTwitterWeb",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "playstore",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "playstoreWeb",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "userData",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "FragmentSpread",
          "name": "UserInfo_user",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ebe17cc4cd6bcbadf936a88b458316ef';
module.exports = node;
