
function init() {
    var arr = [];
   
    if (pokemons.length == 2) {
        document.getElementById('btn1').style.display = "none";
        
    }
    localStorage.clear();
   
 

    
    
}

var pokemons = [];
var index = 0;
var arr = [];
function selectp(str) {
    var pl1 = document.getElementById('select');
    var pl2 = document.getElementById('select1');
    var pl3 = document.getElementById('select2');
    if ((pokemons.length < 2) && (pokemons.includes(pokemon[4]) == false) && (str == 'select')) {
        document.getElementById('select').style.display = "none";
        pokemons[index++] = pokemon[4];
        document.getElementById("toGame1").innerHTML = '<img src="' + pl1.currentSrc + '"' + 'id="selected"' + '/>';
    }
    else if ((pokemons.length < 2) && (pokemons.includes(pokemon[0]) == false) && (str == 'select1')) {
        document.getElementById('select1').style.display = "none";
        pokemons[index++] = pokemon[0];
        document.getElementById("toGame2").innerHTML = '<img src="' + pl2.currentSrc + '"' + 'id="selected1"' + '/>';

    }
    else if ((pokemons.length < 2) && (pokemons.includes(pokemon[65]) == false) && (str == 'select2')) {
        document.getElementById('select2').style.display = "none";
        pokemons[index++] = pokemon[65];
        document.getElementById("toGame3").innerHTML = '<img src="' + pl3.currentSrc + '"' + 'id="selected2"' + '/>';
    }
    localStorage["pokemons"] = JSON.stringify(pokemons);
    var datas = JSON.parse(localStorage["pokemons"]);
    
    
   
    
}


function newPokemon() {
    var random = Math.floor(Math.random() * 810);
    var random1 = Math.floor(Math.random() * 810);
    var random2 = Math.floor(Math.random() * 810);
    if (pokemons.length < 2) {
        document.getElementById('select').src = "pokemon.json-master/images/" + random + ".png"
        document.getElementById('select1').src = "pokemon.json-master/images/" + random1 + ".png"
        document.getElementById('select2').src = "pokemon.json-master/images/" + random2 + ".png"
    }
    else
        document.getElementById("myBtn").disabled = true;
   
    
}
//for (var i = 0; i < pokemon.length; i++) {
//    arr[i] = pokemon[i];
//}


//var rnd = Math.floor(Math.random() * 800);
//document.getElementById("namePoke").innerHTML = str;




