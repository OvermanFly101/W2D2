var sim = [0,1,2];
var element = [document.querySelector('#one'), document.querySelector('#two'), document.querySelector('#three')];
function incrLikes(id) {
  sim[id]++;
  element[id].innerHTML = sim[id] + " likes";

}



