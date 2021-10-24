function* makeShuffleGenerator(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    yield array[i][0];
    yield array[i][1];
  }
  return;
}

const w = makeShuffleGenerator(words);
let we = document.getElementById("word");
we.textContent = w.next().value;
we.onclick = function () {
  we.textContent = w.next().value;
};
