function closeSubmenu() {
  $(".submenu.open").removeClass("open").slideUp().prev().children("span").css({
    transform: "rotate(0deg)",
  });
}

function closeMenu() {
  // 检查是否有其他的submenu打开，如果有就关闭
  if ($(".submenu.open")) {
    closeSubmenu();
  }
  $(".w-dropdown-toggle>span").css({
    transform: "rotate(0deg)",
  });
  $(".w-dropdown-menu").removeClass("open").slideUp();
}

$(".w-dropdown-toggle").click(function () {
  // 如果menu已经打开，则关闭
  if ($(".w-dropdown-menu").hasClass("open")) {
    closeMenu();
  } else {
    $(".w-dropdown-menu").addClass("open").slideDown();
    $(".w-dropdown-toggle>span").css({
      transform: "rotate(180deg)",
    });
  }
});

$(".submenu-dropdown-toggle").click(function () {
  // 如果submenu已经打开，则关闭
  if ($(this).next().hasClass("open")) {
    $(this).next().removeClass("open").slideUp();
    $(this).children("span").css({
      transform: "rotate(0deg)",
    });
  } else {
    // 检查是否有其他的submenu打开，如果有就关闭
    if ($(".submenu.open")) {
      closeSubmenu();
    }
    $(this).next().addClass("open").slideDown();
    $(this).children("span").css({
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
