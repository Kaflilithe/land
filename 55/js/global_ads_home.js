jQuery(function(e){var j=sas_siteId;var a=sas_pageId;var c="home";g();function g(){if(e("body").hasClass("article-page")){c="articulo"}if(e("body").hasClass("page-category")){c="home-section"}if(e(".patrocinado-bk .patrocinado").length>0){c="comercial_article"}var m=getSizeScreen();switch(m){case"desktop":k();h();j=22171;switch(c){case"home":a=eltiempo_ads_config.desktop.home.sas_pageId;break;case"articulo":a=eltiempo_ads_config.desktop.article.sas_pageId;break;case"home-section":a=eltiempo_ads_config.desktop.section.sas_pageId;break;case"comercial_article":a=eltiempo_ads_config.desktop.comercial_article.sas_pageId;break}if(e(".ad_sas_pauta_desktop").length>0){e(".ad_sas_pauta_desktop").each(function(){e(this).html(f(e(this).attr("id")))})}break;case"tablet":k();d();if(window.location.pathname=="/"&&e(".homepage-board.board-1.containt .board1-module.board1-module-v2.containt").length>0){e("#sas_9346.ad_sas_pauta_tablet").appendTo(".homepage-board.board-1 .col-left .col1.no-margin .ad-container.ad-container-bottom-tablet.tablet")}j=22171;switch(c){case"home":a=eltiempo_ads_config.tablet.home.sas_pageId;break;case"articulo":a=eltiempo_ads_config.tablet.article.sas_pageId;break;case"home-section":a=eltiempo_ads_config.tablet.section.sas_pageId;break;case"comercial_article":a=eltiempo_ads_config.tablet.comercial_article.sas_pageId;break}if(e(".ad_sas_pauta_tablet").length>0){e(".ad_sas_pauta_tablet").each(function(){e(this).html(f(e(this).attr("id")))})}break;case"mobile":d();h();j=51874;switch(c){case"home":a=eltiempo_ads_config.mobile.home.sas_pageId;break;case"articulo":a=eltiempo_ads_config.mobile.article.sas_pageId;break;case"home-section":a=eltiempo_ads_config.mobile.section.sas_pageId;break;case"comercial_article":a=eltiempo_ads_config.mobile.comercial_article.sas_pageId;break}if(e(".ad_sas_pauta_mobile").length>0){e(".ad_sas_pauta_mobile").each(function(){e(this).html(f(e(this).attr("id")))})}break}}function b(){e(".ad_sas_pauta_desktop").each(function(){e(this).html("")})}function l(){e(".ad_sas_pauta_mobile").each(function(){e(this).html("")})}function i(){e(".ad_sas_pauta_tablet").each(function(){e(this).html("")})}function k(){e(".ad_sas_pauta_mobile").remove()}function h(){e(".ad_sas_pauta_tablet").remove()}function d(){e(".ad_sas_pauta_desktop").remove()}function f(n){var m=n.split("_");return'<script type="text/javascript">sas.cmd.push(function() { sas.call("std", { siteId: '+j+", pageId: "+a+", formatId: "+m[1]+", target: sas_target });});<\/script>"}});