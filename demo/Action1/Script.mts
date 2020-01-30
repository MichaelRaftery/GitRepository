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
'Step 2
WpfWindow("Micro Focus MyFlight Sample Application").Move 731,158
WpfWindow("Micro Focus MyFlight Sample Application").WpfEdit("agentName").Set "john"
WpfWindow("Micro Focus MyFlight Sample Application").WpfEdit("password").SetSecure "5e33595dae82e24f8575"
WpfWindow("Micro Focus MyFlight Sample Application").WpfButton("WpfButton").Click
'Step 3
WpfWindow("Micro Focus MyFlight Sample Application").WpfComboBox("fromCity").Select DataTable("FlyFrom", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample Application").WpfComboBox("toCity").Select "Frankfurt"
WpfWindow("Micro Focus MyFlight Sample Application").WpfImage("WpfImage").Click 8,12

WpfWindow("Micro Focus MyFlight Sample Application").Move 770,122
WpfWindow("Micro Focus MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click
WpfWindow("Micro Focus MyFlight Sample Application").WpfTable("flightsDataGrid").SelectCell 0,0
'Step 4
WpfWindow("Micro Focus MyFlight Sample Application").WpfButton("SELECT FLIGHT").Click
'Step 5
WpfWindow("Micro Focus MyFlight Sample Application").WpfEdit("passengerName").Set "Mike Raftery"
WpfWindow("Micro Focus MyFlight Sample Application").WpfButton("ORDER").Click
'Step 6
WpfWindow("Micro Focus MyFlight Sample Application").Close
