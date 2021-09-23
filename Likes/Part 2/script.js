var element = [document.querySelector('#one'), document.querySelector('#two'), document.querySelector('#three')];
var sim = [parseInt(element[0].innerHTML), parseInt(element[1].innerHTML), parseInt(element[2].innerHTML)];
function incrLikes(id) {
  sim[id]++;
  element[id].innerHTML = sim[id] + " like(s)";

}



