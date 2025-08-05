const { MongoClient } = require("mongodb");

const url =
    "mongodb+srv://namastedev:GyN3iJ57GbOJewrp@namastenode.2raxarh.mongodb.net/"


const client = new MongoClient(url);

const dbName = 'HelloWorld';


async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    const data = {
        firstname: "Shubham",
        lastname: "Tiwari",
        city: "Uttarakhand",
        phoneNumber: "9999900000"
    }

    //Inserting data
    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);

    // Printing the values of documents in collection
    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);

    // Couting the number of documents
    // const countResult = await collection.countDocuments({});
    // console.log("Count of documents in User collection: ", countResult);


    // Find all documents with a filter of firstname: Shubham
    // const result =await collection.find({firstname:"Shubham"}).toArray();
    // const result =await collection.find({firstname:"Shubham"}).count();
    const result = await collection.countDocuments({ firstname: "Shubham" });

    console.log("Result is ", result);
    


    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());




// Notes:
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a database
// Install MongoDB package
// Create a connection from code
// Documents CRUD - Create, Read, Update, Delete