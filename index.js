const { MongoClient } = require("mongodb");


const uri = "mongodb+srv://iamuser:iamuser123@mycluster1.kwsl7so.mongodb.net/";

async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to Atlas ");

    const db = client.db("school");           // database name
    const students = db.collection("students"); // collection name

    // CREATE
    await students.insertOne({ name: "mindri", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "mysure", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "vinod", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "srikanth", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "tagore", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "lal", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "pal", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "queen", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "king", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "minister", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "mindri", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "mysure", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "vinod", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "srikanth", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "tagore", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "lal", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "pal", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "queen", age: 22, marks: 88 });
    console.log("Inserted one document.");
    await students.insertOne({ name: "king", age: 22, marks: 88 });
    console.log("Inserted one document.");

    // READ
    const docs = await students.find().toArray();
    console.log("Documents in students:", docs);

    // UPDATE
    await students.updateOne({ name: "mindri" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    await students.updateOne({ name: "shanta" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    await students.updateOne({ name: "lauda" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    await students.updateOne({ name: "mindri" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    await students.updateOne({ name: "mindri" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    await students.updateOne({ name: "mindri" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    await students.updateOne({ name: "mifef" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    await students.updateOne({ name: "mivbrfi" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    await students.updateOne({ name: "mvdcvei" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    await students.updateOne({ name: "minefcci" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    await students.updateOne({ name: "mvdvdvri" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    await students.updateOne({ name: "mivdvewi" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    await students.updateOne({ name: "weerri" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    await students.updateOne({ name: "opdkri" }, { $set: { marks: 60 } });
    console.log("Updated one document.");
    


    // DELETE (commented out)
    // await students.deleteOne({ name: "Dev" });
    // console.log("Deleted one document.");

  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
    console.log("Connection closed.");
  }
}

main();