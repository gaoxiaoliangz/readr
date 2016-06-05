import callApi from './callApi';
import ApiRoots from 'constants/ApiRoots';
/**
 * data: name, items, description
 */
export function addCollection(data) {
    return callApi({ fullUrl: `${ApiRoots.LOCAL}collections`, method: 'POST', data: data });
}
/**
 * data: name, author, description, cover, content
 */
export function addBook(data) {
    return callApi({ fullUrl: `${ApiRoots.LOCAL}books`, method: 'POST', data: data });
}
/**
 * data: name, slug, description
 */
export function addAuthor(data) {
    return callApi({ fullUrl: `${ApiRoots.LOCAL}authors`, method: 'POST', data: data });
}
export function searchAuthors(query) {
    return callApi({ fullUrl: `${ApiRoots.LOCAL}authors?q=${query}` });
}
export function searchBooks(query) {
    return callApi({ fullUrl: `${ApiRoots.LOCAL}books?q=${query}` });
}
/**
 * data: pageNo, pageSum, percentage
 */
export function setProgress(bookId, data) {
    callApi({ fullUrl: `${ApiRoots.LOCAL}books/${bookId}/progress`, method: 'POST', data });
}
export default {
    addCollection,
    addBook,
    addAuthor,
    searchBooks,
    searchAuthors,
    setProgress
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvdXRpbHMvYXBpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxPQUFPLE1BQU0sV0FBVztPQUN4QixRQUFRLE1BQU0sb0JBQW9CO0FBR3pDOztHQUVHO0FBQ0gsOEJBQThCLElBQUk7SUFDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQ3pGLENBQUM7QUFFRDs7R0FFRztBQUNILHdCQUF3QixJQUFJO0lBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUNuRixDQUFDO0FBRUQ7O0dBRUc7QUFDSCwwQkFBMEIsSUFBSTtJQUM1QixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7QUFDckYsQ0FBQztBQUVELDhCQUE4QixLQUFLO0lBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxhQUFhLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtBQUNwRSxDQUFDO0FBRUQsNEJBQTRCLEtBQUs7SUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLFdBQVcsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0FBQ2xFLENBQUM7QUFFRDs7R0FFRztBQUNILDRCQUE0QixNQUFNLEVBQUUsSUFBSTtJQUN0QyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxTQUFTLE1BQU0sV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUN6RixDQUFDO0FBRUQsZUFBZTtJQUNiLGFBQWE7SUFDYixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztDQUNaLENBQUEifQ==