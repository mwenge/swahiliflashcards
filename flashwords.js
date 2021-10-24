function* makeShuffleGenerator(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    yield array[i];
  }
  return;
}

const w = makeShuffleGenerator(words);
let ws = document.getElementById("swahili");
let we = document.getElementById("english");
let [swahili, english] = w.next().value;
we.style.visibility = 'hidden';
we.textContent = english;
ws.textContent = swahili;

document.documentElement.onclick = function () {
  if (we.style.visibility == 'hidden') {
    we.style.visibility = 'visible';
    return;
  }
  let [swahili, english] = w.next().value;
  we.style.visibility = 'hidden';
  we.textContent = english;
  ws.textContent = swahili;
};
