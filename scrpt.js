
let birinchi = +prompt("Birinchi raqamni kiriting");
let ikkinchi = +prompt("Ikkinchi raqamni kiriting");
let operator = prompt("Qanday ishorani tanlang\n+\n-\n*\n/");

function tekshirish() {
    let javob;
  
    
    if (operator === "+") {
      javob = birinchi + ikkinchi;
    } else if (operator === "-") {
      javob = birinchi - ikkinchi;
    } else if (operator === "*") {
      javob = birinchi * ikkinchi;
    } else if (operator === "/") {
      
      javob = ikkinchi !== 0 ? birinchi / ikkinchi : "0 ga bo'lish mumkin emas!";
    } else {
      javob = "Noto'g'ri amal!";
    }
  
    
    box2.textContent =  javob;
    
  }
  
  let body = document.querySelector('body')
document.body.style.backgroundColor = "black";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";


let box1 = document.querySelector(".box1");  
box1.style.width = "300px";
box1.style.height = "150px";
box1.style.backgroundColor = "red";
box1.style.color = "cyan";
box1.style.textAlign = "center";
box1.style.borderRadius = "30px";
box1.style.margin = "10px";
box1.style.fontSize = "30px";





let box2 = document.querySelector(".box2");  
box2.style.width = "300px";
box2.style.height = "150px";
box2.style.backgroundColor = "blue";
box2.style.color = "white";
box2.style.textAlign = "center";
box2.style.marginTop = "20px";
box2.style.borderRadius = "30px";
box2.style.fontSize = "30px";


let check = document.querySelector(".check")
check.style.width = "300px";
check.style.height = "150px";
check.style.backgroundColor = "cyan";
check.style.color = "red";
check.style.textAlign = "center";
check.style.borderRadius = "30px";
check.style.margin = "10px";
check.style.fontSize = "30px";



box1.textContent = `${birinchi} ${operator} ${ikkinchi}`;



