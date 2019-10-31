/**
 * @flow
 * @relayHash 994194428f5ec54205c640c33c6d70e3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CategoryProductsList_viewer$ref = any;
export type CategoryProductsListQueryVariables = {|
  categoryID: number
|};
export type CategoryProductsListQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: CategoryProductsList_viewer$ref
  |}
|};
export type CategoryProductsListQuery = {|
  variables: CategoryProductsListQueryVariables,
  response: CategoryProductsListQueryResponse,
|};
*/


/*
query CategoryProductsListQuery(
  $categoryID: Int!
) {
  viewer {
    ...CategoryProductsList_viewer_2XGewc
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

fragment CategoryProductsList_viewer_2XGewc on Viewer {
  products(first: 20, categoryID: $categoryID) {
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
  }
],
v1 = {
  "kind": "Variable",
  "name": "categoryID",
  "variableName": "categoryID"
},
v2 = [
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v3 = {
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
    "name": "CategoryProductsListQuery",
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
            "name": "CategoryProductsList_viewer",
            "args": [
              (v1/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CategoryProductsListQuery",
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
            "args": (v2/*: any*/),
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
                      (v3/*: any*/),
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
                          (v3/*: any*/),
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
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "CategoryProductsList_products",
            "filters": []
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CategoryProductsListQuery",
    "id": null,
    "text": "query CategoryProductsListQuery(\n  $categoryID: Int!\n) {\n  viewer {\n    ...CategoryProductsList_viewer_2XGewc\n    id\n  }\n}\n\nfragment CategoryProductItem_product on Product {\n  id\n  productID\n  name\n  rentalPricePerDayText\n  promotionalPriceText\n  displayImage {\n    id\n    secureUrl\n  }\n}\n\nfragment CategoryProductsList_viewer_2XGewc on Viewer {\n  products(first: 20, categoryID: $categoryID) {\n    edges {\n      cursor\n      node {\n        id\n        ...CategoryProductItem_product\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e438f1ce7a69e08a8ce54a7069509b16';
module.exports = node;
