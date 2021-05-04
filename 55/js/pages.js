 var pages = [{"title":"Default","type":"default","details":"{\"type\":\"\\\/\"}","_o_a_s_page":"\/","_o_a_s_positions":"sas_scriptDomain =\"http:\/\/ads.eltiempo.com\"; sas_pageid=\"51874\/374009\";\r\nsas_pageId=\"374009\";","locked":true,"platform":"mobile"},{"title":"Home","type":"home","details":"{\"type\":\"\\\/\"}","_o_a_s_page":"\/home","_o_a_s_positions":"sas_scriptDomain =\"http:\/\/ads.eltiempo.com\"; sas_pageid=\"51874\/374008\";\r\nsas_pageId=\"374008\";","locked":true,"platform":"mobile"},{"title":"Editorial","type":"section","details":"{\"type\":\"opinion\/editorial\"}","_o_a_s_page":"\/opinion\/editorial","_o_a_s_positions":"sas_scriptDomain =\"http:\/\/ads.eltiempo.com\"; sas_pageid=\"51874\/374009\";\r\nsas_pageId=\"374009\";","locked":false,"platform":"mobile"},{"title":"Caricaturas","type":"section","details":"{\"type\":\"opinion\/caricaturas\"}","_o_a_s_page":"\/opinion\/caricaturas","_o_a_s_positions":"sas_scriptDomain =\"http:\/\/ads.eltiempo.com\"; sas_pageid=\"51874\/374009\";\r\nsas_pageId=\"374009\";","locked":false,"platform":"mobile"},{"title":"Columnistas","type":"section","details":"{\"type\":\"opinion\/columnistas\"}","_o_a_s_page":"\/opinion\/columnistas","_o_a_s_positions":"sas_scriptDomain =\"http:\/\/ads.eltiempo.com\"; sas_pageid=\"51874\/374009\";\r\nsas_pageId=\"374009\";","locked":false,"platform":"mobile"},{"title":"Zona-usuario","type":"url","details":"{\"type\":\"\/zona-usuario\/\"}","_o_a_s_page":"\/zona-usuario\/","_o_a_s_positions":"sas_scriptDomain =\"http:\/\/ads.eltiempo.co\"; sas_pageid=\"22171\/372758\";\r\nsas_pageId=\"372758\";","locked":false,"platform":"mobile"},{"title":"terminos-condiciones","type":"url","details":"{\"type\":\"\/terminos-condiciones\"}","_o_a_s_page":"\/terminos-condiciones","_o_a_s_positions":"sas_scriptDomain =\"http:\/\/ads.eltiempo.co\"; sas_pageid=\"22171\/372758\"; sas_pageId=\"372758\";","locked":false,"platform":"mobile"},{"title":"politica-privacidad","type":"url","details":"{\"type\":\"\/politica-privacidad\"}","_o_a_s_page":"\/politica-privacidad","_o_a_s_positions":"sas_scriptDomain =\"http:\/\/ads.eltiempo.co\"; sas_pageid=\"22171\/372758\"; sas_pageId=\"372758\";","locked":false,"platform":"mobile"},{"title":"Login","type":"url","details":"{\"type\":\"\/login\"}","_o_a_s_page":"\/login","_o_a_s_positions":"sas_scriptDomain =\"http:\/\/ads.eltiempo.com\"; sas_pageid=\"22171\/372758\";\r\nsas_pageId=\"372758\";","locked":false,"platform":"mobile"},{"title":"Usuario restablecer-contrasena","type":"url","details":"{\"type\":\"\/usuario\/restablecer-contrasena\"}","_o_a_s_page":"\/usuario\/restablecer-contrasena","_o_a_s_positions":"sas_scriptDomain =\"http:\/\/ads.eltiempo.co\"; sas_pageid=\"22171\/372758\";\r\nsas_pageId=\"372758\";","locked":false,"platform":"mobile"},{"title":"zona-usuario articulos-guardados","type":"url","details":"{\"type\":\"\/zona-usuario\/articulos-guardados\"}","_o_a_s_page":"\/zona-usuario\/articulos-guardados","_o_a_s_positions":"sas_scriptDomain =\"http:\/\/ads.eltiempo.co\"; sas_pageid=\"22171\/372758\"; sas_pageId=\"372758\";","locked":false,"platform":"mobile"},{"title":"Recursos CMS","type":"url","details":"{\"type\":\"[\/a-z0-9-]+\/[a-z0-9-]+-[0-9]+\"}","_o_a_s_page":"[\/a-z0-9-]+\/[a-z0-9-]+-[0-9]+","_o_a_s_positions":"var sastemplates = {\r\n 'especial_modular':\"667552\",\r\n 'gallery':\"696199\",\r\n 'video':\"696200\",\r\n 'graphic':\"696202\",\r\n 'specials':\"667552\",\r\n 'foro':\"243817\",\r\n 'static':\"243817\"\r\n };\r\nsas_pageId = (typeof pageTemplate == \"undefined\")?\"529862\": (sastemplates[pageTemplate] || \"529862\");","locked":false,"platform":"mobile"},{"title":"L\u00ednea \u00e9tica","type":"url","details":"{\"type\":\"\/linea-etica\"}","_o_a_s_page":"\/linea-etica","_o_a_s_positions":"sas_scriptDomain =\"http:\/\/ads.eltiempo.co\"; sas_pageid=\"22171\/372758\"; sas_pageId=\"372758\";","locked":false,"platform":"mobile"},{"title":"Secciones CMS Mobile","type":"url","_o_a_s_page":"\/[a-z0-9-]+","_o_a_s_positions":"sas_pageId = \"374009\";","locked":false,"platform":"mobile"},{"title":"Sub secciones CMS mobile","type":"url","_o_a_s_page":"[\/a-z0-9-]+\/[a-z0-9-]+","_o_a_s_positions":"sas_pageId=\"374009\";","locked":false,"platform":"mobile"},{"title":"El_Tiempo_Play","type":"section","details":"{\"type\":\"videos-eltiempo\"}","_o_a_s_page":"\/eltiempoplay","_o_a_s_positions":"sas_scriptDomain =\"http:\/\/ads.eltiempo.com\"; sas_pageid=\"51874\/696203\"; sas_pageId=\"696203\";","locked":false,"platform":"mobile"}];
GT_listpos = "";
GT_importance = -1;
var currentUri = document.location.pathname;
// Orden de importancia
var importance = ["default", "home", "url", "section", "article"];
// Recorre todos los items creados en la página de publicidad del CMS
for (var i in pages) {
var page = pages[i];
var urlMatch = page._o_a_s_page;
// Valida que la url coincida exactamente con la expresión regular
if (
(page.type == "default") ||
(page.type == "url" && currentUri.match("^" + urlMatch)) ||
(page.type == "section" && currentUri.match(urlMatch)) ||
(page.type == "article" && currentUri.match(urlMatch))
) {
// Valida que la url coincida exactamente con la expresión regular
if (page.type == "url" && currentUri.match("^" + urlMatch)) {
var urlMatchCurrent = currentUri.match("^" + urlMatch);
if (urlMatchCurrent[0] !== urlMatchCurrent["input"]) continue;
}
// Decide mantener la regla según la prioridad
if (importance.indexOf(page.type) > GT_importance) {
// Valida que la sección sea igual a la alimentada en el cms
if (page.type == "section" && currentUri !== urlMatch) continue;
GT_listpos = page._o_a_s_positions;
GT_importance = importance.indexOf(page.type);
}
}
}
GT_listpos = GT_listpos.replace(/(\r\n|\n|\r)/gm,"");
eval(GT_listpos);