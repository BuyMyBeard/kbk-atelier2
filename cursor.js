const cursorOrigin = 36;
const cursorWidth = 68;
const cursorOffset = cursorOrigin + cursorWidth / 2;
const maxPosition = 1417;
const smallUnit = maxPosition / 50;

function extractViewBoxWidth(svg) {
    return parseInt(svg.getAttribute("viewBox").split(" ")[2]);
}

$(document).ready(() => {
    const containerWidth = document.getElementById("trackbar").getBoundingClientRect().width
    const cursor = document.getElementById("cursor");
    let viewportPositionX = 0;
    cursor.style.transform = "translate(" + viewportPositionX + 'px, 0px)';
    
    const levelValue = positionx / smallUnit * 0.2;
    level.value = formatDecimal(levelValue, 1);
    level.style.color =   "rgb(" + levelValue / 10 * 255 + ",0 ,0)";
    cursor.style.fill =   "rgb(" + levelValue / 10 * 255 + ",0 ,0)";
    cursor.style.stroke = "rgb(" + (255 - levelValue / 10 * 255) + ",0 ,0)";

    
    const trackbar = document.getElementById("trackbar");
    trackbar.addEventListener("pointerdown", function(e) {
        e.target.setPointerCapture(e.pointerId);
        //TODO:
        mouseIsDown = true;
    });
    
    trackbar.addEventListener("pointermove", function(e) {
        if (mouseIsDown) {
         //TODO:
        }
    });
    
    trackbar.addEventListener("pointerup", function(e) {
        e.target.releasePointerCapture(e.pointerId);
        mouseIsDown = false;
    });
    
    level = document.getElementById("level");
    level.addEventListener("change", function(e) {
        if (!mouseIsDown) {
        //TODO:
        }
    });
});
