/**
 * @flow
 * @relayHash 5252cba93d14a47ca50d292797d2b8e4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GetUnreadNotificationsCountMutationVariables = {||};
export type GetUnreadNotificationsCountMutationResponse = {|
  +getUnreadNotificationsCount: ?{|
    +id: ?string,
    +unreadNotificationsCount: ?number,
  |}
|};
export type GetUnreadNotificationsCountMutation = {|
  variables: GetUnreadNotificationsCountMutationVariables,
  response: GetUnreadNotificationsCountMutationResponse,
|};
*/


/*
mutation GetUnreadNotificationsCountMutation {
  getUnreadNotificationsCount {
    id
    unreadNotificationsCount
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "getUnreadNotificationsCount",
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
        "name": "unreadNotificationsCount",
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
    "name": "GetUnreadNotificationsCountMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "GetUnreadNotificationsCountMutation",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "GetUnreadNotificationsCountMutation",
    "id": null,
    "text": "mutation GetUnreadNotificationsCountMutation {\n  getUnreadNotificationsCount {\n    id\n    unreadNotificationsCount\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '09138150ace1de4f83faa0cc992b45fa';
module.exports = node;
