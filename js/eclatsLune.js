/*********************************************************************
 *                     Infos Eclats Lune JS                          *
 * Author     : Cyol http://cyol.fr/blog                             *
 * Licence    : CC BY http://creativecommons.org/licenses/by/3.0/fr/ *
 *********************************************************************/

const ECLATS_LUNE_LAYER_NAME = '<span class="EdLGroupe">Eclats de Lune <span class="reserve">(Réservé MJ)</span></span>';
const ECLATS_LUNE_LAYER_SC01_NAME = '<span class="EdLEtape">Scénario 01 - LES EXCAVÉES</span>';
const ECLATS_LUNE_LAYER_SC02_NAME = '<span class="EdLEtape">Scénario 02 - UNE LÉGENDE</span>';
const ECLATS_LUNE_LAYER_SC03_NAME = '<span class="EdLEtape">Scénario 03 - CHALEURS BLEUES</span>';
const ECLATS_LUNE_LAYER_SC04_NAME = '<span class="EdLEtape">Scénario 04 - PROMESSES DE MORT</span>';
const ECLATS_LUNE_LAYER_SC05_NAME = '<span class="EdLEtape">Scénario 05 - BRUMES D’ÉPICES</span>';

var VaseuxLoc = [-135, -87];
var MalbesseLoc = [13.5, 47];
var LesPassesMaltorsesLoc = [137,42.5];
var LePasAuxHachesLoc = [130,24];
var PondeSauneLoc = [103,-5];
var LeBoisDePercechargneLoc = [79, -10.5];
var ChaineDesFortsLoc = [57, 13.75];

//lieux
var VaseuxDeChagre, Pole, Malbesse, Berkner, CitadelleDesGlaces, Belgrano, CitadelleDesGlaces, Markony, LesPassesMaltorses, LePasAuxHaches, Byrd, PondeSaune, LeBoisDePercechargne;
var Durville;
//trajets
var Vaseux_Pole, Pole_Malbesse, Malbesse_Berkner, Berkner_CitadelleDesGlaces, CitadelleDesGlaces_Belgrano, Belgrano_CitadelleDesGlaces, CitadelleDesGlaces_Markony, Markony_LesPassesMaltorses, LesPassesMaltorses_LePasAuxHaches, LePasAuxHaches_Byrd, Byrd_PondeSaune, PondeSaune_LeBoisDePercechargneLoc;
var LeBoisDePercechargne_Durville, LeBoisDePercechargne_Durville2;

function createLayerEdLScenario01()
{
    return  L.layerGroup([VaseuxDeChagre, Vaseux_Pole, Pole, Pole_Malbesse, Malbesse, Malbesse_Berkner, Berkner, Berkner_CitadelleDesGlaces, CitadelleDesGlaces]);
}
function createLayerEdLScenario02()
{
    return  L.layerGroup([CitadelleDesGlaces, CitadelleDesGlaces_Belgrano, Belgrano, Belgrano_CitadelleDesGlaces, CitadelleDesGlaces, CitadelleDesGlaces_Markony, Markony, Markony_LesPassesMaltorses, LesPassesMaltorses]);
}
function createLayerEdLScenario03()
{
    return  L.layerGroup([LesPassesMaltorses]);
}
function createLayerEdLScenario04()
{
    return  L.layerGroup([LesPassesMaltorses, LesPassesMaltorses_LePasAuxHaches, LePasAuxHaches, LePasAuxHaches_Byrd, Byrd, Byrd_PondeSaune, PondeSaune, PondeSaune_LeBoisDePercechargneLoc, LeBoisDePercechargne]);
}
function createLayerEdLScenario05()
{
    return  L.layerGroup([LeBoisDePercechargne, LeBoisDePercechargne_Durville, Durville]);
}
function createLayerEdLScenario05bis()
{
    return  L.layerGroup([LeBoisDePercechargne_Durville2]);
}

function createLayerEclatsLune(){
    //Vaseux : Scénario 01, parties 1 et 2 et bonus 1 ?
    VaseuxDeChagre = L.circle(VaseuxLoc, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 5
    });
    VaseuxDeChagre.bindPopup(
        "<h2>Vaseux de Chagre</h2>"+
        "<h3>EdL : Scénario 01 - LES EXCAVÉES</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Habitants : </b>Trois pelés et un tondu... Sans compter les dégénérés et les chèvres.</li>'+
        '<li><b>Chagar 92 : </b><a href="http://bit.ly/Chagar-92" target="_blank">Scénario 01 - LES EXCAVÉES, 1ère partie</a></li>'+
        '<li><b>Chagar 93 : </b><a href="http://bit.ly/Chagar-93" target="_blank">Scénario 01 - LES EXCAVÉES, 2ème partie</a></li>'+
        '<li><b>Chagar 97 : </b><a href="http://bit.ly/Chagar-97" target="_blank">Scénario 01 - LES EXCAVÉES, Bonus #1</a></li>'+
        '</ul></li></ul>'
    );
    Vaseux_Pole = L.polyline([VaseuxLoc, infosVilles["Pôle"].loc]);
    Pole = new L.Marker(new L.latLng(infosVilles["Pôle"].loc), {title: "Pôle"});
    Pole.bindPopup(createInfosVille("Pôle", true));
    Pole_Malbesse = L.polyline([infosVilles["Pôle"].loc, MalbesseLoc]);
    Pole_Malbesse.bindPopup("~450km, 20/12 jours");
    Malbesse = new L.Marker(new L.latLng(MalbesseLoc), {title: "Malbesse"});
    Malbesse.bindPopup(
        "<h2>Malbesse</h2>"+
        "<h3>EdL : Scénario 01 - LES EXCAVÉES</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Habitants : </b>Noblesse de Pôle Gantés-de-Rémillons. Bourg, 5000 habitants.</li>'+
        '<li><b>Chagar 94 : </b><a href="http://bit.ly/Chagar-94" target="_blank">Scénario 01 - LES EXCAVÉES, 3ème partie</a></li>'+
        '<li><b>Chagar 95 : </b><a href="http://bit.ly/Chagar-95" target="_blank">Scénario 01 - LES EXCAVÉES, 4ème partie</a></li>'+
        '<li><b>Chagar 98 : </b><a href="http://bit.ly/Chagar-97" target="_blank">Scénario 01 - LES EXCAVÉES, Bonus #2</a></li>'+
        '</ul></li></ul>'
    );
    Malbesse_Berkner = L.polyline([MalbesseLoc, infosVilles["Berkner"].loc]);
    Malbesse_Berkner.bindPopup("~480km, 25/15 jours");
    Berkner = new L.Marker(new L.latLng(infosVilles["Berkner"].loc), {title: "Berkner"});
    Berkner.bindPopup(createInfosVille("Berkner", true));
    Berkner_CitadelleDesGlaces = L.polyline([infosVilles["Berkner"].loc, infosVilles["Citadelle des Glaces"].loc]);
    Berkner_CitadelleDesGlaces.bindPopup("~500km, 28/16 jours<br /><i>ou 35 jours avec un chariot</i>");
    CitadelleDesGlaces = new L.Marker(new L.latLng(infosVilles["Citadelle des Glaces"].loc), {title: "Citadelle des Glaces"});
    CitadelleDesGlaces.bindPopup(createInfosVille("Citadelle des Glaces", true));
    CitadelleDesGlaces_Belgrano = L.polyline([infosVilles["Citadelle des Glaces"].loc, infosVilles["Belgrano"].loc]);
    CitadelleDesGlaces_Belgrano.bindPopup("55/30 jours");
    Belgrano = new L.Marker(new L.latLng(infosVilles["Belgrano"].loc), {title: "Belgrano"});
    Belgrano.bindPopup(createInfosVille("Belgrano", true));
    Belgrano_CitadelleDesGlaces = L.polyline([infosVilles["Citadelle des Glaces"].loc, infosVilles["Belgrano"].loc]);
    Belgrano_CitadelleDesGlaces.bindPopup("55/30 jours");
    CitadelleDesGlaces_Markony = L.polyline([infosVilles["Citadelle des Glaces"].loc, [57.5,43], [62.5,67.5], [81.5,61], [104.5,65], infosVilles["Markony"].loc]);
    CitadelleDesGlaces_Markony.bindPopup("Longer la côte de la Marche de l'ours :<br />~350km, 15/20 jours<br />Longer la côte des Forêts blanches :<br />~200km, 8/12 jours<br />Rallier Markony depuis les pieds de l'Albarrière :<br />~100km, 4/6 jours");
    Markony = new L.Marker(new L.latLng(infosVilles["Markony"].loc), {title: "Markony"});
    Markony.bindPopup(createInfosVille("Markony", true));
    Markony_LesPassesMaltorses = L.polyline([infosVilles["Markony"].loc, LesPassesMaltorsesLoc]);
    Markony_LesPassesMaltorses.bindPopup("10/15 jours");
    LesPassesMaltorses = new L.Marker(new L.latLng(LesPassesMaltorsesLoc), {title: "Les Passes Maltorses"});
    LesPassesMaltorses.bindPopup(
        "<h2>Les Passes Maltorses</h2>"+
        "<h3>EdL : Scénario 02 - UNE LÉGENDE</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Habitants : </b>Personne à part quelques Thunks</li>'+
        '<li><b>Chagar 100 : </b><a href="http://bit.ly/Chagar-100" target="_blank">Scénario 02 - UNE LÉGENDE, 2ème partie</a></li>'+
        '</ul></li></ul>'+
        "<h3>EdL : Scénario 03 - CHALEURS BLEUES</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Habitants : </b>Clan Thunk des Merles Gris</li>'+
        '<li><b>Chagar 102 : </b><a href="http://bit.ly/Chagar-102" target="_blank">Scénario 03 - CHALEURS BLEUES, 1ère partie</a></li>'+
        '<li><b>Chagar 103 : </b><a href="http://bit.ly/Chagar-103" target="_blank">Scénario 03 - CHALEURS BLEUES, 2ème partie</a></li>'+
        '</ul></li></ul>'+
        "<h3>EdL : Scénario 04 - PROMESSES DE MORT</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Habitants : </b>Clan Thunk des Merles Gris</li>'+
        '<li><b>Chagar 103 : </b><a href="http://bit.ly/Chagar-103" target="_blank">Scénario 04 - PROMESSES DE MORT, 1ère partie</a></li>'+
        '</ul></li></ul>'
    );
    LesPassesMaltorses_LePasAuxHaches = L.polyline([LesPassesMaltorsesLoc, [134.5,32], LePasAuxHachesLoc]);
    LesPassesMaltorses_LePasAuxHaches.bindPopup("~200km, 10/15 jours<br />Traversée de La Passe des morts-assis, la zone de combat, les terres occupées");
    LePasAuxHaches = new L.Marker(new L.latLng(LePasAuxHachesLoc), {title: "Le Pas Aux Haches"});
    LePasAuxHaches.bindPopup(
        "<h2>Le Pas Aux Haches</h2>"+
        "<h3>EdL : Scénario 04 - PROMESSES DE MORT</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Habitants : </b>Village, 500 habitants.</li>'+
        '<li><b>Chagar 104 : </b><a href="http://bit.ly/Chagar-104" target="_blank">Scénario 04 - PROMESSES DE MORT, 1ère partie</a></li>'+
        '</ul></li></ul>'
    );
    LePasAuxHaches_Byrd = L.polyline([LePasAuxHachesLoc, infosVilles["Byrd"].loc]);
    LePasAuxHaches_Byrd.bindPopup("~300km, 6/10 jours");
    Byrd = new L.Marker(new L.latLng(infosVilles["Byrd"].loc), {title: "Byrd"});
    Byrd.bindPopup(createInfosVille("Byrd", true));
    Byrd_PondeSaune = L.polyline([infosVilles["Byrd"].loc, PondeSauneLoc]);
    Byrd_PondeSaune.bindPopup("4/8 jours");
    PondeSaune = new L.Marker(new L.latLng(PondeSauneLoc), {title: "Le Pied du Géant, PondeSaune"});
    PondeSaune.bindPopup(
        "<h2>Le Pied du Géant, PondeSaune</h2>"+
        "<h3>EdL : Scénario 04 - PROMESSES DE MORT</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Habitants : </b>Village, 500 habitants.</li>'+
        '<li><b>Chagar 105 : </b><a href="http://bit.ly/Chagar-105" target="_blank">Scénario 04 - PROMESSES DE MORT, 2ème partie</a></li>'+
        '</ul></li></ul>'
    );
    PondeSaune_LeBoisDePercechargneLoc = L.polyline([PondeSauneLoc, LeBoisDePercechargneLoc]);
    LeBoisDePercechargne = L.circle(LeBoisDePercechargneLoc, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 5
    });
    LeBoisDePercechargne.bindPopup(
        "<h2>Le bois de Percechargne</h2>"+
        "<h3>EdL : Scénario 04 - PROMESSES DE MORT</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Habitants : </b>La Goulue...</li>'+
        '<li><b>Chagar 105 : </b><a href="http://bit.ly/Chagar-105" target="_blank">Scénario 04 - PROMESSES DE MORT, 2ème partie</a></li>'+
        '</ul></li></ul>'+
        "<h3>EdL : Scénario 05 - BRUMES D’ÉPICES</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Chagar 106 : </b><a href="http://bit.ly/Chagar-106" target="_blank">Scénario 05 - BRUMES D’ÉPICES, 1ère partie</a></li>'+
        '</ul></li></ul>'
    );

    LeBoisDePercechargne_Durville = L.polyline([
        LeBoisDePercechargneLoc, ChaineDesFortsLoc, infosVilles["Pôle"].loc, infosVilles["La Perrière"].loc,
        infosVilles["Vhern"].loc, [-76.5, -78.25], infosVilles["Mah'ien"].loc, infosVilles["Oasis d'Aghen"].loc,
        infosVilles["Durville"].loc
    ]);
    LeBoisDePercechargne_Durville.bindPopup("95/55 jours");
    LeBoisDePercechargne_Durville2 = L.polyline([
        LeBoisDePercechargneLoc, infosVilles["Howlfarr"].loc, infosVilles["Rockford"].loc, infosVilles["Bengard"].loc,
        infosVilles["Joyel"].loc, infosVilles["Kijaÿ"].loc, infosVilles["Ourouel"].loc, infosVilles["Oasis d'Aghen"].loc,
        infosVilles["Durville"].loc
    ]);
    LeBoisDePercechargne_Durville2.bindPopup("110/70 jours");
    Durville = new L.Marker(new L.latLng(infosVilles["Durville"].loc), {title: "Durville"});
    Durville.bindPopup(createInfosVille("Durville", true));
}