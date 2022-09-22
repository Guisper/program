$(function () {
    //处理视频按钮
    var oVideoBtn = document.querySelector('.VideoBtn')
    var oImgBox = document.querySelector('.imgBox')
    oVideoBtn.onmouseover = function () {
        oImgBox.style.transform = 'scale(1.02)'
    }
    oVideoBtn.onmouseout = function () {
        oImgBox.style.transform = ''
    }
})