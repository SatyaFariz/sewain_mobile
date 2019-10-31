/**
 * @flow
 * @relayHash 04f72c47f9436254d68013f600cafae6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CategorySearchResultsList_viewer$ref = any;
export type CategorySearchResultsListQueryVariables = {|
  categoryID: number,
  q: string,
|};
export type CategorySearchResultsListQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: CategorySearchResultsList_viewer$ref
  |}
|};
export type CategorySearchResultsListQuery = {|
  variables: CategorySearchResultsListQueryVariables,
  response: CategorySearchResultsListQueryResponse,
|};
*/


/*
query CategorySearchResultsListQuery(
  $categoryID: Int!
  $q: String!
) {
  viewer {
    ...CategorySearchResultsList_viewer_8qv4T
    id
  }
}

fragment CategoryProductItem_product on Product {
  id
  productID
  name
  rentalPricePerDayText
  promotionalPriceText
  displayImage {
    id
    secureUrl
  }
}

fragment CategorySearchResultsList_viewer_8qv4T on Viewer {
  search(first: 20, categoryID: $categoryID, q: $q) {
    edges {
      cursor
      node {
        id
        ...CategoryProductItem_product
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "categoryID",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "q",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "categoryID",
  "variableName": "categoryID"
},
v2 = {
  "kind": "Variable",
  "name": "q",
  "variableName": "q"
},
v3 = [
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  },
  (v2/*: any*/)
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CategorySearchResultsListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
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
            "kind": "FragmentSpread",
            "name": "CategorySearchResultsList_viewer",
            "args": [
              (v1/*: any*/),
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CategorySearchResultsListQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
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
            "kind": "LinkedField",
            "alias": null,
            "name": "search",
            "storageKey": null,
            "args": (v3/*: any*/),
            "concreteType": "ProductConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ProductEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Product",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "productID",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "rentalPricePerDayText",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "promotionalPriceText",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "displayImage",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Image",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "secureUrl",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "search",
            "args": (v3/*: any*/),
            "handle": "connection",
            "key": "CategorySearchResultsList_search",
            "filters": []
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CategorySearchResultsListQuery",
    "id": null,
    "text": "query CategorySearchResultsListQuery(\n  $categoryID: Int!\n  $q: String!\n) {\n  viewer {\n    ...CategorySearchResultsList_viewer_8qv4T\n    id\n  }\n}\n\nfragment CategoryProductItem_product on Product {\n  id\n  productID\n  name\n  rentalPricePerDayText\n  promotionalPriceText\n  displayImage {\n    id\n    secureUrl\n  }\n}\n\nfragment CategorySearchResultsList_viewer_8qv4T on Viewer {\n  search(first: 20, categoryID: $categoryID, q: $q) {\n    edges {\n      cursor\n      node {\n        id\n        ...CategoryProductItem_product\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ba15fc0ff6b549afcb657cc0dc2178d2';
module.exports = node;
