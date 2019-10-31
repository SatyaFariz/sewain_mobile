/**
 * @flow
 * @relayHash 864c9ab3bf077ec92799bfb73572914d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PrivacyPolicyScreenQueryVariables = {||};
export type PrivacyPolicyScreenQueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +privacyPolicy: ?string,
  |}
|};
export type PrivacyPolicyScreenQuery = {|
  variables: PrivacyPolicyScreenQueryVariables,
  response: PrivacyPolicyScreenQueryResponse,
|};
*/


/*
query PrivacyPolicyScreenQuery {
  viewer {
    id
    privacyPolicy
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "Viewer",
    "plural": false,
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
        "name": "privacyPolicy",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PrivacyPolicyScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "PrivacyPolicyScreenQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "PrivacyPolicyScreenQuery",
    "id": null,
    "text": "query PrivacyPolicyScreenQuery {\n  viewer {\n    id\n    privacyPolicy\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '362e83a578b7a92852a01bd413b8ae94';
module.exports = node;
