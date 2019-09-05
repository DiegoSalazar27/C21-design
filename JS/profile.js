
window.addEventListener("load", function() {
  var pictures = document.getElementsByClassName("pic");
  var l = pictures.length
  var selected = document.getElementById("selectedPic");
  for(var i = 0; i < l; i++) {
    pictures[i].addEventListener("click", selectPic);
  }
  // backgroundPic(pictures, selected);
});


// function backgroundPic (pictures, selected) {
//   let l = pictures.length;
//   let colorIndex, nColors;
//   let color = [
//     "rgb(248, 206, 0)",
//     "rgb(237, 112, 41)",
//     "rgb(233, 79, 136)",
//     "rgb(0, 184, 231)",
//     "rgb(0, 123, 191)",
//     "rgb(148, 145, 198)",
//     "rgb(0, 172, 146)"
//   ];
//   nColors = color.length-1;
//
//   for(var i = 0; i < l; i++) {
//     colorIndex = parseInt(getRandomArbitrary(0, nColors));
//     pictures[i].style.setProperty("background-color", color[colorIndex]);
//   }
//   selected.style.setProperty("background-color", color[parseInt(getRandomArbitrary(0, nColors))]);
// }

function selectPic () {
  document.getElementById("selectedPic").firstElementChild.src = this.firstElementChild.src;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
