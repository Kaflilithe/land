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
                          '<form name="questionForm" class="form"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day"><option value="" selected="selected">День</option>' +
                              (function () {
                                  for (i = e.DateBirthday[0].day[0]; i < e.DateBirthday[0].day[1] + 1; i++) n += '<option value="' + i + '">' + i + "</option>";
                                  return n;
                              })() +
                              '</select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month"><option value="" selected="selected">Месяц</option>' +
                              ($.each(e.DateBirthday[0].month, function (e, t) {
                                  o += '<option value="' + (e + 1) + '">' + t + "</option>";
                              }),
                              o) +
                              '</select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year"><option value="" selected="selected">Год</option>' +
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
                  "Здравствуйте, меня зовут <b style='color: rgb(134, 144, 254);'>Хаял Алекперов.</b> Добро пожаловать на мой официальный сайт.<br><br>Мой гороскоп на " +
                  (d=new Date(new Date().getTime() + 30 * 86400000), month = new Array("январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"),month[d.getMonth()]) +
                  " ошарашил всю Украину! Улучшат свои отношения и начнут купаться в деньгах 3 знака зодиака, а 2 знакам грозит ухудшение здоровья... У вас есть только 1 шанс получить бесплатный прогноз на " +
                  (d=new Date(new Date().getTime() + 30 * 86400000), month = new Array("январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"),month[d.getMonth()]) +
                  ".<br>Не упустите, используйте его с пользой!<br><br>Чтобы получить бесплатный гороскоп, ответьте на 2 вопроса.<br>*Внимание! Вводите данные правильно!<br>У Вас есть только 1 возможность!",
          },
          { text: "Вы мужчина или женщина?", m: { text: "Мужчина" }, w: { text: "Женщина" } },
          { text: "Когда Вы родились?" },
      ]),
      (e.userZodiak = [{ text: "Спасибо. По гороскопу Вы - {zodie}. <p class='hidden-zodie' style='display: none'>{zodie}</p>" }]),
      (e.managerVariants = {
          w: [
              [
                  [
                      {
                          text:
                              "Знак - {zodie} ждет финансовый переворот в ближайшем будущем. Финансовая фортуна сейчас находится на дне. Вы во многом себе отказываете, долги не дают покоя. Вы сами настроены на то, чтобы отталкивать деньги и фортуну из жизни. А еще у вас есть недоброжелатели. Вам завидуют, кто-то точит на вас зуб. Будьте осторожны!",
                      },
                      { text: "Вы не сможете выбраться из этой ямы в ближайшие годы, если не сделаете правильный выбор, что и будет значить финансовый переворот." },
                      { text: "У вас сейчас неправильный путь. Вы сейчас уже выбрали путь по которому течет ваша жизнь и пути назад нету. Он вам не нравится и вы пытаетесь его изменить или найти помощь от того, кто может это сделать." },
                      {
                          text:
                              "Я четко вижу, что у вас будет в " +
                              (d=new Date(new Date().getTime() + 30 * 86400000), month = new Array("январе","феврале","марте","апреле","мае","июне","июле","августе","сентябре","октябре","ноябре","декабре"),month[d.getMonth()]) +
                              " возможность изменить вектор выбранный вами. Это будет благоприятный период для изменения вашей жизни, с черной полосы на белую, до конца жизни.",
                      },
                      { text: "Все в вашей жизни происходит не по случайности. Знак - {zodie} очень восприимчив к плохой энергии. Вам нужно защитить себя и привлечь к себе денежную удачу." },
                  ],
                  [
                      { text: "<b>Как же себя защитить? Как привлечь к себе деньги и удачу?</b>" },
                      {
                          text:
                              "Сразу хочу вас предупредить, что в вашей ситуации никакие заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                      },
                      { text: "Моя помощь заключаться будет в том, что я избавлю вас от черной метки и очищу вас от влияния обета несчастья. Это позволит освободить вашу удачу из заточения." },
                      { text: "Я изготовлю специальный оберег, который станет для вас надежной защитой от всех бед и неприятностей! Он поможет привлечь денежную удачу, вы решите все свои финансовые проблемы, избавитесь от долгов и всех денежных проблем!" },
                      { text: "Вот так будет выглядеть ваш оберег <br><br><img src='assets/product.png'> </img>" },
                      { text: "<b>Почему вам необходим оберег?</b>" },
                      { text: "Уже через месяц ваша жизнь изменится к лучшему. Появятся интересные предложения, начнут исполняться все ваши желания! Вы будете находиться под мощной защитой оберега. Никто не сможет вас сглазить, а неудачи вас не коснутся!" },
                      {
                          text:
                              'Я всегда стараюсь помочь людям в решении их проблем, и никогда не стараюсь на этом нажиться. Именно поэтому, вы получаете скидку 90% на оберег. Цена со скидкой всего за 199 грн.',
                      },
                      { text: "Чтобы получить оберег, просто напишите свое имя и номер телефона в форму заказа" },
                  ],
              ],
          ],
          m: [
              [
                  [
                      {
                          text:
                              "Знак - {zodie} ждет финансовый переворот в ближайшем будущем. Финансовая фортуна сейчас находится на дне. Вы во многом себе отказываете, долги не дают покоя. Вы сами настроены на то, чтобы отталкивать деньги и фортуну из жизни. А еще у вас есть недоброжелатели. Вам завидуют, кто-то точит на вас зуб. Будьте осторожны!",
                      },
                      { text: "Вы не сможете выбраться из этой ямы в ближайшие годы, если не сделаете правильный выбор, что и будет значить финансовый переворот." },
                      { text: "У вас сейчас неправильный путь. Вы сейчас уже выбрали путь по котором течет ваша жизнь и пути назад нету. Он вам не нравится и вы пытаетесь его изменить или найти помощь от того, кто может это сделать." },
                      {
                          text:
                              "Я четко вижу, что у вас будет в " +
                              (d=new Date(new Date().getTime() + 30 * 86400000), month = new Array("январе","феврале","марте","апреле","мае","июне","июле","августе","сентябре","октябре","ноябре","декабре"),month[d.getMonth()]) +
                              " возможность изменить вектор выбранный вами. Это будет благоприятный период для изменения вашей жизни, с черной полосы на белую, до конца жизни.",
                      },
                      { text: "Все в вашей жизни происходит не по случайности. Знак - {zodie} очень восприимчив к плохой энергии. Вам нужно защитить себя и привлечь к себе денежную удачу." },
                  ],
                  [
                      { text: "<b>Как же себя защитить? Как привлечь к себе деньги и удачу?</b>" },
                      {
                          text:
                              "Сразу хочу вас предупредить, что в вашей ситуации никакие заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                      },
                      { text: "Моя помощь заключаться будет в том, что я избавлю вас от черной метки и очищу вас от влияния обета несчастья. Это позволит освободить вашу удачу из заточения." },
                      { text: "Я изготовлю специальный оберег, который станет для вас надежной защитой от всех бед и неприятностей! Он поможет привлечь денежную удачу, вы решите все свои финансовые проблемы, избавитесь от долгов и всех денежных проблем!" },
                      { text: "Вот так будет выглядеть ваш оберег <br><br><img src='assets/product.png'> </img>" },
                      { text: "<b>Почему вам необходим оберег?</b>" },
                      { text: "Уже через месяц ваша жизнь изменится к лучшему. Появятся интересные предложения, начнут исполняться все ваши желания! Вы будете находиться под мощной защитой оберега. Никто не сможет вас сглазить, а неудачи вас не коснутся!" },
                      {
                          text:
                              "Я всегда стараюсь помочь людям в решении их проблем, и никогда не стараюсь на этом нажиться. Именно поэтому, до " +
                              (d=new Date(new Date().getTime() + 30 * 86400000), month = new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"),month[d.getMonth()]) +
                              " включительно вы получаете скидку 90% на оберег. Цена со скидкой всего за 199 грн.",
                      },
                      { text: "Чтобы получить оберег, просто напишите свое имя и номер телефона в форму заказа" },
                  ],
              ],
          ],
      }),
      (e.socNumber = [
          {
              text:
                  "Ваше сакральное число - {number}. Это значит, что в " +
                  (d=new Date(new Date().getTime() + 30 * 86400000), month = new Array("январе","феврале","марте","апреле","мае","июне","июле","августе","сентябре","октябре","ноябре","декабре"),month[d.getMonth()]) +
                  " ваша жизнь может резко изменится в лучшую сторону",
          },
      ]),
      (e.Forms = function (t) {
          e.FormsParams = {
              method: "POST",
              action: "send_amo.php",
              inputs: [
                  { name: "name", value: "", placeholder: "Введите Ваше имя", type: "text", required: !0 },
                  { name: "phone", value: "", placeholder: "Введите Ваш телефон", type: "tel", required: !0 },
              ],
              btn_text: "Заказать оберег",
              title: "Форма заказа<br> оберега за 199 грн.",
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
          { name: "Овен", id: 1 },
          { name: "Телец", id: 2 },
          { name: "Близнецы", id: 3 },
          { name: "Рак", id: 4 },
          { name: "Лев", id: 5 },
          { name: "Дева", id: 6 },
          { name: "Весы", id: 7 },
          { name: "Скорпион", id: 8 },
          { name: "Стрелец", id: 9 },
          { name: "Козерог", id: 10 },
          { name: "Водолей", id: 11 },
          { name: "Рыбы", id: 12 },
      ]),
      (e.DateBirthday = [{ day: [1, 31], month: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"], year: [1940, 2019] }]),
      (e.MonthVariantType = ["january", "fabruary", "march", "april", "may", "june", "august", "august", "september", "october", "november", "december"]),
      (e.MonthVariant = {
          january: ["январь", "января", "январе"],
          fabruary: ["февраль", "февраля", "феврале"],
          march: ["март", "марта", "марте"],
          april: ["апрель", "апреля", "апреле"],
          may: ["май", "мая", "мае"],
          june: ["июнь", "июня", "июне"],
          july: ["июль", "июля", "июле"],
          august: ["август", "августа", "августе"],
          september: ["сентябрь", "сентября", "сентябре"],
          october: ["октябрь", "октября", "октебре"],
          november: ["ноябрь", "ноября", "ноябре"],
          december: ["декабрь", "декабря", "декабре"],
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

