// script.js
const buttonContainer = document.getElementById('buttonContainer');


function changeImageOnHover() {
    
    const randomPercentage = Math.random() * 100;
    const shouldShowCat = randomPercentage <= 10;

    if (shouldShowCat) {
        buttonContainer.style.backgroundImage = "url('images/dog_simple.png')";
    } else {
        buttonContainer.style.backgroundImage = "url('images/dog_color.png')";
    }
}



buttonContainer.addEventListener('mouseover', () => {
    moveButton();
    changeImageOnHover();
});



function moveButton() {
    const newX = Math.random() * (window.innerWidth - buttonContainer.clientWidth);
    const newY = Math.random() * (window.innerHeight - buttonContainer.clientHeight);

    buttonContainer.style.left = newX + 'px';
    buttonContainer.style.top = newY + 'px';
}



changeImageOnHover();