var Kit = (function(kit){

	kit.isIE = function(ver){
	  var b = document.createElement('b')
	  b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
	  return b.getElementsByTagName('i').length === 1
	}

	kit.sealScroll = function(){
	  $("body").css({"overflow":"hidden"});
	};

	kit.unlockScroll = function(){
	  $("body").css({"overflow":"visible"});
	}

  kit.excAndExcOnResizing = function(func, args){
		if(!args){
			args = [];
		}
    func.apply([],args);
    $(window).resize(function(){
      func.apply(null,args);
    })
  }

	kit.addScriptToHead = function(url){
		$("head").append("<script src='"+url+"'></script>")
	}
	
	kit.addScriptInBody = function(url){
		$("body").append("<script src='"+url+"'></script>")
	}

  return kit;
}(Kit || {}));

module.exports =  Kit;
