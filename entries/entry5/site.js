let imageList = ['pizza1', 'pizza2', 'pizza3', 'pizza4', 'pizza5', 'pizza6', 'pizza7', 'pizza8', 'pizza9'];

let pizzaImage = document.getElementById('image');

let listPosition = 0;

function progressImage(){

 listPosition++;
 pizzaImage.src = `./imgs/${imageList[listPosition]}.jpg`;
 console.log('pizzaImage.src = ', pizzaImage.src);
 if (listPosition === 8) {
    listPosition = 0;
 }
}

pizzaImage.addEventListener('click', () => {
    progressImage();
} )
