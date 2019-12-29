const refsLib = {
    myLib: document.querySelector('.library-btn')
}

console.log(refsLib.myLib)

function renderMyLib(){
    parseData(selectedToWatchFilms);
}

refsLib.myLib.addEventListener('click', renderMyLib)