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
const ECLATS_LUNE_LAYER_SC06_NAME = '<span class="EdLEtape">Scénario 06 - HÉRITAGES</span>';
const ECLATS_LUNE_LAYER_SC07_NAME = '<span class="EdLEtape">Scénario 07 - MANGE-COULEURS</span>';
const ECLATS_LUNE_LAYER_SC08_NAME = '<span class="EdLEtape">Scénario 08 - BLANCHE ET ROUGE</span>';

//Localisations
var VaseuxLoc = [-135,-87];
var MalbesseLoc = [13.5,47];
var LesPassesMaltorsesLoc = [137,42.5];
var LePasAuxHachesLoc = [130,24];
var PondeSauneLoc = [103,-5];
var LeBoisDePercechargneLoc = [79,-10.5];
var ChaineDesFortsLoc = [57,13.75];
var LaPlantationDOxymarLoc = [-125,-230];
var MaikeLoc = [-185,-227];
var CollinesSurdinLoc = [-76,-83];
var LeCratereAuxOmbresGrisesLoc = [-61,-85];
var GarderonEtMinstreDesAndellesLoc = [-82,-11];
var BranleboucLoc = [-170,42];
var PairneLoc = [-204,24];
var ArouchLoc = [-214, 30];
var LaCiteDesFalaisesLoc = [-253,27];
var LaMaigneLoc = [-256,35];

//lieux et trajets
//SC01
var VaseuxDeChagre, Vaseux_Pole, Pole01, Pole_Malbesse, Malbesse, Malbesse_Berkner, Berkner, Berkner_CitadelleDesGlaces, CitadelleDesGlaces;
//SC02
var CitadelleDesGlaces_Belgrano, Belgrano, Belgrano_CitadelleDesGlaces, CitadelleDesGlaces_Markony, Markony,
    Markony_LesPassesMaltorses, LesPassesMaltorses;
//SC03
//SC04
var LesPassesMaltorses_LePasAuxHaches, LePasAuxHaches, LePasAuxHaches_Byrd, Byrd, Byrd_PondeSaune, PondeSaune,
    PondeSaune_LeBoisDePercechargneLoc, LeBoisDePercechargne;
//SC05
var LeBoisDePercechargne_Durville, LeBoisDePercechargne_Durville2, Durville, Durville_LaPlantationDOxymar, LaPlantationDOxymar,
    LaPlantationDOxymar_Durville, Durville_Maike, Maike, Maike_Durville;
//SC06
var Durville_Mahien, Mahien, Mahien_CollinesSurdin, CollinesSurdin, CollinesSurdin_LeCratereAuxOmbresGrises, LeCratereAuxOmbresGrises,
    LeCratereAuxOmbresGrises_CollinesSurdin, CollinesSurdin_Pole, Pole06;
//SC07
var Pole_GarderonEtMinstreDesAndelles, GarderonEtMinstreDesAndelles, GarderonEtMinstreDesAndelles_Branlebouc, Branlebouc,
    Branlebouc_Pairne, Pairne, Pairne_Arouch, Arouch, Arouch_LaCiteDesFalaises, LaCiteDesFalaises, LaCiteDesFalaises_LaMaigne, LaMaigne, LaMaigne_LaCiteDesFalaises;
//SC08

function createLayerEdLScenario01()
{
    return  L.layerGroup([VaseuxDeChagre, Vaseux_Pole, Pole01, Pole_Malbesse, Malbesse, Malbesse_Berkner, Berkner,
        Berkner_CitadelleDesGlaces, CitadelleDesGlaces]);
}
function createLayerEdLScenario02()
{
    return  L.layerGroup([CitadelleDesGlaces, CitadelleDesGlaces_Belgrano, Belgrano, Belgrano_CitadelleDesGlaces,
        CitadelleDesGlaces_Markony, Markony, Markony_LesPassesMaltorses, LesPassesMaltorses]);
}
function createLayerEdLScenario03()
{
    return  L.layerGroup([LesPassesMaltorses]);
}
function createLayerEdLScenario04()
{
    return  L.layerGroup([LesPassesMaltorses, LesPassesMaltorses_LePasAuxHaches, LePasAuxHaches, LePasAuxHaches_Byrd, Byrd,
        Byrd_PondeSaune, PondeSaune, PondeSaune_LeBoisDePercechargneLoc, LeBoisDePercechargne]);
}
function createLayerEdLScenario05()
{
    return  L.layerGroup([LeBoisDePercechargne, LeBoisDePercechargne_Durville, Durville]);
}
function createLayerEdLScenario05bis()
{
    return  L.layerGroup([LeBoisDePercechargne_Durville2, Durville_LaPlantationDOxymar, LaPlantationDOxymar, LaPlantationDOxymar_Durville,
        Durville_Maike, Maike, Maike_Durville]);
}
function createLayerEdLScenario06()
{
    return  L.layerGroup([Durville, Durville_Mahien, Mahien, Mahien_CollinesSurdin, CollinesSurdin, CollinesSurdin_LeCratereAuxOmbresGrises,
        LeCratereAuxOmbresGrises, LeCratereAuxOmbresGrises_CollinesSurdin, CollinesSurdin_Pole, Pole06]);
}
function createLayerEdLScenario07()
{
    return  L.layerGroup([Pole06, Pole_GarderonEtMinstreDesAndelles, GarderonEtMinstreDesAndelles, GarderonEtMinstreDesAndelles_Branlebouc,
        Branlebouc, Branlebouc_Pairne, Pairne, Pairne_Arouch, Arouch, Arouch_LaCiteDesFalaises, LaCiteDesFalaises, LaCiteDesFalaises_LaMaigne, LaMaigne]);
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
    Pole01 = new L.Marker(new L.latLng(infosVilles["Pôle"].loc), {title: "Pôle"});
    Pole01.bindPopup(createInfosVille("Pôle", true));
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
        infosVilles["Vhern"].loc, [-76.5, -78.25], infosVilles["Mah'Ien"].loc, infosVilles["Oasis d'Aghen"].loc,
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
    Durville_LaPlantationDOxymar = L.polyline([infosVilles["Durville"].loc, LaPlantationDOxymarLoc]);
    Durville_LaPlantationDOxymar.bindPopup("1 grosse semaine avec guide");
    LaPlantationDOxymar = new L.Marker(new L.latLng(LaPlantationDOxymarLoc), {title: "La plantation d’Oxymar"});
    LaPlantationDOxymar.bindPopup(
        "<h2>Gwaddip, La plantation d’Oxymar</h2>"+
        "<h3>EdL : Scénario 05 - BRUMES D’ÉPICES</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Habitants : </b>200 habitants, Oxymar an Marou et une quinzaine d\'ouvriers </li>'+
        '<li><b>Chagar 111 : </b><a href="http://bit.ly/Chagar-111" target="_blank">Scénario 05 - BRUMES D’ÉPICES, 5ème partie</a></li>'+
        '</ul></li></ul>'
    );
    LaPlantationDOxymar_Durville = L.polyline([LaPlantationDOxymarLoc, infosVilles["Durville"].loc]);
    LaPlantationDOxymar_Durville.bindPopup("1 grosse semaine avec guide");
    Durville_Maike = L.polyline([infosVilles["Durville"].loc, [-133,-258], infosVilles["Tehen"].loc, infosVilles["Mathana"].loc, MaikeLoc]);
    Maike = new L.Marker(new L.latLng(MaikeLoc), {title: "La forteresse de Maïke"});
    Maike.bindPopup(
        "<h2>La forteresse de Maïke</h2>"+
        "<h3>EdL : Scénario 05 - BRUMES D’ÉPICES</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Habitants : </b>Soldats, La Cornue</li>'+
        '<li><b>Chagar 112 : </b><a href="http://bit.ly/Chagar-112" target="_blank">Scénario 05 - BRUMES D’ÉPICES, 6ème partie</a></li>'+
        '<li><b>Chagar 113 : </b><a href="http://bit.ly/Chagar-113" target="_blank">Scénario 05 - BRUMES D’ÉPICES, 7ème partie</a></li>'+
        '</ul></li></ul>'
    );
    Maike_Durville = L.polyline([MaikeLoc, infosVilles["Mathana"].loc, infosVilles["Tehen"].loc, [-133,-258], infosVilles["Durville"].loc]);
    Durville_Mahien = L.polyline([
        infosVilles["Durville"].loc, [-115,-232], [-115,-225], [-111,-210], [-105,-200], infosVilles["Oasis d'Aghen"].loc,
        [-98,-174], [-99,-159], infosVilles["Mah'Ien"].loc
    ]);
    Mahien = new L.Marker(new L.latLng(infosVilles["Mah'Ien"].loc), {title: "Mah'Ien"});
    Mahien.bindPopup(createInfosVille("Mah'Ien", true));
    Mahien_CollinesSurdin = L.polyline([infosVilles["Mah'Ien"].loc, [-81, -120], [-79, -102], CollinesSurdinLoc]);
    CollinesSurdin = new L.Marker(new L.latLng(CollinesSurdinLoc), {title: "Les Collines du Surdin"});
    CollinesSurdin.bindPopup(
        "<h2>Les Collines du Surdin</h2>"+
        "<h3>EdL : Scénario 06 - HÉRITAGES</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Habitants : </b>Personne</li>'+
        '<li><b>Chagar 115 : </b><a href="http://bit.ly/Chagar-115" target="_blank">Scénario 06 - HÉRITAGES, 1ère partie</a></li>'+
        '</ul></li></ul>'
    );
    CollinesSurdin_LeCratereAuxOmbresGrises = L.polyline([CollinesSurdinLoc,LeCratereAuxOmbresGrisesLoc]);
    CollinesSurdin_LeCratereAuxOmbresGrises.bindPopup("Quelques jours de hors piste en s'enfonçant dans les Sangres");
    LeCratereAuxOmbresGrises = new L.Marker(new L.latLng(LeCratereAuxOmbresGrisesLoc), {title: "Le cratère aux ombres grises"});
    LeCratereAuxOmbresGrises.bindPopup(
        "<h2>Le cratère aux ombres grises</h2>"+
        "<h3>EdL : Scénario 06 - HÉRITAGES, 1ère partie</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Habitants : </b>Les ombres d’une population disparue</li>'+
        '<li><b>Chagar 115 : </b><a href="http://bit.ly/Chagar-115" target="_blank">Scénario 06 - HÉRITAGES, 1ère partie</a></li>'+
        '</ul></li></ul>'
    );
    LeCratereAuxOmbresGrises_CollinesSurdin = L.polyline([LeCratereAuxOmbresGrisesLoc, CollinesSurdinLoc]);
    LeCratereAuxOmbresGrises_CollinesSurdin.bindPopup("Quelques jours pour dortir des Sangres et retrouver la piste");
    CollinesSurdin_Pole = L.polyline([CollinesSurdinLoc, [-77,-79], [-71,-65], [-49,-43], infosVilles["Vhern"].loc, infosVilles["La Perrière"].loc, infosVilles["Pôle"].loc]);
    Pole06 = new L.Marker(new L.latLng(infosVilles["Pôle"].loc), {title: "Pôle"});
    Pole06.bindPopup(createInfosVille("Pôle", true));
    Pole_GarderonEtMinstreDesAndelles = L.polyline([infosVilles["Pôle"].loc, infosVilles["La Perrière"].loc, infosVilles["Vhern"].loc, [-50,-34], [-57,-34], [-79,-21], GarderonEtMinstreDesAndellesLoc]);
    GarderonEtMinstreDesAndelles = new L.Marker(new L.latLng(GarderonEtMinstreDesAndellesLoc), {title: "Ancien domaine Garderon-et-Minstre des Andelles"});
    GarderonEtMinstreDesAndelles.bindPopup(
        "<h2>Ancien domaine Garderon-et-Minstre des Andelles</h2>"+
        "<h3>EdL : Scénario 07 - MANGE-COULEURS</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
        '<li><b>Habitants : </b> Un gros bordel dont : ' +
        '<ul>' +
        '<li>Humbert Garderon-et-Minstre des Andelles et sa famille</li>' +
        '<li>Plusieurs tribus sekekers</li>' +
        '<li>Une prolifération anormale de Deinonychus</li>' +
        '<li>Des chasseurs appâtés par la surabondance de cuir de Deinonychus</li>' +
        '<li>Locaux</li>' +
        '<li>Mercenaires de Serne appelés par les locaux</li>' +
        '</ul>' +
        '</li>'+
        '<li><b>Chagar 119 : </b><a href="http://bit.ly/Chagar-119" target="_blank">Scénario 07 - MANGE-COULEURS, 1ère partie</a></li>'+
        '</ul></li></ul>'
    );
    GarderonEtMinstreDesAndelles_Branlebouc = L.polyline([GarderonEtMinstreDesAndellesLoc, infosVilles["Pelant"].loc, infosVilles["Grand-Pont"].loc, [-161.5,40] , BranleboucLoc]);
    Branlebouc = new L.Marker(new L.latLng(BranleboucLoc), {title: "Branlebouc sur Rogance"});
    Branlebouc.bindPopup(
        "<h2>Branlebouc sur Rogance</h2>"+
        "<h3>EdL : Scénario 07 - MANGE-COULEURS</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">' +
        '<li><b>Affiliation : </b>Vorozion</li>'+
        '<li><b>Chagar 120 : </b><a href="http://bit.ly/Chagar-119" target="_blank">Scénario 07 - MANGE-COULEURS, 2ème partie</a></li>'+
        '<li><b>Chagar 121 : </b><a href="http://bit.ly/Chagar-121" target="_blank">LA SORCELLERIE GADHARE</a></li>'+
        '<li><b>Chagar 122 : </b><a href="http://bit.ly/Chagar-122" target="_blank">Scénario 07 - MANGE-COULEURS, 3ème partie</a></li>'+
        '</ul></li></ul>'
    );
    Branlebouc_Pairne = L.polyline([BranleboucLoc, [-178.5,36], [-183,32], [-193,29], [-202,28], PairneLoc]);
    Branlebouc_Pairne.bindPopup("Deux petites semaines de voyage calme en bac.");
    Pairne = new L.Marker(new L.latLng(PairneLoc), {title: "Pairne, comptoir alweg"});
    Pairne.bindPopup(
        "<h2>Pairne, comptoir alweg</h2>"+
        "<h3>EdL : Scénario 07 - MANGE-COULEURS</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">' +
        '<li><b>Affiliation : </b>Alweg</li>'+
        '<li><b>Chagar 120 : </b><a href="http://bit.ly/Chagar-120" target="_blank">Scénario 07 - MANGE-COULEURS, 2ème partie</a></li>'+
        '<li><b>Chagar 121 : </b><a href="http://bit.ly/Chagar-121" target="_blank">LA SORCELLERIE GADHARE</a></li>'+
        '<li><b>Chagar 122 : </b><a href="http://bit.ly/Chagar-122" target="_blank">Scénario 07 - MANGE-COULEURS, 3ème partie</a></li>'+
        '<li><b>Chagar 123 : </b><a href="http://bit.ly/Chagar-123" target="_blank">Scénario 07 - MANGE-COULEURS, 4ème partie</a></li>'+
        '<li><b>Chagar 124 : </b><a href="http://bit.ly/Chagar-124" target="_blank">Scénario 07 - MANGE-COULEURS, 5ème partie</a></li>'+
        '</ul></li></ul>'
    );
    Pairne_Arouch = L.polyline([PairneLoc, ArouchLoc]);
    Pairne_Arouch.bindPopup("Une centaine de kilomètres à peine – mais à travers la jungle, cela peut tout de même prendre une bonne semaine, \n" +
        "et encore, avec l’aide d’un guide et sans trop de malchance.");
    Arouch = new L.Marker(new L.latLng(ArouchLoc), {title: "Arouch, village de jungle très quelconque"});
    Arouch.bindPopup(
        "<h2>Arouch, village de jungle très quelconque</h2>"+
        "<h3>EdL : Scénario 07 - MANGE-COULEURS</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">' +
        '<li><b>Affiliation : </b>Alweg</li>'+
        '<li><b>Habitants : </b>' +
        '<ul>' +
        '<li>Chasseurs désœuvrés, énormes moustiques,</li>' +
        '<li>Sekeker de la Reine Enflammée</li>' +
        '</ul>' +
        '</li>' +
        '<li><b>Chagar 121 : </b><a href="http://bit.ly/Chagar-121" target="_blank">LA SORCELLERIE GADHARE</a></li>'+
        '<li><b>Chagar 124 : </b><a href="http://bit.ly/Chagar-124" target="_blank">Scénario 07 - MANGE-COULEURS, 5ème partie</a></li>'+
        '</ul></li></ul>'
    );
    Arouch_LaCiteDesFalaises = L.polyline([ArouchLoc, LaCiteDesFalaisesLoc]);
    LaCiteDesFalaises = L.circle(LaCiteDesFalaisesLoc, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 5
    });
    LaCiteDesFalaises.bindPopup(
        "<h2>La Cité des Falaises</h2>"+
        "<h3>EdL : Scénario 07 - MANGE-COULEURS</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">' +
        '<li><b>Chagar 124 : </b><a href="http://bit.ly/Chagar-124" target="_blank">Scénario 07 - MANGE-COULEURS, 5ème partie</a></li>'+
        '<li><b>Chagar 125 : </b><a href="http://bit.ly/Chagar-125" target="_blank">Scénario 07 - MANGE-COULEURS, 6ème partie</a></li>'+
        '<li><b>Chagar 126 : </b><a href="http://bit.ly/Chagar-126" target="_blank">Scénario 07 - MANGE-COULEURS, 7ème partie</a></li>'+
        '<li><b>Chagar 129 : </b><a href="http://bit.ly/Chagar-129" target="_blank">Scénario 07 - MANGE-COULEURS, 10ème partie</a></li>'+
        '</ul></li></ul>'
    );
    LaCiteDesFalaises_LaMaigne = L.polyline([LaCiteDesFalaisesLoc, LaMaigneLoc]);
    LaMaigne = new L.Marker(new L.latLng(LaMaigneLoc), {title: "La Maigne"});
    LaMaigne.bindPopup(
        "<h2>La Maigne</h2>"+
        "<h3>EdL : Scénario 07 - MANGE-COULEURS, 7ème partie</h3>"+
        '<ul>'+
        '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">' +
        '<li><b>Affiliation : </b>Gadhar</li>'+
        '<li><b>Habitants : </b>' +
        '<ul>' +
        '<li>Conseil des Sages,</li>' +
        '<li>Plusieurs tribus</li>' +
        '<li>Les Stratèges</li>' +
        '<li>Le Sorcier-blanc</li>' +
        '</ul>' +
        '</li>' +
        '<li><b>Chagar 127 : </b><a href="http://bit.ly/Chagar-127" target="_blank">Scénario 07 - MANGE-COULEURS, 8ème partie</a></li>'+
        '<li><b>Chagar 128 : </b><a href="http://bit.ly/Chagar-128" target="_blank">Scénario 07 - MANGE-COULEURS, 9ème partie</a></li>'+
        '<li><b>Chagar 129 : </b><a href="http://bit.ly/Chagar-129" target="_blank">Scénario 07 - MANGE-COULEURS, 10ème partie</a></li>'+
        '</ul></li></ul>'
    );
    LaMaigne_LaCiteDesFalaises = L.polyline([LaMaigneLoc, LaCiteDesFalaisesLoc]);
}