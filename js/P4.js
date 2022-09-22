$(function () {
    var oTitle = document.querySelectorAll('.judgeDevice')
    ~function () {
        if (window.screen.width <= 500) {
            for (var i = 0; i < oTitle.length; i++) {
                oTitle[i].style.textAlign = 'center'
            }
        }
    }()
})