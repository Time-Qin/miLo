$(function () {
    $('.modal_trigger').click(function () {
        // 设置top为垂直方向滚动出去的距离+50
        var width = $(document).scrollTop() + 50;
        $('.modal').css({
            top: width,
        })
    });

    function notClick() {
        if ($(window).width() < 767) {
            //当浏览器小于767时，modal_trigger不可以被点击
            $('.modal_trigger').addClass('notClick');
        }
        else {
            $('.modal_trigger').removeClass('notClick');
        }
    }

    $(window).load(function () {
        notClick();
    })

    $(window).resize(function () {
        notClick();
    });

    // 当出现模态框之后，点击不是模态框外面区域也可关闭模态框
    $(document).click(function () {
        if ($('.modal-backdrop.in')) {
            $('.modal-backdrop.in').click(function () {
                $('.closeModal').click();
            })
        }
    })

})