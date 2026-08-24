const TheGen = document.getElementById("TheGen");
const mysub = document.getElementById("mysub");

mysub.onclick = function HunnovatePassword() {
    const word = "Example"; // Define your word variable here
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const special = "=$@&#";
    
    const Random = Math.floor(Math.random() * word.length);
    const Random1 = Math.floor(Math.random() * alpha.length);
    const Random2 = Math.floor(Math.random() * num.length);
    const Random3 = Math.floor(Math.random() * special.length);
    
    let clicks = "Hunno" + "_" + word[Random] + alpha[Random1] + num[Random2]+"_"+ special[Random3] + special[Random3];
    TheGen.textContent = clicks;
    return clicks;
};
