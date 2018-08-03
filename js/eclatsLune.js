/*********************************************************************
 *                     Infos Eclats Lune JS                          *
 * Author     : Cyol http://cyol.fr/blog                             *
 * Licence    : CC BY http://creativecommons.org/licenses/by/3.0/fr/ *
 *********************************************************************/

const ECLAT_LUNE_LAYER_NAME = 'Eclats de Lune <span class="reserve">(Réservé MJ)</span>';

function createLayerEclatLune()
{
    //Vaseux : Scénario 1, parties 1 et 2 et bonus 1 ?
    //@TODO
    var VaseuxLoc = [-135, -87];
    var VaseuxDeChagre = L.circle(VaseuxLoc, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 5
    });
    VaseuxDeChagre.bindPopup(
        "<h2>Vaseux de Chagre</h2>"+
        "<h3>EdL : Scénario 1 - les excavées</h3>"+
        '<ul>'+
            '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
            '<li><b>Habitants : </b>Trois pelés et un tondu... Sans compter les dégénérés et les chèvres.</li>'+
            '<li><b>Chagar 92 : </b><a href="http://bit.ly/Chagar-92" target="_blank">1ère partie</a></li>'+
            '<li><b>Chagar 93 : </b><a href="http://bit.ly/Chagar-93" target="_blank">2ème partie</a></li>'+
            '<li><b>Chagar 97 : </b><a href="http://bit.ly/Chagar-97" target="_blank">Bonus #1</a></li>'+
        '</ul></li></ul>'
    );
    var Vaseux_Pole = L.polyline([VaseuxLoc, infosVilles["Pôle"].loc]);
    var Pole = new L.Marker(new L.latLng(infosVilles["Pôle"].loc), {title: "Pôle"});
    Pole.bindPopup(createInfosVille("Pôle", true));
    var MalbesseLoc = [13.5, 47];
    var Pole_Malbesse = L.polyline([infosVilles["Pôle"].loc, MalbesseLoc]);
    Pole_Malbesse.bindPopup("~450km, 20/12 jours");
    var Malbesse = new L.Marker(new L.latLng(MalbesseLoc), {title: "Malbesse"});
    Malbesse.bindPopup(
        "<h2>Malbesse</h2>"+
            "<h3>EdL : Scénario 1 - les excavées</h3>"+
            '<ul>'+
                '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
                '<li><b>Habitants : </b>Noblesse de Pôle Gantés-de-Rémillons. Bourg, 5000 habitants.</li>'+
                '<li><b>Chagar 94 : </b><a href="http://bit.ly/Chagar-94" target="_blank">3ème partie</a></li>'+
                '<li><b>Chagar 95 : </b><a href="http://bit.ly/Chagar-95" target="_blank">4ème partie</a></li>'+
                '<li><b>Chagar 98 : </b><a href="http://bit.ly/Chagar-97" target="_blank">Bonus #2</a></li>'+
            '</ul></li></ul>'
    );
    var Malbesse_Berkner = L.polyline([MalbesseLoc, infosVilles["Berkner"].loc]);
    Malbesse_Berkner.bindPopup("~480km, 25/15 jours");
    var Berkner = new L.Marker(new L.latLng(infosVilles["Berkner"].loc), {title: "Berkner"});
    Berkner.bindPopup(createInfosVille("Berkner", true));
    var Berkner_CitadelleDesGlaces = L.polyline([infosVilles["Berkner"].loc, infosVilles["Citadelle des Glaces"].loc]);
    Berkner_CitadelleDesGlaces.bindPopup("~500km, 28/16 jours<br /><i>ou 35 jours avec un chariot</i>");
    var CitadelleDesGlaces = new L.Marker(new L.latLng(infosVilles["Citadelle des Glaces"].loc), {title: "Citadelle des Glaces"});
    CitadelleDesGlaces.bindPopup(createInfosVille("Citadelle des Glaces", true));
    var CitadelleDesGlaces_Belgrano = L.polyline([infosVilles["Citadelle des Glaces"].loc, infosVilles["Belgrano"].loc]);
    CitadelleDesGlaces_Belgrano.bindPopup("55/30 jours");
    var Belgrano = new L.Marker(new L.latLng(infosVilles["Belgrano"].loc), {title: "Belgrano"});
    Belgrano.bindPopup(createInfosVille("Belgrano", true));
    var Belgrano_CitadelleDesGlaces = L.polyline([infosVilles["Citadelle des Glaces"].loc, infosVilles["Belgrano"].loc]);
    Belgrano_CitadelleDesGlaces.bindPopup("55/30 jours");
    var CitadelleDesGlaces_Markony = L.polyline([infosVilles["Citadelle des Glaces"].loc, [57.5,43], [62.5,67.5], [81.5,61], [104.5,65], infosVilles["Markony"].loc]);
    CitadelleDesGlaces_Markony.bindPopup("Longer la côte de la Marche de l'ours :<br />~350km, 15/20 jours<br />Longer la côte des Forêts blanches :<br />~200km, 8/12 jours<br />Rallier Markony depuis les pieds de l'Albarrière :<br />~100km, 4/6 jours");
    var Markony = new L.Marker(new L.latLng(infosVilles["Markony"].loc), {title: "Markony"});
    Markony.bindPopup(createInfosVille("Markony", true));
    var LesPassesMaltorsesLoc = [137,42.5];
    var Markony_LesPassesMaltorses = L.polyline([infosVilles["Markony"].loc, LesPassesMaltorsesLoc]);
    Markony_LesPassesMaltorses.bindPopup("10/15 jours");
    var LesPassesMaltorses = new L.Marker(new L.latLng(LesPassesMaltorsesLoc), {title: "Les Passes Maltorses"});
    LesPassesMaltorses.bindPopup(
        "<h2>Les Passes Maltorses</h2>"+
            "<h3>EdL : Scénario 2 - une légende</h3>"+
            '<ul>'+
            '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
            '<li><b>Habitants : </b>Personne à part quelques Thunks</li>'+
            '<li><b>Chagar 100 : </b><a href="http://bit.ly/Chagar-100" target="_blank">2ème partie</a></li>'+
            '</ul></li></ul>'+
            "<h3>EdL : Scénario 3 - chaleurs bleues</h3>"+
            '<ul>'+
            '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
            '<li><b>Habitants : </b>Clan Thunk des Merles Gris</li>'+
            '<li><b>Chagar 102 : </b><a href="http://bit.ly/Chagar-102" target="_blank">1ère partie</a></li>'+
            '<li><b>Chagar 103 : </b><a href="http://bit.ly/Chagar-103" target="_blank">2ème partie</a></li>'+
            '</ul></li></ul>'+
            "<h3>EdL : Scénario 4 - promesses de mort</h3>"+
            '<ul>'+
            '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
            '<li><b>Habitants : </b>Clan Thunk des Merles Gris</li>'+
            '<li><b>Chagar 103 : </b><a href="http://bit.ly/Chagar-103" target="_blank">1ère partie</a></li>'+
            '<li><b>Chagar 104 : </b><a href="http://bit.ly/Chagar-104" target="_blank">2ème partie</a></li>'+
            '</ul></li></ul>'
    );
    var LePasAuxHachesLoc = [130,24];
    var LesPassesMaltorses_LePasAuxHaches = L.polyline([LesPassesMaltorsesLoc, [134.5,32], LePasAuxHachesLoc]);
    LesPassesMaltorses_LePasAuxHaches.bindPopup("~200km, 10/15 jours<br />Traversée de La Passe des morts-assis, la zone de combat, les terres occupées");
    var LePasAuxHaches = new L.Marker(new L.latLng(LePasAuxHachesLoc), {title: "Le Pas Aux Haches"});
    LePasAuxHaches.bindPopup(
        "<h2>Le Pas Aux Haches</h2>"+
            "<h3>EdL : Scénario 4 - promesses de mort</h3>"+
            '<ul>'+
            '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
            '<li><b>Habitants : </b>Village, 500 habitants.</li>'+
            '<li><b>Chagar 104 : </b><a href="http://bit.ly/Chagar-104" target="_blank">1ère partie</a></li>'+
            '</ul></li></ul>'
    );
    var LePasAuxHaches_Byrd = L.polyline([LePasAuxHachesLoc, infosVilles["Byrd"].loc]);
    LePasAuxHaches_Byrd.bindPopup("~300km, 6/10 jours");
    var Byrd = new L.Marker(new L.latLng(infosVilles["Byrd"].loc), {title: "Byrd"});
    Byrd.bindPopup(createInfosVille("Byrd", true));
    var PondeSauneLoc = [103,-5];
    var Byrd_PondeSaune = L.polyline([infosVilles["Byrd"].loc, PondeSauneLoc]);
    Byrd_PondeSaune.bindPopup("4/8 jours");
    var PondeSaune = new L.Marker(new L.latLng(PondeSauneLoc), {title: "Le Pied du Géant, PondeSaune"});
    PondeSaune.bindPopup(
        "<h2>Le Pied du Géant, PondeSaune</h2>"+
            "<h3>EdL : Scénario 4 - promesses de mort</h3>"+
            '<ul>'+
            '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
            '<li><b>Habitants : </b>Village, 500 habitants.</li>'+
            '<li><b>Chagar 105 : </b><a href="http://bit.ly/Chagar-105" target="_blank">2ème partie</a></li>'+
            '</ul></li></ul>'
    );

    var LeBoisDePercechargneLoc = [79, -10.5];
    var PondeSaune_LeBoisDePercechargneLoc = L.polyline([PondeSauneLoc, LeBoisDePercechargneLoc]);
    var LeBoisDePercechargne = L.circle(LeBoisDePercechargneLoc, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 5
    });
    LeBoisDePercechargne.bindPopup(
        "<h2>Le bois de Percechargne</h2>"+
            "<h3>EdL : Scénario 4 - promesses de mort</h3>"+
            '<ul>'+
            '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">'+
            '<li><b>Habitants : </b>La Goulue...</li>'+
            '<li><b>Chagar 105 : </b><a href="http://bit.ly/Chagar-105" target="_blank">2ème partie</a></li>'+
            '</ul></li></ul>'
    );

    return  L.layerGroup([VaseuxDeChagre, Vaseux_Pole, Pole, Pole_Malbesse, Malbesse, Malbesse_Berkner, Berkner, Berkner_CitadelleDesGlaces, CitadelleDesGlaces, CitadelleDesGlaces_Belgrano, Belgrano, Belgrano_CitadelleDesGlaces, CitadelleDesGlaces, CitadelleDesGlaces_Markony, Markony, Markony_LesPassesMaltorses, LesPassesMaltorses, LesPassesMaltorses_LePasAuxHaches, LePasAuxHaches, LePasAuxHaches_Byrd, Byrd, Byrd_PondeSaune, PondeSaune, PondeSaune_LeBoisDePercechargneLoc, LeBoisDePercechargne]);
}