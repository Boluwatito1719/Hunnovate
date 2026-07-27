 const TheGen=document.getElementById("TheGen");
 const mysub=document.getElementById("mysub")

 mysub.onclick=function HunnovatePassword(){
    const word="abcdefghijklmnopqrstuvwxyz";
const alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num="0123456789";
const special="!@#$%^&*()_+~`|}{[]:;?><,./-=";

const Random=Math.floor(Math.random()*word.length);
const Random1=Math.floor(Math.random()*alpha.length);
const Random2=Math.floor(Math.random()*num.length);
const Random3=Math.floor(Math.random()*special.length);

 let clicks="Hunnovate"+word[Random]+alpha[Random1]+num[Random2]+special[Random3]+num[Random2]+word[Random];
 TheGen.textContent=clicks;
 return clicks
 }