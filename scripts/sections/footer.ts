 $("./body") {
  $('./div[@id="Footer"]') {
  	$txt = fetch("./p") + "Mobile development powered by Moovweb"
  	$('./p') {
  		wrap('div', class:"foot")
  	}
  	$('./div[@class="foot"]') {
  		inner ($txt)
  	}
  }
}
