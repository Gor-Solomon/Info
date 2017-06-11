$(document).ready(function() {
    $(".myNavigator").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });

    $('#pauseBtn').click(function(e) {
        if ($("#Nadia_audio").get(0).paused == false) {
            $("#Nadia_audio").get(0).pause();
        } else {
            $("#Nadia_audio").get(0).play();
        }
    });

    $("#Nadia_audio").get(0).play();
    $('#Nadia_audio').prop("volume", 0.05);


});