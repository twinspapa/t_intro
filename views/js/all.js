(function($){
    $(document).ready(function() {
        AOS.init({
            duration: 1000,
        })

        $(window).scroll(function(e) {
          if ($(window).scrollTop() > 0) {
              $("body").addClass("body-scrolled");
          }
          else if ($(window).scrollTop() === 0){
              $("body").removeClass("body-scrolled");
          }

        });

    });
})(jQuery);

function raito(objClass, raito) {
    var obj = $('.' + objClass),
        objWidth = obj.width(),
        objHeight = objWidth * raito;

    obj.css('height', objHeight + 'px')
}
