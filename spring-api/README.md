# xcedrin

1. Build Code:

	From command line:
	mvn package
	
	From eclipse:
	Right click project > Run As > Maven install

2. Run Code:

	java -jar target/xcedrin-0.0.1.jar

curl -X GET http://localhost:8080/demands | python -mjson.tool
curl -X GET http://localhost:8080/demands/BUS/cloud | python -mjson.tool

curl -X POST '{"bu":"cloud","location":"RTP","num_tickets": 5,"onboarding_quarter": "fall","req_title":"Entry-Level Software Developer","specialty":"Automation Development and Testing","subgroup":"idk","track":"developer"}'
