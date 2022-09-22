$(function () {
    $('img.lazy').lazyload({ effect: 'fadeIn' });
    
    //回到顶部
    var totopBtn = document.getElementById("totopBtn");
    var clientHeight = document.documentElement.clientHeight || ocument.body.clientHeight;
    var isTop = true;
    var timer = null;
    window.onscroll = function () {
        var topH = document.documentElement.scrollTop || document.body.scrollTop;
        if (topH > (clientHeight / 3)) {
            totopBtn.style.display = "block";
        } else {
            totopBtn.style.display = "none";
        }
    }
    totopBtn.onclick = function () {
        timer = setInterval(function () {
            var topH = document.documentElement.scrollTop || document.body.scrollTop;
            var stepLength = Math.ceil(topH / 8); //返回顶部的速度
            document.documentElement.scrollTop = document.body.scrollTop = topH - stepLength;
            if (topH == 0) {
                clearInterval(timer);
            }
        }, 25); //执行时间间隔
    }


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
