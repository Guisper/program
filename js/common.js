$(function () {
  $('img.lazy').lazyload({ effect: 'fadeIn' });

  //回到顶部
  var totopBtn = document.getElementById("totopBtn");
  var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  var isTop = true;
  var timer = null;
  if (totopBtn) {
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
  }
  const imgList = document.querySelectorAll('img')
  imgList.forEach(e => {
    e.style.transition = '.3s'
    e.style.cursor = 'pointer'
    e.addEventListener('mouseover', function () { this.style.scale = '1.05' })
    e.addEventListener('mouseleave', function () { this.style.scale = '1' })
  })
})
