const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const counter = document.querySelector('#counter');
const form = document.querySelector('#comment-form');
const comments = document.querySelector('#list');

let timerId = setInterval(start, 1000);

let going = true;

pause.addEventListener('click', function() {
  if (going) {
    going = false;
    pause.textContent = 'resume';
    stop();
    return;
  } else {
    going = true;
    pause.textContent = 'pause';
    resume();
    return;
  }
})

plus.addEventListener('click', function() {
  let value = +counter.textContent;
  counter.textContent = value += 10;
})

minus.addEventListener('click', function() {
  let value = +counter.textContent;
  counter.textContent = value -= 10;
})

let heartCount = 0;

heart.addEventListener('click', function() {
  if (heartCount === 0) {
    heartCount++;
    const li = document.createElement('li');
    li.classList.add('likeCount')
    li.textContent = `${heartCount} likes!`
    document.querySelector('.likes').append(li);
    return;
  }
  heartCount++;
  const likeCount = document.querySelector('.likeCount');
  likeCount.textContent = `${heartCount} likes!`
})

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.querySelector('#comment-input');
  const p = document.createElement('p')
  p.textContent = input.value;
  comments.append(p);
  input.value = "";
})

function start() {
  let value = +counter.textContent;
  counter.textContent = ++value;
}

function stop() {
  clearInterval(timerId)
}

function resume() {
  timerId = setInterval(start, 1000);
}