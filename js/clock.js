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

const onWindowsResize = () => {
    const isFull = !!(document.webkitIsFull || document.mozFullScreen || document.msFullscreenElement
    || document.fullscreenElement);
    if (isFull == false) {

    }
}