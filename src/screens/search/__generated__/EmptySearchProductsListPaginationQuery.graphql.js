/**
 * @flow
 * @relayHash 8ef0793234861ba0f5c60633b040d793
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EmptySearchProductsList_viewer$ref = any;
export type EmptySearchProductsListPaginationQueryVariables = {|
  first?: ?number,
  after?: ?string,
|};
export type EmptySearchProductsListPaginationQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: EmptySearchProductsList_viewer$ref
  |}
|};
export type EmptySearchProductsListPaginationQuery = {|
  variables: EmptySearchProductsListPaginationQueryVariables,
  response: EmptySearchProductsListPaginationQueryResponse,
|};
*/


/*
query EmptySearchProductsListPaginationQuery(
  $first: Int
  $after: String
) {
  viewer {
    ...EmptySearchProductsList_viewer_2HEEH6
    id
  }
}

fragment EmptySearchProductsList_viewer_2HEEH6 on Viewer {
  products(first: $first, after: $after) {
    edges {
      cursor
      node {
        id
        productID
        ...ResultItem_product
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment ResultItem_product on Product {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
],
v2 = {
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
    "name": "EmptySearchProductsListPaginationQuery",
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
            "name": "EmptySearchProductsList_viewer",
            "args": (v1/*: any*/)
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EmptySearchProductsListPaginationQuery",
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
            "name": "products",
            "storageKey": null,
            "args": (v1/*: any*/),
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
                      (v2/*: any*/),
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
                          (v2/*: any*/),
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
            "name": "products",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "EmptySearchProductsList_products",
            "filters": []
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "EmptySearchProductsListPaginationQuery",
    "id": null,
    "text": "query EmptySearchProductsListPaginationQuery(\n  $first: Int\n  $after: String\n) {\n  viewer {\n    ...EmptySearchProductsList_viewer_2HEEH6\n    id\n  }\n}\n\nfragment EmptySearchProductsList_viewer_2HEEH6 on Viewer {\n  products(first: $first, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        productID\n        ...ResultItem_product\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment ResultItem_product on Product {\n  id\n  productID\n  name\n  rentalPricePerDayText\n  promotionalPriceText\n  displayImage {\n    id\n    secureUrl\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b490beb86c10156ade28c922232f4eab';
module.exports = node;
