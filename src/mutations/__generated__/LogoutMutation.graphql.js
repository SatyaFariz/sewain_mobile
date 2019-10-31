/**
 * @flow
 * @relayHash d6c26d7738ecc45dfb260f4f77a9d886
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LogoutMutationVariables = {||};
export type LogoutMutationResponse = {|
  +logout: ?{|
    +success: ?boolean,
    +message: ?string,
  |}
|};
export type LogoutMutation = {|
  variables: LogoutMutationVariables,
  response: LogoutMutationResponse,
|};
*/


/*
mutation LogoutMutation {
  logout {
    success
    message
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "logout",
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LogoutMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LogoutMutation",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LogoutMutation",
    "id": null,
    "text": "mutation LogoutMutation {\n  logout {\n    success\n    message\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '44d1de724e929cfb47088db5314156a9';
module.exports = node;
