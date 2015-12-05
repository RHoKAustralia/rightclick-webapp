var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var forceDomain = require('forcedomain');

/* React Stuff */
var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var RoutingContext = Router.RoutingContext;
var routes = require('./app/routes');

var _ = require('lodash');

var isAuthorized = function(req, res, next) {
  console.log(req.query)
  var key = req.query.api_key || req.get('x-api-key');
  if(key !== "5b23868a29a8b99a4a7a04bd912c79c1550d8e66") {
    res.status(401).json({ message: 'You need api_key in the request query or x-api-key as a header to work with this API'});
  }
  else {
    next();
  }
}

/* Database */
var mongodb_url = process.env.MONGODB_URL || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/rightclick';
var db = require('monk')(mongodb_url);
var lessons = db.get('lessons');

app.set('port', process.env.PORT || 8080);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Restful API
var router = express.Router();
router.get('/lessons', isAuthorized, function(req,res){
  console.log(req.query)
  lessons.find({}, function (err, docs){
    console.log(err);
    res.json(docs);
  });
  //res.json({message: "Hello"})
});
app.use('/api', router);

app.use(function(req, res) {
  Router.match({ routes: routes, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(<RoutingContext {...renderProps} />);
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

http.listen(app.get('port'), function(){
  console.log('listening on *:'+app.get('port'));
});
