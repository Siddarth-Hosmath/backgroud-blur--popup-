const Qs = (Q)=>{
    return document.querySelector(Q);
}

const containerEle = document.querySelector(".container");
const btnEle = document.querySelector(".btn");
const closeBtnEle = document.querySelector(".close-icon");
const popupContainerEle = document.querySelector(".popup-container");


// const containerEle = Qs(".container");
// const btnEle = Qs(".btn");
// const closeBtnEle = Qs(".close-icon");
// const popupContainerEle = Qs(".popup-container")

// console.log(containerEle);

btnEle.addEventListener('click',()=>{
    containerEle.classList.add("active");
    popupContainerEle.classList.remove("active");
});

closeBtnEle.addEventListener("click",()=>{
    containerEle.classList.remove("active");
    popupContainerEle.classList.add("active");
});
