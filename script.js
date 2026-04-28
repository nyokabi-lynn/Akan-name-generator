const header = document.querySelector("header");
header.style.backgroundColor = "whitesmoke";
const h1 = document.querySelector("h1");
const headerParagraph = document.querySelector("header-p");

document.getElementById("akanForm").addEventListener("submit",function(e)
{
    e.preventDefault();
    const dateInput=
    document.getElementById("birthDate").ariaValueMax;
    const gender = document.getElementById("gender").ariaValueMax.toLowerCase();
    
    if(!dateinput||!gender){
        alert("Please fill in all fields");
        return;
    }
    const birthDate = newDate(dateInput);
    const today = newDate();
    if(birthDate>today){
        alert("Please select a valid date.");
        return;
    }
     calculateAkanName(birthDate,gender);

    const date = newDate(dateInput);
    const dayOfWeek = date.getDay();

    const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleNames = ["Akosua", "Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    let akanName="";
    if(gender==="male"){
        akanName = maleNames[dayOfWeek];
    }
    else{
        akanName = femaleNames[dayOfWeek];
    }
//trigger swap
    document.getElementById("form-content").style.display ="none";
    const resultDiv =
    document.getElementById("akan-name-output");
    resultDiv.style.display = "block";
    document.getElementById("akanName").innerText=akanName;
} );

  let year=
  parseInt(document.getElementById("yearInput").value);
  let currentYear = new Date().getFullYear();
  if(year<=0 || year > currentYear){
    alert("Please enter a valid year");
    return;
  }

//calculate akan name

const day= parseInt(document.getElementById(
    "dayInput").value);
const month= parseInt(document.getElementById(
    "monthInput").value);


const CC =Math.floor(year/100); //math floor keeps numbers whole
const YY =Math.floor(year%100);
const MM =month;
const DD =day;

let dayOfWeek=Math.floor(
    ((CC%4 - 2 * CC - 1) + ((5 * YY)% 4) + ((26 * (MM +1 ))% 10) + DD) % 7
);
dayOfWeek =(dayOfWeek +7)% 7;


const
if(day<=0||day>=31){
    alert("Please enter a valid day.");
    return;
}
if (month<=0||month>12){
    alert("Please enter a valid month");
    return;
}
//parse int takes a string text and convert it into an interger
const dateCheck=newDate(year,month -1,day);
if(dateCheck.getFullYear()!==year ||
dateCheck.getMonth()!==month-1 ||
dateCheck.getDate()!==day){
    alert("Date does not exist!");
}





