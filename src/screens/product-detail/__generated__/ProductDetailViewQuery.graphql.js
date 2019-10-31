/**
 * @flow
 * @relayHash 8d0b5c1543395add359e0500e88752bb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductDetailView_product$ref = any;
export type ProductDetailViewQueryVariables = {|
  productID: number
|};
export type ProductDetailViewQueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +product: ?{|
      +id: ?string,
      +$fragmentRefs: ProductDetailView_product$ref,
    |},
  |}
|};
export type ProductDetailViewQuery = {|
  variables: ProductDetailViewQueryVariables,
  response: ProductDetailViewQueryResponse,
|};
*/


/*
query ProductDetailViewQuery(
  $productID: Int!
) {
  viewer {
    id
    product(productID: $productID) {
      id
      ...ProductDetailView_product
    }
  }
}

fragment Attributes_attributes on Attribute {
  name
  value
}

fragment Description_product on Product {
  id
  description
}

fragment Images_images on Image {
  id
  secureUrl
}

fragment Price_product on Product {
  id
  rentalPricePerDayText
  promotionalPriceText
  estimatedBuyPriceText
}

fragment ProductDetailView_product on Product {
  id
  ...Title_product
  ...Price_product
  ...Description_product
  ...SameCategoryProductsList_product
  attributes {
    ...Attributes_attributes
  }
  allImages {
    ...Images_images
    id
  }
  relatedProducts {
    ...RelatedProductsList_products
    id
  }
}

fragment RelatedProductItem_product on Product {
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

fragment RelatedProductsList_products on Product {
  id
  ...RelatedProductItem_product
}

fragment SameCategoryProductItem_product on Product {
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

fragment SameCategoryProductsList_product on Product {
  id
  category {
    name
    id
  }
  sameCategoryProducts {
    ...SameCategoryProductItem_product
    id
  }
}

fragment Title_product on Product {
  id
  name
  availableItems
  category {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "productID",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "productID",
    "variableName": "productID"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rentalPricePerDayText",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "promotionalPriceText",
  "args": null,
  "storageKey": null
},
v6 = [
  (v1/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "secureUrl",
    "args": null,
    "storageKey": null
  }
],
v7 = [
  (v1/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "productID",
    "args": null,
    "storageKey": null
  },
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "displayImage",
    "storageKey": null,
    "args": null,
    "concreteType": "Image",
    "plural": false,
    "selections": (v6/*: any*/)
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProductDetailViewQuery",
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
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "product",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "Product",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "ProductDetailView_product",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductDetailViewQuery",
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
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "product",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "Product",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v3/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "availableItems",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "category",
                "storageKey": null,
                "args": null,
                "concreteType": "Category",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v3/*: any*/)
                ]
              },
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "estimatedBuyPriceText",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sameCategoryProducts",
                "storageKey": null,
                "args": null,
                "concreteType": "Product",
                "plural": true,
                "selections": (v7/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "attributes",
                "storageKey": null,
                "args": null,
                "concreteType": "Attribute",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "value",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "allImages",
                "storageKey": null,
                "args": null,
                "concreteType": "Image",
                "plural": true,
                "selections": (v6/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "relatedProducts",
                "storageKey": null,
                "args": null,
                "concreteType": "Product",
                "plural": true,
                "selections": (v7/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProductDetailViewQuery",
    "id": null,
    "text": "query ProductDetailViewQuery(\n  $productID: Int!\n) {\n  viewer {\n    id\n    product(productID: $productID) {\n      id\n      ...ProductDetailView_product\n    }\n  }\n}\n\nfragment Attributes_attributes on Attribute {\n  name\n  value\n}\n\nfragment Description_product on Product {\n  id\n  description\n}\n\nfragment Images_images on Image {\n  id\n  secureUrl\n}\n\nfragment Price_product on Product {\n  id\n  rentalPricePerDayText\n  promotionalPriceText\n  estimatedBuyPriceText\n}\n\nfragment ProductDetailView_product on Product {\n  id\n  ...Title_product\n  ...Price_product\n  ...Description_product\n  ...SameCategoryProductsList_product\n  attributes {\n    ...Attributes_attributes\n  }\n  allImages {\n    ...Images_images\n    id\n  }\n  relatedProducts {\n    ...RelatedProductsList_products\n    id\n  }\n}\n\nfragment RelatedProductItem_product on Product {\n  id\n  productID\n  name\n  rentalPricePerDayText\n  promotionalPriceText\n  displayImage {\n    id\n    secureUrl\n  }\n}\n\nfragment RelatedProductsList_products on Product {\n  id\n  ...RelatedProductItem_product\n}\n\nfragment SameCategoryProductItem_product on Product {\n  id\n  productID\n  name\n  rentalPricePerDayText\n  promotionalPriceText\n  displayImage {\n    id\n    secureUrl\n  }\n}\n\nfragment SameCategoryProductsList_product on Product {\n  id\n  category {\n    name\n    id\n  }\n  sameCategoryProducts {\n    ...SameCategoryProductItem_product\n    id\n  }\n}\n\nfragment Title_product on Product {\n  id\n  name\n  availableItems\n  category {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '10663cc530a0d39c870ee7cfe2fbf994';
module.exports = node;
