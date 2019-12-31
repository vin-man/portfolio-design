// $(".portfolio-link").on("shown.bs.modal", function()  {
//     var urlReplace = "#" + $(this).attr('id');
//     history.pushState(null, null, urlReplace);
//   });
//
//   // This code gets executed when the back button is clicked, hide any/open modals.
//   $(window).on('popstate', function() {
// console.log("Yeah baby");
//     $(".portfolio-link").modal('hide');
//   });
// $('.portfolio-link').on('show.bs.modal', function(e) {
//        window.location.hash = "modal";
//    });
//
//    $(window).on('hashchange', function (event) {
//        if(window.location.hash != "#modal") {
//            $('.portfolio-link').modal('hide');
//        }
//    });
// $('#portfolioModal1').on('show.bs.modal', function(e) {
//        window.location.hash = "modal";
//    console.log(window.location.href);
//    });
//
//    $(window).on('hashchange', function (event) {
//    console.log("Yo");
//    console.log(window.location.href);
//        if(window.location.hash != "#modal") {
//            $('#portfolioModal1').modal('hide');
//        }
//    });
//
//    $('#portfolioModal2').on('show.bs.modal', function(e) {
//           window.location.hash = "modal";
//       console.log(window.location.href);
//       });
//
//       $(window).on('hashchange', function (event) {
//       console.log("Yo");
//       console.log(window.location.href);
//           if(window.location.hash != "#modal") {
//               $('#portfolioModal2').modal('hide');
//           }
//       });
//
//       $('#portfolioModal3').on('show.bs.modal', function(e) {
//              window.location.hash = "modal";
//          console.log(window.location.href);
//          });
//
//          $(window).on('hashchange', function (event) {
//          console.log("Yo");
//          console.log(window.location.href);
//              if(window.location.hash != "#modal") {
//                  $('#portfolioModal3').modal('hide');
//              }
//          });
//
//          $('#portfolioModal4').on('show.bs.modal', function(e) {
//                 window.location.hash = "modal";
//             console.log(window.location.href);
//             });
//
//             $(window).on('hashchange', function (event) {
//             console.log("Yo");
//             console.log(window.location.href);
//                 if(window.location.hash != "#modal") {
//                     $('#portfolioModal4').modal('hide');
//                 }
//             });
//
//             $('#portfolioModal5').on('show.bs.modal', function(e) {
//                    window.location.hash = "modal";
//                console.log(window.location.href);
//                });
//
//                $(window).on('hashchange', function (event) {
//                console.log("Yo");
//                console.log(window.location.href);
//                    if(window.location.hash != "#modal") {
//                        $('#portfolioModal5').modal('hide');
//                    }
//                });
// List of projects' hash values to be displayed in URL on clicking
projects = [null, "FirstProject", "SecondProject", "ThirdProject", "FourthProject", "FifthProject", "SixthProject", "SeventhProject", "EighthProject", "NinthProject" , "SmartScheduler" , "WhatsApp" , "schlotzskys"];

function clickProject(i) {
    history.pushState(null, null, "#"+projects[parseInt(i)]);
}

function closeProject (e) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

$('#portfolioModal1').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });
$('#portfolioModal2').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });
$('#portfolioModal3').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });
$('#portfolioModal4').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });
$('#portfolioModal5').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });
$('#portfolioModal6').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });
$('#portfolioModal7').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });
$('#portfolioModal8').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });
$('#portfolioModal9').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });
$('#portfolioModal10').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });
$('#portfolioModal11').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });
$('#portfolioModal12').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });

$('#portfolioModal13').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });
$('#portfolioModal14').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });
$('#portfolioModal15').on('show.bs.modal', function(e) { clickProject(this.id.slice(14)); });


$('#portfolioModal1').on('hide.bs.modal', closeProject);
$('#portfolioModal2').on('hide.bs.modal', closeProject);
$('#portfolioModal3').on('hide.bs.modal', closeProject);
$('#portfolioModal4').on('hide.bs.modal', closeProject);
$('#portfolioModal5').on('hide.bs.modal', closeProject);
$('#portfolioModal6').on('hide.bs.modal', closeProject);
$('#portfolioModal7').on('hide.bs.modal', closeProject);
$('#portfolioModal8').on('hide.bs.modal', closeProject);
$('#portfolioModal9').on('hide.bs.modal', closeProject);
$('#portfolioModal10').on('hide.bs.modal', closeProject);
$('#portfolioModal11').on('hide.bs.modal', closeProject);
$('#portfolioModal12').on('hide.bs.modal', closeProject);

$('#portfolioModal13').on('hide.bs.modal', closeProject);
$('#portfolioModal14').on('hide.bs.modal', closeProject);
$('#portfolioModal15').on('hide.bs.modal', closeProject);


$(window).on('hashchange', function (e) {

	for (i=1;i<projects.length;i++) {
   		if(window.location.hash == projects[i]) {
      		$('#portfolioModal'+i.toString()).modal('show');

        }
        else {
        	$('#portfolioModal'+i.toString()).modal('hide');

        }
	}
});


var slideIndex = [1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

var abc = document.getElementById("open");
var img = document.getElementById("imgContain");
function openup(){
  if(img.style.height == "0px")
    img.style.height = "100%";
  else
    img.style.height = "0px";
}