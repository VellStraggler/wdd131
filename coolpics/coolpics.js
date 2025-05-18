// const image = document.getElementById("image");
// apply clickability to all images
const images = document.querySelectorAll(".images");
const dialogbox = document.getElementById("dialogbox");
images.forEach((image) => {
    image.onclick = function() {
        dialogbox.style.display = "flex";
    }
}); 

// image.onclick = function() {
//     dialogbox.style.display = "flex";
// }
dialogbox.onclick = function(event) {
    if (dialogbox.style.display === "flex") {
        dialogbox.style.display = "none";
    }
}