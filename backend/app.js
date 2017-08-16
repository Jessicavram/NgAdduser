var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var router = express.Router();

router.get('/', function(req, res) {  
   res.send("API-REST!");
});

router.get('/list', function(req, res) {

	
   var peliculasList=[{name:'La vida es bella',year:1994},{name:'The matrix',year:2004},{name:'Buscando a nemo',year:2012}];  
   res.status(200).jsonp(peliculasList);
});

router.post("/auth", function(req,res){	
		var userData = {'username':req.body.username,'password':req.body.password};
		var UserLogin = require('./model/UserLogin.js');
			UserLogin.authenticate(userData,function(error,data){
				if(error !=null){
					res.status(error.status).jsonp(data);
				}else{
					res.status(200).jsonp(data);
				}
			});
	});
app.use(router);
app.listen(3000, function() {  
  console.log("Node server running on http://localhost:3000");
});