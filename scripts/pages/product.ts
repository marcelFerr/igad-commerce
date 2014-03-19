 $('./body') {
 	attribute("class", "_product")
 	$('.//div[contains(@class,"QuickView")]') {
 					attribute("class","none")
 					}
 
 $('.//div[@id="ProductReviews"]') {
 	remove()
 }
 $('.//div[@class="BulkDiscount"]') {
 	$('.//input[@type="image"]') {
 	}
 }
 	$('./div[@id="Container"]') {
 		$('.//div[@id="ProductBreadcrumb"]') { remove() }
 		$('.//span[contains(@class, "FeedLink")]') {
 			remove()
 		}
 		$('.//div[@id="SimilarProductsByCustomerViews"]') {
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
 	$('.//a[@id="ImageScrollNext"]') {
 		remove()
 	}
 	$('.//hr') {
 		remove()
 	}
 }