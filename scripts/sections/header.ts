 $('./body') {

 	$('.//div[@id="Header"]') {
 		$('./br[@class="Clear"]') {
 			remove()
 		}
		$('./div[@id="SearchForm"]') {
			wrap("div", class: "mw_search_btn sprites-search")
			$('./p') {
			    remove();
			}
			$('.//input[@type="text"]') {
				attribute("placeholder", "Search...")
			}
		}
		}
   insert_top("header", class: "_header") {
		move_here('ancestor::body/div[@id="Container"]/div[@id="TopMenu"]', 'bottom')
		move_here('ancestor::body/div[@id="Container"]/div[@id="Outer"]/div[@id="Header"]', 'top')
		
		$('./div[@id="TopMenu"]') {
			attribute("data-ur-set","toggler")
			$('./ul') {
				attribute("data-ur-toggler-component","content")
				move_here('ancestor::body/div[@id="Container"]/div[@id="Outer"]/div[@id="Wrapper"]/div[@id="LayoutColumn1"]/div[@id="SideCategoryList"]/div[@class="BlockContent"]/div[@class="SideCategoryListClassic"]/ul[@class="category-list"]/li', 'top')
				//move_here('ancestor::body/div[@id="Container"]/div[@id="Outer"]/div[@id="Wrapper"]/div[@id="LayoutColumn1"]/div[@id="SideShopByBrand"]/div[@class="BlockContent"]/ul/li', 'bottom')
				move_here('ancestor::body/div[@id="Container"]/div[@id="Outer"]/div[@id="Menu"]/ul/li', 'top 	')
				$('./li[@class="First"]/a') {
					move_to('ancestor::body/header[@class="_header"]/div[@id="Header"]/div[@id="Logo"]')
					add_class("bot1")
				}
				$('./li[@class="CartLink"]/a') {
					move_to('ancestor::body/header[@class="_header"]/div[@id="Header"]/div[@id="Logo"]')
					add_class("bot2")
				}
			}
			insert_top("div","") {
				add_class("bot")
				attribute("data-ur-toggler-component","button")
			}
			$('./br[@class="Clear"]') {
 			remove()
 		}

		}
  }
  $('./div[@id="Container"]') {
  		$('.//div[@id="Menu"]') {remove()}
 		$('./div[@id="AjaxLoading"]') {
 			remove()
 		}
 		$('.//div[@id="LayoutColumn1"]') {remove();}
 		$('.//div[@id="LayoutColumn3"]') {remove();}
 	}
}