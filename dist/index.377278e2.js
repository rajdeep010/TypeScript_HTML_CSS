const buttonElem = document.querySelector(".clickme");
const bodyElem = document.body;
let isWhite = false;
buttonElem.addEventListener("click", ()=>{
    if (isWhite) bodyElem.style.backgroundColor = "white";
    else bodyElem.style.backgroundColor = "#cedebd";
    isWhite = !isWhite;
}) // console.log('TypeScript is running')
;

//# sourceMappingURL=index.377278e2.js.map
