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
WpfWindow("Micro Focus MyFlight Sample Application").WpfEdit("agentName").Set "john"
WpfWindow("Micro Focus MyFlight Sample Application").WpfEdit("password").SetSecure "5e5023621aa9e477830f"
WpfWindow("Micro Focus MyFlight Sample Application").WpfButton("WpfButton").Click
'Step 3
WpfWindow("Micro Focus MyFlight Sample Application").WpfComboBox("fromCity").Select "Denver"
WpfWindow("Micro Focus MyFlight Sample Application").WpfComboBox("toCity").Select "Frankfurt"
WpfWindow("Micro Focus MyFlight Sample Application").WpfComboBox("Class").Select "First"
WpfWindow("Micro Focus MyFlight Sample Application").WpfComboBox("numOfTickets").Select "2"
WpfWindow("Micro Focus MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click
'Step 4
WpfWindow("Micro Focus MyFlight Sample Application").WpfTable("flightsDataGrid").SelectCell 0,0
WpfWindow("Micro Focus MyFlight Sample Application").WpfButton("SELECT FLIGHT").Click
'Step 5
WpfWindow("Micro Focus MyFlight Sample Application").WpfEdit("passengerName").Set "Mike Raftery"
WpfWindow("Micro Focus MyFlight Sample Application").WpfButton("ORDER").Click
