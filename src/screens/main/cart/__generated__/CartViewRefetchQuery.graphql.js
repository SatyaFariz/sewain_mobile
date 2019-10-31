/**
 * @flow
 * @relayHash 68b2aa7361df0524dd2a6c569a55e4bd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CartView_viewer$ref = any;
export type CartViewRefetchQueryVariables = {||};
export type CartViewRefetchQueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +isAuthenticated: ?boolean,
    +$fragmentRefs: CartView_viewer$ref,
  |}
|};
export type CartViewRefetchQuery = {|
  variables: CartViewRefetchQueryVariables,
  response: CartViewRefetchQueryResponse,
|};
*/


/*
query CartViewRefetchQuery {
  viewer {
    id
    isAuthenticated
    ...CartView_viewer
  }
}

fragment CartView_viewer on Viewer {
  id
  cart {
    ...CartedProductsList_products
    id
  }
  leasedProducts {
    ...LeasedProductsList_products
    id
  }
}

fragment CartedProductItem_product on CartedProduct {
  id
  cartedProductID
  name
  quantity
  totalDays
  totalPriceText
  rentalDatesText
  displayImage {
    id
    secureUrl
  }
}

fragment CartedProductsList_products on CartedProduct {
  id
  ...CartedProductItem_product
}

fragment LeasedProductItem_product on LeasedProduct {
  id
  name
  quantity
  totalDays
  rentalDatesText
  isDueToday
  totalDaysOverdue
  returnDate
  displayImage {
    id
    secureUrl
  }
}

fragment LeasedProductsList_products on LeasedProduct {
  id
  ...LeasedProductItem_product
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isAuthenticated",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "quantity",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "totalDays",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rentalDatesText",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "displayImage",
  "storageKey": null,
  "args": null,
  "concreteType": "Image",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "secureUrl",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CartViewRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "CartView_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CartViewRefetchQuery",
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cart",
            "storageKey": null,
            "args": null,
            "concreteType": "CartedProduct",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cartedProductID",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "totalPriceText",
                "args": null,
                "storageKey": null
              },
              (v5/*: any*/),
              (v6/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "leasedProducts",
            "storageKey": null,
            "args": null,
            "concreteType": "LeasedProduct",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isDueToday",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "totalDaysOverdue",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "returnDate",
                "args": null,
                "storageKey": null
              },
              (v6/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CartViewRefetchQuery",
    "id": null,
    "text": "query CartViewRefetchQuery {\n  viewer {\n    id\n    isAuthenticated\n    ...CartView_viewer\n  }\n}\n\nfragment CartView_viewer on Viewer {\n  id\n  cart {\n    ...CartedProductsList_products\n    id\n  }\n  leasedProducts {\n    ...LeasedProductsList_products\n    id\n  }\n}\n\nfragment CartedProductItem_product on CartedProduct {\n  id\n  cartedProductID\n  name\n  quantity\n  totalDays\n  totalPriceText\n  rentalDatesText\n  displayImage {\n    id\n    secureUrl\n  }\n}\n\nfragment CartedProductsList_products on CartedProduct {\n  id\n  ...CartedProductItem_product\n}\n\nfragment LeasedProductItem_product on LeasedProduct {\n  id\n  name\n  quantity\n  totalDays\n  rentalDatesText\n  isDueToday\n  totalDaysOverdue\n  returnDate\n  displayImage {\n    id\n    secureUrl\n  }\n}\n\nfragment LeasedProductsList_products on LeasedProduct {\n  id\n  ...LeasedProductItem_product\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '511d5ca23069aac1e4aec5fbf4fd85e6';
module.exports = node;
