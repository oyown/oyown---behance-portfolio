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
      desc: "Since I can't show most of my best projects due to NDA, here's a look at some of the works I did while interviewing for several companies. This is an attempt to show the quality I design at and that I don't cut corners, even for an interview.",
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/37e02283195001.5d357100d2419.jpg"
    },
    {
      title:"Web Dev company rebranding",
      desc: "New Jersey, US — Freelance",
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/04f34393075165.5e5be6ae791c0.jpg"
    },
    {
      title:"Cardiorythm",
      desc: "Since I can't show most of my best projects due to NDA, here's a look at some of the works I did while interviewing for several companies. This is an attempt to show the quality I design at and that I don't cut corners, even for an interview.",
      imageUrl: "https://mir-cdn.behance.net/v1/rendition/project_modules/fs/f138b199889481.5efcaad6d7df1.jpg"
    },
    {
      title:"Esports betting platform",
      desc: "Florida — Freelance",
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6d535f93075243.5e5be7262cf19.jpg"
    },
    {
      title:"Ticket Aggregator Platform",
      desc: "A ticket aggregator platform for a US based company, you can compare and buy tickets to concerts across your city.",
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/9a470d78648715.5cab5dda04874.jpg"
    }
  ]

  $(".project--title").text(projectScreenList[projectNumber].title);
  $(".project--description").text(projectScreenList[projectNumber].desc);
  $(".project--image").attr("src", projectScreenList[projectNumber].imageUrl);

  //next project number
  var nextProjectNumber = projectNumber + 2;

  if(nextProjectNumber >= 6 || nextProjectNumber <= 1){
    nextProjectNumber = 1;
  }

  $("a.title-container.is-next-link").attr("href", 'project-template.html?numProject='+nextProjectNumber);

  // console.log(projectNumber, nextProjectNumber);

});
