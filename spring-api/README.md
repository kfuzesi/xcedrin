# xcedrin

1. Build Code:

	From command line:
	mvn package
	
	From eclipse:
	Right click project > Run As > Maven install

2. Run Code:

	java -jar target/xcedrin-0.0.1.jar

curl -X GET http://localhost:8080/demands | python -mjson.tool
curl -X GET http://localhost:8080/demands/bus/cloud | python -mjson.tool

curl -X POST -H 'Content-Type: application/json' -d '{"draft_id":"1","vp":"Mickey Mouse","bu":"cloud","location":"RTP","num_tickets":5,"onboarding_quarter":"fall","req_title":"Entry-Level Software Developer","specialty":"Automation Development and Testing","subgroup":"idk","track":"developer","foreign_nationals":"true"}' http://localhost:8080/demands

Document Templates for Demand DB and Draft DB

DRAFT
{
	"id": string,
	"name": string,
	"bu_rep": string,
	"bu": string,
	"cfo:" string,
	"hiring_manager" : string,
	"created_at" : datetime,
	"stage" : string
}

DEMAND
{
	"id" : string,
	"draft_id" : string,
	"bu" : string,
	"subgroup" : string,
	"vp" : string,
	"foreign_nationals" : boolean,
	"track" : string,
	"req_title" : string,
	"specialty" : string,
	"location" : string,
	"num_tickets" : int,
	"onboarding_quarter" : string
}