$(document).ready(function () {
    $("#box").on("input change", function () {
    
    $("body").css("background-color", $(this).val());
    if ($("#box").val() <= "#8d8d8d") {
        $("h2, p").css("color", "white");
    } else {
        $("h2, p").css("color", "black");
    }
    });
});