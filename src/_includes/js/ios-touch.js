// HTML collections for direct link heading/anchor pairs
let headingList = document.getElementsByClassName("direct-link");

// Iterate over the HTML collection and apply the direct link color change on touchstart event (iOS, safari, iphone)

function touchStart() {
    Array.prototype.forEach.call(headingList, (heading) => {
        var links = heading.childNodes[1];
        links.style.color = "#444 !important";
    });
};

function touchLeave() {
    Array.prototype.forEach.call(headingList, (heading) => {
        var links = heading.childNodes[1];
        links.style.color = "transparent !important";
    });
}

Array.prototype.forEach.call(headingList, (heading) => {
    
    // Handling iOS/iPhone :hover for touch event 
    heading.addEventListener("touchstart", touchStart, false);
    
    // fixes :hover issue on iPhone/safari for direct links in article (scroll each heading to toggle the link)
    heading.addEventListener("touchmove", touchLeave, false);
    heading.addEventListener("touchend", touchLeave, false);
});