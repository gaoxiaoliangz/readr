// book.js created by Gao Liang all rights reserved

function Book(obj){
  this.config = {
    progress: obj.progress || 0,
    fx: obj.fx || "fadeIn",
    bookId: obj.bookId,
    bookContentRaw: null,
    bookContentHtml: null,

    view: {
      mode: obj.view.mode || "vertical",
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
  };
  this.status = {
    progress: null,
    page: null,
    scrollTop: null
  };
  this.init();
}

Book.prototype = {
  init: function(){
    this.getLocalBookData();

    var bookId = this.config.bookId,
        that = this,
        view = this.config.rendering.view;

    // setup book
    $(".pages ul").height(that.config.rendering.view.bookHeight);
    if($(window).width() > view.pageWidth){
      $("body").addClass("hd");
    }else{
      $("body").addClass("mobile");
    }

    // load page
    that.getProgress(function(data){
      var scrollTop = data*that.config.rendering.view.bookHeight;
      if(scrollTop == 0){
        scrollTop = 1;
      }
      $("body").scrollTop(scrollTop);
    });

    that.handleEvents();
  },
  handleEvents: function(){
    var that = this;

    // handle window scroll
    $(window).scroll(function(){
      that.handleScroll.call(that);
    });

    // handle window resize
    $(window).resize(function(){
      if(!that.checkView.call(that)){
        that.removeBookRenderingData();
        // todo: using init will cause bugs
        // that.init();
        location.reload();
      }
    });

    // icons
    $(".functions .home").tap(function(){
      location.href = "/books";
    });

    $(".functions .clear").tap(function(){
      localStorage.removeItem("book-"+book_id);
      localStorage.removeItem("book-"+book_id+"-2");
      localStorage.removeItem("book-"+book_id+"-layout");
      location.reload();
    });

    // panel
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
  },
  getLocalBookData: function(){
    var bookId = this.config.bookId;

    if(!localStorage.getItem("book_"+bookId+"_raw") || !localStorage.getItem("book_"+bookId+"_html") || !localStorage.getItem("book_"+bookId+"_rendering")){
      this.getBookData(this.renderBook);
    }else{
      this.config.rendering = JSON.parse(localStorage.getItem("book_"+bookId+"_rendering"));
      this.config.bookContentHtml = localStorage.getItem("book_"+bookId+"_html");
      this.config.bookContentRaw = localStorage.getItem("book_"+bookId+"_raw");
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
        var h = $(this).height(),
            type = $(this).prop("tagName"),
            renderingStr;

        rendering.elements.push({
          type: type,
          height: h
        });
      });

      rendering.view.bookHeight = $(".pages ul").height();
      rendering.view.pageSum = Math.ceil($(".pages ul").height()/view.pageHeight);
      rendering.view.windowWidth = $(window).width();
      rendering.view.pageHeight = view.pageHeight;
      rendering.view.pageWidth = $(".pages ul li").width();
      rendering.view.fontSize = $(".pages ul li .content p").css("font-size");
      rendering.view.lineHeight = $(".pages ul li .content p").css("line-height");

      renderingStr = JSON.stringify(rendering);
      localStorage.setItem("book_"+bookId+"_rendering",renderingStr);

      location.reload();
    },1000);
  },
  removeBookRenderingData: function(){
    var bookId = this.config.bookId;
    localStorage.removeItem("book_"+bookId+"_rendering");
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
  checkView: function(){
    // check if view is same as the rending saved, then return bool
    var fontSize = $(".pages ul li .content p").css("font-size"),
        lineHeight = $(".pages ul li .content p").css("line-height"),
        view = this.config.rendering.view,
        flag = true,
        pageWidth = $(".pages ul li").width();

    if(view.lineHeight != lineHeight ||
      view.fontSize != fontSize ||
      view.pageWidth != pageWidth
    ) flag = false;

    return flag;
  },
  getBookData: function(callback){
    // get book data and store it in local storage
    var bookId = this.config.bookId,
        that = this;

    $.ajax({
      url: "/api/v0.1/books/" + bookId + '/content/',
      type: 'GET',
      dataType: 'json',
      complete: function(jqXHR, textStatus) {
      },
      success: function(result, textStatus, jqXHR) {
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
  getProgress: function(callback){
    // set progress when parameter is given, and get progress when not
    var bookId = this.config.bookId,
        that = this,
        localProgress = localStorage.getItem("book_"+bookId+"_progress");

    $.ajax({
      url: "/api/v0.1/books/" + bookId + '/progress/',
      type: 'GET',
      dataType: 'json',
      complete: function(xhr, textStatus) {
      },
      success: function(data, textStatus, xhr) {
        var cloudProgress
        if(data.error){
          cloudProgress = 0;
        }else{
          cloudProgress = data.data[0].reading_progress;
        }
        if(localProgress && localProgress>cloudProgress){
          data = localProgress;
        }else{
          data = cloudProgress;
        }
        callback.call(that, data);
      },
      error: function(xhr, textStatus, errorThrown) {
      }
    });
  },
  setProgress: function(p, callback){
    // set progress when parameter is given, and get progress when not
    var that = this,
        bookId = this.config.bookId;

    if(p>1){
      alert("Parameter p should be percentage!")
    }else{
      localStorage.setItem("book_"+bookId+"_progress", p);

      $.ajax({
        url: "/api/v0.1/books/" + bookId + '/progress/',
        type: 'POST',
        dataType: 'json',
        data: {
          reading_progress: p
        },
        complete: function(xhr, textStatus) {
        },
        success: function(data, textStatus, xhr) {
          if(callback) callback.call(that, data);
        },
        error: function(xhr, textStatus, errorThrown) {
        }
      });
    }
  },
  handleScroll: function(){
    var that = this,
        timer,
        lastScrollTop = 0,
        view = that.config.rendering.view,
        bookId = that.config.bookId,
        pageSum = view.pageSum,
        scrollTop = $("body").scrollTop();

    function load(){
      var page,
          percentage = (scrollTop/view.bookHeight).toFixed(4);

      page = that.convertPercentageToPage(percentage);
      that.status.page = page;
      that.status.scrollTop = scrollTop;
      that.status.progress = percentage;

      that.mountPage(page,3);
      that.setProgress(percentage);

      // set loc display
      $(".functions .loc").html(page+"/"+pageSum);
    };
    clearTimeout(timer);
    var timer = setTimeout(load, 100);
  },
  convertPercentageToPage: function(p){
    if(p>1){
      alert("Wrong parameter!");
      return null;
    }else{
      var view = this.config.rendering.view,
      p = parseInt(p*view.pageSum) + 1;
      return p;
    }
  },
  mountPage: function(page,num){
    var fx = this.config.fx;

    num = num || 1;
    for(var i=0;i<num;i++){
      if($(".pages ul li.page_"+(page+i)).length == 0){
        $(".pages ul").append(this.renderPage(page+i));
        $(".pages ul li.page_"+(page+i)).addClass("animated "+fx);
      }
    }
  }
};
