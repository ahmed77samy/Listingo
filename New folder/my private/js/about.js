/*counter*/
function counter(ele , start , end, middle) {
    $(window).scroll(function () {
        let i = start;
        if($(window).scrollTop() >= ele.offset().top - $(window).height()){
            let x = middle;
            if(x > start) {
                let interval = setInterval(function () {
                    i++;
                    start = i;
                    ele.text(i);
                    if (i >= end) {
                        clearInterval(interval)
                    }
                } ,10)
            }else {
                return false;
            }
        }
    })
}
counter($(".counter .count.one h2") , 4827, 5027, 4837)
counter($(".counter .count.two h2") , 478, 678, 488)
counter($(".counter .count.three h2") , 2092, 2292, 2102)
/*counter*/
/*testimonials*/
$(`.testimonials .side`).click(function () {
    let data = $(this).data(`change`);
    let data_2 = $(`.testimonials .customer.active`).data(`class`);
    if($(this).hasClass("right")){
        (data_2 == 3 ? data_2 = 0 : data_2 = data_2)
        let next = data + (data_2 + 1)
        $(`.testimonials .customer.active`).slideUp();
        $(`.testimonials .customer.active`).removeClass("active");
        $(`.testimonials .customer${next}`).slideDown()
        $(`.testimonials .customer${next}`).addClass("active")
    }else if ($(this).hasClass("left")){
        (data_2 == 1 ? data_2 = 4 : data_2 = data_2)
        let prev = data + (data_2 - 1)
        $(`.testimonials .customer.active`).slideUp();
        $(`.testimonials .customer.active`).removeClass("active");
        $(`.testimonials .customer${prev}`).slideDown()
        $(`.testimonials .customer${prev}`).addClass("active")
    }
})
$(window).ready(function () {
    $(`.testimonials .customer.active`).slideDown();
})
/*testimonials*/