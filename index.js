// get elements
const imageContainer = document.querySelector('#image-container');
const loader = document.querySelector('#loader');

let photosArray = [];

//UNSPLASH API
const count = 10;
const apiKey = 'LqvfckTHYhFoLUsIfuN3pTCtKJsvNxGm2HLwN2o0zf4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count} `;


//Create elements for links and photos and add to DOM

function displayPhotos(){
    photosArray.forEach((photo) =>{
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        //create img tag
        const img = document.createElement('img');

        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        // put img and a tag inside a contianer
        item.appendChild(img)
        imageContainer.appendChild(item);

    })
}
//get photos
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json()
        displayPhotos();

        
    } catch (error) {
        
    }
}
getPhotos()
