const cursorOrigin = 28;
const cursorWidth = 68;
const cursorOffset = cursorOrigin + cursorWidth / 2;
const maxPosition = 1417;
const smallUnit = maxPosition / 50;
const containerSize = 1562;
let mouseIsDown = false;
const width = 600;
const subdivisions = 50;
const rangeMax = 10;

$(document).ready(() => {
    const cursor = document.getElementById("cursor");
    setSlider(0);

    const trackbar = document.getElementById("trackbar");
    trackbar.addEventListener("pointerdown", function(e) {
        e.target.setPointerCapture(e.pointerId);
        mouseIsDown = true;
    });
    
    trackbar.addEventListener("pointermove", function(e) {
        if (mouseIsDown) {
            const progress = Math.max(0, Math.min(1, Math.round((e.offsetX - cursorOrigin) / (width - 2 * cursorOrigin) * subdivisions) / subdivisions));
            setSlider(progress);
        }
    });
    
    trackbar.addEventListener("pointerup", function(e) {
        e.target.releasePointerCapture(e.pointerId);
        mouseIsDown = false;
    });
    
    level = document.getElementById("level");
    level.addEventListener("change", function(e) {
        if (!mouseIsDown) {
            progress = Math.round(Math.max(0, Math.min(rangeMax, Number(level.value))) / rangeMax * subdivisions) / subdivisions; 
            setSlider(progress);
        }
    });

    function setSlider(progress) {
        viewportPositionX = progress * maxPosition;

        level.value = (progress * rangeMax).toFixed(1);
        cursor.style.transform = "translate(" + viewportPositionX + 'px, 0px)';
        level.style.color =   "rgb(" + progress * 255 + ",0 ,0)";
        cursor.style.fill =   "rgb(" + progress * 255 + ",0 ,0)";
        cursor.style.stroke = "rgb(" + (255 - progress * 255) + ",0 ,0)";
    }
});
