/*logo*/
$(`.logo img`).click(function () {
	window.open(`index.html`,`_self`);
})
/*logo*/
/*nav*/
$(window).scroll(function () {
	if($(window).scrollTop() > 200){
		$(`nav`).addClass(`fixed`)
	}else{
		$(`nav`).removeClass(`fixed`)
	}
})
$(window).ready(function () {
	if($(window).scrollTop() > 200){
		$(`nav`).addClass(`fixed`)
	}else{
		$(`nav`).removeClass(`fixed`)
	}
})
/*nav*/
/*menu*/
$(`.demo-icon.icon-menu`).click(function () {
    $(`nav ul.ul-navbar`).toggleClass(`active`)
	$(`nav ul.ul-navbar`).slideToggle()
})
//
$(`.drop`).mouseenter(function () {
    let data = $(this).data(`drop`);
    $(`.drop-down.hv${data}`).fadeIn(200)
})

$(`.drop`).mouseleave(function () {
    let data = $(this).data(`drop`);
    $(`.drop-down.hv${data}`).fadeOut(200)
})
$(`.drop`).click(function () {
	let data = $(this).data(`drop`);
	if($(this).hasClass(`active`)){
        $(`.drop-down.ck${data}`).slideUp()
        $(`nav ul.ul-navbar > li`).css({
        visibility: `visible`,
        pointerEvents: `all`
        });
        $(this).removeClass(`active`)
    }else{
        $(this).addClass(`active`)
        $(`.drop-down.ck${data}`).slideDown()
        $(`nav ul.ul-navbar > li:not(.active)`).css({
        visibility: `hidden`,
        pointerEvents: `none`
        });
    }
})
/*menu*/
/*footer*/
$(`footer .copy-right span`).click(function () {
    window.open(`index.html`,`_self`);window.location.reload()
})
/*footer*/