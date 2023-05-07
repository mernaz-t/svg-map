/*
 * Iran map - SVG format and full responsive - Free and open source.
 * Version 1.0.0
 * Copyright Â© 2014.
 * By: MohammadReza Pourmohammad.
 * Email: mohammadrpm@gmail.com
 * Web: http://mrpm.ir - http://aysuweb.com
 */

$(function() {

    $(window).resize(function() {
        resposive();
    });

    function resposive() {
        var height = $('#map .list').height();
        var width = $('#map .list').width();
        if (height > width) {
            $('#map .map').height(width).width(width);
        } else if (height < width) {
            $('#map .map').height(height).width(height);
        } else {
            $('#map .map').height(height).width(height);
        }
    }
    resposive();
    $('#map svg g path').click(function() {
        $this = $(this);
        var className = $this.attr('class');
        var parrentClassName = $this.parent('g').attr('class');
        if (parrentClassName == 'province') {
            if ($this.data('href')) {
                var url = $this.data('href');
                window.open(url, '_parent');
            }
        }
    });
    $('#map .list a').click(function() {
        $this = $(this);
        province = $this.parent().attr('class');
        var url = $('#map svg g path.' + province).data('href');
        window.open(url, '_parent');
    });

    $('#map svg g path').hover(function() {
        var className = $(this).attr('class');
        var parrentClassName = $(this).parent('g').attr('class');
        var itemName = $('#map .list .' + parrentClassName + ' .' + className + ' a').html();
        if (itemName) {
            $('#map .list .' + parrentClassName + ' .' + className + ' a').addClass('hover');
            $('#map .show-title').html(itemName).css({ 'display': 'block' });
        }
    }, function() {
        $('#map .list a').removeClass('hover');
        $('#map .show-title').html('').css({ 'display': 'none' });
    });

    $('#map .list ul li ul li a').hover(function() {
        var className = $(this).parent('li').attr('class');
        var parrentClassName = $(this).parent('li').parent('ul').parent('li').attr('class');
        var object = '#map svg g.' + parrentClassName + ' path.' + className;
        var currentClass = $(object).attr('class');
        $(object).attr('class', currentClass + ' hover');
    }, function() {
        var className = $(this).parent('li').attr('class');
        var parrentClassName = $(this).parent('li').parent('ul').parent('li').attr('class');
        var object = '#map svg g.' + parrentClassName + ' path.' + className;
        var currentClass = $(object).attr('class');
        $(object).attr('class', currentClass.replace(' hover', ''));
    });

    $('#map').mousemove(function(event) {
        if ($('#map .show-title').html()) {
            var offset = $(this).offset();
            var x = (event.clientX - offset.left + 30) + 'px';
            var y = (event.clientY - offset.top - 5) + 'px';
            $('#map .show-title').css({ 'left': x, 'top': y });
        }
    });

});