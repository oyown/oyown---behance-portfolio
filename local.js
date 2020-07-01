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
      title:"VR Game Interface",
      desc: "Canada — Freelance",
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a786f293075375.5e5be7f9a0887.jpg"
    },
    {
      title:"Tickdown",
      desc: "this is desc 2",
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/37e02283195001.5d357100d2419.jpg"
    },
    {
      title:"Web Dev company rebranding",
      desc: "New Jersey, US — Freelance",
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/04f34393075165.5e5be6ae791c0.jpg"
    },
    {
      title:"Cardiorythm",
      desc: "this is desc 4",
      imageUrl: "www.google.com"
    },
    {
      title:"Esports betting platform",
      desc: "Florida — Freelance",
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6d535f93075243.5e5be7262cf19.jpg"
    },
    {
      title:"Ticket Aggregator Platform",
      desc: "this is desc 6",
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/9a470d78648715.5cab5dda04874.jpg"
    }
  ]

  $(".project--title").text(projectScreenList[projectNumber].title);
  $(".project--description").text(projectScreenList[projectNumber].desc);
  $(".project--image").attr("src", projectScreenList[projectNumber].imageUrl);

  //random project number
  projectNumber = projectNumber + 1;
  var nextProjectNumber = (Math.random() * (6 - 1 + 1) ) << 0;

  if (projectNumber == nextProjectNumber){
    if(nextProjectNumber != 6){
      nextProjectNumber ++;
    }
    else if(nextProjectNumber != 1){
      nextProjectNumber --;
    }
  }

  $("a.title-container").attr("href", 'project-page.html?numProject='+nextProjectNumber);

  // console.log(projectNumber, nextProjectNumber);

});
