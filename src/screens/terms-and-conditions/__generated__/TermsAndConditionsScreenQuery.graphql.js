/**
 * @flow
 * @relayHash 9029190e1bc751b29dd223302a9d76fe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TermsAndConditionsScreenQueryVariables = {||};
export type TermsAndConditionsScreenQueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +termsAndConditions: ?string,
  |}
|};
export type TermsAndConditionsScreenQuery = {|
  variables: TermsAndConditionsScreenQueryVariables,
  response: TermsAndConditionsScreenQueryResponse,
|};
*/


/*
query TermsAndConditionsScreenQuery {
  viewer {
    id
    termsAndConditions
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
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
        "name": "termsAndConditions",
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
    "name": "TermsAndConditionsScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TermsAndConditionsScreenQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "TermsAndConditionsScreenQuery",
    "id": null,
    "text": "query TermsAndConditionsScreenQuery {\n  viewer {\n    id\n    termsAndConditions\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '84e4f144353ea607ac641f0a6127f3db';
module.exports = node;
