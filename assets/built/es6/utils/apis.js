import callApi from './callApi';
import ApiRoots from 'constants/ApiRoots';
export function addCollection(data) {
    return callApi(`${ApiRoots.LOCAL}collections`, { method: 'POST', data: data });
}
/**
 * data: name, author, description, cover, content
 */
export function addBook(data) {
    return callApi(`${ApiRoots.LOCAL}books`, { method: 'POST', data: data });
}
/**
 * data: name, slug, description
 */
export function addAuthor(data) {
    return callApi(`${ApiRoots.LOCAL}authors`, { method: 'POST', data: data });
}
export function searchAuthors(query) {
    return callApi(`${ApiRoots.LOCAL}authors?q=${query}`);
}
export function searchBooks(query) {
    return callApi(`${ApiRoots.LOCAL}books?q=${query}`);
}
/**
 * data: pageNo, pageSum, percentage
 */
export function setProgress(bookId, data) {
    callApi(`${ApiRoots.LOCAL}books/${bookId}/progress`, { method: 'POST', data });
}
export default {
    addCollection,
    addBook,
    addAuthor,
    searchBooks,
    searchAuthors,
    setProgress
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvdXRpbHMvYXBpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxPQUFPLE1BQU0sV0FBVztPQUN4QixRQUFRLE1BQU0sb0JBQW9CO0FBR3pDLDhCQUE4QixJQUk3QjtJQUNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQ2hGLENBQUM7QUFFRDs7R0FFRztBQUNILHdCQUF3QixJQUFJO0lBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQzFFLENBQUM7QUFFRDs7R0FFRztBQUNILDBCQUEwQixJQUFJO0lBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQzVFLENBQUM7QUFFRCw4QkFBOEIsS0FBSztJQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssYUFBYSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0FBQ3ZELENBQUM7QUFFRCw0QkFBNEIsS0FBSztJQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssV0FBVyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0FBQ3JELENBQUM7QUFFRDs7R0FFRztBQUNILDRCQUE0QixNQUFNLEVBQUUsSUFBSTtJQUN0QyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxTQUFTLE1BQU0sV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQ2hGLENBQUM7QUFFRCxlQUFlO0lBQ2IsYUFBYTtJQUNiLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0NBQ1osQ0FBQSJ9