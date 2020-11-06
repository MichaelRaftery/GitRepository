AIUtil.SetContext Browser("Advantage Shopping") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("About AOS Versions Management")_;_script infofile_;_ZIP::ssf1.xml_;_
AIUtil.FindTextBlock("SPEAKERS").Click
AIUtil.FindTextBlock("BUY NOW").Click
AIUtil.FindTextBlock("ADD TO CART").Click
wait(10)
AIUtil("shopping_cart").Click
AIUtil.FindText("CHECKOUT").Click
AIUtil("input", "Username").Type "mraftery"
AIUtil("input", "Password").TypeSecure("5ee11673c1734d4cb8e386ab62b9a777d137f00bcbfc5d80")
AIUtil.FindTextBlock("LOGIN").Click
AIUtil.FindTextBlock("NEXT").Click
AIUtil.FindTextBlock("PAY NOW").Click
AIUtil.FindTextBlock("dvantage DEMO").Click
