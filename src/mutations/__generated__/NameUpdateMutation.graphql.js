/**
 * @flow
 * @relayHash d3dfeb2352ec1bcb400ddf5c185dba57
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NameUpdateMutationVariables = {|
  name: string
|};
export type NameUpdateMutationResponse = {|
  +nameUpdate: ?{|
    +id: ?string,
    +name: ?string,
  |}
|};
export type NameUpdateMutation = {|
  variables: NameUpdateMutationVariables,
  response: NameUpdateMutationResponse,
|};
*/


/*
mutation NameUpdateMutation(
  $name: String!
) {
  nameUpdate(name: $name) {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "nameUpdate",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
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
        "name": "name",
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
    "name": "NameUpdateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "NameUpdateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "NameUpdateMutation",
    "id": null,
    "text": "mutation NameUpdateMutation(\n  $name: String!\n) {\n  nameUpdate(name: $name) {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b807b4aa3659d3563a8fde53d80ff298';
module.exports = node;
