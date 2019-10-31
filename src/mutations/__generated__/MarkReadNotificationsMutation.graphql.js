/**
 * @flow
 * @relayHash 9656a5390d578dc4551f09020e45e377
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MarkReadNotificationsMutationVariables = {||};
export type MarkReadNotificationsMutationResponse = {|
  +markReadNotifications: ?{|
    +id: ?string,
    +unreadNotificationsCount: ?number,
  |}
|};
export type MarkReadNotificationsMutation = {|
  variables: MarkReadNotificationsMutationVariables,
  response: MarkReadNotificationsMutationResponse,
|};
*/


/*
mutation MarkReadNotificationsMutation {
  markReadNotifications {
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
    "name": "markReadNotifications",
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
    "name": "MarkReadNotificationsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MarkReadNotificationsMutation",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "MarkReadNotificationsMutation",
    "id": null,
    "text": "mutation MarkReadNotificationsMutation {\n  markReadNotifications {\n    id\n    unreadNotificationsCount\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0ada0f07566613dce3af35bb9ade5644';
module.exports = node;
