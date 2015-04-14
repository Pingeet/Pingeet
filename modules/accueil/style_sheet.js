'use strict';
$(function() {
            var $window = $(window);
            var controlheadBand = document.getElementById("headBand");
             $window.scroll(function() {
                if ($window.scrollTop() == 0)
                    controlheadBand.style.top = "50px";
                else if ($window.scrollTop() > 1)
                    controlheadBand.style.top = "0px";
             });
            });