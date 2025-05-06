function sbm(){
    const information = document.getElementById('info').value;


    if (information === "") {
        alert("Lagay mo temperature mo, wag tamad!");
        return;
    }
    const temp = parseFloat(information); 

    if (isNaN(temp)) {
        alert("Number lagay mo bonak!");
        return;
    }

    if (temp < -30 || temp > 50) {
        alert("Ano ka ba? Hanggang 50 lang bonak!");
        return;
    }


    if(information >= 24 && information <= 32){
        alert("Normal lang naman,");
    }
    else if(information >= 33 && information <= 37){
        alert("Hot, Ang init sarap umabsent!");
    }
    else if(information >= 38 && information <= 42){
        alert("Very Hot, Di pa ba magsususpend? ");
    }
    else if(information >= 43 && information <= 50){
        alert("Very Very Hot, Ano 'to? Sunog? Stay home, baka mapa-prito ka.");
    }
    else if(information >= 16 && information <= 23){
        alert("Cold, ang lamig! parang siya!");
    }
    else if(information >= 0 && information <= 15){
        alert("Very Cold, sobrang lamig! parang ung convo namin!");
    }
    else if(information >= -30 && information <= -1){
        alert("Super Cold, wala di na kaya ng late game to!");
    }
    else{
        alert("Number lagay mo bonak!");
    }
}