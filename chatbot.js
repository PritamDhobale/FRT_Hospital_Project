a = true;
function chatbot(){
    if(a){
        document.getElementById("myframe").hidden = false;
        document.getElementById("myframe").src = "https://healthcare-bot-y7blon3g7jpju.azurewebsites.net";
        a = false;
        b = document.getElementById("chatBotbtn").textContent = "close";

    }else{
        document.getElementById("myframe").hidden = true;
        a = true;
        b = document.getElementById("chatBotbtn").textContent = "Ask To Bot";
    }
}
function appointment(){
    let a = document.getElementById('aName').value;
    let b = document.getElementById('aNumber').value;
    let c = document.getElementById('aEmail').value;
    let d = document.getElementById('aDate').value;
    if(a !="" && b != "" && c !="" ){
        alert("Appointment Booked Successfully!!! \nName : " + a + "\t Time : "+d);
    }
}

function Oncology(){
    window.location="Oncology.html";
}
function Neurology(){
    window.location="Neurology.html";
}
function Cardiology(){
    window.location="Cardiology.html";
}
function Gynaecology(){
    window.location="Gynaecology.html";
}
function Ophthalmology(){
    window.location="Ophthalmology.html";
}
function Dentistry(){
    window.location="Dentistry.html";
}
function Orthopedics(){
    window.location="Orthopedics.html";
}
function Pediatrics(){
    window.location="Pediatrics.html";
}
function Physiotherapy(){
    window.location="Physiotherapy.html";
}