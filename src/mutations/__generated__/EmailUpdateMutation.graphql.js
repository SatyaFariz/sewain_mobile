/**
 * @flow
 * @relayHash fedf8f9768e54ad861e22602a1b1768f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EmailUpdateMutationVariables = {|
  email: any
|};
export type EmailUpdateMutationResponse = {|
  +emailUpdate: ?{|
    +actionInfo: ?{|
      +success: ?boolean,
      +message: ?string,
    |},
    +userData: ?{|
      +id: ?string,
      +email: ?string,
    |},
  |}
|};
export type EmailUpdateMutation = {|
  variables: EmailUpdateMutationVariables,
  response: EmailUpdateMutationResponse,
|};
*/


/*
mutation EmailUpdateMutation(
  $email: Email!
) {
  emailUpdate(email: $email) {
    actionInfo {
      success
      message
    }
    userData {
      id
      email
    }
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
    "name": "emailUpdate",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
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
            "name": "email",
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
    "name": "EmailUpdateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EmailUpdateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "EmailUpdateMutation",
    "id": null,
    "text": "mutation EmailUpdateMutation(\n  $email: Email!\n) {\n  emailUpdate(email: $email) {\n    actionInfo {\n      success\n      message\n    }\n    userData {\n      id\n      email\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bca45077dfd263c53d6e748b83e459f4';
module.exports = node;
