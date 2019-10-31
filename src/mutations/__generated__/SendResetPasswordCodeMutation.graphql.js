/**
 * @flow
 * @relayHash b957766031ab513399d089da010a296c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SendResetPasswordCodeMutationVariables = {|
  email: any
|};
export type SendResetPasswordCodeMutationResponse = {|
  +sendResetPasswordCode: ?{|
    +success: ?boolean,
    +message: ?string,
  |}
|};
export type SendResetPasswordCodeMutation = {|
  variables: SendResetPasswordCodeMutationVariables,
  response: SendResetPasswordCodeMutationResponse,
|};
*/


/*
mutation SendResetPasswordCodeMutation(
  $email: Email!
) {
  sendResetPasswordCode(email: $email) {
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
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "sendResetPasswordCode",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
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
    "name": "SendResetPasswordCodeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SendResetPasswordCodeMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SendResetPasswordCodeMutation",
    "id": null,
    "text": "mutation SendResetPasswordCodeMutation(\n  $email: Email!\n) {\n  sendResetPasswordCode(email: $email) {\n    success\n    message\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f89cdde253e425fe1725879dc87b0d01';
module.exports = node;
