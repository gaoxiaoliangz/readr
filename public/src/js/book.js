// var book_id = #{book_id};
// var book_progress = 0;
// var cloud_progress = 0;
// var base_url = "/";
// var progress = 0;
// var book_layout;
// var book_content;

//- var initial_win_width = $(window).width();
//- if($(window).width() > 700){
//-   var view = {
//-     page_height: 910,
//-     line_height: 35,
//-     font_size: 16
//-   }
//- }else{
//-   var view = {
//-     page_height: 1400,
//-     line_height: 35,
//-     font_size: 19
//-   }
//- }

function Book(obj){
  // this.bookId = obj.bookId,
  // this.progress = obj.progress || 0,
  // this.layout;
  // this.content;
  // this.mode = "vertical";
  //
  //
  //
  // this.bookContentRaw;
  // this.bookContentHtml;


  this.config = {
    bookId: obj.bookId,
    progress: obj.progress || 0,
    bookContentRaw: null,
    bookContentHtml: null,
    view: {
      mode: "vertical",
      pageHeight: obj.view.pageHeight || 910,
    },
    rendering: {
      elements: [],
      view: {
        pageHeight: null,
        pageSum: null,
        windowWidth: null,
        bookHeight: null
      }
    }
  }

  this.init();


}

Book.prototype = {
  init: function(){
    // get book data, lay out book and set progress


    // $("body").append("<div class='dia-wrap dia_loading'><div class='loading'></div></div>");
    // $('.dia-wrap').height($(window).height());
    var bookId = this.config.bookId;
    var view = this.config.view;

    if(!localStorage.getItem("book_"+bookId+"_raw") || !localStorage.getItem("book_"+bookId+"_html")){
      this.getBookData();
    }else{
      var bookHtml = this.config.bookContentHtml = localStorage.getItem("book_"+bookId+"_html");
      $(".container ul").append("<li class='init'><div class='content'>"+bookHtml+"</div></li>");

      // var book_content = localStorage.getItem("book_"+book_id+"raw_text");
      // book_content = book_content.split("\n");


      // render book
      setTimeout(function(){
        var rendering = {
          elements: [],
          view: {}
        };

        $(".pages li .content").children().each(function(index){
          var h = $(this).height();
          var type = $(this).prop("tagName");
          var renderingStr;
          rendering.elements.push({
            type: type,
            height: h
          });
        });

        rendering.view.bookHeight = $(".pages ul").height();
        rendering.view.pageSum = Math.ceil($(".pages ul").height()/view.pageHeight);
        rendering.view.windowWidth = $(window).width();
        rendering.view.pageHeight = view.pageHeight;

        this.config.rendering = rendering;
        renderingStr = JSON.stringify(rendering);

        localStorage.setItem("book_"+bookId+"_rendering",renderingStr);
        localStorage.setItem("book_"+bookId+"_progress", 0);
        // location.reload();
      },1000);
    }

    $(window).scroll(this.handleScroll);
  },
  viewChanged: function(){
    // check if view is same as the rending saved, then return bool
  },
  progress: function(p){
    // set progress when parameter is given, and get progress when not
  },
  getBookData: function(){
    // get book data and store it in local storage
    var bookId = this.config.bookId;
    console.log(bookId);
    $.ajax({
      url: "/api/v0.1/books/" + bookId + '/content/',
      type: 'GET',
      dataType: 'text',
      complete: function(jqXHR, textStatus) {
      },
      success: function(result, textStatus, jqXHR) {
        result = eval("("+result+")");
        console.log(result);
        if(result.data){
          localStorage.setItem("book_"+bookId+"_raw", result.data[0].raw);
          localStorage.setItem("book_"+bookId+"_html", result.data[0].html);
        }else{
          alert("Wrong book content format!");
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      }
    });
  },
  renderBook: function(){
    // generate book layout and store result in local storage
  },
  renderPage: function(page){
    // return generated page html
    var view = this.config.rendering.view;
    var elements = this.bookContentRaw.split("\n");
    var rendering = this.config.rendering;

    var h = 0, h2 = 0, i = 0, s = true, para = 0, para2 = 0, para_margin = 0, top = 0, para_qt = 0,
        p_qt = rendering.elements.length,
        page_content = null;

    while (i < p_qt && h < view.pageHeight * page) {
      h = parseInt(rendering.elements[i].height) + h;
      h2 = h - parseInt(rendering.elements[i].height);
      if ((h > view.pageHeight * (page - 1)) && (s == true)) {
        para = i;
        para_margin = h2 - view.pageHeight * (page - 1);
        s = false;
      }
      para2 = i;
      i++;
    }
    para_qt = para2 - para + 1;
    top = (page - 1) * view.pageHeight;
    for(i = para; i <= para2; i++){
      if(i == para){
        page_content = page_content + "<p style='margin-top: "+para_margin+"px;'>"+ elements[i] + "</p>";
      }else{
        page_content = page_content + "<p>" + elements[i] + "</p>";
      }
    }
    page_content = "<li class='page_"+page+"' style='top: "+top+"px;'><div class='content'>" + page_content + "</div><div class='pg_num'>"+page+"</div></li>";

    return page_content;
  },

  // todo
  handleScroll: function(){
		var timer;
		var lastScrollTop = 0;


			load = function(){
				var offset = 0;
				var h = $("body").scrollTop();
				var p = parseInt(h/view.page_height) + 1;

				showPageWithFxInModeOne(p);
				showPageWithFxInModeOne(p+1);
				showPageWithFxInModeOne(p+2);

				// set local progress
				var p2 = (h/book_layout.height).toFixed(4);
				localStorage.setItem("book_"+book_id+"_progress", p2);

				// set cloud progress
				setCloudProgress(book_id, p2);

				// set loc display
				$(".functions .loc").html(p+"/"+(book_layout.height/view.page_height).toFixed(0));
			};

			clearTimeout(timer);
			timer = setTimeout(load, 100);

  }
};
