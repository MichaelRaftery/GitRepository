'-----------------------[Application Settings]-----------------------
'Select the following addins at the 'Add-in Manager':
'WPF
'
'Use the following application settings in the 'Record and Run Settings' or in 'Application Areas':
'Application type: Windows Application
'Path: C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe
'Arguments: 
'WorkingFolder: C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application
'--------------------------------------------------------------------
'
'Step 1
WpfWindow("Micro Focus MyFlight Sample Application").WpfEdit("agentName").Set "john"
WpfWindow("Micro Focus MyFlight Sample Application").WpfEdit("password").SetSecure "5e57de3061ef07cf1acd"
WpfWindow("Micro Focus MyFlight Sample Application").WpfButton("WpfButton").Click
'Step 3
WpfWindow("Micro Focus MyFlight Sample Application").WpfComboBox("fromCity").Select DataTable("fromCity", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample Application").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample Application").WpfImage("WpfImage").Click 12,9
WpfWindow("Micro Focus MyFlight Sample Application").WpfComboBox("Class").Select "First"
WpfWindow("Micro Focus MyFlight Sample Application").WpfComboBox("numOfTickets").Select "2"
WpfWindow("Micro Focus MyFlight Sample Application").WpfImage("WpfImage").Click 9,11
WpfWindow("Micro Focus MyFlight Sample Application").WpfCalendar("datePicker").SetDate "31-Dec-2020"
WpfWindow("Micro Focus MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click
WpfWindow("Micro Focus MyFlight Sample Application").WpfTable("flightsDataGrid").SelectCell 0,0
WpfWindow("Micro Focus MyFlight Sample Application").WpfButton("SELECT FLIGHT").Click
WpfWindow("Micro Focus MyFlight Sample Application").WpfEdit("passengerName").Set "Mike Raftery"
WpfWindow("Micro Focus MyFlight Sample Application").WpfButton("ORDER").Click
