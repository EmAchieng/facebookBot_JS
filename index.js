'use strict'

const express = require ('express')
const bodyParser= require('bodyParser')
const request = require('request')

//initialize my application
const app = express ()

//no set port number
//therefore 5000
app.set('port', (process.env.PORT || 5000))

//to process data
app.use{bodyParser.urlencoded({extended: false})}
app.use{bodyParser.json()}

//setting up the ROUTES
app.get('/', function(req, res) {
	res.send ("Hello there. I am just a chatbot!")


})

//FACEBOOK ROUTE
app.get('/webhook/', function(req, res) {

//password
	if(req.query['hub.verify_token'] == "simba") {
		res.send(req.query['hub.challenge'])
	}

	res.send("wrong token")
})


//starting the server
//the server will be listening to these requests in order to get these responses

app.listen(app.get('port') function() {

	//currently listening
	console.log('running: port')
})