Browser("Google").Page("Google").WebEdit("Search").Set DataTable("City", dtGlobalSheet) @@ hightlight id_;_Browser("Google").Page("Google").WebEdit("Search")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Google").Page("Google").WebButton("Google Search").Click @@ hightlight id_;_Browser("Google").Page("Google").WebButton("Google Search")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Google").Page("Boston - Google Search").WebEdit("Search").Set DataTable("Surname", dtGlobalSheet) @@ hightlight id_;_Browser("Google").Page("Boston - Google Search").WebEdit("Search")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Google").Page("Boston - Google Search").WebEdit("Search").Submit @@ hightlight id_;_Browser("Google").Page("Boston - Google Search").WebEdit("Search")_;_script infofile_;_ZIP::ssf5.xml_;_
SystemUtil.PrintToDebugStream("Combination of " & DataTable("City", dtGlobalSheet) & " and " & Set DataTable("Surname", dtGlobalSheet) & " completed."
