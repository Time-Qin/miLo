$(function () {
    $(".ML_navbar .navbar-toggle").click(function () {
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