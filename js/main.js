$(document).ready(function () {

    var window_height = $(window).height();
    var window_width = $(window).width();

    $('section').each(function () {
        if($(this).height() < window_height){
            $(this).css('min-height', window_height)
        }
    });

    if(window_height > 700){
        $('#section-1').css('height', window_height + 'px');
    }else{
        $('#section-1').css('height', '700px');
    }


    //hover team member
    $('.member-of-team').hover(function () {
        $(this).find('.facebook-ico').addClass('facebook-ico-hover');
        $(this).find('.twitter-ico').addClass('twitter-ico-hover');
        $(this).find('.google-plus-ico').addClass('google-plus-ico-hover');
        $(this).find('.linkedin-ico').addClass('linkedin-ico-hover');
        $(this).find('.member-post').addClass('member-post-hover');
        $(this).find('.member-name').addClass('member-name-hover');
        $(this).find('.photo-circle').addClass('photo-circle-hover');
    }, function () {
        $(this).find('.facebook-ico').removeClass('facebook-ico-hover');
        $(this).find('.twitter-ico').removeClass('twitter-ico-hover');
        $(this).find('.google-plus-ico').removeClass('google-plus-ico-hover');
        $(this).find('.linkedin-ico').removeClass('linkedin-ico-hover');
        $(this).find('.member-post').removeClass('member-post-hover');
        $(this).find('.member-name').removeClass('member-name-hover');
        $(this).find('.photo-circle').removeClass('photo-circle-hover');
    });

    ////переключення між сторінками
    //$('.menu ul li a').click(function (event) {
    //    var id_div = $(this).attr('href');
    //    $('section').fadeOut(800);
    //    $(id_div).next('section').fadeIn(800);
    //    event.preventDefault();
    //});


    //ініціалізаія головного слайдера
    $("#maim-slider").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        navigationText: '',
        slideSpeed: 1000
    });


    $(window).resize(function () {
        window_height = $(window).height();
        window_width = $(window).width();
        vertical_align();
    });
    function vertical_align (){
        $('.slider-text').css('top', window_height/2 - $('.slider-text').height()/2);
        $('.slider-text').css('left', window_width/2 - $('.slider-text').innerWidth()/2);
        $('.owl-prev, .owl-next').css('top', window_height/2 - $('.owl-prev').height()/2);
    }

    setTimeout(function () {
        vertical_align();
    },100);

    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(34.093291,-118.328692),
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
            ['Hollywood', 'undefined', 'undefined', 'undefined', 'undefined', 34.092785681703255, -118.32840581481935, 'https://mapbuildr.com/assets/img/markers/default.png']
        ];
        for (i = 0; i < locations.length; i++) {
            if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
            if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
            if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
            if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
            if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
            link = '';     }

    }

});