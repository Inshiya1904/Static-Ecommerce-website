const mainPage = document.querySelector(".main");
const shopPage = document.querySelector(".shoppage");
const blogPage = document.querySelector(".trend");
const letterPage = document.querySelector(".letter");
const footerPage = document.querySelector(".footer");
const aboutPage = document.querySelector(".aboutUs");
const contactPage = document.querySelector(".contact");

const homeText = document.querySelector(".home");
const shopText = document.querySelector(".shop");
const blogText = document.querySelector(".blogtext");
const aboutText = document.querySelector(".about");
const contactText = document.querySelector(".contacttext");

homeText.addEventListener('click',()=>{

    mainPage.style.display="flex";
    shopPage.style.display="block";
    blogPage.style.display="block";
    contactPage.style.display="none";
    aboutPage.style.display="none";


    homeText.style.color="rgb(3, 190, 190)";
    shopText.style.color="black";
    blogText.style.color="black";
    aboutText.style.color="black";
    contactText.style.color="black";
})

shopText.addEventListener('click',()=>{
    shopPage.style.display="block";
    mainPage.style.display="none";
    blogPage.style.display="none";
    contactPage.style.display="none";
    aboutPage.style.display="none";

    shopText.style.color="rgb(3, 190, 190)";
    homeText.style.color="black";
    blogText.style.color="black";
    aboutText.style.color="black";
    contactText.style.color="black";
})

blogText.addEventListener('click',()=>{
    mainPage.style.display="none";
    shopPage.style.display="none";
    blogPage.style.display="block";
    contactPage.style.display="none";
    aboutPage.style.display="none";

    blogText.style.color="rgb(3, 190, 190)";
    homeText.style.color="black";
    shopText.style.color="black";
    aboutText.style.color="black";
    contactText.style.color="black";
})

aboutText.addEventListener('click',()=>{

    mainPage.style.display="none";
    shopPage.style.display="none";
    blogPage.style.display="none";
    aboutPage.style.display="block";

    homeText.style.color="black";
    shopText.style.color="black";
    blogText.style.color="black";
    aboutText.style.color="rgb(3, 190, 190)";
    contactText.style.color="black";
})

contactText.addEventListener('click',()=>{

    mainPage.style.display="none";
    shopPage.style.display="none";
    blogPage.style.display="none";
    aboutPage.style.display="none";
    contactPage.style.display="block";

    homeText.style.color="black";
    shopText.style.color="black";
    blogText.style.color="black";
    aboutText.style.color="black";
    contactText.style.color="rgb(3, 190, 190)";
})

const cartImg = document.getElementsByClassName("Image");
const newImage = document.getElementById("newImg");
const cartbtn = document.getElementsByClassName("addCart");

const cartPage = document.querySelector(".cart");

function show(img){
    const newImage = document.getElementById("newImg");
    newImage.src = img.src;
    cartPage.style.display = "flex";
    mainPage.style.display="none";
    shopPage.style.display="none";
    blogPage.style.display="none";
    aboutPage.style.display="none";
    contactPage.style.display="none";
}

const addtoCart = document.querySelector(".atc");

console.log(addtoCart)
addtoCart.addEventListener("click",()=>{
    alert("Added To Cart");
    location.reload();
})