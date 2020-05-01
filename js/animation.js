$(document).ready(function() {
	$('.nav-link').click(function(event){
		event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
        
        // $('ul .active').removeClass('active');
        // $(this).addClass('active');
        
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
        // $(document).on("scroll", onScroll);
    });

    $(document).on("scroll", onScroll);

    $("#about .container").on("load", function(){
        console.log("abc");
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav li').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.children().attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('ul .active').removeClass('active');
            currLink.addClass("active");

            if (currLink.children().attr("href") == "#skill"){
                setProgressBars();
            } else {
                $('.bar').each(function(){
                    $(this).css("width", "0%");
                });
            }
        }
        else {
            currLink.removeClass("active");
        }
    });
}

function setProgressBars(){
    var values = [60, 80, 80, 20, 30, 90, 60, 90, 80, 90, 50, 60, 80, 90];
    var i = 0;
    $('.bar').each(function(){
        $(this).animate({width: values[i] + "%"}, 1000);
        i = i + 1;
    });
}