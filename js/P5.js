$(function () {
    const x = 104.084159
    const y = 30.66232
    setTimeout(() => {
        var map = new BMap.Map("container");    // 创建Map实例
        var point = new BMap.Point(x, y);//中心点位置
        map.centerAndZoom(point, 13);
        var marker = new BMap.Marker(new BMap.Point(x, y)); // 创建点
        //添加覆盖物
        function add_overlay() {
            map.addOverlay(marker);//增加点
        }
        add_overlay();//展示点
        map.enableScrollWheelZoom(true);//开启鼠标轮轴缩放
        map.enableInertialDragging();//开启惯性拖曳
    }, 1000);
})