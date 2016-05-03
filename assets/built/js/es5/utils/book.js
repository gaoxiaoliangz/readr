'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initBook = initBook;

var _utils = require('utils');

var _APIS = require('constants/APIS');

function initBook(bookId, actions, view) {
  var pageHeight = view.pageHeight;
  var pageWidth = view.pageWidth;
  var screen = view.screen;

  actions.setView(view);

  // the part I hate the most, a better approach may be applied
  function htmlToPages(html) {
    var nodes = parseHTML(html);
    var nodeHeights = getNodeHeights('.pages ul>li>.content', actions);
    var pages = groupNodesByPage(nodes, nodeHeights, pageHeight);

    return {
      type: 'pages',
      props: {
        children: pages,
        view: view
      }
    };
  }

  return new Promise(function (resolve, reject) {
    actions.wrap(function (dispatch, getState) {
      var pages = (0, _utils.getCache)('book' + bookId + '_pages');

      // check if pages are cached
      if (pages) {
        pages = JSON.parse(pages);

        // check if page view is the same as cached
        if (!compareObjects(view, pages.props.view)) {
          var i;

          (function () {
            // recaculate page 'cause view is not the same
            // let nodes = pages.props.children.reduce((a, b) => (Array.concat(a, b.props.children)),[])
            var nodes = pages.props.children.reduce(function (a, b) {
              return a.concat(b.props.children);
            }, []);
            var uniqueNodes = [];
            var realIndex = 0;

            // remove duplicate nodes
            for (i = 0; i < nodes.length; i++) {
              nodes[i];
              if (nodes[i].props.index === realIndex) {
                uniqueNodes.push(nodes[i]);
                realIndex++;
              }
            }

            var html = parseNodes(uniqueNodes);

            // loadHTML is not async, but only in this way setBookMode can work
            // still haven't figured out why this happens
            actions.promisedWrap(function (dispatch) {
              actions.loadHTML(html);
            }).then(function (getState) {
              pages = htmlToPages(html);
              actions.loadPages(pages);
              (0, _utils.setCache)('book' + bookId + '_pages', JSON.stringify(pages));

              resolve({ pages: pages });
            });
          })();
        } else {
          actions.loadPages(pages);
          actions.setBookMode('vertical');

          resolve({ pages: pages });
        }
      } else {
        // well, seems not, we have to fetch book content from the server then
        actions.fetchBookContent(bookId, 'books/' + bookId + '/content').then(function (getState) {
          var pages = htmlToPages(getState().book.html);

          actions.loadPages(pages);
          (0, _utils.setCache)('book' + bookId + '_pages', JSON.stringify(pages));

          resolve({ pages: pages });
        }).catch(function (err) {
          console.error(err);

          reject(err);
        });
      }
    });
  });
}
