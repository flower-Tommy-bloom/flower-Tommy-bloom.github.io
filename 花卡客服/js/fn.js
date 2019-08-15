    // 手风琴动画
    function accordion_start(that) {
        var html = $(that).parent().children('section').html().replace(/(<\/?a.*?>)|(<\/?span.*?>)/g, '')
        var hang = html.length / 13 / 24
        var height = ((hang * 18) + 2) / 4
        $(that).parent().children('section').addClass('active')
        $(that).parent().children('section').css('height', height + 'rem')
        $(that).children('img').css('transform', 'rotateZ(180deg)')
    }
    // 手风琴动画
    function accordion_end(that) {
        $(that).parent().children('section').removeClass('active')
        $(that).parent().children('section').css('height','0')
        $(that).children('img').css('transform','translateY(-50%) rotateZ(0)')
    }