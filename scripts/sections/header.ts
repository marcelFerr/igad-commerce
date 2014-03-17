 $('./body') {
 	$('./div[@id="Container"]') {
 		$('div[@id="AjaxLoading"]') {
 			remove()
 		}
 	}
   insert_top("header", class: "_header") {
		move_here('ancestor::body/div[@id="Container"]/div[@id="TopMenu"]', 'bottom')
		move_here('ancestor::body/div[@id="Container"]/div[@id="Outer"]/div[@id="Header"]', 'top')
		$('./div[@id="Header"]') {
			$('./div[@id="Searchform"]') {
				wrap("div", class: "mw_search_btn sprites-search")
			}
		}
		$('./div[@id="TopMenu"]') {
			attribute("data-ur-set","toggler")
			$('./ul') {
				attribute("data-ur-toggler-component","content")
			}
			insert("div","top") {
				add_class("bot")
				attribute("data-ur-toggler-component","button")
			}

		}
  }
  $(".//div[@id='Logo']") {
  # Move top menu into #Logo container
  move_here("../../../div[@id='TopMenu']", "bottom") {
    # Remove unwanted top menu items from upper menu
    remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
  }
}
}
