const MongoClient = require("mongodb").MongoClient,
	assert = require('assert');
const uri = 'mongodb+srv://node-user:nodeapp123@cluster0-bwtfl.mongodb.net/test?retryWrites=true';
const dbName = 'recipesDB';
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err)=>{
	
	assert.equal(err,null);
	console.log("Connected to server");
	
	var collection = client.db(dbName).collection("recipes");
	
	collection.insertOne({name:"cheese cake", description:" strawberry cheese cake"}, function(err, result){
			assert.equal(err,null);
			console.log("After insertion:");
			console.log(result.ops);
			
			collection.find({}).toArray((err, docs)=>{
				assert.equal(err,null);
				console.log("Documents = ");
				console.log(docs);
			});
			
			client.close();
	});
	
	
});

