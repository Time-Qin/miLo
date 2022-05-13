$(function () {
    var data = [
        {
            pcUrl: "../images/lun1.jpg",
        },
        {
            pcUrl: "../images/lun2.jpg",
        },
        {
            pcUrl: "../images/lun2.jpg",
        },
    ];

    var $ol = $(".ML_banner .carousel-indicators");
    var $inner = $(".ML_banner .carousel-inner");
    function render() {
        var str = "";
        data.forEach((item, idx) => {
            str += `<div class="item ${idx == 0 ? "active" : ""}"><a href="#" class="m_imgBox"><img src="${item.pcUrl}" alt=""></a></div>`;
        });
        $inner.html(str);

        var str2 = "";
        data.forEach((item, idx) => {
            str2 += `<li data-target="#carousel-example-generic" class="${idx == 0 ? "active" : ""}" data-slide-to="${idx}"></li>`;
        });
        $ol.html(str2);

    }
    render();

    $(document).ready(
        function () {
            $(".header").affix({
                offset: {
                    top: 100,
                }
            });
            //每当加钉子执行的事件
            $(".header").on("affixed.bs.affix", function () {
                $("body").css("paddingTop", 180)
            })
            //每当取消钉子执行的事件
            $(".header").on("affixed-top.bs.affix", function () {
                $("body").css("paddingTop", 0)
            })
        }
    );


});
var ul1 = document.getElementById("new_one");
    var ul2 = document.getElementById("new_two");
    var box = document.getElementById("mod6_main");
    window.onload = roll(1500);
    ul2.innerHTML = ul1.innerHTML;
    function roll(t) {
        console.log(box.scrollTop);
        box.scrollTop = 1;
        var timer = setInterval(rollStart, t);
        box.onmouseover = function () {
            clearInterval(timer)
        }
        box.onmouseout = function () {
            timer = setInterval(rollStart, t);
        }
    }

    function rollStart() {
        if (box.scrollTop >= ul1.scrollHeight) {
            box.scrollTop = 1;
        } else {
            box.scrollTop += 10;
            box.scrollTop += 10;
            box.scrollTop += 15;
        }
    }
    $(function () {
        $(".navbar-toggle").click(function () {
            $(".ML_navbar_mask ").attr("style", "display:block");
            $(".col_right").addClass("left0");
        });
        $(".ML_navbar_mask").click(function () {
            $(".ML_navbar_mask ").attr("style", "display:none");
            $(".col_right").removeClass("left0");
        });
        $(".glyphicon.glyphicon-menu-down").click(function () {
            var that = $(this);
            if(that.hasClass("glyphicon-menu-down")){
                that.parent().parent().next().attr("style", "display:block");
                that.removeClass("glyphicon-menu-down");
                that.addClass("glyphicon-menu-up");
            }else{
                that.removeClass("glyphicon-menu-up");
                that.addClass("glyphicon-menu-down");
                that.parent().parent().next().attr("style", "display:none");
            }
        })
    });