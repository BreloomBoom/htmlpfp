let modal = document.getElementById("myModal");
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let span = document.getElementsByClassName("close")[0];

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

span.onclick = function() {
  modal.style.display = "none";
}