const express = require('express')
const cors = require('cors')
const path = require('path')

if (process.env.NODE_ENV  !== 'production') require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,'client/build')))
}

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'client/build','index.html'))
})

app.listen(port,error =>{
    if(error) throw error;
    console.log('Server is runnning on port '+port)
})

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

app.post('/payment',(req,res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency:'usd'
    }

    stripe.charges.create(body,(stripeerror,striperes) => {
        if(stripeerror){
            res.status(500).send({error:stripeerror})
        }
        else{
            res.status(200).send({success:striperes})
        }
    })
})
