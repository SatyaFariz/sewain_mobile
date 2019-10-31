/**
 * @flow
 * @relayHash 42b3a6f73fbf4f489e75c0f959d6f92a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NotificationView_viewer$ref = any;
export type NotificationViewQueryVariables = {||};
export type NotificationViewQueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +isAuthenticated: ?boolean,
    +$fragmentRefs: NotificationView_viewer$ref,
  |}
|};
export type NotificationViewQuery = {|
  variables: NotificationViewQueryVariables,
  response: NotificationViewQueryResponse,
|};
*/


/*
query NotificationViewQuery {
  viewer {
    id
    isAuthenticated
    ...NotificationView_viewer
  }
}

fragment NotificationItem_notification on Notification {
  id
  rowID
  title
  text
  ref
  refID
  mobilePressAction
  url
  date
}

fragment NotificationView_viewer on Viewer {
  id
  ...NotificationsList_viewer
}

fragment NotificationsList_viewer on Viewer {
  notifications(first: 12) {
    edges {
      cursor
      node {
        id
        ...NotificationItem_notification
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
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 12
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NotificationViewQuery",
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
            "name": "NotificationView_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NotificationViewQuery",
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
            "name": "notifications",
            "storageKey": "notifications(first:12)",
            "args": (v2/*: any*/),
            "concreteType": "NotificationConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "NotificationEdge",
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
                    "concreteType": "Notification",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "rowID",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "text",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "ref",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "refID",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "mobilePressAction",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "url",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "date",
                        "args": null,
                        "storageKey": null
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
            "name": "notifications",
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "NotificationsList_notifications",
            "filters": []
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NotificationViewQuery",
    "id": null,
    "text": "query NotificationViewQuery {\n  viewer {\n    id\n    isAuthenticated\n    ...NotificationView_viewer\n  }\n}\n\nfragment NotificationItem_notification on Notification {\n  id\n  rowID\n  title\n  text\n  ref\n  refID\n  mobilePressAction\n  url\n  date\n}\n\nfragment NotificationView_viewer on Viewer {\n  id\n  ...NotificationsList_viewer\n}\n\nfragment NotificationsList_viewer on Viewer {\n  notifications(first: 12) {\n    edges {\n      cursor\n      node {\n        id\n        ...NotificationItem_notification\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '35910ccdd2309fd4593ba4792a0a49d3';
module.exports = node;
