/**
 * @flow
 * @relayHash 3211c72ec5982e160c81c7659c5d2fef
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserTypeEnum = "ADMIN" | "REGULAR_USER" | "%future added value";
export type LoginMutationVariables = {|
  as: UserTypeEnum,
  usernameOrEmail: string,
  password: string,
|};
export type LoginMutationResponse = {|
  +login: ?{|
    +actionInfo: ?{|
      +success: ?boolean,
      +message: ?string,
    |}
  |}
|};
export type LoginMutation = {|
  variables: LoginMutationVariables,
  response: LoginMutationResponse,
|};
*/


/*
mutation LoginMutation(
  $as: UserTypeEnum!
  $usernameOrEmail: String!
  $password: String!
) {
  login(as: $as, usernameOrEmail: $usernameOrEmail, password: $password) {
    actionInfo {
      success
      message
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "as",
    "type": "UserTypeEnum!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "usernameOrEmail",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "login",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "as",
        "variableName": "as"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "usernameOrEmail",
        "variableName": "usernameOrEmail"
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LoginMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LoginMutation",
    "id": null,
    "text": "mutation LoginMutation(\n  $as: UserTypeEnum!\n  $usernameOrEmail: String!\n  $password: String!\n) {\n  login(as: $as, usernameOrEmail: $usernameOrEmail, password: $password) {\n    actionInfo {\n      success\n      message\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '308e39909b1f6e8f6a753716f13aa17e';
module.exports = node;
