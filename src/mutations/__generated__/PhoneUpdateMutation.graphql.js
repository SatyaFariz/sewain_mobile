/**
 * @flow
 * @relayHash d297d5dffa8c8913891cb68f9e094e40
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PhoneUpdateMutationVariables = {|
  phone: string
|};
export type PhoneUpdateMutationResponse = {|
  +phoneUpdate: ?{|
    +id: ?string,
    +phone: ?string,
  |}
|};
export type PhoneUpdateMutation = {|
  variables: PhoneUpdateMutationVariables,
  response: PhoneUpdateMutationResponse,
|};
*/


/*
mutation PhoneUpdateMutation(
  $phone: String!
) {
  phoneUpdate(phone: $phone) {
    id
    phone
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "phone",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "phoneUpdate",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "phone",
        "variableName": "phone"
      }
    ],
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
        "name": "phone",
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
    "name": "PhoneUpdateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "PhoneUpdateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "PhoneUpdateMutation",
    "id": null,
    "text": "mutation PhoneUpdateMutation(\n  $phone: String!\n) {\n  phoneUpdate(phone: $phone) {\n    id\n    phone\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '46c4b3ae3de45402ab030883563d6440';
module.exports = node;
