let list = document.querySelectorAll('.nav li');

const active = (element) => {
  list.forEach((i) =>
    i.classList.remove('active')
  );
  element.classList.add('active');
}

list.forEach((i) => {
  i.addEventListener('click', () => {
    active(i);
  });
});

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.addEventListener('click', function() {
  header.classList.toggle('active');
});