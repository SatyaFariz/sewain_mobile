/**
 * @flow
 * @relayHash e95910ca8e28007bf78ee9c11eb9094e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UsernameUpdateMutationVariables = {|
  username: any
|};
export type UsernameUpdateMutationResponse = {|
  +usernameUpdate: ?{|
    +actionInfo: ?{|
      +success: ?boolean,
      +message: ?string,
    |},
    +userData: ?{|
      +id: ?string,
      +username: ?string,
    |},
  |}
|};
export type UsernameUpdateMutation = {|
  variables: UsernameUpdateMutationVariables,
  response: UsernameUpdateMutationResponse,
|};
*/


/*
mutation UsernameUpdateMutation(
  $username: Username!
) {
  usernameUpdate(username: $username) {
    actionInfo {
      success
      message
    }
    userData {
      id
      username
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "Username!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "usernameUpdate",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "UserActionPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "actionInfo",
        "storageKey": null,
        "args": null,
        "concreteType": "ActionInfo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "success",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "message",
            "args": null,
            "storageKey": null
          }
        ]
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
            "name": "username",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UsernameUpdateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UsernameUpdateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UsernameUpdateMutation",
    "id": null,
    "text": "mutation UsernameUpdateMutation(\n  $username: Username!\n) {\n  usernameUpdate(username: $username) {\n    actionInfo {\n      success\n      message\n    }\n    userData {\n      id\n      username\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '499ded7ee7f141dedb188295baa0df40';
module.exports = node;
