const timelineOne = document.getElementById("timeline-1");
const contentOne = document.getElementById("timeline-content-1");

timelineOne.addEventListener("click", () => {
    contentOne.classList.toggle("remove");
})