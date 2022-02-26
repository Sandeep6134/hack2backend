const { MongoClient } = require("mongodb");

module.exports = {
  db: null,
  async connect() {
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://root:root@cluster0.f8ukr.mongodb.net?retryWrites=true&w=majority"
      );
      this.db = client.db("RentalEquipment");
      console.log("connected")
    } catch (err) {
      console.error(err);
    }
  },
};

// const { MongoClient} = require('mongodb');
// const uri = "mongodb+srv://Ajay:Ajay@1892000@cluster0.f8ukr.mongodb.net?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// client.connect(err => {
//   const collection = client.db("HallBooking").collection("user");
//   // perform actions on the collection object
//   console.log(collection)
//   client.close();
// });

// module.exports=client;


// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = "mongodb+srv://Ajay:Ajay@1892000@<your-cluster-url>/test?retryWrites=true&w=majority";
 

//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error)

// module.exports client;
