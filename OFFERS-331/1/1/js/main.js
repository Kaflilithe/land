$(document).ready(function(){
	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").text( pad(hrs));
		$(".timer .minutes").text( pad(min));
		$(".timer .seconds").text( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) { return ('00'+s).substr(-2) }
	update();

    $('.responsive').slick({
          dots: true,
          infinite: false,
          arrows:true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows:true,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                arrows:true,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows:true,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });

});
