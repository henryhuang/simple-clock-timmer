const fullscreen = () => {
    const element = document.documentElement
    if (element.requestFullscreen) {
        element.requestFullscreen()
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
    }
}

const existFullscreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen()
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
    }
}

var isFullScreen = false;

const canvasHeight = $(document).height()/1.4;

$(document).ready(function(){

    var audioElement = new Audio("");

    //clock plugin constructor
    $('#myclock').thooClock({
        size: canvasHeight,
        sweepingMinutes:true,
        sweepingSeconds:false,
        showNumerals:true,
        brandText:'ROLEX',
        brandText2:'HENRY HUANG',
        onEverySecond:function(){
            //callback that should be fired every second
            //console.log(new Date().getSeconds());
        }
    });

});


$('#reset').click(function(){
    $.fn.thooClock.reset();
});

$('#currentTime').click(function(){
    $.fn.thooClock.currentTime();
});

var changeFullScreenBtn = function () {
    if (isFullScreen) {
        $("#fullWindow").text("退出全屏")
    } else {
        $("#fullWindow").text("进入全屏")
    }
};

$("#fullWindow").click(() => {
    if (isFullScreen) {
        existFullscreen()
        isFullScreen = false
        changeFullScreenBtn()
    } else {
        fullscreen()
        isFullScreen = true
        changeFullScreenBtn()
    }
});

const  resetContainerHeight = () => {
    const windowHeight = $(window).height()
    const myClockHeight = $("#myclock").height()
    let containerHeight = $("#container").height()
    if (myClockHeight === 0) {
        containerHeight = containerHeight + canvasHeight
    }
    const offset = windowHeight - containerHeight
    if (offset > 0) {
        $("#container").css('margin-top', offset / 2)
    }
}
resetContainerHeight()
window.onresize = resetContainerHeight

