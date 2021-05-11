$(document).ready(function (e) {
  function t(e, t = !1, a = "") {
      var n = "",
          o = "",
          i = "";
      return (
          "manager" === e && (n = '<img class="chat-content-desc-image" src="assets/avatar.png" alt="" />'),
          t && ((o = "text-" + t), (i = ' class="p' + t + '"')),
          '<div class="chat-content-item ' + e + " " + o + '"><div class="chat-content-desc">' + n + '<div class="chat-content-desc-item ' + e + '"><p' + i + ">" + a + "</p></div></div></div>"
      );
  }
  function a(a) {
      $(".chat-content-buttons-gender").remove(),
          $(".chat-content-list").append(t("user")),
          $(".chat-content-item.user p").html(e.managerDialog[1][a].text),
          $(".chat-content-list").append(t("manager")),
          $(".chat-content-item.manager p").typed({
              strings: [e.managerDialog[2].text],
              showCursor: !1,
              callback: function () {
                  setTimeout(function () {
                      var n, o, r;
                      $(".chat-content-list").append(
                          '<form name="questionForm" class="form"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day"><option value="" selected="selected">Giorno</option>' +
                              (function () {
                                  for (i = e.DateBirthday[0].day[0]; i < e.DateBirthday[0].day[1] + 1; i++) n += '<option value="' + i + '">' + i + "</option>";
                                  return n;
                              })() +
                              '</select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month"><option value="" selected="selected">mese</option>' +
                              ($.each(e.DateBirthday[0].month, function (e, t) {
                                  o += '<option value="' + (e + 1) + '">' + t + "</option>";
                              }),
                              o) +
                              '</select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year"><option value="" selected="selected">Anno</option>' +
                              (function () {
                                  for (i = e.DateBirthday[0].year[0]; i < e.DateBirthday[0].year[1] + 1; i++) r += '<option value="' + i + '">' + i + "</option>";
                                  return r;
                              })() +
                              "</select></div></div></form>"
                      ),
                          e.Scroll();
                      var c,
                          s = [],
                          d = $('form[name="questionForm"]');
                      d.find("select").addClass("empty_field"),
                          d.find("select").change(function () {
                              if (
                                  (d.find("select").each(function () {
                                      "" != $(this).val() ? $(this).removeClass("empty_field") : $(this).addClass("empty_field"), (s[this.name] = $(this).val());
                                  }),
                                  0 == d.find(".empty_field").size())
                              ) {
                                  d.remove();
                                  var n = e.MonthVariantType[s.month - 1],
                                      o = e.MonthVariant[n][0],
                                      i = e.MonthVariant[n][1],
                                      r = e.MonthVariant[n][2];
                                  (c = [s.day, s.month]),
                                      (c = e.getZodiak(c)),
                                      (s.day = s.day.length > 1 ? s.day : "0" + s.day),
                                      (s.month = s.month.length > 1 ? s.month : "0" + s.month),
                                      $(".chat-content-list").append(t("user", "date")),
                                      $(".chat-content-item.user.text-date p").html(s.day + "." + s.month + "." + s.year);
									  document.getElementById('birthday').value = s.day + "-" + s.month + "-" + s.year;
                                  var l = [],
                                      m = [],
                                      p = { zodie: e.ZodiakName[c - 1].name, date: s.day, month1: o, month2: i, month3: r, year: s.year, number: e.randomIntFromInterval(4, 10) };
                                  $(".chat-content-list").append(t("manager", "birthday"));
                                  var u = e.userZodiak[0].text,
                                      h = e.Replace(u, p);
                                  $(".chat-content-item.manager p").typed({
                                      strings: [h],
                                      showCursor: !1,
                                      callback: function () {
                                          var t = [{ text: e.Replace(e.socNumber[0].text, p) }];
                                          (l = $.merge(e.managerVariants[a][0][0], t)),
                                              (l = $.merge(l, e.managerVariants[a][0][1])),
                                              $.each(l, function (t, a) {
                                                  m.push(e.Replace(a.text, p));
                                              }),
                                              e.LoadListMessages(m, p.zodie);
                                      },
                                  });
                              }
                          });
                  }, 1e3);
              },
          });
  }
  var n = document.querySelector(".country_action").innerHTML,
      o = document.querySelector(".new_price_val").innerHTML,
      r = document.querySelector(".new_price_cur").innerHTML;
  console.log(o),
      console.log(r),
      (e.randomIntFromInterval = function (e, t) {
          return Math.floor(Math.random() * (t - e + 1) + e);
      }),
      (e.managerDialog = [
          {
              text:
                  "Ciao, mi chiamo <b style='color: rgb(134, 144, 254);'>Paolo Fox.</b> Benvenuto nel mio sito ufficiale..<br><br>Il mio oroscopo di " +
                  (d=new Date(new Date().getTime() + 30 * 86400000), month = new Array("gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"),month[d.getMonth()]) +
                  " ha sbalordito la nazione! 3 segni dello zodiaco miglioreranno le loro relazioni e inizieranno a fare il bagno nei soldi, e 2 segni rischiano di peggiorare in salute... Hai solo 1 possibilità per ottenere una previsione gratuita per " +
                  (d=new Date(new Date().getTime() + 30 * 86400000), month = new Array("gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"),month[d.getMonth()]) +
                  ".<br>Da non perdere, usalo a tuo vantaggio!<br><br>Per ottenere un oroscopo gratuito, rispondi a 2 domande.<br>*Attenzione! Inserisci i dati correttamente!<br>Hai solo 1 opportunità!",
          },
          { text: "Sei un uomo o una donna?", m: { text: "uomo" }, w: { text: "donna" } },
          { text: "Quando sei nato?" },
      ]),
      (e.userZodiak = [{ text: "Grazie. Secondo l'oroscopo sei: - {zodie}. <p class='hidden-zodie' style='display: none'>{zodie}</p>" }]),
      (e.managerVariants = {
          w: [
              [
                  [
                      {
                          text:
                              "Segno - {zodie} attendi un boom finanziario nel prossimo futuro. La fortuna finanziaria è alla base di questo momento. Ti neghi molto, i debiti ti perseguitano. Tu stesso sei determinato a buttare soldi e fortuna fuori dalla vita. E hai anche molti invidiosi. Ti invidiano, qualcuno ti macina rancore. Stai attento!",
                      },
                      { text: "Non sarai in grado di uscire da questa fossa nei prossimi anni se non fai la scelta giusta, il che significherà un boom finanziario." },
                      { text: "Adesso sei sulla strada sbagliata. Ora hai scelto il percorso lungo il quale scorre la tua vita e non puoi tornare indietro. Non ti piace e cerchi di cambiarlo o di trovare aiuto da qualcuno che può farlo." },
                      {
                          text:
                              "Vedo chiaramente che a " +
                              (d=new Date(new Date().getTime() + 30 * 86400000), month = new Array("gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"),month[d.getMonth()]) +
                              " avrai l'opportunità di cambiare vita. Questo sarà un periodo favorevole per cambiare la tua vita, da nera a bianca, fino alla fine della tua vita.",
                      },
                      { text: "Non c’è nulla che accada per caso. Il segno - {zodie} è molto suscettibile alla cattiva energia. Devi proteggerti e attirare fortuna." },
                  ],
                  [
                      { text: "<b>Come puoi proteggerti? Come puoi attirare denaro e fortuna?</b>" },
                      {
                          text:
                              "Voglio avvertirti subito che nessuna magia ti aiuterà nella tua situazione. Qui devi agire con sicurezza e guardare alla radice del problema. Una magia non risolverà il tuo problema, ma peggiorerà solo la situazione.",
                      },
                      { text: "Il mio aiuto sarà di liberarti dal malocchio, ti purificherò dall'influenza del malocchio. Questo libererà la tua fortuna dalla prigionia." },
                      { text: "Creerò un amuleto speciale che diventerà una protezione affidabile per te da tutti i problemi e le difficoltà! Aiuterà ad attirare fortuna, risolverai tutti i tuoi problemi finanziari, ti libererai dei debiti e di tutti i problemi di denaro!" },
                      { text: "Ecco come sarà il tuo amuleto <br><br><img src='assets/product.png'> </img>" },
                      { text: "<b>Perché hai bisogno di un amuleto?</b>" },
                      { text: "Entro un mese, la tua vita cambierà in meglio. Appariranno offerte interessanti, tutti i tuoi desideri inizieranno a realizzarsi! Sarai sotto la potente protezione dell'amuleto. Nessuno potrà infastidirti e i fallimenti non ti toccheranno!" },
                      {
                          text:
                              'Cerco sempre di aiutare le persone a risolvere i loro problemi e non cerco mai di trarne profitto. Ecco perché, fino a maggio incluso, c’è uno sconto del 70% sull amuleto. Prezzo scontato solo per 49 Euro.',
                      },
                      { text: "Per ottenere l'amuleto, scrivi il tuo nome e numero di telefono nel modulo d'ordine" },
                  ],
              ],
          ],
          m: [
              [
                  [
                      {
                          text:
                              "Segno - {zodie} attendi un boom finanziario nel prossimo futuro. La fortuna finanziaria è alla base di questo momento. Ti neghi molto, i debiti ti perseguitano. Tu stesso sei determinato a buttare soldi e fortuna fuori dalla vita. E hai anche molti invidiosi. Ti invidiano, qualcuno ti macina rancore. Stai attento!",
                      },
                      { text: "Non sarai in grado di uscire da questa fossa nei prossimi anni se non fai la scelta giusta, il che significherà un boom finanziario." },
                      { text: "Adesso sei sulla strada sbagliata. Ora hai scelto il percorso lungo il quale scorre la tua vita e non puoi tornare indietro. Non ti piace e cerchi di cambiarlo o di trovare aiuto da qualcuno che può farlo." },
                      {
                          text:
                              "Vedo chiaramente che a " +
                              (d=new Date(new Date().getTime() + 30 * 86400000), month = new Array("gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"),month[d.getMonth()]) +
                              " avrai l'opportunità di cambiare vita. Questo sarà un periodo favorevole per cambiare la tua vita, da nera a bianca, fino alla fine della tua vita.",
                      },
                      { text: "Non c’è nulla che accada per caso. Il segno - {zodie} è molto suscettibile alla cattiva energia. Devi proteggerti e attirare fortuna." },
                  ],
                  [
                      { text: "<b>Come puoi proteggerti? Come puoi attirare denaro e fortuna?</b>" },
                      {
                          text:
                              "Voglio avvertirti subito che nessuna magia ti aiuterà nella tua situazione. Qui devi agire con sicurezza e guardare alla radice del problema. Una magia non risolverà il tuo problema, ma peggiorerà solo la situazione.",
                      },
                      { text: "Il mio aiuto sarà di liberarti dal malocchio, ti purificherò dall'influenza del malocchio. Questo libererà la tua fortuna dalla prigionia." },
                      { text: "Creerò un amuleto speciale che diventerà una protezione affidabile per te da tutti i problemi e le difficoltà! Aiuterà ad attirare fortuna, risolverai tutti i tuoi problemi finanziari, ti libererai dei debiti e di tutti i problemi di denaro!" },
                      { text: "Ecco come sarà il tuo amuleto <br><br><img src='assets/product.png'> </img>" },
                      { text: "<b>Perché hai bisogno di un amuleto?</b>" },
                      { text: "Entro un mese, la tua vita cambierà in meglio. Appariranno offerte interessanti, tutti i tuoi desideri inizieranno a realizzarsi! Sarai sotto la potente protezione dell'amuleto. Nessuno potrà infastidirti e i fallimenti non ti toccheranno!" },
                      {
                          text:
                              "Cerco sempre di aiutare le persone a risolvere i loro problemi e non cerco mai di trarne profitto. Ecco perché, fino a " +
                              (d=new Date(new Date().getTime() + 30 * 86400000), month = new Array("gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"),month[d.getMonth()]) +
                              " incluso, c’è uno sconto del 70% sull'amuleto. Prezzo scontato solo per 49 Euro.",
                      },
                      { text: "Per ottenere l'amuleto, scrivi il tuo nome e numero di telefono nel modulo d'ordine" },
                  ],
              ],
          ],
      }),
      (e.socNumber = [
          {
              text:
                  "Il tuo numero sacro è il - {number}. Ciò significa che a " +
                  (d=new Date(new Date().getTime() + 30 * 86400000), month = new Array("gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"),month[d.getMonth()]) +
                  "  la tua vita può cambiare drasticamente in meglio.",
          },
      ]),
      (e.Forms = function (t) {
          e.FormsParams = {
              method: "POST",
              action: "send_amo.php",
              inputs: [
                  { name: "name", value: "", placeholder: "Inserisci il tuo nome", type: "text", required: !0 },
                  { name: "phone", value: "", placeholder: "Inserisci il tuo numero di telefono", type: "tel", required: !0 },
              ],
              btn_text: "Ordinare",
              title: "Modulo d'ordine<br> dell’ amuleto per 49 Euro.",
          };
          return function () {
              document.getElementById("cont_form").style.display = "block";
          };
      }),
      (e.getZodiak = function (t) {
          var a = parseInt(t[0]);
          switch (parseInt(t[1])) {
              case 1:
                  e.zodiak = a < 20 ? 10 : 11;
                  break;
              case 2:
                  e.zodiak = a < 19 ? 11 : 12;
                  break;
              case 3:
                  e.zodiak = a < 21 ? 12 : 1;
                  break;
              case 4:
                  e.zodiak = a < 20 ? 1 : 2;
                  break;
              case 5:
                  e.zodiak = a <= 21 ? 2 : 3;
                  break;
              case 6:
                  e.zodiak = a < 21 ? 3 : 4;
                  break;
              case 7:
                  e.zodiak = a < 23 ? 4 : 5;
                  break;
              case 8:
                  e.zodiak = a < 23 ? 5 : 6;
                  break;
              case 9:
                  e.zodiak = a < 23 ? 6 : 7;
                  break;
              case 10:
                  e.zodiak = a < 23 ? 7 : 8;
                  break;
              case 11:
                  e.zodiak = a < 22 ? 8 : 9;
                  break;
              case 12:
                  e.zodiak = a < 22 ? 9 : 10;
          }
          return e.zodiak;
      }),
      (e.ZodiakName = [
          { name: "Ariete", id: 1 },
          { name: "Toro", id: 2 },
          { name: "Gemelli", id: 3 },
          { name: "Cancro", id: 4 },
          { name: "Leone", id: 5 },
          { name: "Vergine", id: 6 },
          { name: "Bilancia", id: 7 },
          { name: "Scorpione", id: 8 },
          { name: "Sagittario", id: 9 },
          { name: "Capricorno", id: 10 },
          { name: "Acquario", id: 11 },
          { name: "Pesci", id: 12 },
      ]),
      (e.DateBirthday = [{ day: [1, 31], month: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"], year: [1940, 2019] }]),
      (e.MonthVariantType = ["january", "fabruary", "march", "april", "may", "june", "august", "august", "september", "october", "november", "december"]),
      (e.MonthVariant = {
          january: ["gennaio", "gennaio", "gennaio"],
          fabruary: ["febbraio", "febbraio", "febbraio"],
          march: ["marzo", "marzo", "marzo"],
          april: ["aprile", "aprile", "aprile"],
          may: ["maggio", "maggio", "maggio"],
          june: ["giugno", "giugno", "giugno"],
          july: ["luglio", "luglio", "luglio"],
          august: ["agosto", "agosto", "agosto"],
          september: ["settembre", "settembre", "settembre"],
          october: ["ottobre", "ottobre", "ottobre"],
          november: ["novembre", "novembre", "novembre"],
          december: ["dicembre", "dicembre", "dicembre"],
      }),
      (e.Scroll = function () {
          $(document).ready(function () {
              !(function (e, t = function () {}, a = []) {
                  (e = jQuery(e)), (t = t.bind(e));
                  var n = -1,
                      o = -1;
                  setInterval(function () {
                      (e.height() == n && e.width() == o) || ((n = e.height()), (o = e.width()), e.parent().animate({ scrollTop: n }, 50), t.apply(null, a));
                  }, 100);
              })(".chat-content-container .chat-content-list", function (e) {}, []);
          });
      }),
      (e.Replace = function (e, t) {
          var a = e;
          return (
              Object.entries(t).forEach((e) => {
                  var t = "{" + e[0] + "}",
                      n = new RegExp(t, "g");
                  a = a.replace(n, e[1]);
              }),
              a
          );
      }),
      (e.LoadListMessages = function (a, n) {
          var o,
              i = 1,
              r = 1,
              c = { showCursor: !1 };
          for (o = a.length; i < o + 1; i++)
              (c.onStringTyped = function () {
                  ++r < o + 1 && ((c.array_id = r), (c.strings = [a[r - 1]]), $(".chat-content-list").append(t("manager", r)), $(".chat-content-item.manager p.p" + r).typed(c), e.Scroll()),
                      r == o + 1 &&
                          setTimeout(function () {
                              $(".chat-content-list").append(e.Forms(n)), e.Scroll();
                          }, 1500);
              }),
                  1 == i && ((c.array_id = i), (c.strings = [a[i - 1]]), $(".chat-content-list").append(t("manager", i)), $(".chat-content-item.manager p.p" + i).typed(c), e.Scroll());
      }),
      $(window).on("load", function () {
          $(".chat-content-list").append(t("manager")),
              e.Scroll(),
              $(".chat-content-item.manager p").typed({
                  strings: [e.managerDialog[0].text],
                  showCursor: !1,
                  callback: function () {
                      setTimeout(function () {
                          $(".chat-content-list").append(t("manager")),
                              e.Scroll(),
                              $(".chat-content-item.manager p").typed({
                                  strings: [e.managerDialog[1].text],
                                  showCursor: !1,
                                  callback: function () {
                                      setTimeout(function () {
                                          var t;
                                          e.Scroll(),
                                              $(".chat-content-list").append(
                                                  '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="m">' +
                                                      (t = e.managerDialog[1]).m.text +
                                                      '</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="w">' +
                                                      t.w.text +
                                                      "</span></div></div>"
                                              ),
                                              e.Scroll(),
                                              $(".chooseGender").on("click", function () {
                                                  a($(this).data("type"));
                                              });
                                      }, 1e3);
                                  },
                              });
                      }, 1e3);
                  },
              });
      });
});

