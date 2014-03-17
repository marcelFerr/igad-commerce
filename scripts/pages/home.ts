 $('./body') {
 	attribute("class", "_home")
 	$('./div[@id="Container"]') {
 		$('.//span[contains(@class, "FeedLink")]') {
 			remove()
 		}
 		$('.//div[@id="HomeFeaturedProducts"]') {
 			attributes(data-ur-set:"carousel", data-ur-carousel-component: "view_container", data-ur-fill: "2")
 			inject('<div class="add-top"><div data-ur-carousel-component="dots"></div></div>')
 			$('./div[@class="BlockContent"]/ul') {
 				attribute("data-ur-carousel-component","scroll_container")
 				$('./li') {
 					attribute("data-ur-carousel-component","item")
 				}
 			}
 		}
 		$('.//div[@id="HomeNewProducts"]') {
 			attributes(data-ur-set:"carousel", data-ur-carousel-component: "view_container", data-ur-fill: "2")
 			inject('<div class="add-top"><div data-ur-carousel-component="dots"></div></div>')
 			$('./div[@class="BlockContent"]/ul') {
 				attribute("data-ur-carousel-component","scroll_container")
 				$('./li') {
 					attribute("data-ur-carousel-component","item")
 				}
 			}
 		}
 	}
 }