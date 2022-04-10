var heightH = 0

jQuery(document).ready(function () {
    $('#back2Top2').fadeIn();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 500) {
            $('#back2Top').fadeIn();
            $('#back2Top2').fadeOut();
        } else {
            $('#back2Top').fadeOut();
            $('#back2Top2').fadeIn();
        }
    });
        $("#back2Top").click(function (event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

        $("#back2Top2").click(function (event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: document.documentElement.scrollHeight }, "slow");
            return false;
        });
    
    });

console.log(document.documentElement.scrollHeight)