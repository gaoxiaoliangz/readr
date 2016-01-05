$(function(){
	function getBook(book_id){
		jQuery.ajax({
			url: base_url + "api/books/" + book_id + '/content/',
			type: 'GET',
			dataType: 'text',
			complete: function(xhr, textStatus) {
				location.reload();
			},
			success: function(data, textStatus, xhr) {
				var data_obj = eval("("+data+")");
				console.log(data_obj);
				if(data_obj.status == 1){
					localStorage.setItem("book-"+book_id, data_obj.text);
					localStorage.setItem("book-"+book_id+"-2", data_obj.text2);
				}else{
					alert("Error: wrong book content format! ");
				}
			},
			error: function(xhr, textStatus, errorThrown) {
				alert("Error: unable to get book content! ");
			}
		});
	}

	function setCloudProgress(book_id, progress){
		jQuery.ajax({
			url: base_url + 'view/set_progress/' + book_id + '/' + progress,
			type: 'GET',
			dataType: 'text',
			complete: function(xhr, textStatus) {
			},
			success: function(data, textStatus, xhr) {
			},
			error: function(xhr, textStatus, errorThrown) {
			}
		});
	}

	function getCloudProgress(book_id){
		jQuery.ajax({
			url: base_url + 'view/get_progress/' + book_id + '/' + progress,
			type: 'GET',
			dataType: 'text',
			complete: function(xhr, textStatus) {
			},
			success: function(data, textStatus, xhr) {
				cloud_progress = data;
			},
			error: function(xhr, textStatus, errorThrown) {
			}
		});
	}

	function handleCloudProgress(book_id, local_progress){
		jQuery.ajax({
			url: base_url + 'view/get_progress/' + book_id + '/' + progress,
			type: 'GET',
			dataType: 'text',
			complete: function(xhr, textStatus) {
			},
			success: function(data, textStatus, xhr) {
				if(local_progress < data) {
					$("body").scrollTop(data * book_layout.height);
				}else {
				}
			},
			error: function(xhr, textStatus, errorThrown) {
			}
		});
	}

	function initBook(book_id){
		$("body").append("<div class='dia-wrap dia_loading'><div class='loading'></div></div>");
		$('.dia-wrap').height($(window).height());

		if(localStorage.getItem("book-"+book_id) == null){
			getBook(book_id);
		}else{
			var book_content = localStorage.getItem("book-"+book_id+"-2");
			$(".container ul").append("<li class='init'><div class='content'>"+book_content+"</div></li>");

			var book_content = localStorage.getItem("book-"+book_id);
			book_content = book_content.split("\n");
		

			// calculation
			setTimeout(function(){
				var book_layout = {
					p: []
				};
				
				var h = 0, hs = 0;

				$(".pages li p").each(function(index){
					h = $(this).height();
					hs += h;
					book_layout.p.push({h: h});
				})

				book_layout.height = $(".pages ul").height();
				book_layout.page_qt = Math.ceil($(".pages ul").height()/view.page_height);
				book_layout.window_width = $(window).width();
				book_layout = JSON.stringify(book_layout);
				localStorage.setItem("book-"+book_id+"-layout",book_layout);
				localStorage.setItem("book-"+book_id+"-progress", 0);
				location.reload();
			},1000);
		}
	}

	function genPageHtml(page, mode) {
		var h = 0, h2 = 0, i = 0, s = true, para = 0, para2 = 0, para_margin = 0, top = 0, para_qt = 0;
		var p_qt = book_layout.p.length;
		var page_content = "";
		while (i < p_qt && h < view.page_height * page) {
			h = parseInt(book_layout.p[i].h) + h;
			h2 = h - parseInt(book_layout.p[i].h);
			if ((h > view.page_height * (page - 1)) && (s == true)) {
				para = i;
				para_margin = h2 - view.page_height * (page - 1);
				s = false;
			}
			para2 = i;
			i++;
		}
		para_qt = para2 - para + 1;
		top = (page - 1) * view.page_height;
		for(i = para; i <= para2; i++){
			if(i == para){
				page_content = page_content + "<p style='margin-top: "+para_margin+"px;'>"+ book_content[i] + "</p>";
			}else{
				page_content = page_content + "<p>" + book_content[i] + "</p>";
			}
		}
		page_content = "<li class='page_"+page+"' style='top: "+top+"px;'><div class='content'>" + page_content + "</div><div class='pg_num'>"+page+"</div></li>";
		return page_content;
	}

	function handelScroll(){
			var timer;
			var lastScrollTop = 0;

			$(window).scroll(function(event){
				load = function(){
					var offset = 0;
					var h = $("body").scrollTop();
					var p = parseInt(h/view.page_height) + 1;

					showPageWithFxInModeOne(p);
					showPageWithFxInModeOne(p+1);
					showPageWithFxInModeOne(p+2);

					// set local progress
					var p2 = (h/book_layout.height).toFixed(4);
					localStorage.setItem("book-"+book_id+"-progress", p2);

					// set cloud progress
					setCloudProgress(book_id, p2);

					// set loc display
					$(".functions .loc").html(p+"/"+(book_layout.height/view.page_height).toFixed(0));
				};

				clearTimeout(timer);
				timer = setTimeout(load, 100);        
			});
	}

	function showPageWithFxInModeOne(page){
		if($(".pages ul li.page_"+page).length == 0){
			$(".pages ul").append(genPageHtml(page, 1));
			$(".pages ul li.page_"+page).addClass("animated fadeInDown");
		}
	}


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
		var book_layout = JSON.parse(localStorage.getItem("book-"+book_id+"-layout"));
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
		var book_content = localStorage.getItem("book-"+book_id);
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

		// scroll
		handelScroll();
	}
});