// Random image selection
(function() {
  const images = [
    { src: 'rescatanimal-cat.svg', alt: 'Illustrated orange cat with a heart' },
    { src: 'rescatanimal-dog.svg', alt: 'Illustrated dog with a heart' }
  ];
  
  const selectedImage = images[Math.floor(Math.random() * images.length)];
  const imgElement = document.getElementById('animal-image');
  
  if (imgElement) {
    imgElement.src = selectedImage.src;
    imgElement.alt = selectedImage.alt;
  }
})();
