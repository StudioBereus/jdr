function addCell(tr, text){
    var td=tr.insertCell();
    td.textContent=text;
    return td;
}

function titleCell(row, text){
    var cell=document.createElement("th");
    cell.textContent=text;
    row.appendChild(cell);
}

function createCells(row, obj){
    for(var key in obj){
        addCell(row, obj[key]);
    }
}

function fillTable(result){
    var table=document.getElementById("jeu");
    //Créer le Header
    var thead=table.createTHead();
    var headerRow=thead.insertRow();
    for(var key in result[0]){
        titleCell(headerRow,key);
    }
    var Body=table.createTBody();
    for(let i = 0; i < result.length ; i++){
        var BodyRow = Body.insertRow();
        createCells(BodyRow, result[i]);
    }
}

function search_minPower(result){
    let numjoueur=0;
    let min=result[0].power;
    for(let i = 0; i < result.length; i++){
        if(result[i].power < min){
            min = result[i].power;
            numJoueur = i;
        }
    }
    console.log(numjoueur);
    txtnom = document.querySelector(".joueur");
    txtnom.textContent += " : " + result[numjoueur].name;

    // document.getElementById("max").appendChild(txtnom);
    let txtattack = document.createElement("p");
    txtattack.setAttribute("style", "font-size:1em; margin-bottom:10px;");
    txtattack.textContent = "played : " + result[numjoueur].played + " | victories : " + result[numjoueur].victory;
    document.getElementById("high").appendChild(txtattack);

    let txtpower = document.createElement("p");
    txtpower.setAttribute("style", "font-size:1em; margin-bottom:10px;color:#fff");

    txtpower.innerHTML = "Power : <br>" + result[numjoueur].power;
    document.getElementById("right").appendChild(txtpower);
}

function search_attack(result){
    let numjoueur = 0;
    let max = result[0].attack;
    for (let i = 0; i < result.length; i++) {
        if (result[i].attack > max) {
            max = result[i].attack;
            numjoueur = i;
        }
    }
    console.log(numjoueur);
    txtnom = document.querySelector(".joueur");
    txtnom.textContent += " : " + result[numjoueur].name;

    // document.getElementById("max").appendChild(txtnom);
    let txtattack = document.createElement("p");
    txtattack.setAttribute("style", "font-size:0.8em; margin-bottom:10px;");
    txtattack.textContent = "played : " + result[numjoueur].played + " | victories : " + result[numjoueur].victory;
    document.getElementById("high").appendChild(txtattack);

    let power = document.createElement("p");
    power.setAttribute("style", "font-size: 1 em; color: rgb(24, 181, 243);text-align:center; margin-top:10px");

    power.innerHTML = "Power <br>" + result[numjoueur].power;
    document.getElementById("right").appendChild(power);

    let attaq = document.createElement("p");
    attaq.setAttribute("style", "font-size:1em; margin-bottom:10px;color:#fff;text-align:center; margin-top:10px");

    attaq.innerHTML = "Attack <br>" + result[numjoueur].attack;
    document.getElementById("right").appendChild(attaq);

    let defense = document.createElement("p");
    defense.setAttribute("style", "font-size:1em; color:#00bb00; margin-top:5px;text-align:center");

    defense.innerHTML = "Defense <br>" + result[numjoueur].armor;
    document.getElementById("right").appendChild(defense);
}

function MaxArmor(result2) {
    let numtemp = 0;
    let maxar = result2[0].armor;

    for (let i = 0; i < result2.length; i++) {
        if (result2[i].armor > maxar) {
            numtemp = i;
            maxar = result2[i].armor;
        }

    }
    console.log(numtemp);
    txtnom = document.querySelector(".joueur");
    txtnom.textContent += " : " + result2[numtemp].name;

    let txtattack = document.createElement("p");
    txtattack.setAttribute("style", "font-size:0.8em; margin-bottom:10px;");
    txtattack.textContent = "played : " + result2[numtemp].played + " | victories : " + result2[numtemp].victory;
    document.getElementById("high").appendChild(txtattack);

    let power = document.createElement("p");
    power.setAttribute("style", "font-size: 1 em; color: rgb(24, 181, 243);text-align:center; margin-top:10px");

    power.innerHTML = "Power <br>" + result2[numtemp].power;
    document.getElementById("right").appendChild(power);

    let attaq = document.createElement("p");
    attaq.setAttribute("style", "font-size:1em; margin-bottom:10px;color:#fff;text-align:center; margin-top:10px");

    attaq.innerHTML = "Attack <br>" + result2[numtemp].attack;
    document.getElementById("right").appendChild(attaq);



    let defense = document.createElement("p");
    defense.setAttribute("style", "font-size:1em; color:#00bb00; margin-top:5px;text-align:center");

    defense.innerHTML = "Defense <br>" + result2[numtemp].armor;
    document.getElementById("right").appendChild(defense);

}





let xhr= new XMLHttpRequest();
xhr.open("GET",'jeu.json');
xhr.responseType="json";
xhr.send(); 
xhr.onload = function(){
    //Si le statut HTTP n'est pas 200...
    if (xhr.status != 200){ 
        //...On affiche le statut et le message correspondant
        alert("Erreur " + xhr.status + " : " + xhr.statusText);
    //Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
    }else{  data=xhr.response;

        fillTable(data);
        //console.log(data);
        
    }
};
