/**
 * Created by ASUS on 2017/5/22.
 */
// 轮播图
var picCurrent = 1;
var picTotal = 5;//图片总数
var interval;

$(document).ready(function () {
    PicRun();//加载轮播

    // 标签切换
    $(".news_title_info_ul li").click(function () {
        var index = $(".news_title_info_ul li").index(this);//
        if($(this).hasClass("selected")){
            return true;
        }else{
            $(".news_title_info_ul li").removeClass("selected");
            $(this).addClass("selected");

            $(".news_info_div").eq(index).show().siblings().hide();
        }
    });
});

function PicRun(functionName) {
    picChange(1);//改变图片
    interval = setInterval(PicNext, "3000");//设置间隔时间
}


function picChange(current) {
    PicStop();
    picCurrent = current;
    setSelectClass();//设置改变的样式
    PicAnimate();//调用animate动画
    return false;
}

function PicStop() {
    if ($("#divImg").is(":animated")) { $("#divImg").stop(); }
    return false;
}

function setSelectClass() {
    $("#divLink").find("a").find("img").attr("src","img/icon.png");
    var obj = $("#divLink").find("a[title='" + picCurrent + "']");
    obj.find("img").attr("src","img/icon_fixed.png");
    return false;
}

function PicAnimate() {
    $("#divImg").animate({ left: -((picCurrent - 1) * 424) + "px" }, "424");
}

function PicPer() {
    if (picCurrent > 1) {
        picCurrent--;
    }
    else {
        picCurrent = picTotal;
    }
    picChange(picCurrent);
}
function PicNext() {
    if (picCurrent == picTotal) {
        picCurrent = 1
    }
    else {
        picCurrent++;
    }
    picChange(picCurrent);
}

function PicIntervalStop() {
    clearTimeout(interval);
}



