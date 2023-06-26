const images = document.getElementsByClassName('input-img');

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function () {
    window.location = "search.html";
  });
}

