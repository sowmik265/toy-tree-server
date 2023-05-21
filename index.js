const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.evjqm5f.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        const sportsCarCollection = client.db('toyDb').collection('sportsCar');
        const classicCarCollection = client.db('toyDb').collection('classicCar');
        const suvCarCollection = client.db('toyDb').collection('suvCar');
        const toyCollection = client.db('toyDB').collection('toy');

//         app.get('/sportscar', async (req, res) => {
//             const cursor = sportsCarCollection.find({});
//             const result = await cursor.toArray();
//             res.send(result);
//         })

//         app.get('/classiccar' ,async (req,res) =>{
//             const cursor = classicCarCollection.find({});
//             const result = await cursor.toArray();
//             res.send(result)
//         })

//         //SEARCH
//         const indexKeys = { name: 1, category: 1 };
//         const indexOptions = { name: "name" };
//         const result = await toyCollection.createIndex(indexKeys, indexOptions);
//         console.log(result);

//         app.get("/getToyByText/:text", async (req, res) => {
//             const searchText = req.params.text;
//             const result = await toyCollection
//                 .find({
//                     $or: [
//                         { name: { $regex: searchText, $options: "i" } },
//                     ],
//                 })
//                 .toArray();
//             res.send(result);
//         });

//         //READ DATA FROM ALL TOYS PAGE
//         app.get('/toy', async (req, res) => {
//             const cursor = toyCollection.find();
//             const result = await cursor.toArray();
//             res.send(result);
//         })

//         //READ USER SPECIFIC DATA
//         app.get('/toy', async (req, res) => {
//             console.log(req.query.email);
//             let query = {};
//             if (req.query?.email) {
//                 query = { email: req.query?.email }
//             }
//             const result = await toyCollection.find(query).toArray();
//             res.send(result);
//         })

//         //CREATE DATA
//         app.post('/toy', async (req, res) => {
//             const newToy = req.body;
//             console.log(newToy)
//             const result = await toyCollection.insertOne(newToy);
//             res.send(result);
//         });

//         //UPDATE
//         app.put("/toy/:id", async (req, res) => {
//             const id = req.params.id;
//             const body = req.body;
//             console.log(body);
//             const filter = { _id: new ObjectId(id) };
//             const updateDoc = {
//                 $set: {
//                     name: body.price,
//                     quantity: body.quantity,
//                     email: body.email
//                 },
//             };
//             const result = await toyCollection.updateOne(filter, updateDoc);
//             res.send(result);
//         });

//         //DELETE
//         app.delete('/toy/:id', async (req, res) => {
//             const id = req.params.id;
//             const query = { _id: new ObjectId(id) }
//             const result = await toyCollection.deleteOne(query);
//             res.send(result);
//         })


//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         // await client.close();
//     }
// }
// run().catch(console.dir);


//basic server
app.get('/', (req, res) => {
    res.send('toy is running')
})

app.listen(port, () => {
    console.log(`Toy Server is running on port ${port}`)
})