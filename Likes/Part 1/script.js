var likes = document.querySelector('#likes');

function incrLikes() {
  var element = document.querySelector(".top_right p");
  var incr = parseInt(element.innerHTML);
  element.innerHTML = incr + 1 + " like(s)";
}