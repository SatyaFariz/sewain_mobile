/**
 * @flow
 * @relayHash b9f4cc3b88a3be65eb07806c5d21f5f7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ResetPasswordMutationVariables = {|
  email: any,
  code: string,
  newPassword: string,
|};
export type ResetPasswordMutationResponse = {|
  +resetPassword: ?{|
    +success: ?boolean,
    +message: ?string,
  |}
|};
export type ResetPasswordMutation = {|
  variables: ResetPasswordMutationVariables,
  response: ResetPasswordMutationResponse,
|};
*/


/*
mutation ResetPasswordMutation(
  $email: Email!
  $code: String!
  $newPassword: String!
) {
  resetPassword(email: $email, code: $code, newPassword: $newPassword) {
    success
    message
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "Email!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "code",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "newPassword",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "resetPassword",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "code",
        "variableName": "code"
      },
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "newPassword",
        "variableName": "newPassword"
      }
    ],
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ResetPasswordMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ResetPasswordMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ResetPasswordMutation",
    "id": null,
    "text": "mutation ResetPasswordMutation(\n  $email: Email!\n  $code: String!\n  $newPassword: String!\n) {\n  resetPassword(email: $email, code: $code, newPassword: $newPassword) {\n    success\n    message\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c95501122f2b8880fa3810dfe7e34678';
module.exports = node;
