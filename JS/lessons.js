
var nLessons = 21;
var currentLesson = 17;

window.addEventListener("load", function() {
  lessonsCreator();
});

function lessonsCreator () {
  let lesson, inf, title, img, p, span;
  var right = document.getElementById("right");
  var left = document.getElementById("left");
  let l = (nLessons % 2 == 0)? nLessons/2 : parseInt(nLessons/2) + 1;
  let color = [
    "rgb(248, 206, 0)",
    "rgb(237, 112, 41)",
    "rgb(233, 79, 136)",
    "rgb(0, 184, 231)",
    "rgb(0, 123, 191)",
    "rgb(148, 145, 198)",
    "rgb(0, 172, 146)"
  ];
  colorIndex = 0;
  alert (l);
  for (let i = 0 ; i < nLessons; i++) {
    lesson = document.createElement("div");
    inf = document.createElement("div");
    title = document.createElement("div");
    img = document.createElement("div");
    p = document.createElement("p");
    span = document.createElement("span");

    lesson.classList.add("lesson");
    if(i >= currentLesson){
      lesson.classList.add("inactive");
    } 
    if ((i+1) == currentLesson) {
      lesson.classList.add("current");
    }
    inf.classList.add("inf");
    title.classList.add("title");
    img.classList.add("img");

    span.innerHTML = (i < 9)? "0" + (i+1): i+1;
    p.innerHTML = "This is some Lesson! Have fun!";

    inf.appendChild(span);
    inf.appendChild(img);
    title.appendChild(p);

    lesson.appendChild(inf);
    lesson.appendChild(title);

    lesson.style.setProperty("--color", color[colorIndex]);

    if (i < l) {
      left.appendChild(lesson);
    } else {
      right.appendChild(lesson);
    }
    if((i+1) == l)colorIndex = -1;
    if(colorIndex == 6) colorIndex = -1;
    colorIndex++;
  }
}
