/**
 * @flow
 * @relayHash 1a38a72ae6d2f62dda7038b2a7109937
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditProfileView_user$ref = any;
export type EditProfileViewQueryVariables = {||};
export type EditProfileViewQueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +userData: ?{|
      +id: ?string,
      +$fragmentRefs: EditProfileView_user$ref,
    |},
  |}
|};
export type EditProfileViewQuery = {|
  variables: EditProfileViewQueryVariables,
  response: EditProfileViewQueryResponse,
|};
*/


/*
query EditProfileViewQuery {
  viewer {
    id
    userData {
      id
      ...EditProfileView_user
    }
  }
}

fragment EditProfileView_user on User {
  id
  name
  username
  email
  phone
  address
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditProfileViewQuery",
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
                "name": "EditProfileView_user",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditProfileViewQuery",
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "EditProfileViewQuery",
    "id": null,
    "text": "query EditProfileViewQuery {\n  viewer {\n    id\n    userData {\n      id\n      ...EditProfileView_user\n    }\n  }\n}\n\nfragment EditProfileView_user on User {\n  id\n  name\n  username\n  email\n  phone\n  address\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7bc0ee095b6712b601250df0a78ee360';
module.exports = node;
