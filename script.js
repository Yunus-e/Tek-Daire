document.addEventListener("DOMContentLoaded", function() {
    const movingCircle = document.getElementById("moving-circle");
    let currentPosition = 0;
    const positions = [
        { top: 0, left: 0 },
        { top: "calc(100% - 100px)", left: 0 },
        { top: "calc(100% - 100px)", left: "calc(100% - 100px)" },
        { top: 0, left: "calc(100% - 100px)" },
        { top: "calc(50% - 50px)", left: "calc(50% - 50px)" }
    ];

    function moveCircle() {
        if (currentPosition < positions.length - 1) {
            currentPosition++;
            movingCircle.style.top = positions[currentPosition].top;
            movingCircle.style.left = positions[currentPosition].left;
        } else {
            currentPosition = 0;
            movingCircle.style.top = positions[currentPosition].top;
            movingCircle.style.left = positions[currentPosition].left;
        }
    }

    movingCircle.addEventListener("click", moveCircle);
});
