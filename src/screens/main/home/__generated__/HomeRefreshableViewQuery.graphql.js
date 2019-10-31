/**
 * @flow
 * @relayHash 7226439de7fa7a3bda784c3c494548f8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomeRefreshableView_viewer$ref = any;
export type HomeRefreshableViewQueryVariables = {||};
export type HomeRefreshableViewQueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +isAuthenticated: ?boolean,
    +$fragmentRefs: HomeRefreshableView_viewer$ref,
  |}
|};
export type HomeRefreshableViewQuery = {|
  variables: HomeRefreshableViewQueryVariables,
  response: HomeRefreshableViewQueryResponse,
|};
*/


/*
query HomeRefreshableViewQuery {
  viewer {
    id
    isAuthenticated
    ...HomeRefreshableView_viewer
  }
}

fragment Categories_categories on Category {
  id
  categoryID
  name
  backgroundColor
  icon
}

fragment FeaturedProductItem_product on Product {
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

fragment FeaturedProductsList_products on Product {
  id
  ...FeaturedProductItem_product
}

fragment HomeRefreshableView_viewer on Viewer {
  ...HomeView_viewer
}

fragment HomeView_viewer on Viewer {
  id
  isAuthenticated
  categories {
    ...Categories_categories
    id
  }
  promotionalProducts {
    id
    ...PromotionalProductsList_products
  }
  featuredProducts {
    id
    ...FeaturedProductsList_products
  }
}

fragment PromotionalProductItem_product on Product {
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

fragment PromotionalProductsList_products on Product {
  id
  ...PromotionalProductItem_product
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
v3 = [
  (v0/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "productID",
    "args": null,
    "storageKey": null
  },
  (v2/*: any*/),
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
      (v0/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "secureUrl",
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
    "name": "HomeRefreshableViewQuery",
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
            "name": "HomeRefreshableView_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeRefreshableViewQuery",
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
            "name": "categories",
            "storageKey": null,
            "args": null,
            "concreteType": "Category",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "categoryID",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "backgroundColor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "icon",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "promotionalProducts",
            "storageKey": null,
            "args": null,
            "concreteType": "Product",
            "plural": true,
            "selections": (v3/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "featuredProducts",
            "storageKey": null,
            "args": null,
            "concreteType": "Product",
            "plural": true,
            "selections": (v3/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeRefreshableViewQuery",
    "id": null,
    "text": "query HomeRefreshableViewQuery {\n  viewer {\n    id\n    isAuthenticated\n    ...HomeRefreshableView_viewer\n  }\n}\n\nfragment Categories_categories on Category {\n  id\n  categoryID\n  name\n  backgroundColor\n  icon\n}\n\nfragment FeaturedProductItem_product on Product {\n  id\n  productID\n  name\n  rentalPricePerDayText\n  promotionalPriceText\n  displayImage {\n    id\n    secureUrl\n  }\n}\n\nfragment FeaturedProductsList_products on Product {\n  id\n  ...FeaturedProductItem_product\n}\n\nfragment HomeRefreshableView_viewer on Viewer {\n  ...HomeView_viewer\n}\n\nfragment HomeView_viewer on Viewer {\n  id\n  isAuthenticated\n  categories {\n    ...Categories_categories\n    id\n  }\n  promotionalProducts {\n    id\n    ...PromotionalProductsList_products\n  }\n  featuredProducts {\n    id\n    ...FeaturedProductsList_products\n  }\n}\n\nfragment PromotionalProductItem_product on Product {\n  id\n  productID\n  name\n  rentalPricePerDayText\n  promotionalPriceText\n  displayImage {\n    id\n    secureUrl\n  }\n}\n\nfragment PromotionalProductsList_products on Product {\n  id\n  ...PromotionalProductItem_product\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cd25fa26ff1614c9cda91c1ef9f29d83';
module.exports = node;
