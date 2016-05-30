export function getBookView() {
    let aspectRatio = 7 / 9;
    if (window.innerWidth <= 540) {
        return {
            screen: 'phone',
            pageWidth: window.innerWidth,
            pageHeight: window.innerWidth / aspectRatio
        };
    }
    else {
        return {
            screen: 'hd',
            pageWidth: 700,
            pageHeight: 700 / aspectRatio
        };
    }
}
export function lockScroll() {
    document.body.style.overflow = 'hidden';
}
export function unlockScroll() {
    document.body.style.overflow = 'visible';
}
export default {
    getBookView,
    lockScroll,
    unlockScroll
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvZnJvbnRlbmQvdXRpbHMvdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNFLElBQUksV0FBVyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUE7SUFFckIsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQztZQUNMLE1BQU0sRUFBRSxPQUFPO1lBQ2YsU0FBUyxFQUFFLE1BQU0sQ0FBQyxVQUFVO1lBQzVCLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVSxHQUFDLFdBQVc7U0FDMUMsQ0FBQTtJQUNILENBQUM7SUFBQSxJQUFJLENBQUEsQ0FBQztRQUNKLE1BQU0sQ0FBQztZQUNMLE1BQU0sRUFBRSxJQUFJO1lBQ1osU0FBUyxFQUFFLEdBQUc7WUFDZCxVQUFVLEVBQUUsR0FBRyxHQUFDLFdBQVc7U0FDNUIsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQ7SUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0FBQ3pDLENBQUM7QUFFRDtJQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUE7QUFDMUMsQ0FBQztBQUVELGVBQWU7SUFDYixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7Q0FDYixDQUFBIn0=