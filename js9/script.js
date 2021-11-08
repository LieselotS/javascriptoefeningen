var reeks = []
for(var teller=1;teller <=5;teller++){
    var waarde = prompt("Geef een waarde in");
    reeks.push(waarde);
}
for(var teller = 0;teller < reeks.length;teller++) {
    document.getElementById("waarden").innerHTML += "<li>" + reeks[teller] + "</li>";
}
