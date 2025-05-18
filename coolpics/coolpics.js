// apply clickability to all images
const images = document.querySelectorAll(".images");
const dialogbox = document.getElementById("dialogbox");
const dialogImage = dialogbox.querySelector("img");
images.forEach((image) => {
    image.onclick = function() {
        dialogbox.style.display = "flex";
    }
}); 
dialogbox.onclick = function(event) {
    if (event.target === dialogbox) {
        dialogbox.style.display = "none";
    }
}