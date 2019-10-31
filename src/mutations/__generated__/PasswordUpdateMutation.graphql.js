/**
 * @flow
 * @relayHash a8d85e29e53a0b82e6241116a31f08a2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PasswordUpdateMutationVariables = {|
  oldPassword: string,
  newPassword: string,
|};
export type PasswordUpdateMutationResponse = {|
  +passwordUpdate: ?{|
    +success: ?boolean,
    +message: ?string,
  |}
|};
export type PasswordUpdateMutation = {|
  variables: PasswordUpdateMutationVariables,
  response: PasswordUpdateMutationResponse,
|};
*/


/*
mutation PasswordUpdateMutation(
  $oldPassword: String!
  $newPassword: String!
) {
  passwordUpdate(oldPassword: $oldPassword, newPassword: $newPassword) {
    success
    message
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "oldPassword",
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
    "name": "passwordUpdate",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "newPassword",
        "variableName": "newPassword"
      },
      {
        "kind": "Variable",
        "name": "oldPassword",
        "variableName": "oldPassword"
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
    "name": "PasswordUpdateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "PasswordUpdateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "PasswordUpdateMutation",
    "id": null,
    "text": "mutation PasswordUpdateMutation(\n  $oldPassword: String!\n  $newPassword: String!\n) {\n  passwordUpdate(oldPassword: $oldPassword, newPassword: $newPassword) {\n    success\n    message\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b96a2ce6983a86a9cb128b74c219d779';
module.exports = node;
