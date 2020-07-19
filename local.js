$('document').ready(function() {
  // read url
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
  };


  //lightslider
  $("ul.lightSlider").lightSlider({
    item: 1,
    loop: true,
    gallery: true,
    controls: false,
    thumbMargin: 15,
    enableDrag:false,
  })
  
});
