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

  // show project
  var projectNumber = parseInt(getUrlParameter("numProject")) - 1;
  var projectScreenList = [
    {
      title:"Tickdown",
      desc: "Since I can't show most of my best projects due to NDA, here's a look at some of the works I did while interviewing for several companies. This is an attempt to show the quality I design at and that I don't cut corners, even for an interview.",
      imageUrl: "../Works/Images/Static Images/tickdown.jpg"
    },
    {
      title:"Cardiorythm",
      desc: "Since I can't show most of my best projects due to NDA, here's a look at some of the works I did while interviewing for several companies. This is an attempt to show the quality I design at and that I don't cut corners, even for an interview.",
      imageUrl: "../Works/Images/Static Images/cardiorythm.jpg"
    },
    
    {
      title:"Ticket Aggregator Platform",
      desc: "A ticket aggregator platform for a US based company, you can compare and buy tickets to concerts across your city.",
      imageUrl: "../Works/Images/Static Images/stealtix.jpg"
    },
    {
      title:"VR Game Interface",
      desc: "Canada — Freelance",
      imageUrl: "../Works/Images/Static Images/vr-game.jpg"
    }
  ]

  if(projectNumber >= 0){
    $(".project--title").text(projectScreenList[projectNumber].title);
    $(".project--description").text(projectScreenList[projectNumber].desc);
    $(".project--image").attr("src", projectScreenList[projectNumber].imageUrl);
  }


  //next project number
  var nextProjectNumber = projectNumber + 2;

  if(nextProjectNumber >= projectScreenList.length+1 || nextProjectNumber <= 1){
    nextProjectNumber = 1;
  }

  if(projectNumber >= 0){
  $("a.title-container.is-next-link").attr("href", 'project-page.html?numProject='+nextProjectNumber);
  }

  // console.log(projectNumber, nextProjectNumber);


  //lightslider
  if($(".lightslider").length > 0){
  $("ul.lightSlider").lightSlider({
    item: 1,
    loop: true,
    gallery: true,
    controls: false,
    thumbMargin: 15,
    enableDrag:false,
  })
}
  
  //lightbox
  $(".content-image").click(function(){
    $('body').addClass("no-scroll");
    var el = $(this);
    var imageSrc = el.find("img").attr("src");
    var caption = el.find(".caption").text();

    //console.log(el, image, caption)

    $(".ayn-lightbox .lightbox-images").find(".image-bg").attr("style", "background-image: url('"+ imageSrc +"')");
    $(".ayn-lightbox .lightbox-images").find(".caption").text(caption);
    $(".ayn-lightbox").show();
  })

  $(".ayn-lightbox, .ayn-lightbox .is-cancel").click(function(item){
    $('body').removeClass("no-scroll");
    if($(item.target).is('img') || $(item.target).is('.caption')|| $(item.target).is('.is-rotate')){
      
    }
    else{
      $(".ayn-lightbox").hide();
    }
  })

  $(".ayn-lightbox .is-rotate").click(function(item){
    $(".ayn-lightbox").toggleClass("is-rotated");
  });
});
