const image = document.getElementById("image");
const dialogbox = document.getElementById("dialogbox");
image.onclick = function() {
    if (dialogbox.style.display === "flex") {
        dialogbox.style.display = "none";
    } else {
        dialogbox.style.display = "flex";
    }
}
// document.onclick = function(event) {
//     if (dialogbox.style.display === "flex") {
//         dialogbox.style.display = "none";
//     }
// }