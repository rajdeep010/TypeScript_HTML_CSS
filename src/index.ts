
const buttonElem = document.querySelector('.clickme') as HTMLButtonElement;
const bodyElem = document.body;
let isWhite = false;


buttonElem.addEventListener('click', () => {
    if(isWhite){
        bodyElem.style.backgroundColor = 'white'
    }else{
        bodyElem.style.backgroundColor = '#cedebd'
    }
    isWhite = !isWhite
})

// console.log('TypeScript is running')