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
  if (oVideoBtn) {
    oVideoBtn.onmouseover = function () {
      oImgBox.style.transform = 'scale(1.02)'
    }
    oVideoBtn.onmouseout = function () {
      oImgBox.style.transform = ''
    }
  }

  new Vue({
    el: '#app',
    data() {
      return {
        items: [
          {
            title: '热门景点',
            desc: '你想换个地方感受人间烟火吗？点击这里，开始收藏世界吧!',
            href: './pages/main-1.html'
          },
          {
            title: '纪念珍藏',
            desc: '时光会走远，物品会长存，让我们拥抱开心满载而归吧!',
            href: './pages/main-2.html'
          },
          {
            title: '旅游攻略',
            desc: '没想好怎么玩？看这里！对走马观灯式旅行说再见',
            href: './pages/main-3.html'
          },
          {
            title: '门票预约',
            desc: '通往星辰大海的门票，有时也没那么贵。',
            href: './pages/main-4.html'
          },
          {
            title: '近期活动',
            desc: '看这里，了解成都最近一周同城活动吧',
            href: 'https\://www.douban.com/location/chengdu/events/week-all'
          },
          {
            title: '美食推荐',
            desc: '美食街的镇街之宝，必须打卡的苍蝇馆子让你的每一天都过得热气腾腾',
            href: 'https\://you.ctrip.com/fooditem/chengdu104.html'
          },
          {
            title: '民宿客栈',
            desc: '一把藤椅，两株绿植，三杯热茶，来听听老板的故事吧',
            href: 'https\://hotels.ctrip.com/hotels/list?countryId=1&city=28&optionId=28&optionType=City&display=%e6%88%90%e9%83%bd'
          },
          {
            title: '休闲娱乐',
            desc: '摆龙门阵？茶馆闲谈？点击这里，了解更多老成都娱乐',
            href: 'https\://you.ctrip.com/sight/chengdu104.html'
          },
        ],
        carousel: new Array(14)
      }
    },
    created() {

    },
  })
})
