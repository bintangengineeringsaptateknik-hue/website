function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "admin" && pass === "12345"){
    document.getElementById("loginPage").style.display="none";
    document.getElementById("dashboard").style.display="flex";
}else{
    alert("Username atau Password salah!");
}
}

function logout(){
location.reload();
}

function showPage(page){

document.getElementById("dashboard-content").style.display="none";
document.getElementById("menu-content").style.display="none";

document.getElementById(page).style.display="block";
}

function addMenu(){

let nama = document.getElementById("foodName").value;
let harga = document.getElementById("foodPrice").value;

if(nama==="" || harga===""){
    alert("Lengkapi data!");
    return;
}

let card = `
<div class="food-card">
<img src="https://picsum.photos/300/200?random=${Math.random()}">
<h3>${nama}</h3>
<p>Rp ${harga}</p>
</div>
`;

document.getElementById("menuGrid").innerHTML += card;

let total = document.querySelectorAll(".food-card").length;
document.getElementById("totalMenu").innerText = total;
}