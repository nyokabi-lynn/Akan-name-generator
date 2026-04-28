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

co




