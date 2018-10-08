/*********************************************************************
 *                     Carte Bloodlust JS                            *
 * Author     : Cyol http://cyol.fr/blog                             *
 * Licence    : CC BY http://creativecommons.org/licenses/by/3.0/fr/ *
 *********************************************************************/
var cheminSource    = "data/ville.xml";

var dataVilles = [];
var infosVilles = [];
var dataRegions = [];
var infosRegions = [];
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

function lienWiki(nom, type)
{
	return '<b><a href="http://bloodlustmetal.cyol.fr/geographie:'+type+':'+chaineMinusculeSansAccent(nom, true)+'" target="_blank">Wiki Bloodlust</a></b>'
}

function displaydataVilles($data)
{
	var nom = $data.children("nom").text();
	var type = $data.children("type").text();
	var $coordonnees = $data.children("coordonnees");
	var lat, lng, affiliation, habitants, divers, chagars, infosEdL;
	lat = $coordonnees.children("lat").text();
	lng = $coordonnees.children("lng").text();
	var $nomsAlternatifs = $data.children("nomsAlternatifs");
	var nomsAlternatifs = "";
	$nomsAlternatifs.find("nom").each( function(){
		nomsAlternatifs+=$(this).text();
	});
	affiliation = $data.children("affiliation").text();
	habitants = $data.children("habitants").text();
	divers = $data.children("divers").text();
	var $chagars = $data.children("chagars");
	chagars = [];
	$chagars.find("chagar").each( function(){
		chagars.push(new $oChagar($(this).attr("num"), $(this).text(), $(this).attr("visibilite")));
	} );
	//Liste des Chagars Eclats de Lune
	var $infosEdL = $data.children("infosEdL");
	infosEdL = [];
	$infosEdL.find("chagar").each( function(){
		infosEdL.push(new $oChagar($(this).attr("num"), $(this).text(), $(this).attr("visibilite")));
	} );

	dataVilles.push({"loc" : [lat, lng], "title" : nom, "nomsAlternatifs" : nomsAlternatifs, "type" : type});
	infosVilles[nom] = {"loc" : [lat, lng], "affiliation" : affiliation, "habitants" : habitants, "divers" : divers, "chagars" : chagars, "infosEdL" : infosEdL, "type" : type};
}

function displaydataRegions($data)
{
	var nom = $data.children("nom").text();
	var type = $data.children("type").text();
	var $coordonnees = $data.children("coordonnees");
	var lat, lng, coordLat, coordLng;
	lat = $coordonnees.children("lat").text();
	lng = $coordonnees.children("lng").text();
	coordonnees = [];
	$coordonnees.find("coordonnee").each( function(){
		coordLat = $(this).children("lat").text();
		coordLng = $(this).children("lng").text();
		coordonnees.push([coordLat, coordLng]);
	} );
	var $nomsAlternatifs = $data.children("nomsAlternatifs");
	var nomsAlternatifs = "";
	$nomsAlternatifs.find("nom").each( function(){
		nomsAlternatifs+=$(this).text();
	});
	var divers, chagars;
	divers = $data.children("divers").text();
	var $chagars = $data.children("chagars");
	chagars = [];
	$chagars.find("chagar").each( function(){
		chagars.push(new $oChagar($(this).attr("num"), $(this).text(), $(this).attr("visibilite")));
	} );
	dataRegions.push({"loc": [lat,lng], "coordonnees": coordonnees, "title": nom, "nomsAlternatifs" : nomsAlternatifs, "type" : type});
	infosRegions[nom] = {"loc": [lat,lng], "divers" : divers, "chagars" : chagars, "type" : type};
}

function createInfosRegion(nomRegion)
{
    var divers = infosRegions[nomRegion].divers;
    var chagars = infosRegions[nomRegion].chagars;
    var infos = '<h2>' + nomRegion + '</h2>';
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
	infos += lienWiki(nomRegion, 'regions');
    return infos;
}

function createInfosVille(nomVille, edl)
{
    if(typeof edl === "undefined")
    {
        edl = false;
    }
    var affiliation = infosVilles[nomVille].affiliation;
    var habitants = infosVilles[nomVille].habitants;
    var divers = infosVilles[nomVille].divers;
    var chagars = infosVilles[nomVille].chagars;
    var infosEdL = infosVilles[nomVille].infosEdL;
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
    if(edl && infosEdL.length)
    {
        infos += '<li><b>Eclats de Lune</b> <span class="reserve">(Réservé MJ)</span> :<ul class="chagarEdL">';
        for(var i=0; i<infosEdL.length; i++)
        {
            infos += '<li><b>Chagar ' + infosEdL[i].oC_getNum() + ' : </b>'+infosEdL[i].oC_getLink();
        }
        infos += '</ul></li>';

    }
    infos += '</ul>';
	infos += lienWiki(nomVille, 'villes');

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
    for (var i in dataVilles) {
        var title = dataVilles[i].title,	//value searched
            loc = dataVilles[i].loc,		//position found
            marker = new L.Marker(new L.latLng(loc), {title: title});//se property searched
            marker.bindPopup(createInfosVille(title));
        VillesGroupe.push(marker);
    }

    var VillesLayer = L.layerGroup(VillesGroupe);
	
    var RegionsGroupe = [];
    for (var i in dataRegions) {
        var title = dataRegions[i].title,	//value searched
			polygon = new L.polygon(dataRegions[i].coordonnees);
		polygon.bindPopup(createInfosRegion(title));
        RegionsGroupe.push(polygon);
    }

    var RegionsLayer = L.layerGroup(RegionsGroupe);
	
    //création des informations pour Eclats de Lune
    createLayerEclatsLune();
    var eclatsDeLuneGroup = L.layerGroup([]);
    var layerEdLScenario01 = createLayerEdLScenario01();
    var layerEdLScenario02 = createLayerEdLScenario02();
    var layerEdLScenario03 = createLayerEdLScenario03();
    var layerEdLScenario04 = createLayerEdLScenario04();
    var layerEdLScenario05 = createLayerEdLScenario05();
    var layerEdLScenario05bis = createLayerEdLScenario05bis();
    var layerEdLScenario06 = createLayerEdLScenario06();
    var layerEdLScenario07 = createLayerEdLScenario07();
    var overlayMaps = {};
    overlayMaps["Villes"] = VillesLayer;
    overlayMaps["Regions"] = RegionsLayer;
    overlayMaps[ECLATS_LUNE_LAYER_NAME] = eclatsDeLuneGroup;
    overlayMaps[ECLATS_LUNE_LAYER_SC01_NAME] = layerEdLScenario01;
    overlayMaps[ECLATS_LUNE_LAYER_SC02_NAME] = layerEdLScenario02;
    overlayMaps[ECLATS_LUNE_LAYER_SC03_NAME] = layerEdLScenario03;
    overlayMaps[ECLATS_LUNE_LAYER_SC04_NAME] = layerEdLScenario04;
    overlayMaps[ECLATS_LUNE_LAYER_SC05_NAME] = layerEdLScenario05;
    overlayMaps[ECLATS_LUNE_LAYER_SC06_NAME] = layerEdLScenario06;
    overlayMaps[ECLATS_LUNE_LAYER_SC07_NAME] = layerEdLScenario07;

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
        center: new L.latLng(infosVilles["Pôle"].loc),
        layers : [baseLayer],
        zoomControl:false
    });

    function localData(text, callResponse)
    {
        //here can use custom criteria or merge data from multiple layers
		datas = dataVilles.concat(dataRegions);
        callResponse(datas);
        return {	//called to stop previous requests on map move
            abort: function() {
            }
        };
    }

    function formatData(json) {	//default callback for format data to indexed data
        var jsonret = {};
        for(var i in json)
        {
            jsonret[json[i].title] = L.latLng(json[i].loc);
            jsonret[json[i].title].nomsAlternatifs = json[i].nomsAlternatifs;
            jsonret[json[i].title].type = json[i].type;
        }
        return jsonret;
    }

    function filtreRecherche (text,records) {
        var regSearch, frecords = {};
        text = text.replace(/[.*+?^${}()|[\]\\]/g, '');  //sanitize remove all special characters
        if(text==='')
            return [];
        //La même mais pour remplacer les accents
        text = chaineMinusculeSansAccent(text);
        regSearch = new RegExp(text, 'i');
        for(var key in records) {
            //Recherche dans le dictionnaire : la key (nom de base) et les noms alternatifs
            var dictionnaire = chaineMinusculeSansAccent(key);
            dictionnaire+=records[key].nomsAlternatifs;
            if( regSearch.test(dictionnaire) )
			{
                frecords[key]= records[key];
			}
        }

        return frecords;
    }

    //Pour customiser les suggestions de la recherche
    //@TODO à creuser pour présenter l'affiliation par couleur  => Ajouter l'info comme nomsAlternatifs pour l'exploiter
    function customTip(text,val) {
        return '<li class="'+val.type+'"><b>'+text+'</b> <i>('+val.type+')</i></li>';
    }

    var markersLayer = new L.LayerGroup();
    map.addLayer(markersLayer);
    var controlSearch = new L.Control.Search({
        sourceData: localData,
        formatData: formatData,
        buildTip: customTip,
		firstTipSubmit:true,
        textPlaceholder: 'Lieu...',
		textErr: 'Lieu non trouvé...',
		textCancel: 'Annuler',
        zoom: 4,
        markerLocation: true,
        initial : false,
        filterData: filtreRecherche,
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
		onSearchFound(e.text, e.latlng);
    });

    //Ajout d'un outil pour le contrôle des layers à afficher, ceux de overlayMaps sont facultatifs avec checkbox
    //le null correspond aux layer obligatoire, par exemple si on utilise plusieurs fond pour les cartes (couleur, noir&blanc, ...)
    L.control.layers(null, overlayMaps, {position:'topleft'}).addTo(map);

    //On cache les liens Eclats de Lune dans le contrôle des layers
    $(".leaflet-control-layers-overlays>label:has(span.EdLGroupe)").addClass("layerEdLGroupe");
    $(".layerEdLGroupe input").hide();
    $(".leaflet-control-layers-overlays>label:has(span.EdLEtape)").addClass("layerEdL");

    //Ajout du controle de search
    map.addControl(controlSearch);

    //Ajout du controle de zoom pour qu'il soit sous le controle de layer
    L.control.zoom({position:'topleft'}).addTo(map);
    map.on('overlayadd', function(eo) {
        switch(eo.name)
        {
            case ECLATS_LUNE_LAYER_SC01_NAME :
                layerEdLScenario01.on('snakestart', function (ev) {
                    //On centre sur Vaseux
                    map.setView(new L.latLng([-135, -87]), 3, {animate:true, duration:3});
                })
                .on('snakeend', function (ev) {
                    //On centre sur La Citadelle des Glaces
                    map.setView(new L.latLng(infosVilles["Citadelle des Glaces"].loc), 4, {animate:true, duration:3});
                })
                .snakeIn();
                break;
            case ECLATS_LUNE_LAYER_SC02_NAME :
                layerEdLScenario02.on('snakestart', function (ev) {
                    //On centre sur La Citadelle des Glaces
                    map.setView(new L.latLng(infosVilles["Citadelle des Glaces"].loc), 3, {animate:true, duration:3});
                })
                .on('snakeend', function (ev) {
                    //On centre sur LesPassesMaltorses
                    map.setView(new L.latLng([137,42.5]), 4, {animate:true, duration:3});
                })
                .snakeIn();
                break;
            case ECLATS_LUNE_LAYER_SC03_NAME :
                //On centre sur LesPassesMaltorses
                map.setView(new L.latLng([137,42.5]), 4, {animate:true, duration:3});
                break;
            case ECLATS_LUNE_LAYER_SC04_NAME :
                layerEdLScenario04.on('snakestart', function (ev) {
                    //On centre sur LesPassesMaltorses
                    map.setView(new L.latLng([137,42.5]), 3, {animate:true, duration:3});
                })
                .on('snakeend', function (ev) {
                    //On centre sur LeBoisDePercechargneLoc
                    map.setView(new L.latLng([79, -10.5]), 4, {animate:true, duration:3});
                })
                .snakeIn();
                break;
            case ECLATS_LUNE_LAYER_SC05_NAME :
                layerEdLScenario05.on('snakestart', function (ev) {
                    //On centre sur La chaîne des Egides
                    map.setView(new L.latLng([14, -60]), 2, {animate:true, duration:3});
                    //On lance en parralèle un snake sur layerEdLScenario05bis
                    map.addLayer(layerEdLScenario05bis);
                    layerEdLScenario05bis.snakeIn();
                })
                .on('snakeend', function (ev) {
                    //On centre sur Durville
                    map.setView(new L.latLng(infosVilles["Durville"].loc), 4, {animate:true, duration:3});
                })
                .snakeIn();
                break;
            case ECLATS_LUNE_LAYER_SC06_NAME :
                layerEdLScenario06.on('snakestart', function (ev) {
                    //On centre sur Mah'ien
                    map.setView(new L.latLng(infosVilles["Mah'Ien"].loc), 2, {animate:true, duration:3});
                })
                .on('snakeend', function (ev) {
                    //On centre sur Pôle
                    map.setView(new L.latLng(infosVilles["Pôle"].loc), 4, {animate:true, duration:3});
                })
                .snakeIn();
                break;
            case ECLATS_LUNE_LAYER_SC07_NAME :
                layerEdLScenario07.on('snakestart', function (ev) {
                    //On centre sur GarderonEtMinstreDesAndelles
                    map.setView(new L.latLng([-82,-11]), 2, {animate:true, duration:3});
                })
                    .on('snakeend', function (ev) {
                        //On centre sur Pairne
                        map.setView(new L.latLng([-204,24]), 4, {animate:true, duration:3});
                    })
                    .snakeIn();
                break;
            case ECLATS_LUNE_LAYER_SC08_NAME :
                layerEdLScenario07.on('snakestart', function (ev) {
                    //On centre sur La Cité des Falaises
                    map.setView(new L.latLng(LaCiteDesFalaisesLoc), 2, {animate:true, duration:3});
                })
                    .on('snakeend', function (ev) {
                        //On centre sur Pôle
                        map.setView(new L.latLng([infosVilles["Pôle"].loc]), 4, {animate:true, duration:3});
                    })
                    .snakeIn();
                break;
            case "Villes" :
            case "Regions" :
                //rien de spécial
                break;
            default:
                alert ("Non encore géré, mais ça va venir, promis !")
        }
    });
    map.on('overlayremove', function(eo) {
        switch (eo.name) {
            case ECLATS_LUNE_LAYER_SC05_NAME :
                map.removeLayer(layerEdLScenario05bis);
                break;
            default:
        }
    });

    var popup = L.popup();
	
	function onSearchFound(title, infos, affichage) {
		if(typeof affichage === "undefined")
		{
			affichage = true;
		}
		switch(infos.type)
		{
			case "ville":
				markerResultat = new L.Marker(new L.latLng(infos), {title: title});
				markerResultat.bindPopup(createInfosVille(title));
				break;
			case "region":
				markerResultat = new L.polygon(dataRegions[i].coordonnees, {title: title});
				markerResultat.bindPopup(createInfosRegion(title));
				break;
			default:
				return;
		}
		markerResultat.addTo(map);
		if(affichage)
		{
			markerResultat.openPopup();
		}
	}

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
	if($_GET('l'))
	{
		var recherche = decodeURI($_GET('l'));
		controlSearch.searchText(recherche);
		var datas = dataVilles.concat(dataRegions);
		var resultRecherche = filtreRecherche(recherche, formatData(datas));
		var nbResultRecherche = $.map(resultRecherche, function(n, i) { return i; }).length;
		//N'activer que s'il y a plus d'un résultat
		if( nbResultRecherche >= 1 )
		{
			$.each(resultRecherche, function(title, infos){
				var affichage = (nbResultRecherche === 1);
				onSearchFound(title, infos, affichage);
				//si une seule ville, on zoom dessus
				if(affichage)
				{
					map.setView(new L.latLng(infos), 5, {animate:true, duration:3});
				}
				else
				{
					map.setView(new L.latLng([0,0]), 2, {animate:true, duration:3});
				}
			});
		}
		else
		{
			alert(recherche + " inconnu, utilisez le formulaire de recherche");
		}
	}
}
/*****************
 ** UTILITAIRES **
 *****************/
/**
 * Supprime d'une chaine les caractères spéciaux et remplace les caractères accentués par leur version sans accent
 * @param chaine
 * @returns {XML|string|void}
 */
function chaineMinusculeSansAccent(chaine, apostropheUnderscore)
{
	chaine = chaine.toLowerCase();

	//on vire les '
	var remplaceApostrophe = '';
	if(apostropheUnderscore)
	{
		remplaceApostrophe = '_';
	}
	chaine = chaine.replace(/[\' ]/g, remplaceApostrophe);
	
    var accents = {
        a:"àáâãäå",
        A:"ÀÁÂ",
        e:"èéêë",
        E:"ÈÉÊË",
        i:"ìíîï",
        I:"ÌÍÎÏ",
        o:"òóôõöø",
        O:"ÒÓÔÕÖØ",
        u:"ùúûü",
        U:"ÙÚÛÜ",
        y:"ÿ",
        c: "ç",
        C:"Ç",
        n:"ñ",
        N:"Ñ"
    };
    function  getJSONKey(key){
        for (acc in accents){
            if (accents[acc].indexOf(key)>-1){return acc}
        }
    }
    var regstring ="";
    for (acc in accents){
        regstring+=accents[acc]
    }
    reg=new RegExp("["+regstring+"]","g" );

    return chaine.replace(reg,function(t){ return getJSONKey(t) });
}

/**
 * Récupère les informations passée en get dans l'url
 * @param param
 * @returns {*}
 */
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

/**
 * Action au chargement
 */
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
						var type = $(this).children("type").text();
						switch(type)
						{
							case "ville" :
								displaydataVilles($(this));
								break;
							case "region":
								displaydataRegions($(this));
								break;
						}
                    }
                );

                createMap();
            }
        }
    );
});