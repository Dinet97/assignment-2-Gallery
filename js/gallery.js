// Define an array of objects for each gallery item
var thumbnailList = document.querySelectorAll('ul li img');
var featuredImage = document.querySelector('figure img');
var caption = document.querySelector('figure figcaption');

var galleryItems = [{ title: "Sunflowers in the hamlet Dernekamp", largeImage: "flowers-yellow-large..jpg", smallImage: "flowers-yellow-small.jpg", alt: "Sunflowers in the hamlet Dernekamp" },
    { title: "Poppies in cornfield", largeImage: "flowers-red-large.jpg", smallImage: "flowers-red-small.jpg", alt: "Poppies in cornfield" },
    { title: "Daffodils in Sentmaring park", largeImage: "flowers-white-large.jpg", smallImage: "flowers-white-small.jpg", alt: "Daffodils in Sentmaring park" },
    { title: "Sentmaring Park", largeImage: "flowers-purple-large.jpg", smallImage: "flowers-purple-small.jpg", alt: "Sentmaring Park" },
    { title: "Market in Münster", largeImage: "flowers-pink-large.jpg", smallImage: "flowers-pink-small.jpg", alt: "Market in Münster" }];

thumbnailList.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        var imgSrc = thumbnail.getAttribute('src').replace('-small', '-large');
        var imgAlt = thumbnail.getAttribute('alt');
        var captionText = thumbnail.nextElementSibling;
        featuredImage.setAttribute('src', imgSrc);
        featuredImage.setAttribute('alt', imgAlt);
        caption.textContent = captionText;
    });
});