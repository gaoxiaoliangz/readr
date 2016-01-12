
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
  this.config = {
    bookId: obj.bookId,
    progress: obj.progress || 0,
    bookContentRaw: null,
    bookContentHtml: null,
    fx: "fadeInDown",
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
    var bookId = this.config.bookId;
    var view = this.config.view;
    var that = this;

    if(!localStorage.getItem("book_"+bookId+"_raw") || !localStorage.getItem("book_"+bookId+"_html") || !localStorage.getItem("book_"+bookId+"_rendering")){
      this.getBookData(this.renderBook);
    }else{
      this.config.rendering = JSON.parse(localStorage.getItem("book_"+bookId+"_rendering"));
      this.config.bookContentHtml = localStorage.getItem("book_"+bookId+"_html");
      this.config.bookContentRaw = localStorage.getItem("book_"+bookId+"_raw");

      $(".pages ul").height(this.config.rendering.view.bookHeight);
      that.mountPage(1);
      that.mountPage(2);
      that.mountPage(3);

      $(window).scroll(function(){
        that.handleScroll.call(that);
      });
    }
  },
  renderBook: function(){
    var bookId = this.config.bookId,
        bookHtml = this.config.bookContentHtml = localStorage.getItem("book_"+bookId+"_html"),
        bookRaw = this.config.bookContentRaw = localStorage.getItem("book_"+bookId+"_raw"),
        view = this.config.view;

    this.showLoading();
    $(".container ul").append("<li class='init'><div class='content'>"+bookHtml+"</div></li>");

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

      renderingStr = JSON.stringify(rendering);
      localStorage.setItem("book_"+bookId+"_rendering",renderingStr);
      localStorage.setItem("book_"+bookId+"_progress", 0);
      location.reload();
    },1000);
  },
  showLoading: function(){
    if(!$("body").hasClass("loading")){
      $("body").append("<div class='dia-wrap dia_loading'><div class='loading'></div></div>").addClass("loading");
      $('.dia-wrap').height($(window).height());
    }
  },
  hideLoading: function(){
    $(".dia_loading").remove();
    $("body").removeClass("loading");
  },
  viewChanged: function(){
    // check if view is same as the rending saved, then return bool
  },
  progress: function(p){
    // set progress when parameter is given, and get progress when not
  },
  getBookData: function(callback){
    // get book data and store it in local storage
    var bookId = this.config.bookId;
    var that = this;

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
          callback.call(that);
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
  renderPage: function(page){
    // return generated page html
    var view = this.config.rendering.view,
        elements = this.config.bookContentRaw.split("\n"),
        rendering = this.config.rendering,

        h = 0, h2 = 0, i = 0, s = true, para = 0, para2 = 0, para_margin = 0, top = 0, para_qt = 0,
        p_qt = rendering.elements.length,
        page_content = "";

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
    page_content = "<li class='page_"+page+"' style='top: "+top+"px;height: "+view.pageHeight+"px;'><div class='content'>" + page_content + "</div><div class='pg_num'>"+page+"</div></li>";

    return page_content;
  },

  // todo
  handleScroll: function(){
    var that = this;
    var timer;
    var lastScrollTop = 0;
    var view = that.config.rendering.view;
    var bookId = that.config.bookId;

    // console.log(12);
    load = function(){
      var offset = 0;
      var h = $("body").scrollTop();
      var p = parseInt(h/view.pageHeight) + 1;
      var bookId = that.config.bookId;

      that.mountPage(p);
      that.mountPage(p+1);
      that.mountPage(p+2);

      // set local progress
      var p2 = (h/view.bookHeight).toFixed(4);
      localStorage.setItem("book_"+bookId+"_progress", p2);

      // set cloud progress
      // setCloudProgress(bookId, p2);

      // set loc display
      $(".functions .loc").html(p+"/"+(view.bookHeight/view.pageHeight).toFixed(0));
    };

    clearTimeout(timer);
    timer = setTimeout(load, 100);
  },
  mountPage: function(page){
    var fx = this.config.fx;
    if($(".pages ul li.page_"+page).length == 0){
      $(".pages ul").append(this.renderPage(page, 1));
      $(".pages ul li.page_"+page).addClass("animated "+fx);
    }
  }
};
