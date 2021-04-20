let pixels = document.body.clientWidth;
let editorImage = document.querySelector('.editorIMG');
let laptopImage = document.querySelector('.laptopIMG');


if(pixels >= 976){
    editorImage.src = 'images/illustration-editor-desktop.svg';
    laptopImage.src = 'images/illustration-laptop-desktop.svg';
    console.log('working')
}

if(pixels < 976){
    editorImage.src = 'images/illustration-editor-mobile.svg';
    laptopImage.src = 'images/illustration-laptop-mobile.svg';
}

window.addEventListener('resize', () => {
    console.log('resized')
    pixels = document.body.clientWidth;
    if(pixels >= 976){
        editorImage.src = 'images/illustration-editor-desktop.svg';
        laptopImage.src = 'images/illustration-laptop-desktop.svg';
        console.log('working')
    }
    
    if(pixels < 976){
        editorImage.src = 'images/illustration-editor-mobile.svg';
        laptopImage.src = 'images/illustration-laptop-mobile.svg';
    }
})
