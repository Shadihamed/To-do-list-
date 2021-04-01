const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2000
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'to-do'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  db.collection('items').find().toArray()
    .then(results => {
      console.log(results)
    })
    .catch(error => console.error(error))
  // ...
})
// app.get('/',(req,res)=>{
// db.collection('items').find().toArray()
// .then(data =>{
//   res.render("index.ejs" ,{info:data})
// })
// .catch(error => console.error(error))
// })

app.post('/addItems',(req,res)=>{
db.collection('items').insertOne({toDoName:req.body.toDoName
  .then(result =>{
    console.log('items Added');
    res.redirect('/')
  })
})
.catch(error => console.error(error))
})

// app.put('/addCompleted',(req,res)=>{
//
// })
app.delete('/deleteItems',(req,res)=>{
db.collection('items').deleteOne({toDoName:req.body.toDoName})
.then(reult =>{
  console.log('Items Deleted');
})
.catch(error => console.error(error))
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
