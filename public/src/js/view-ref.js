function getBook(book_id){

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

}

function genPageHtml(page, mode) {

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
				localStorage.setItem("book_"+book_id+"_progress", p2);

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
