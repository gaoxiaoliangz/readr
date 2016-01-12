var book_id = #{book_id};
var book_progress = 0;
var cloud_progress = 0;
var base_url = "/";
var progress = 0;
var book_layout;
var book_content;


function Book(paraArr){
  
}

Book.prototype = {
  init: function(){

  },
  progress: function(p){

  }
};


$(function(){

  // css
  $("head").append("<style type='text/css'>"+
    ".pages ul li, .pages ul li .content {height:"+view.page_height+"px; font-size:"+view.font_size+"px; line-height:"+view.line_height+"px;}"+
    ".pages ul li br {height:"+view.line_height+"px;}"+
    ".pages ul li p {min-height:"+view.line_height+"px;}"+
  "</style>");


  // init
  if(localStorage.getItem("book-"+book_id+"-layout") == null){
    initBook(book_id);
  }else{
    // content preparation
    book_layout = JSON.parse(localStorage.getItem("book-"+book_id+"-layout"));
    if(book_layout.window_width > 700){
      if($(window).width() < 700){
        localStorage.removeItem("book-"+book_id+"-layout");
        location.reload();
      }else{
        $("body").addClass("hd");
      }
    }else{
      if($(window).width() > 700){
        localStorage.removeItem("book-"+book_id+"-layout");
        location.reload();
      }else{
        $("body").addClass("mobile");
      }
    }
    $(".pages ul").height(book_layout.height);
    book_content = localStorage.getItem("book-"+book_id);
    book_content = book_content.split("\n");

    // progress handling
    if(book_progress){
      $("body").scrollTop(book_progress * book_layout.height);
    }else{
      if(localStorage.getItem("book-"+book_id+"-progress")){
        var progress = localStorage.getItem("book-"+book_id+"-progress");
        $("body").scrollTop(progress * book_layout.height);
        handleCloudProgress(book_id, progress);
      }else{
        showPageWithFxInModeOne(1);
        showPageWithFxInModeOne(2);
      }
    }

    // when resize
    $(window).resize(function() {
      if(initial_win_width != $(window).width()){
        if(!((initial_win_width > 700) && ($(window).width() > 700))){
          localStorage.removeItem("book-"+book_id+"-layout");
          location.reload();
        }
        var w_width = $(window).width();
      }
    });


    // functions
    $(".functions .home").tap(function(){
      location.href = base_url + "books";
    });

    $(".functions .clear").tap(function(){
      localStorage.removeItem("book-"+book_id);
      localStorage.removeItem("book-"+book_id+"-2");
      localStorage.removeItem("book-"+book_id+"-layout");
      location.reload();
    });

    // functions panel
    if($(".view").hasClass("hd")){
      $("body").on('mousemove', function(e){
        var y = e.pageY - $("body").scrollTop();
        var x = e.pageX;

        if(y < 90){
          $(".view .functions").slideDown();
        }else if($(".dia-wrap").length == 0){
          $(".view .functions").slideUp();
        }
      });
    }else if($(".view").hasClass("mobile")){
      $("body").tap(function(){
        $(".view .functions").slideToggle("fast");
      });
    }

    // scroll
    handelScroll();
  }
});
