export default store => next => action => {
    switch (action.type) {
        case 'DOUBAN_BOOK_SEARCH_SUCCESS':
            // TODO: can be fixed in normalizr?
            action.response.result = action.response.result.books;
            break;
        default:
            break;
    }
    next(action);
};
