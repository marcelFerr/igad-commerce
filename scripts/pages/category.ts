 $('./body') {
	attribute("class", "_category")
 	$('.//div[@id="CategoryHeading"]') {
 		$('./div[@class="BlockContent"]') {
 			$('./div[@class="CategoryDescription"]'){
 				move_here('ancestor::div[@class="BlockContent"]/div[contains(@class, "SortBox")]', 'top')
 			}
 		}
 	}
	$('.//div[contains(@class,"QuickView")]') {
 					attribute("class","none")
 					}


 	$('.//div[@id="CategoryContent"]') {
 		$('.//ul[@class="ProductList "]') {
 			wrap("div", class:"wdiv")
 			$('.//div[@class="ProductCompareButton"]') {
 				remove()
 			}
 	}
 		$('.//div[@class="CompareButton"]') {
 			remove();
 		}
 }
 	$('./div[@id="Container"]') {
 		$('.//div[@id="CategoryBreadcrumb"]') { remove() }
 		$('.//span[contains(@class, "FeedLink")]') {
 			remove()
 		}	
 	}
}