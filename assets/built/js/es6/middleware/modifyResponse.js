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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5UmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb3JlL2Zyb250ZW5kL21pZGRsZXdhcmUvbW9kaWZ5UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxLQUFLLElBQUksSUFBSSxJQUFJLE1BQU07SUFFcEMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyw0QkFBNEI7WUFDL0IsbUNBQW1DO1lBQ25DLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtZQUNyRCxLQUFLLENBQUE7UUFDUDtZQUNFLEtBQUssQ0FBQTtJQUNULENBQUM7SUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDZCxDQUFDLENBQUEifQ==