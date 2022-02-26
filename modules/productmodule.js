const { ObjectId } = require("mongodb");
var mongo = require("../shared/Connect");

module.exports.getProduct = async (req, res, next) => {
  try {
    var response = await mongo.db.collection("Users").find().toArray();
    res.send(response);
  } catch (err) {
    console.error(err);
  }
};

module.exports.createproduct = async (req, res, next) => {
  try {
    var response = await mongo.db.collection("Users").insertOne(req.body);
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  } 
};

module.exports.updateProduct = async (req, res, next) => {
    try {
      var response=await mongo.db.collection("Users").updateOne({_id: ObjectId(req.params.id)}, {$set: {...req.body}})
      res.send(response )
    } catch (err) {
      console.error(err);  
      res.status(500).send(err);
    }
  };


  module.exports.deleteProduct = async (req, res, next) => {
    try {
        var response=await mongo.db.collection("Users").remove({_id:ObjectId(req.params.id)})
      res.send(response)
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  };