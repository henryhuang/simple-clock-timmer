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

const onWindowsResize = () => {
    const isFull = !!(document.webkitIsFull || document.mozFullScreen || document.msFullscreenElement
    || document.fullscreenElement);
    if (isFull == false) {

    }
}