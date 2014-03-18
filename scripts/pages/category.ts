 $('./body') {
 	attribute("class", "_category")


 $('.//div[@id="CategoryContent"]') {
 	$('.//ul[@class="ProductList "]') {
 		wrap("div", class:"wdiv")
 	}

		$('.//div[@class="wdiv"]') {
 			attributes(data-ur-set:"carousel", data-ur-carousel-component: "view_container", data-ur-fill: "2")
 			inject('<div class="add-top"><div data-ur-carousel-component="dots"></div></div>')
 			$('./ul[@class="ProductList "]') {
 				attribute("data-ur-carousel-component","scroll_container")
 				$('./li') {
 					attribute("data-ur-carousel-component","item")
 				}
 			}
 		}
 }
 	$('./div[@id="Container"]') {
 		$('.//div[@id="CategoryBreadcrumb"]') { remove() }
 		$('.//span[contains(@class, "FeedLink")]') {
 			remove()
 		}	
 	}
}