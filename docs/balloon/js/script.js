//画像を配列に保存
var bunyanBalloons = ['img/balloon_bunyan_1.png','img/balloon_bunyan_2.png','img/balloon_bunyan_3.png','img/balloon_bunyan_4.png','img/balloon_bunyan_5.png','img/balloon_bunyan_6.png','img/balloon_bunyan_7.png'];


//ウインドウを読み込んだら
$(function(){

    //ウインドウの高さ
    var windowHeight = $(window).height();

    //bunyanのdivタグ
    var bunyan = $('#bunyan');

    //画像が変わるタイミング値
    var imgChgInterval = 36;

    //スクロールイベント
    $(window).on('scroll',function(){

        // if(scrollValue > 100 && scrollValue < windowHeight-100){

        //スクロール値
        var scrollValue = $(this).scrollTop();

        //スクロール値を調整。割る値を変えるとタイミングが変わる
        var scrollSpeed = Math.floor(scrollValue/imgChgInterval);

        //スクロール値から画像の枚数を割った余り。画像数でループする
        var balloonsCount =  scrollSpeed % bunyanBalloons.length;
        console.log(balloonsCount);

        //ネコのpositionをfiexeにする
        bunyan.css({
            'position':'fixed',
            'top': 0
        });

        //ネコ
        bunyan.find('img').attr('src',bunyanBalloons[balloonsCount]);

        // }
    });

});