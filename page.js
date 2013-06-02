$(document).ready(function(){

$("#tab1Content").show()
$("#tab1Image1").show()

// Tabs
//
$(".tab").click(function(){
  var tab = this;
  $(".tabContent").hide();
  $("#"+$(tab).attr("data-content")).show();
})

// image carousel
//
$(".button").click(function(){
  
  var step = ($(this).attr("direction")=="left") ? -1:1;
  var index=0;
  
  // identify and hide the current image
  for(var i=0;i<$("#tab1Images").children().length;i++){
    if($("#tab1Image"+(i+1)).is(":visible")){
      $("#tab1Image"+(i+1)).hide();
      index=i+1;
    }
  }
  // unhide the next image
  if(index!=0){
    var next=0;
    if((index+step)==0)
    {
      next=4;
    }
    else if((index+step)==($("#tab1Images").children().length+1))
    {
      next=1;
    }
    else
    {
      next=index+step;
    }
    var nextImage="#tab1Image"+next;
    $(nextImage).show();
  }
})


})