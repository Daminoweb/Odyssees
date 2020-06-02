//=======JQUERY=======//
/*jslint node: true*/
/*global $, alert, window*/
//Changement de classe//
$(document).ready(function () {
    var $menu = $('nav ul'),
        $menulink = $('a#responsive');
    $menulink.click(function () {
        $menu.toggleClass('show');
//Pour "remettre à zéro les classes si on réagrandit la fenêtre//
        $(window).resize(function () {
            if (window.innerWidth > 720) {
                $menu.removeClass("show");
            }
        });
        return false;
    });
});

//====Pur JS===//
var year = new Date().getFullYear();
document.getElementById("date").innerHTML = year;