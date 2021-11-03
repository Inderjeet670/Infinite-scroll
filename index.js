// get elements
const imageContainer = document.querySelector('#image-container');
const loader = document.querySelector('#loader');

let photosArray = [];

//UNSPLASH API
const count = 10;
const apiKey = 'LqvfckTHYhFoLUsIfuN3pTCtKJsvNxGm2HLwN2o0zf4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count} `;

//set attribute function

function setAttributes(element, attributes) {
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }
  
  function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
      const item = document.createElement('a');
      setAttributes(item, {
        href: photo.links.html,
        target: '_blank',
      });
      // Create img tag for photo
      const img = document.createElement('img');
      setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description
      });
      item.appendChild(img);
      imageContainer.appendChild(item);
    });

    loader.hidden = true;
  }
  
  
  // Get photos from Unsplash API
  async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      displayPhotos();
    } catch (error) {
      // Catch Error Here
    }
  }
  
  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
      getPhotos();
      
    }
  });
  
  // On Load
  getPhotos();
