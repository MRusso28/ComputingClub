var assert = require('assert');

exports.insertDocument= function(client,dbName, document, collection, callback){
	var coll = client.db(dbName).collection(collection);
	coll.insertMany(document, function(err, result){
		assert.equal(null,err);		
		console.log("Inserted" + result.result.n + "documents in collection");
		
		callback(result);
		
		
	});

}

exports.findDocuments= function(client,dbName, collection, callback){
	var coll = client.db(dbName).collection(collection);
	
	 coll.find({}).toArray(function (err, docs){
		assert.equal(null,err);		 
		 callback(docs);
	 })
	
}


exports.removeDocument= function(client,dbName, document, collection, callback){
	var coll = client.db(dbName).collection(collection);
	coll.deleteOne(document, function(err, result){
		assert.equal(null,err);		
		console.log("Remove this document" + document);
		
		callback(result);
	});
}



exports.updateDocument= function(client, dbName, document, update, collection, callback){
	var coll = client.db(dbName).collection(collection);
	coll.updateOne(document, {$set: update},function(err, result){
	 assert.equal(null,err);
			
		console.log("update document with update" + update);
		
		callback(result);
		
	});
}