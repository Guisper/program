$(function () {


    //Box1
    var $content1 = $(".itemBox1");
    var i1 = 3;  //已知显示的<div>元素的个数
    var m1 = 3;  //用于计算的变量
    var count1 = $content1.find("div").length;//总共的<div>元素的个数
    function judgeBtn1() {
        if (m1 == 3) {
            $(".prevBtn1").hide();
            $(".nextBtn1").show();
        }
        else if (m1 == count1) {
            $(".nextBtn1").hide();
            $(".prevBtn1").show();
        }
        else {
            $(".prevBtn1").show();
            $(".nextBtn1").show();
        }
    }
    judgeBtn1()
    $(".nextBtn1").click(function () {
        if (!$content1.is(":animated")) {  //判断元素是否正处于动画，如果不处于动画状态，则追加动画。
            if (m1 < count1 - 2) {  //判断 i 是否小于总的个数
                m1 += 2;
                $content1.animate({ left: "-=730px" }, 500);
            }
            else {
                m1++;
                $content1.animate({ left: "-=365px" }, 500);
            }
            judgeBtn1();
        }
    });

    $(".prevBtn1").click(function () {
        if (!$content1.is(":animated")) {
            if (m1 > i1 + 2) {
                m1 -= 2;
                $content1.animate({ left: "+=730px" }, 500);
            } else {
                m1--;
                $content1.animate({ left: "+=365px" }, 500);
            }
            judgeBtn1();
        }
    });


    //Box2
    var $content2 = $(".itemBox2");
    var i2 = 3;  //已知显示的<div>元素的个数
    var m2 = 3;  //用于计算的变量
    var count2 = $content2.find("div").length;//总共的<div>元素的个数
    function judgeBtn2() {
        if (m2 == 3) {
            $(".prevBtn2").hide();
            $(".nextBtn2").show();
        }
        else if (m2 == count2) {
            $(".nextBtn2").hide();
            $(".prevBtn2").show();
        }
        else {
            $(".prevBtn2").show();
            $(".nextBtn2").show();
        }
    }
    judgeBtn2()
    $(".nextBtn2").click(function () {
        if (!$content2.is(":animated")) {  //判断元素是否正处于动画，如果不处于动画状态，则追加动画。
            if (m2 < count2) {  //判断 i 是否小于总的个数
                m2 += 2;
                $content2.animate({ left: "-=730px" }, 500);
            }
            judgeBtn2();
        }
    });

    $(".prevBtn2").click(function () {
        if (!$content2.is(":animated")) {
            if (m2 > i2) { //判断 i 是否小于总的个数
                m2 -= 2;
                $content2.animate({ left: "+=730px" }, 500);
            }
            judgeBtn2();
        }
    });



    //Box3
    var $content3 = $(".itemBox3");
    var i3 = 3;  //已知显示的<div>元素的个数
    var m3 = 3;  //用于计算的变量
    var count3 = $content3.find("div").length;//总共的<div>元素的个数
    function judgeBtn3() {
        if (m3 == 3) {
            $(".prevBtn3").hide();
            $(".nextBtn3").show();
        }
        else if (m3 == count3) {
            $(".nextBtn3").hide();
            $(".prevBtn3").show();
        }
        else {
            $(".prevBtn3").show();
            $(".nextBtn3").show();
        }
    }
    judgeBtn3()
    $(".nextBtn3").click(function () {
        if (!$content2.is(":animated")) {  //判断元素是否正处于动画，如果不处于动画状态，则追加动画。
            if (m3 < count3 - 2) {  //判断 i 是否小于总的个数
                m3 += 2;
                $content3.animate({ left: "-=730px" }, 500);
            } else {
                m3++;
                $content3.animate({ left: "-=365px" }, 500);
            }
            judgeBtn3();
        }
    });

    $(".prevBtn3").click(function () {
        if (!$content3.is(":animated")) {
            if (m3 > i3 + 2) { //判断 i 是否小于总的个数
                m3 -= 2;
                $content3.animate({ left: "+=730px" }, 500);
            } else {
                m3--;
                $content3.animate({ left: "+=365px" }, 500);
            }
            judgeBtn3();
        }
    });



    //Box4
    var $content4 = $(".itemBox4");
    var i4 = 3;  //已知显示的<div>元素的个数
    var m4 = 3;  //用于计算的变量
    var count4 = $content4.find("div").length;//总共的<div>元素的个数
    function judgeBtn4() {
        if (m4 == 3) {
            $(".prevBtn4").hide();
            $(".nextBtn4").show();
        }
        else if (m4 == count4) {
            $(".nextBtn4").hide();
            $(".prevBtn4").show();
        }
        else {
            $(".prevBtn4").show();
            $(".nextBtn4").show();
        }
    }
    judgeBtn4()
    $(".nextBtn4").click(function () {
        if (!$content2.is(":animated")) {  //判断元素是否正处于动画，如果不处于动画状态，则追加动画。
            if (m4 < count4) {  //判断 i 是否小于总的个数
                m4 += 3;
                $content4.animate({ left: "-=1095px" }, 500);
            }
            judgeBtn4();
        }
    });

    $(".prevBtn4").click(function () {
        if (!$content4.is(":animated")) {
            if (m4 > i4) { //判断 i 是否小于总的个数
                m4 -= 3;
                $content4.animate({ left: "+=1095px" }, 500);
            }
            judgeBtn4();
        }
    });
})