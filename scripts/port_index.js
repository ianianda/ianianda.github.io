window.onload = function () {
    setTimeout(function () {
        var loader = document.getElementsByClassName("loader")[0];
        loader.className = "loader fadeout";
        setTimeout(function () { loader.style.display = "none" }, 1000)
    }, 1000)
    
}

$('.movement a').on('click', function () {
    var type = $(this).data('type');
    $('#hud').removeClass().addClass(type);

    return false;
});