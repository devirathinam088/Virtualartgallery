

// use('admin');
// Create a new collection.
db.createCollection('trainee');
db.trainee.remove({});
db.trainee.insert([{id: 401, name: "Alex", source: 88, city: "Mumbai"},
{id: 402, name: "Rinu", source: 82, city: "Hyderabad"},
{id: 403, name: "George", source: 70, city: "Mumbai"},
{id: 404, name: "Mathew", source: 83, city: "Mumbai"},
{id: 405, name: "Victoria", source: 88, city: "Chennai"}]);
db.trainee.find()




