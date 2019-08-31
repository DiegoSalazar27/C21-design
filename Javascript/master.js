var input = document.getElementsByClassName('formInput');

window.addEventListener("load", () => {

    for (var i = 0; i < 2; i++) {
      input[i].addEventListener("input", inputfunction)
    }
});


const inputfunction = function (){
  console.log(this.parentElement.lastElementChild.style);
  if (this.value == "") {
    this.parentElement.lastElementChild.style.transform = "translate(0,0px)";
  }else{
    this.parentElement.lastElementChild.style.transform = "translate(0, -30px)";
  }
}
