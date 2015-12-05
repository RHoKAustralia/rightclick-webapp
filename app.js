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

/* Database */
var mongodb_url = process.env.MONGODB_URL || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/rightclick';
var db = require('monk')(mongodb_url);
var lessons = db.get('lessons');

app.set('port', process.env.PORT || 8080);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/lessons',function(req,res){
  lessons.find({}, function (err, docs){
    console.log(err);
    res.json(docs);
  });
  //res.json({message: "Hello"})
});

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
