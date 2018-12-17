$(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
        $(".backtop").fadeIn("slow");
    }
    else {
        $(".backtop").fadeOut("fast");
    }
});


$(function() {
    $('.hendone_item').on('click', function() {
        $(this).addClass('opened');
    });
});



$(function() {
    $('.watermelon > li').on('click', function() {
        $(this).addClass('hvr-pulse');
    });
});



function myFunction(className) {
  var copyText = document.getElementById(className);
  copyText.select();
  document.execCommand("copy");
  swal("حله", "کد کپــی شــد", "success")
}


/*popover*/
$('[data-toggle="popover"]').popover({placement : 'top'});
$('[data-toggle="popover"]').on('click', function (e) {
    $('video').not(this).popover('hide');
});


/*hidepopover*/
$('body').on('click', function (e) {
    $('[data-toggle=popover]').each(function () {
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});
