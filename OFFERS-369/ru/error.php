<?php
session_start();

$sessionData = $_SESSION['order_data'];
if (!empty($sessionData)) {
    $sessionData = json_decode($sessionData);
} else {
    $sessionData = new STDClass();
    $sessionData->name = null;
    $sessionData->phone = null;
    $sessionData->remote_ip = null;
    $sessionData->geo = null;
    $sessionData->address = null;
    $sessionData->referer = null;
}
$name = $sessionData->name;
$phone = $sessionData->phone;
$referer = $sessionData->referer;

?><!DOCTYPE html>
<html class="html" lang="ru-RU">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Thank you</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/vendor.css?v=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <meta property="og:title" content="Maschera coreana"/>
    <meta property="og:description" content="per il viso"/>
    <meta property="og:image" content="https://i.imgur.com/E9dAb6E.png"/>
    <meta property="og:type" content="website"/>

    <!-- Facebook Pixel Code -->
    <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '<?php echo $_GET["lfp"];?>');
        fbq('track', 'PageView');
        fbq('track', 'Lead');
    </script>
    <noscript><img height="1" width="1" style="display:none"
                   src="https://www.facebook.com/tr?id=2381388432089033&ev=PageView&noscript=1"
        /></noscript>
    <!-- End Facebook Pixel Code -->

    <style>
        input.btn-back {
            width: 200px;
            color: #{param_btn-text_color};
            line-height: 35px;
            text-align: center;
            color: #000000;
            text-decoration: none;
            padding: 5px 10px;
            background-color: #F4F4F4;
            -moz-box-shadow: 0px 4px 0px #FA501E;
            -webkit-box-shadow: 0px 4px 0px #FA501E;
            box-shadow: 0px 4px 0px #FA501E;
            -moz-border-radius: 0px;
            -webkit-border-radius: 0px;
            border-radius: 0px;
            outline: none;
            box-sizing: border-box;
            -moz-box-sizing: border-box; /*Firefox 1-3*/
            -webkit-box-sizing: border-box; /* Safari */
            cursor:pointer;
            -webkit-transition: all linear 0.3s;
            -moz-transition: all linear 0.3s;
            -ms-transition: all linear 0.3s;
            -o-transition: all linear 0.3s;
            transition: all linear 0.3s;
            outline:none;
        }

        input.btn-back:hover {
            background-color: #DEDEDE;
            -webkit-transition: none;
            -moz-transition: none;
            -ms-transition: none;
            -o-transition: none;
            transition: none;
        }

        input.btn-back:active {
            position: relative;
            top: 3px;
            -moz-box-shadow: 0px 1px 0px #FA501E;
            -webkit-box-shadow: 0px 1px 0px #FA501E;
            box-shadow: 0px 1px 0px #FA501E;
        }

        .version.thank_you /* version checker */
        {
            color: #0000EE;
            background-color: #FF7333;
        }

        .html
        {
            background-color: #FFFFFF;
        }

        #page
        {
            z-index: 1;
            width: 940px;
            min-height: 374px;
            background-image: none;
            border-style: none;
            border-color: #000000;
            background-color: transparent;
            /*padding-bottom: 6626px;*/
            margin-left: auto;
            margin-right: auto;
        }

        #u1193
        {
            z-index: 2;
            width: 820px;
            border-width: 6px;
            border-style: solid;
            border-color: #FCC92F;
            background-color: transparent;
            position: relative;
            margin-right: -10000px;
            margin-top: 68px;
            left: 22px;
            padding: 36px 32px 24.274999999999977px;
        }

        #u1191-6
        {
            z-index: 3;
            width: 820px;
            min-height: 33px;
            background-color: transparent;
            line-height: 58px;
            /*font-size: 40px;*/
            color: #FA501E;
            font-weight: 900;
            position: relative;
        }

        #u1194
        {
            z-index: 13;
            width: 200px;
            min-height: 49px;
            border-style: none;
            border-color: transparent;
            background-color: transparent;
            font-size: 18px;
            line-height: 22px;
            font-weight: 400;
            margin-left: 310px;
            margin-top: 69px;
            position: relative;
        }

        #u1192-4
        {
            z-index: 9;
            width: 620px;
            min-height: 34px;
            background-color: transparent;
            line-height: 36px;
            text-align: center;
            font-size: 25px;
            color: #181615;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 400;
            position: relative;
            margin-right: -10000px;
            margin-top: 226px;
            left: 160px;
        }

        body
        {
            position: relative;
            min-width: 940px;
        }

        #page .verticalspacer
        {
            clear: both;
        }

        body,div,dl,dt,dd,ul,ol,li,nav,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td,a
        {
            margin: 0;
            padding: 0;
            border-width: 0;
            -webkit-transform-origin: left top;
            -ms-transform-origin: left top;
            -o-transform-origin: left top;
            transform-origin: left top;
        }

        h1,h2,h3,h4,h5,h6
        {
            font-size: 100%;
            font-weight: inherit;
        }

        .form_text
        {
            color: #FFFFFF;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 34px;
            font-weight: 700;
            text-align: center;
            text-transform: uppercase;
            padding: 0px;
        }


        .grpelem /* a child element of a group */
        {
            display: inline;
            float: left;
        }
    </style>
</head>
<body>



<div class="clearfix" id="page"><!-- group -->
    <div class="clearfix grpelem" id="u1193"><!-- column -->
        <div class="form_text clearfix colelem" id="u1191-6"><!-- content -->
            <h2>Sorry... :(</h2>
            <h2>Your request is failed. Please, try again.</h2>
        </div>
        <div class="colelem" id="u1194"><!-- custom html -->

            <input type="button" class="btn-back" value="Back to site" onclick="location.href='./'"/>

        </div>
    </div>
    <div class="clearfix grpelem" id="u1192-4"><!-- content -->
        <h3></h3>
    </div>
    <div class="verticalspacer"></div>
</div>


<script type="text/javascript">
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var id = getParameterByName('id');
    if( id ){
        document.getElementById('lead-id').innerHTML = '# '+id;
    }
</script>
</body>
</html>