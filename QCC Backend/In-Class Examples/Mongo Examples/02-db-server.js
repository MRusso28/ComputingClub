const MongoClient = require("mongodb").MongoClient,
	assert = require('assert');
const dbOps = require('./operations');		
const uri = 'mongodb+srv://node-user:nodeapp123@cluster0-bwtfl.mongodb.net/test?retryWrites=true';

const dbName = 'recipesDB';
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err)=>{
	assert.equal(err,null);
	console.log("Connected to server");

	dbOps.insertDocument(client,dbName,[{name:"Fried chicken", description:"Best Fried chicken"}],"recipes", function(result){
			console.log(result);
					dbOps.findDocuments(client,dbName, "recipes", function(docs){
				console.log(docs);
				
				dbOps.updateDocument(client,dbName,{name:"cheese cake"}, {description:"cheese cake with blueberry"},"recipes",
				function(docs){
					console.log(docs);
					
					dbOps.findDocuments(client,dbName, "recipes", function(docs){
						console.log(docs);
						
						client.db(dbName).dropCollection("recipes",function(result){
							console.log(result);
							client.close();
						});
					});
				});
			});

	});
	
		
});