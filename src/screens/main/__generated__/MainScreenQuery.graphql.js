/**
 * @flow
 * @relayHash 71628a813812545573231343e37cb2d9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MainBottomNavigation_viewer$ref = any;
export type MainScreenQueryVariables = {||};
export type MainScreenQueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +$fragmentRefs: MainBottomNavigation_viewer$ref,
  |}
|};
export type MainScreenQuery = {|
  variables: MainScreenQueryVariables,
  response: MainScreenQueryResponse,
|};
*/


/*
query MainScreenQuery {
  viewer {
    id
    ...MainBottomNavigation_viewer
  }
}

fragment MainBottomNavigation_viewer on Viewer {
  officialWhatsApp
  unreadNotificationsCount
  isAuthenticated
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
    "name": "MainScreenQuery",
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
            "kind": "FragmentSpread",
            "name": "MainBottomNavigation_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MainScreenQuery",
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MainScreenQuery",
    "id": null,
    "text": "query MainScreenQuery {\n  viewer {\n    id\n    ...MainBottomNavigation_viewer\n  }\n}\n\nfragment MainBottomNavigation_viewer on Viewer {\n  officialWhatsApp\n  unreadNotificationsCount\n  isAuthenticated\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '54c4636f0532318cfe435a4be6d52f2c';
module.exports = node;
