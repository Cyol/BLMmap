/*********************************************************************
 *                     Carte Bloodlust CSS                           *
 * Author     : Cyol http://cyol.fr/blog                             *
 * Licence    : CC BY http://creativecommons.org/licenses/by/3.0/fr/ *
 *********************************************************************/
var cheminSource    = "data/ville.xml";

var dataVille = [];
var infosVilles = [];
var map;
var markerResultat;

function $oChagar(num, titre, visibilite){
    function oC_init(num, titre, visibilite){
        this.CNum = num;
        this.CTitre = titre;
        this.CVisibilite = visibilite;
    }
    this.oC_init = oC_init;

    //Initialisation à la creation
    this.oC_init(num, titre, visibilite);

    function oC_getNum(){
        return this.CNum;
    }
    this.oC_getNum = oC_getNum;
    function oC_getTitre(){
        return this.CTitre;
    }
    this.oC_getTitre = oC_getTitre;
    function oC_getVisibilite(){
        return this.CVisibilite;
    }
    this.oC_getVisibilite = oC_getVisibilite;

    function oC_getUrl(){
        return "http://bit.ly/Chagar-" + this.CNum;
    }
    this.oC_getUrl = oC_getUrl;

    function oC_getLink(){
        return '<a href="'+this.oC_getUrl()+'" target="_blank">'+this.CTitre+'</a>';
    }
    this.oC_getLink = oC_getLink;
}

function displayDataVille($data)
{
    var nom = $data.children("nom").text();
    var $coordonnees = $data.children("coordonnees");
    var lat, lng, affiliation, habitants, divers, chagars;
    lat = $coordonnees.find("lat").text();
    lng = $coordonnees.find("lng").text();
    affiliation = $data.children("affiliation").text();
    habitants = $data.children("habitants").text();
    divers = $data.children("divers").text();
    var $chagars = $data.children("chagars");
    chagars = [];
    $chagars.find("chagar").each( function(){
        chagars.push(new $oChagar($(this).attr("num"), $(this).text(), $(this).attr("visibilite")));
    } );
    dataVille.push({"loc" : [lat, lng], "title" : nom});
    infosVilles[nom] = {"affiliation" : affiliation, "habitants" : habitants, "divers" : divers, "chagars" : chagars};
}

function createLayerEclatLune()
{
    var VaseuxDeChagre = L.circle([-135, -87], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 5
    });
    VaseuxDeChagre.bindPopup(
        "<h2>EdL : Scénario 1 - les excavées</h2>"+
        "<h3>Vaseux-de-Chagre</h3>"+
        '<ul>'+
            '<li><a href="http://bit.ly/Chagar-92" target="_blank">1ère partie</a></li>'+
            '<li><a href="http://bit.ly/Chagar-93" target="_blank">2ème partie</a></li>'+
        '</ul>'
    );

    return  L.layerGroup([VaseuxDeChagre]);
}

function createInfosVille(nomVille)
{
    var affiliation = infosVilles[nomVille].affiliation;
    var habitants = infosVilles[nomVille].habitants;
    var divers = infosVilles[nomVille].divers;
    var chagars = infosVilles[nomVille].chagars;
    var infos = '<h2>' + nomVille + '</h2>';
    infos += '<ul>';
    if(affiliation !== "")
    {
        infos += '<li><b>Affiliation : </b>'+affiliation+'</li>';
    }
    if(habitants !== "")
    {
        infos += '<li><b>Habitants : </b>'+habitants+'</li>';
    }
    if(divers !== "")
    {
        infos += '<li><b>Divers : </b>'+divers+'</li>';
    }
    if(chagars.length)
    {
        for(var i=0; i<chagars.length; i++)
        {
            infos += '<li><b>Chagar ' + chagars[i].oC_getNum() + ' : </b>'+chagars[i].oC_getLink();
            if(chagars[i].oC_getVisibilite() === "mj")
            {
                infos += ' <span class="reserve">(Réservé MJ)</span>';
            }
            infos += '</li>';
        }
    }
    infos += '</ul>';

    return infos;
}

function createMap()
{
    var mapMinZoom = 0;
    var mapMaxZoom = 5;
    var customCRS = L.extend(L.CRS.Simple, {
        projection: L.extend(L.Projection.LonLat, {
            bounds: L.bounds([-3076, -2682], [3077, 2683])
        }),
        //333 et 302 pour mettre Pôle en 0,0; le -1 pour y positif vers le haut
        transformation: new L.Transformation(1, 333, -1, 302),
        scale: function (zoom) {
            return Math.pow(2, zoom - 2);
        },
        infinite: false
    });

    var VillesGroupe = [];
    for (var i in dataVille) {
        var title = dataVille[i].title,	//value searched
            loc = dataVille[i].loc,		//position found
            marker = new L.Marker(new L.latLng(loc), {title: title});//se property searched
            marker.bindPopup(createInfosVille(title));
        VillesGroupe.push(marker);
    }

    var layerEclatsLune = createLayerEclatLune();

    var VillesLayer = L.layerGroup(VillesGroupe);
    var overlayMaps = {
        "Villes": VillesLayer
        /* @TODO mettre un layer Eclat de Lune,
        "EclatsLune": layerEclatsLune*/
    };

    var baseLayer = L.tileLayer('tiles/{z}/{x}/{y}.png', {
        minZoom: mapMinZoom, maxZoom: mapMaxZoom,
        attribution: 'Création <a href="http://cyol.fr/blog">Cyol</a>, carte par &copy; <a href="https://www.orbe.be/aides-de-jeux/bloodlust/81-tanaephis-s-offre-a-vous">Balt</a>',
        noWrap: true,
        tms: false
    });

    map = L.map('map', {
        maxZoom: mapMaxZoom,
        minZoom: mapMinZoom,
        crs: customCRS,
        zoom: mapMaxZoom,
        center: new L.latLng(dataVille[0].loc),
        layers : [baseLayer],
        zoomControl:false
    });

    function localData(text, callResponse)
    {
        //here can use custom criteria or merge data from multiple layers
        callResponse(dataVille);
        return {	//called to stop previous requests on map move
            abort: function() {
                console.log('aborted request:'+ text);
            }
        };
    }

    //Pour customiser les suggestions de la recherche
    //@TODO à creuser pour présenter l'affiliation par couleur ?
    function customTip(text,val) {
        return '<a href="#">'+text+'</a>';
    }

    var markersLayer = new L.LayerGroup();
    map.addLayer(markersLayer);
    var controlSearch = new L.Control.Search({
        sourceData: localData,
        buildTip: customTip,
        textPlaceholder: 'Ville...',
        zoom: 4,
        markerLocation: true,
        marker: {
            icon: false,
            circle: false
        }
    });

    controlSearch.on('search:locationfound', function(e) {
        if(typeof markerResultat !== "undefined")
        {
            map.removeLayer(markerResultat);
        }
        var loc = e.latlng;
        var title = e.text;
        markerResultat = new L.Marker(new L.latLng(loc), {title: title});
        markerResultat.bindPopup(createInfosVille(title));
        markerResultat.addTo(map).openPopup();
    });

    //Ajout d'un outil pour le contrôle des layers à afficher, ceux de overlayMaps sont facultatifs avec checkbox
    //le null correspond aux layer obligatoire, apr exemple si on utilise plusieurs fond pour les cartes (couleur, noir&blanc, ...)
    L.control.layers(null, overlayMaps, {position:'topleft'}).addTo(map);
    //Ajout du controle de search
    map.addControl(controlSearch);
    //Ajout du controle de zoom pour qu'il soit sous le controle de layer
    L.control.zoom({position:'topleft'}).addTo(map);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    if($_GET('c'))
    {
        map.on('click', onMapClick);
    }


}

function $_GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}

$(document).ready(function ()
{
    $.ajax( {
            type    : "GET",
            url     : cheminSource,
            dataType: "xml",
            success : function(xml){
                $xml = $(xml);
                $xml.find("lieu").each(
                    function()
                    {
                        displayDataVille($(this));
                    }
                );

                createMap();
            }
        }
    );


});