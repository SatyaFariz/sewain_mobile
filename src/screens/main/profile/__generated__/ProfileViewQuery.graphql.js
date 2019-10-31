/**
 * @flow
 * @relayHash 475311bd3178b2d78f6d6f820d445ffe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProfileView_viewer$ref = any;
export type ProfileViewQueryVariables = {||};
export type ProfileViewQueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +isAuthenticated: ?boolean,
    +$fragmentRefs: ProfileView_viewer$ref,
  |}
|};
export type ProfileViewQuery = {|
  variables: ProfileViewQueryVariables,
  response: ProfileViewQueryResponse,
|};
*/


/*
query ProfileViewQuery {
  viewer {
    id
    isAuthenticated
    ...ProfileView_viewer
  }
}

fragment ProfileView_viewer on Viewer {
  id
  usersFeedbackGoogleFormUrl
  officialInstagram
  officialInstagramWeb
  officialFacebook
  officialFacebookWeb
  officialTwitter
  officialTwitterWeb
  playstore
  playstoreWeb
  userData {
    id
    ...UserInfo_user
  }
}

fragment UserInfo_user on User {
  id
  name
  email
  phone
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isAuthenticated",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProfileViewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "ProfileView_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfileViewQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProfileViewQuery",
    "id": null,
    "text": "query ProfileViewQuery {\n  viewer {\n    id\n    isAuthenticated\n    ...ProfileView_viewer\n  }\n}\n\nfragment ProfileView_viewer on Viewer {\n  id\n  usersFeedbackGoogleFormUrl\n  officialInstagram\n  officialInstagramWeb\n  officialFacebook\n  officialFacebookWeb\n  officialTwitter\n  officialTwitterWeb\n  playstore\n  playstoreWeb\n  userData {\n    id\n    ...UserInfo_user\n  }\n}\n\nfragment UserInfo_user on User {\n  id\n  name\n  email\n  phone\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f7e481be59b1a7f4177afbb134817565';
module.exports = node;
