var getal1 = prompt("Wat is uw leeftijd?");
var getal2 = 18;
var bulletin = 0;
if (getal1>=getal2) {
    console.log("Je bent " + getal1 + " jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.");
    bulletin = parseInt(prompt("Hoeveel vakjes wens je te spelen?"));
    switch (bulletin){
        case 12:
            console.log("De kostprijs is €20");
            break;
        case 2:
            console.log("De kostprijs is €4");
            break;
        case 4:
            console.log("De kostprijs is €8");
            break;
        case 6:
            console.log("De kostprijs is €12");
            break;
        case 8:
            console.log("De kostprijs is €16");
            break;
        case 10:
            console.log("De kostprijs is €18");
            break;
        default:
            console.log("Gelieve een juist aantal in te geven.");
} }
else if (getal1<getal2){
    console.log("Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.");
}
