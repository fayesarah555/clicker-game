 let golds= 0;
 let gps = 0;


 var minions = [
    { id: 1, name: "Distributer", cost: 100, gps: 1, owned: 0 },
    { id: 2, name: "Hotels", cost: 1000, gps: 10, owned: 0 },
    { id: 3, name: "Bank", cost: 5000, gps: 50, owned: 0 }
];

function addGold(x) {
    golds += x;
}

function displayGolds() {
    console.log(golds);
    document.querySelector("#gold_update").innerHTML = concate(golds, "golds");
}

function concate(msg1, msg2){
    const concat_msg = msg1 + " " + msg2;
    console.log(concat_msg);
    return (concat_msg);
}

function increment(value){
    addGold(value);
    displayGolds();
}

const gpsInterval = setInterval(function () {
    increment(gps);
}, 1000);

function getGPS(){
    gps = 0;
    minions.forEach(function (minion) {
    gps += minion.gps * minion.owned;
    })
    displayGPS();
}

function displayGPS(){
    console.log(gps);
    document.querySelector("#gps_update").innerHTML = concate (gps, "gps");
}

function displayMinion(){
    console.log(minions[id]['owned']);
    document.getElementById(owned_update).innerHTML = minions[id]['owned'];
}

function buyMinion(id){
    if (golds >= minions[id]['cost']){
        golds = golds - minions[id]['cost'];
        minions[id]['owned']++;

    }
    displayGolds();
    getGPS();
    displayGPS();
    displayMinion(id);
}
function save(){
    localStorage.setItem("golds", golds);
    localStorage.setItem("gps", gps);
}

function load(){
    golds = localStorage.getItem("golds");
    golds = parseInt(golds); 
    document.getElementById('text').value = golds;
    document.title = golds + "golds";

    gps = localStorage.getItem("gps");
    gps = parseInt(gps); 
    document.getElementById('text').value = gps;
    document.title = golds + "gps";
}