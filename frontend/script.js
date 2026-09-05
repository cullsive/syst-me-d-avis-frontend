//--------------project--------------------------------------------




// const entre_box = document.querySelector(".entre_box");
// const page_avis = document.querySelector(".page_avis");
// const namerest = document.getElementById("name");
// const container = document.getElementById("container");

// const envoye = document.getElementById("envoye");
// let entre1; 
// let message; 
// let entre3;  
// // console.log(entre_box , entre1,entre3, message);


// envoye.onclick = function(){
//     entre1 = document.getElementById("entre1").value;
//     message = document.getElementById("message").value;
//     entre3 = document.getElementById("entre3").value;
//     entre_box.style.display = "none";
    
    
//     namerest.textContent = entre1; 
//     container.textContent = message; 

//     document.querySelector(".bacdok").style.visibility = "visible"; 

//     setTimeout(() => {
//     document.querySelector(".bacdok").style.display = "none";
//     page_avis.style.visibility = "visible";
// }, 1000);

//     if(entre3 == 1){
//         document.getElementById("svg1").style.fill = " rgb(255, 196, 0)";
//     }
//     else if(entre3 == 2){
//         document.getElementById("svg1").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg2").style.fill = " rgb(255, 196, 0)";
//     }
//     else if(entre3 == 3){
//         document.getElementById("svg1").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg2").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg3").style.fill = " rgb(255, 196, 0)";
//     }
//     else if(entre3 == 4){
//         document.getElementById("svg1").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg2").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg3").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg4").style.fill = " rgb(255, 196, 0)";
//     }
//     else if(entre3 == 5){
//         document.getElementById("svg1").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg2").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg3").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg4").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg5").style.fill = " rgb(255, 196, 0)";
//     }else{
//         document.getElementById("svg1").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg2").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg3").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg4").style.fill = " rgb(255, 196, 0)";
//         document.getElementById("svg5").style.fill = " rgb(255, 196, 0)";
//     }

// }


//-------------------------------version----------------------------------------------------------------------------------


const entre_box = document.querySelector(".entre_box");
const page_avis = document.querySelector(".page_avis");
const namerest = document.getElementById("name");
const container = document.getElementById("container");
const envoye = document.getElementById("envoye");

envoye.onclick = function () {

    const entre1 = document.getElementById("entre1").value;
    const message = document.getElementById("message").value;
    const entre3 = Number(document.getElementById("entre3").value);

    entre_box.style.display = "none";

    namerest.textContent = entre1;
    container.textContent = message;

    const bacdok = document.querySelector(".bacdok");
    bacdok.style.visibility = "visible";

    setTimeout(() => {
        bacdok.style.visibility = "hidden";
        page_avis.style.visibility = "visible";
    }, 1000);

    for (let i = 1; i <= 5; i++) {
        const svg = document.getElementById("svg" + i);
        svg.style.fill = i <= entre3 ? "rgb(255, 196, 0)" : "#e3e3e3";
    }
};
