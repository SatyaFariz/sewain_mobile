/**
 * @flow
 * @relayHash 275c25f62621f0531a161a23d271fb9b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CartView_viewer$ref = any;
export type CartViewQueryVariables = {||};
export type CartViewQueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +isAuthenticated: ?boolean,
    +$fragmentRefs: CartView_viewer$ref,
  |}
|};
export type CartViewQuery = {|
  variables: CartViewQueryVariables,
  response: CartViewQueryResponse,
|};
*/


/*
query CartViewQuery {
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
    "name": "CartViewQuery",
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
    "name": "CartViewQuery",
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
    "name": "CartViewQuery",
    "id": null,
    "text": "query CartViewQuery {\n  viewer {\n    id\n    isAuthenticated\n    ...CartView_viewer\n  }\n}\n\nfragment CartView_viewer on Viewer {\n  id\n  cart {\n    ...CartedProductsList_products\n    id\n  }\n  leasedProducts {\n    ...LeasedProductsList_products\n    id\n  }\n}\n\nfragment CartedProductItem_product on CartedProduct {\n  id\n  cartedProductID\n  name\n  quantity\n  totalDays\n  totalPriceText\n  rentalDatesText\n  displayImage {\n    id\n    secureUrl\n  }\n}\n\nfragment CartedProductsList_products on CartedProduct {\n  id\n  ...CartedProductItem_product\n}\n\nfragment LeasedProductItem_product on LeasedProduct {\n  id\n  name\n  quantity\n  totalDays\n  rentalDatesText\n  isDueToday\n  totalDaysOverdue\n  returnDate\n  displayImage {\n    id\n    secureUrl\n  }\n}\n\nfragment LeasedProductsList_products on LeasedProduct {\n  id\n  ...LeasedProductItem_product\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '962998e557fa01670b50d93439dfa88c';
module.exports = node;
