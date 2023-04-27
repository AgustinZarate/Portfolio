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

