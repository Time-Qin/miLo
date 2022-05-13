$(function(){
    function closeMenu() {
        $(".cc-dropdown-toggle>span").css({
            transform: "rotate(0deg)",
        });
        $(".cc-dropdown-menu").removeClass("open").slideUp();
    }

    $(".cc-dropdown-toggle").click(function () {
        // 如果menu已经打开，则关闭
        if ($(".cc-dropdown-menu").hasClass("open")) {
            closeMenu();
        } else {
            $(".cc-dropdown-menu").addClass("open").slideDown();
            $(".cc-dropdown-toggle>span").css({
                transform: "rotate(180deg)",
            });
        }
    });

    $(window).resize(function () {
        if ($(window).width() > 767) {
            //当浏览器大小大于767时，如果dropdown-menu打开则关闭所有
            closeMenu();
        }
    });
   })