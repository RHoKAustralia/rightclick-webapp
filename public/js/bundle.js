(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _LessonsTable = require('./LessonsTable');

var _LessonsTable2 = _interopRequireDefault(_LessonsTable);

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
    this.state = { lessons: [{
        "id": 0,
        "start_time": "2014-12-06T08:07:06 -11:00",
        "end_time": "2014-07-03T03:37:19 -10:00",
        "name": "laborum esse deserunt tempor elit",
        "steps": [{
          "type": "text",
          "data": "dolor dolore et enim commodo enim mollit sunt enim cillum officia laboris aliquip ipsum officia culpa eu culpa esse cupidatat",
          "sequence_no": 0
        }, {
          "type": "photo",
          "data": "velit nostrud qui eiusmod aute est et occaecat qui reprehenderit nisi minim nisi velit tempor eiusmod aute velit ut esse",
          "sequence_no": 1
        }, {
          "type": "text",
          "data": "est reprehenderit sint elit voluptate voluptate aliquip ex ut anim commodo eu pariatur consectetur excepteur fugiat eu culpa ad proident",
          "sequence_no": 2
        }, {
          "type": "text",
          "data": "et reprehenderit amet dolor minim nostrud veniam sit in non aliqua occaecat laboris tempor non velit commodo laborum labore cupidatat",
          "sequence_no": 3
        }, {
          "type": "text",
          "data": "eiusmod duis nisi tempor consectetur dolor eu duis sint ea voluptate officia et nulla in laboris dolore culpa minim ea",
          "sequence_no": 4
        }, {
          "type": "photo",
          "data": "eiusmod dolore culpa minim cillum deserunt minim cupidatat occaecat nulla deserunt non fugiat reprehenderit est ex tempor dolor irure laboris",
          "sequence_no": 5
        }, {
          "type": "text",
          "data": "reprehenderit sunt incididunt labore non esse amet anim qui culpa ex cupidatat adipisicing laborum fugiat sunt elit occaecat ex occaecat",
          "sequence_no": 6
        }, {
          "type": "photo",
          "data": "non ullamco officia ut ea proident nostrud elit ea duis in proident esse nostrud aute nostrud eiusmod amet amet dolore",
          "sequence_no": 7
        }]
      }, {
        "id": 1,
        "start_time": "2014-02-13T04:59:39 -11:00",
        "end_time": "2015-07-14T11:02:09 -10:00",
        "name": "cupidatat aliqua deserunt laboris aliqua",
        "steps": [{
          "type": "text",
          "data": "aute culpa tempor irure est sit nostrud sit ea ipsum dolor tempor eu ut nisi consectetur pariatur proident commodo nulla",
          "sequence_no": 0
        }, {
          "type": "text",
          "data": "adipisicing pariatur cillum quis aliquip magna consequat occaecat veniam consectetur culpa proident esse eu anim anim aliqua laborum tempor velit",
          "sequence_no": 1
        }, {
          "type": "photo",
          "data": "adipisicing reprehenderit adipisicing et reprehenderit adipisicing pariatur ex minim eu veniam non mollit voluptate velit sit enim sunt excepteur tempor",
          "sequence_no": 2
        }, {
          "type": "text",
          "data": "dolor proident nostrud ea deserunt nulla deserunt irure dolore enim sint esse reprehenderit deserunt fugiat deserunt et eu sunt voluptate",
          "sequence_no": 3
        }, {
          "type": "text",
          "data": "laboris dolor est aute minim eiusmod exercitation aliquip eu et cupidatat sunt anim nostrud laboris laborum aliquip deserunt anim proident",
          "sequence_no": 4
        }, {
          "type": "photo",
          "data": "voluptate aliquip amet ad do ullamco amet veniam ad ipsum adipisicing est ad ullamco culpa eu ut ullamco exercitation labore",
          "sequence_no": 5
        }, {
          "type": "text",
          "data": "anim reprehenderit ad do minim veniam consectetur officia sit dolore dolore velit do minim exercitation dolore minim proident elit laboris",
          "sequence_no": 6
        }, {
          "type": "text",
          "data": "velit officia et nostrud quis et aliqua do do cillum aute excepteur velit et adipisicing commodo consequat deserunt non enim",
          "sequence_no": 7
        }, {
          "type": "photo",
          "data": "mollit cillum mollit sit amet minim mollit aliqua est exercitation proident cupidatat sunt eu magna non irure sit culpa sunt",
          "sequence_no": 8
        }]
      }, {
        "id": 2,
        "start_time": "2014-06-19T10:18:16 -10:00",
        "end_time": "2014-03-30T02:46:45 -11:00",
        "name": "elit ipsum consectetur deserunt anim",
        "steps": [{
          "type": "photo",
          "data": "voluptate nisi quis consectetur cillum ullamco reprehenderit ex elit sunt labore labore do mollit dolor ullamco Lorem ut in quis",
          "sequence_no": 0
        }, {
          "type": "text",
          "data": "officia ad reprehenderit qui ipsum proident officia anim irure exercitation culpa nisi occaecat fugiat cillum sit est ut irure consectetur",
          "sequence_no": 1
        }, {
          "type": "photo",
          "data": "aliqua quis esse id in do consequat nisi deserunt occaecat ipsum mollit minim et mollit tempor aliquip et enim incididunt",
          "sequence_no": 2
        }, {
          "type": "photo",
          "data": "et eiusmod ad ut laborum labore eu fugiat consequat enim qui ad mollit dolore enim qui Lorem ullamco fugiat do",
          "sequence_no": 3
        }, {
          "type": "text",
          "data": "pariatur est excepteur nisi elit voluptate fugiat in commodo enim mollit nostrud amet anim ad elit eu minim fugiat voluptate",
          "sequence_no": 4
        }, {
          "type": "text",
          "data": "laboris cillum officia pariatur fugiat voluptate ea anim sint reprehenderit dolor veniam id ad excepteur deserunt esse sint tempor ad",
          "sequence_no": 5
        }, {
          "type": "text",
          "data": "Lorem consectetur laborum quis tempor incididunt sit officia ad ex esse anim sint cupidatat et dolor ut enim irure sint",
          "sequence_no": 6
        }]
      }, {
        "id": 3,
        "start_time": "2014-08-18T12:36:30 -10:00",
        "end_time": "2014-01-09T09:25:00 -11:00",
        "name": "sit tempor ex voluptate occaecat",
        "steps": [{
          "type": "photo",
          "data": "qui ad laboris velit velit sint ut sunt id labore esse proident id ea ea officia fugiat Lorem ullamco veniam",
          "sequence_no": 0
        }, {
          "type": "text",
          "data": "mollit excepteur non laborum id laboris quis id ex aliqua Lorem laborum sit fugiat quis dolor proident excepteur enim officia",
          "sequence_no": 1
        }, {
          "type": "text",
          "data": "do enim nisi duis enim aute pariatur mollit quis consequat proident Lorem amet laborum in cillum mollit anim proident ullamco",
          "sequence_no": 2
        }, {
          "type": "photo",
          "data": "consequat veniam eu est velit irure id sint ex eiusmod proident aute aliqua est ad dolor elit pariatur quis qui",
          "sequence_no": 3
        }, {
          "type": "photo",
          "data": "sunt sunt est aliqua fugiat eu commodo quis excepteur excepteur aliquip laborum tempor Lorem aliqua exercitation sit voluptate laborum esse",
          "sequence_no": 4
        }, {
          "type": "photo",
          "data": "aliquip et eu sint irure duis culpa ad veniam quis et commodo qui incididunt dolore duis et ullamco qui laborum",
          "sequence_no": 5
        }, {
          "type": "text",
          "data": "ea magna laboris eiusmod pariatur do ex sit veniam eiusmod do enim Lorem consequat elit eiusmod quis laborum officia est",
          "sequence_no": 6
        }, {
          "type": "text",
          "data": "laboris do non mollit commodo adipisicing minim duis ea aliqua do qui aute amet eu velit cillum qui sunt deserunt",
          "sequence_no": 7
        }, {
          "type": "photo",
          "data": "aliquip officia nisi nulla voluptate culpa ut fugiat minim cupidatat in cupidatat culpa reprehenderit aliqua labore est ullamco ea cillum",
          "sequence_no": 8
        }, {
          "type": "text",
          "data": "laborum reprehenderit velit aliquip commodo culpa reprehenderit irure consequat pariatur proident laborum aliquip magna minim exercitation officia adipisicing occaecat ullamco",
          "sequence_no": 9
        }]
      }, {
        "id": 4,
        "start_time": "2015-04-12T09:43:17 -10:00",
        "end_time": "2015-10-30T09:28:42 -11:00",
        "name": "nulla laborum magna nulla anim",
        "steps": [{
          "type": "photo",
          "data": "nisi occaecat culpa mollit ullamco ex fugiat incididunt sunt nulla sit esse ad dolore eiusmod Lorem deserunt sint aliquip minim",
          "sequence_no": 0
        }, {
          "type": "text",
          "data": "voluptate excepteur proident excepteur aliquip ex irure consequat magna est anim commodo eu nostrud fugiat do sunt sit sit deserunt",
          "sequence_no": 1
        }, {
          "type": "text",
          "data": "occaecat eiusmod do ex qui culpa sunt adipisicing ea eu tempor ut ipsum dolore duis laborum esse ipsum incididunt fugiat",
          "sequence_no": 2
        }, {
          "type": "photo",
          "data": "sit minim sunt culpa aute nostrud excepteur aliquip voluptate ut ullamco id adipisicing do in duis esse ex aliquip ex",
          "sequence_no": 3
        }, {
          "type": "photo",
          "data": "aute aliqua nisi laboris quis magna sunt eiusmod dolore dolor proident ut ad veniam ad sint labore Lorem excepteur nostrud",
          "sequence_no": 4
        }, {
          "type": "photo",
          "data": "adipisicing esse quis voluptate tempor nostrud cillum nulla voluptate amet ea in enim cillum fugiat consectetur deserunt esse mollit laboris",
          "sequence_no": 5
        }, {
          "type": "photo",
          "data": "commodo consectetur ex ex aliquip veniam ut est in culpa non sint qui non aute nostrud occaecat minim adipisicing nostrud",
          "sequence_no": 6
        }]
      }] };
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'header' },
          _react2['default'].createElement(
            _reactBootstrap.Navbar,
            { className: 'navbar-static-top' },
            _react2['default'].createElement(
              _reactBootstrap.NavBrand,
              null,
              _react2['default'].createElement('a', { href: '/' }),
              'RightClick Admin'
            ),
            _react2['default'].createElement(
              _reactBootstrap.Nav,
              null,
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { eventKey: 1, href: '#' },
                'Dashboard'
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { eventKey: 2, href: '#' },
                'Lesson History'
              )
            )
          ),
          _react2['default'].createElement(_LessonsTable2['default'], { lessons: this.state.lessons })
        )
      );
    }
  }, {
    key: '_handleTouchTap',
    value: function _handleTouchTap() {
      //this.refs.superSecretPasswordDialog.show();
    }
  }]);

  return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"./LessonsTable":3,"react":"react","react-bootstrap":229}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _LessonsTableItem = require('./LessonsTableItem');

var _LessonsTableItem2 = _interopRequireDefault(_LessonsTableItem);

var LessonsTable = (function (_React$Component) {
  _inherits(LessonsTable, _React$Component);

  function LessonsTable() {
    _classCallCheck(this, LessonsTable);

    _get(Object.getPrototypeOf(LessonsTable.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(LessonsTable, [{
    key: 'render',
    value: function render() {
      var Lessons = _react2['default'].createElement(
        'tr',
        null,
        _react2['default'].createElement(
          'td',
          null,
          'Loading lessons...'
        )
      );
      if (this.props.lessons) {
        Lessons = this.props.lessons.map(function (lesson) {
          return _react2['default'].createElement(_LessonsTableItem2['default'], { lesson: lesson, key: lesson.id });
        });
      }
      return _react2['default'].createElement(
        _reactBootstrap.Table,
        { striped: true, bordered: true, condensed: true, hover: true },
        _react2['default'].createElement(
          'thead',
          null,
          _react2['default'].createElement(
            'tr',
            null,
            _react2['default'].createElement(
              'th',
              null,
              'Lesson Name'
            ),
            _react2['default'].createElement(
              'th',
              null,
              'Start Time'
            ),
            _react2['default'].createElement(
              'th',
              null,
              'End Time'
            )
          )
        ),
        _react2['default'].createElement(
          'tbody',
          null,
          Lessons
        )
      );
    }
  }]);

  return LessonsTable;
})(_react2['default'].Component);

exports['default'] = LessonsTable;
module.exports = exports['default'];

},{"./LessonsTableItem":4,"react":"react","react-bootstrap":229}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var LessonsTableItem = (function (_React$Component) {
  _inherits(LessonsTableItem, _React$Component);

  function LessonsTableItem() {
    _classCallCheck(this, LessonsTableItem);

    _get(Object.getPrototypeOf(LessonsTableItem.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(LessonsTableItem, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'tr',
        null,
        _react2['default'].createElement(
          'td',
          null,
          this.props.lesson.name
        ),
        _react2['default'].createElement(
          'td',
          null,
          this.props.lesson.start_time
        ),
        _react2['default'].createElement(
          'td',
          null,
          this.props.lesson.end_time
        )
      );
    }
  }]);

  return LessonsTableItem;
})(_react2['default'].Component);

exports['default'] = LessonsTableItem;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":229}],5:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _historyLibCreateBrowserHistory = require('history/lib/createBrowserHistory');

var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _reactTapEventPlugin = require("react-tap-event-plugin");

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

(0, _reactTapEventPlugin2['default'])();

var history = (0, _historyLibCreateBrowserHistory2['default'])();

_reactDom2['default'].render(_react2['default'].createElement(
  _reactRouter2['default'],
  { history: history },
  _routes2['default']
), document.getElementById('app'));

},{"./routes":6,"history/lib/createBrowserHistory":79,"react":"react","react-dom":"react-dom","react-router":"react-router","react-tap-event-plugin":264}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { component: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', component: _componentsHome2['default'] })
);
module.exports = exports['default'];

},{"./components/App":1,"./components/Home":2,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":19}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":20}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/is-frozen"), __esModule: true };
},{"core-js/library/fn/object/is-frozen":21}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":22}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":23}],12:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],13:[function(require,module,exports){
"use strict";

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

exports["default"] = _Object$assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/assign":7}],14:[function(require,module,exports){
"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Object$setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of")["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/create":8,"babel-runtime/core-js/object/set-prototype-of":11}],15:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],16:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
};

exports.__esModule = true;
},{}],17:[function(require,module,exports){
"use strict";

exports["default"] = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

exports.__esModule = true;
},{}],18:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes += ' ' + arg;
			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],19:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":27,"../../modules/es6.object.assign":40}],20:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":35}],21:[function(require,module,exports){
require('../../modules/es6.object.is-frozen');
module.exports = require('../../modules/$.core').Object.isFrozen;
},{"../../modules/$.core":27,"../../modules/es6.object.is-frozen":41}],22:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/$.core').Object.keys;
},{"../../modules/$.core":27,"../../modules/es6.object.keys":42}],23:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":27,"../../modules/es6.object.set-prototype-of":43}],24:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],25:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":34}],26:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],27:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],28:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":24}],29:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],30:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , ctx       = require('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":27,"./$.ctx":28,"./$.global":32}],31:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],32:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],33:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":26}],34:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],35:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],36:[function(require,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var $        = require('./$')
  , toObject = require('./$.to-object')
  , IObject  = require('./$.iobject');

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = require('./$.fails')(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;
},{"./$":35,"./$.fails":31,"./$.iobject":33,"./$.to-object":39}],37:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./$.export')
  , core    = require('./$.core')
  , fails   = require('./$.fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":27,"./$.export":30,"./$.fails":31}],38:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./$":35,"./$.an-object":25,"./$.ctx":28,"./$.is-object":34}],39:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":29}],40:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./$.export');

$export($export.S + $export.F, 'Object', {assign: require('./$.object-assign')});
},{"./$.export":30,"./$.object-assign":36}],41:[function(require,module,exports){
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./$.is-object');

require('./$.object-sap')('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});
},{"./$.is-object":34,"./$.object-sap":37}],42:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":37,"./$.to-object":39}],43:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":30,"./$.set-proto":38}],44:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":45,"./lib/keys.js":46}],45:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],46:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],47:[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

/**
 * document.activeElement
 */
exports['default'] = activeElement;

var _ownerDocument = require('./ownerDocument');

var _ownerDocument2 = babelHelpers.interopRequireDefault(_ownerDocument);

function activeElement() {
  var doc = arguments[0] === undefined ? document : arguments[0];

  try {
    return doc.activeElement;
  } catch (e) {}
}

module.exports = exports['default'];
},{"./ownerDocument":50,"./util/babelHelpers.js":63}],48:[function(require,module,exports){
'use strict';
var canUseDOM = require('../util/inDOM');
var off = function off() {};

if (canUseDOM) {

  off = (function () {

    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  })();
}

module.exports = off;
},{"../util/inDOM":68}],49:[function(require,module,exports){
'use strict';
var canUseDOM = require('../util/inDOM');
var on = function on() {};

if (canUseDOM) {
  on = (function () {

    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, handler);
    };
  })();
}

module.exports = on;
},{"../util/inDOM":68}],50:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = ownerDocument;

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

module.exports = exports["default"];
},{}],51:[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;
exports['default'] = ownerWindow;

var _ownerDocument = require('./ownerDocument');

var _ownerDocument2 = babelHelpers.interopRequireDefault(_ownerDocument);

function ownerWindow(node) {
  var doc = (0, _ownerDocument2['default'])(node);
  return doc && doc.defaultView || doc.parentWindow;
}

module.exports = exports['default'];
},{"./ownerDocument":50,"./util/babelHelpers.js":63}],52:[function(require,module,exports){
'use strict';
var canUseDOM = require('../util/inDOM');

var contains = (function () {
  var root = canUseDOM && document.documentElement;

  return root && root.contains ? function (context, node) {
    return context.contains(node);
  } : root && root.compareDocumentPosition ? function (context, node) {
    return context === node || !!(context.compareDocumentPosition(node) & 16);
  } : function (context, node) {
    if (node) do {
      if (node === context) return true;
    } while (node = node.parentNode);

    return false;
  };
})();

module.exports = contains;
},{"../util/inDOM":68}],53:[function(require,module,exports){
'use strict';

module.exports = function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
};
},{}],54:[function(require,module,exports){
'use strict';
var contains = require('./contains'),
    getWindow = require('./isWindow'),
    ownerDocument = require('../ownerDocument');

module.exports = function offset(node) {
  var doc = ownerDocument(node),
      win = getWindow(doc),
      docElem = doc && doc.documentElement,
      box = { top: 0, left: 0, height: 0, width: 0 };

  if (!doc) return;

  // Make sure it's not a disconnected DOM node
  if (!contains(docElem, node)) return box;

  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();

  if (box.width || box.height) {

    box = {
      top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
      left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
      width: (box.width == null ? node.offsetWidth : box.width) || 0,
      height: (box.height == null ? node.offsetHeight : box.height) || 0
    };
  }

  return box;
};
},{"../ownerDocument":50,"./contains":52,"./isWindow":53}],55:[function(require,module,exports){
'use strict';

var babelHelpers = require('../util/babelHelpers.js');

exports.__esModule = true;
exports['default'] = offsetParent;

var _ownerDocument = require('../ownerDocument');

var _ownerDocument2 = babelHelpers.interopRequireDefault(_ownerDocument);

var _style = require('../style');

var _style2 = babelHelpers.interopRequireDefault(_style);

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function offsetParent(node) {
  var doc = (0, _ownerDocument2['default'])(node),
      offsetParent = node && node.offsetParent;

  while (offsetParent && nodeName(node) !== 'html' && (0, _style2['default'])(offsetParent, 'position') === 'static') {
    offsetParent = offsetParent.offsetParent;
  }

  return offsetParent || doc.documentElement;
}

module.exports = exports['default'];
},{"../ownerDocument":50,"../style":60,"../util/babelHelpers.js":63}],56:[function(require,module,exports){
'use strict';

var babelHelpers = require('../util/babelHelpers.js');

exports.__esModule = true;
exports['default'] = position;

var _offset = require('./offset');

var _offset2 = babelHelpers.interopRequireDefault(_offset);

var _offsetParent = require('./offsetParent');

var _offsetParent2 = babelHelpers.interopRequireDefault(_offsetParent);

var _scrollTop = require('./scrollTop');

var _scrollTop2 = babelHelpers.interopRequireDefault(_scrollTop);

var _scrollLeft = require('./scrollLeft');

var _scrollLeft2 = babelHelpers.interopRequireDefault(_scrollLeft);

var _style = require('../style');

var _style2 = babelHelpers.interopRequireDefault(_style);

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function position(node, offsetParent) {
  var parentOffset = { top: 0, left: 0 },
      offset;

  // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent
  if ((0, _style2['default'])(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    offsetParent = offsetParent || (0, _offsetParent2['default'])(node);
    offset = (0, _offset2['default'])(node);

    if (nodeName(offsetParent) !== 'html') parentOffset = (0, _offset2['default'])(offsetParent);

    parentOffset.top += parseInt((0, _style2['default'])(offsetParent, 'borderTopWidth'), 10) - (0, _scrollTop2['default'])(offsetParent) || 0;
    parentOffset.left += parseInt((0, _style2['default'])(offsetParent, 'borderLeftWidth'), 10) - (0, _scrollLeft2['default'])(offsetParent) || 0;
  }

  // Subtract parent offsets and node margins
  return babelHelpers._extends({}, offset, {
    top: offset.top - parentOffset.top - (parseInt((0, _style2['default'])(node, 'marginTop'), 10) || 0),
    left: offset.left - parentOffset.left - (parseInt((0, _style2['default'])(node, 'marginLeft'), 10) || 0)
  });
}

module.exports = exports['default'];
},{"../style":60,"../util/babelHelpers.js":63,"./offset":54,"./offsetParent":55,"./scrollLeft":57,"./scrollTop":58}],57:[function(require,module,exports){
'use strict';
var getWindow = require('./isWindow');

module.exports = function scrollTop(node, val) {
  var win = getWindow(node);

  if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;

  if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
};
},{"./isWindow":53}],58:[function(require,module,exports){
'use strict';
var getWindow = require('./isWindow');

module.exports = function scrollTop(node, val) {
  var win = getWindow(node);

  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;

  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
};
},{"./isWindow":53}],59:[function(require,module,exports){
'use strict';

var babelHelpers = require('../util/babelHelpers.js');

var _utilCamelizeStyle = require('../util/camelizeStyle');

var _utilCamelizeStyle2 = babelHelpers.interopRequireDefault(_utilCamelizeStyle);

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

module.exports = function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;

  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : { //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;

      prop = (0, _utilCamelizeStyle2['default'])(prop);

      if (prop == 'float') prop = 'styleFloat';

      var current = node.currentStyle[prop] || null;

      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left;

        // Put in the new values to get a computed value out
        if (rsLeft) runStyle.left = node.currentStyle.left;

        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px';

        // Revert the changed values
        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
};
},{"../util/babelHelpers.js":63,"../util/camelizeStyle":65}],60:[function(require,module,exports){
'use strict';

var camelize = require('../util/camelizeStyle'),
    hyphenate = require('../util/hyphenateStyle'),
    _getComputedStyle = require('./getComputedStyle'),
    removeStyle = require('./removeStyle');

var has = Object.prototype.hasOwnProperty;

module.exports = function style(node, property, value) {
  var css = '',
      props = property;

  if (typeof property === 'string') {

    if (value === undefined) return node.style[camelize(property)] || _getComputedStyle(node).getPropertyValue(hyphenate(property));else (props = {})[property] = value;
  }

  for (var key in props) if (has.call(props, key)) {
    !props[key] && props[key] !== 0 ? removeStyle(node, hyphenate(key)) : css += hyphenate(key) + ':' + props[key] + ';';
  }

  node.style.cssText += ';' + css;
};
},{"../util/camelizeStyle":65,"../util/hyphenateStyle":67,"./getComputedStyle":59,"./removeStyle":61}],61:[function(require,module,exports){
'use strict';

module.exports = function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
};
},{}],62:[function(require,module,exports){
'use strict';
var canUseDOM = require('../util/inDOM');

var has = Object.prototype.hasOwnProperty,
    transform = 'transform',
    transition = {},
    transitionTiming,
    transitionDuration,
    transitionProperty,
    transitionDelay;

if (canUseDOM) {
  transition = getTransitionProperties();

  transform = transition.prefix + transform;

  transitionProperty = transition.prefix + 'transition-property';
  transitionDuration = transition.prefix + 'transition-duration';
  transitionDelay = transition.prefix + 'transition-delay';
  transitionTiming = transition.prefix + 'transition-timing-function';
}

module.exports = {
  transform: transform,
  end: transition.end,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};

function getTransitionProperties() {
  var endEvent,
      prefix = '',
      transitions = {
    O: 'otransitionend',
    Moz: 'transitionend',
    Webkit: 'webkitTransitionEnd',
    ms: 'MSTransitionEnd'
  };

  var element = document.createElement('div');

  for (var vendor in transitions) if (has.call(transitions, vendor)) {
    if (element.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-';
      endEvent = transitions[vendor];
      break;
    }
  }

  if (!endEvent && element.style.transitionProperty !== undefined) endEvent = 'transitionend';

  return { end: endEvent, prefix: prefix };
}
},{"../util/inDOM":68}],63:[function(require,module,exports){
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports === "object") {
    factory(exports);
  } else {
    factory(root.babelHelpers = {});
  }
})(this, function (global) {
  var babelHelpers = global;

  babelHelpers.interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  };

  babelHelpers._extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
})
},{}],64:[function(require,module,exports){
"use strict";

var rHyphen = /-(.)/g;

module.exports = function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
};
},{}],65:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
 */

'use strict';
var camelize = require('./camelize');
var msPattern = /^-ms-/;

module.exports = function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
};
},{"./camelize":64}],66:[function(require,module,exports){
'use strict';

var rUpper = /([A-Z])/g;

module.exports = function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
};
},{}],67:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

"use strict";

var hyphenate = require("./hyphenate");
var msPattern = /^ms-/;

module.exports = function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
};
},{"./hyphenate":66}],68:[function(require,module,exports){
'use strict';
module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
},{}],69:[function(require,module,exports){
'use strict';

var canUseDOM = require('./inDOM');

var size;

module.exports = function (recalc) {
  if (!size || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};
},{"./inDOM":68}],70:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

"use strict";

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],71:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;
}).call(this,require('_process'))
},{"_process":158}],72:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyMirror
 * @typechecks static-only
 */

'use strict';

var invariant = require('./invariant');

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
var keyMirror = function (obj) {
  var ret = {};
  var key;
  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : undefined;
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

module.exports = keyMirror;
}).call(this,require('_process'))
},{"./invariant":71,"_process":158}],73:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  warning = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;
}).call(this,require('_process'))
},{"./emptyFunction":70,"_process":158}],74:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],75:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],76:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))
},{"_process":158,"warning":282}],77:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],78:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],79:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    return history.createLocation(path, state, undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./Actions":74,"./DOMStateStorage":76,"./DOMUtils":77,"./ExecutionEnvironment":78,"./createDOMHistory":80,"_process":158,"invariant":87}],80:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./DOMUtils":77,"./ExecutionEnvironment":78,"./createHistory":81,"_process":158,"invariant":87}],81:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var _getCurrentLocation = getCurrentLocation();

          var pathname = _getCurrentLocation.pathname;
          var search = _getCurrentLocation.search;

          var currentPath = pathname + search;
          var path = nextLocation.pathname + nextLocation.search;

          if (currentPath === path) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function pushState(state, path) {
    transitionTo(createLocation(path, state, _Actions.PUSH, createKey()));
  }

  function push(path) {
    pushState(null, path);
  }

  function replaceState(state, path) {
    transitionTo(createLocation(path, state, _Actions.REPLACE, createKey()));
  }

  function replace(path) {
    replaceState(null, path);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(path) {
    if (path == null || typeof path === 'string') return path;

    var pathname = path.pathname;
    var search = path.search;
    var hash = path.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(path) {
    return createPath(path);
  }

  function createLocation(path, state, action) {
    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];

    return _createLocation3['default'](path, state, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    pushState: pushState,
    replaceState: replaceState,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":74,"./AsyncUtils":75,"./createLocation":82,"./deprecate":83,"./runTransitionHook":86,"deep-equal":44}],82:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof path === 'string') path = _parsePath2['default'](path);

  var pathname = path.pathname || '/';
  var search = path.search || '';
  var hash = path.hash || '';

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":74,"./parsePath":85}],83:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":158,"warning":282}],84:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],85:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./extractPath":84,"_process":158,"warning":282}],86:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":158,"warning":282}],87:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))
},{"_process":158}],88:[function(require,module,exports){
// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes



/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'right click': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222,
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 33,
  'ins': 45,
  'del': 46,
  'cmd': 91
}


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}

},{}],89:[function(require,module,exports){
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
}

module.exports = last;

},{}],90:[function(require,module,exports){
var baseEach = require('../internal/baseEach'),
    createFind = require('../internal/createFind');

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is bound to `thisArg` and
 * invoked with three arguments: (value, index|key, collection).
 *
 * If a property name is provided for `predicate` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `predicate` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @alias detect
 * @category Collection
 * @param {Array|Object|string} collection The collection to search.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.result(_.find(users, function(chr) {
 *   return chr.age < 40;
 * }), 'user');
 * // => 'barney'
 *
 * // using the `_.matches` callback shorthand
 * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
 * // => 'pebbles'
 *
 * // using the `_.matchesProperty` callback shorthand
 * _.result(_.find(users, 'active', false), 'user');
 * // => 'fred'
 *
 * // using the `_.property` callback shorthand
 * _.result(_.find(users, 'active'), 'user');
 * // => 'barney'
 */
var find = createFind(baseEach);

module.exports = find;

},{"../internal/baseEach":99,"../internal/createFind":123}],91:[function(require,module,exports){
/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as an array.
 *
 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.restParam(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function restParam(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        rest = Array(length);

    while (++index < length) {
      rest[index] = args[start + index];
    }
    switch (start) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, args[0], rest);
      case 2: return func.call(this, args[0], args[1], rest);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = rest;
    return func.apply(this, otherArgs);
  };
}

module.exports = restParam;

},{}],92:[function(require,module,exports){
(function (global){
var cachePush = require('./cachePush'),
    getNative = require('./getNative');

/** Native method references. */
var Set = getNative(global, 'Set');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeCreate = getNative(Object, 'create');

/**
 *
 * Creates a cache object to store unique values.
 *
 * @private
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var length = values ? values.length : 0;

  this.data = { 'hash': nativeCreate(null), 'set': new Set };
  while (length--) {
    this.push(values[length]);
  }
}

// Add functions to the `Set` cache.
SetCache.prototype.push = cachePush;

module.exports = SetCache;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./cachePush":119,"./getNative":129}],93:[function(require,module,exports){
/**
 * A specialized version of `_.forEach` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;

},{}],94:[function(require,module,exports){
/**
 * A specialized version of `_.map` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

},{}],95:[function(require,module,exports){
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;

},{}],96:[function(require,module,exports){
/**
 * A specialized version of `_.some` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

},{}],97:[function(require,module,exports){
var baseMatches = require('./baseMatches'),
    baseMatchesProperty = require('./baseMatchesProperty'),
    bindCallback = require('./bindCallback'),
    identity = require('../utility/identity'),
    property = require('../utility/property');

/**
 * The base implementation of `_.callback` which supports specifying the
 * number of arguments to provide to `func`.
 *
 * @private
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function baseCallback(func, thisArg, argCount) {
  var type = typeof func;
  if (type == 'function') {
    return thisArg === undefined
      ? func
      : bindCallback(func, thisArg, argCount);
  }
  if (func == null) {
    return identity;
  }
  if (type == 'object') {
    return baseMatches(func);
  }
  return thisArg === undefined
    ? property(func)
    : baseMatchesProperty(func, thisArg);
}

module.exports = baseCallback;

},{"../utility/identity":156,"../utility/property":157,"./baseMatches":111,"./baseMatchesProperty":112,"./bindCallback":117}],98:[function(require,module,exports){
var baseIndexOf = require('./baseIndexOf'),
    cacheIndexOf = require('./cacheIndexOf'),
    createCache = require('./createCache');

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.difference` which accepts a single array
 * of values to exclude.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values) {
  var length = array ? array.length : 0,
      result = [];

  if (!length) {
    return result;
  }
  var index = -1,
      indexOf = baseIndexOf,
      isCommon = true,
      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
      valuesLength = values.length;

  if (cache) {
    indexOf = cacheIndexOf;
    isCommon = false;
    values = cache;
  }
  outer:
  while (++index < length) {
    var value = array[index];

    if (isCommon && value === value) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === value) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (indexOf(values, value, 0) < 0) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;

},{"./baseIndexOf":107,"./cacheIndexOf":118,"./createCache":122}],99:[function(require,module,exports){
var baseForOwn = require('./baseForOwn'),
    createBaseEach = require('./createBaseEach');

/**
 * The base implementation of `_.forEach` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object|string} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;

},{"./baseForOwn":105,"./createBaseEach":120}],100:[function(require,module,exports){
/**
 * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
 * without support for callback shorthands and `this` binding, which iterates
 * over `collection` using the provided `eachFunc`.
 *
 * @private
 * @param {Array|Object|string} collection The collection to search.
 * @param {Function} predicate The function invoked per iteration.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @param {boolean} [retKey] Specify returning the key of the found element
 *  instead of the element itself.
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
function baseFind(collection, predicate, eachFunc, retKey) {
  var result;
  eachFunc(collection, function(value, key, collection) {
    if (predicate(value, key, collection)) {
      result = retKey ? key : value;
      return false;
    }
  });
  return result;
}

module.exports = baseFind;

},{}],101:[function(require,module,exports){
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for callback shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {Function} predicate The function invoked per iteration.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromRight) {
  var length = array.length,
      index = fromRight ? length : -1;

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;

},{}],102:[function(require,module,exports){
var arrayPush = require('./arrayPush'),
    isArguments = require('../lang/isArguments'),
    isArray = require('../lang/isArray'),
    isArrayLike = require('./isArrayLike'),
    isObjectLike = require('./isObjectLike');

/**
 * The base implementation of `_.flatten` with added support for restricting
 * flattening and specifying the start index.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {boolean} [isDeep] Specify a deep flatten.
 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, isDeep, isStrict, result) {
  result || (result = []);

  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index];
    if (isObjectLike(value) && isArrayLike(value) &&
        (isStrict || isArray(value) || isArguments(value))) {
      if (isDeep) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, isDeep, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;

},{"../lang/isArguments":143,"../lang/isArray":144,"./arrayPush":95,"./isArrayLike":131,"./isObjectLike":136}],103:[function(require,module,exports){
var createBaseFor = require('./createBaseFor');

/**
 * The base implementation of `baseForIn` and `baseForOwn` which iterates
 * over `object` properties returned by `keysFunc` invoking `iteratee` for
 * each property. Iteratee functions may exit iteration early by explicitly
 * returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

},{"./createBaseFor":121}],104:[function(require,module,exports){
var baseFor = require('./baseFor'),
    keysIn = require('../object/keysIn');

/**
 * The base implementation of `_.forIn` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForIn(object, iteratee) {
  return baseFor(object, iteratee, keysIn);
}

module.exports = baseForIn;

},{"../object/keysIn":151,"./baseFor":103}],105:[function(require,module,exports){
var baseFor = require('./baseFor'),
    keys = require('../object/keys');

/**
 * The base implementation of `_.forOwn` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;

},{"../object/keys":150,"./baseFor":103}],106:[function(require,module,exports){
var toObject = require('./toObject');

/**
 * The base implementation of `get` without support for string paths
 * and default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path of the property to get.
 * @param {string} [pathKey] The key representation of path.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path, pathKey) {
  if (object == null) {
    return;
  }
  object = toObject(object);
  if (pathKey !== undefined && pathKey in object) {
    path = [pathKey];
  }
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = toObject(object)[path[index++]];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;

},{"./toObject":141}],107:[function(require,module,exports){
var indexOfNaN = require('./indexOfNaN');

/**
 * The base implementation of `_.indexOf` without support for binary searches.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return indexOfNaN(array, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = baseIndexOf;

},{"./indexOfNaN":130}],108:[function(require,module,exports){
var baseIsEqualDeep = require('./baseIsEqualDeep'),
    isObject = require('../lang/isObject'),
    isObjectLike = require('./isObjectLike');

/**
 * The base implementation of `_.isEqual` without support for `this` binding
 * `customizer` functions.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
}

module.exports = baseIsEqual;

},{"../lang/isObject":147,"./baseIsEqualDeep":109,"./isObjectLike":136}],109:[function(require,module,exports){
var equalArrays = require('./equalArrays'),
    equalByTag = require('./equalByTag'),
    equalObjects = require('./equalObjects'),
    isArray = require('../lang/isArray'),
    isHostObject = require('./isHostObject'),
    isTypedArray = require('../lang/isTypedArray');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = objToString.call(object);
    if (objTag == argsTag) {
      objTag = objectTag;
    } else if (objTag != objectTag) {
      objIsArr = isTypedArray(object);
    }
  }
  if (!othIsArr) {
    othTag = objToString.call(other);
    if (othTag == argsTag) {
      othTag = objectTag;
    } else if (othTag != objectTag) {
      othIsArr = isTypedArray(other);
    }
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !(objIsArr || objIsObj)) {
    return equalByTag(object, other, objTag);
  }
  if (!isLoose) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
    }
  }
  if (!isSameTag) {
    return false;
  }
  // Assume cyclic values are equal.
  // For more information on detecting circular references see https://es5.github.io/#JO.
  stackA || (stackA = []);
  stackB || (stackB = []);

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == object) {
      return stackB[length] == other;
    }
  }
  // Add `object` and `other` to the stack of traversed objects.
  stackA.push(object);
  stackB.push(other);

  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

  stackA.pop();
  stackB.pop();

  return result;
}

module.exports = baseIsEqualDeep;

},{"../lang/isArray":144,"../lang/isTypedArray":149,"./equalArrays":124,"./equalByTag":125,"./equalObjects":126,"./isHostObject":132}],110:[function(require,module,exports){
var baseIsEqual = require('./baseIsEqual'),
    toObject = require('./toObject');

/**
 * The base implementation of `_.isMatch` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Array} matchData The propery names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = toObject(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

},{"./baseIsEqual":108,"./toObject":141}],111:[function(require,module,exports){
var baseIsMatch = require('./baseIsMatch'),
    getMatchData = require('./getMatchData'),
    toObject = require('./toObject');

/**
 * The base implementation of `_.matches` which does not clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    var key = matchData[0][0],
        value = matchData[0][1];

    return function(object) {
      if (object == null) {
        return false;
      }
      object = toObject(object);
      return object[key] === value && (value !== undefined || (key in object));
    };
  }
  return function(object) {
    return baseIsMatch(object, matchData);
  };
}

module.exports = baseMatches;

},{"./baseIsMatch":110,"./getMatchData":128,"./toObject":141}],112:[function(require,module,exports){
var baseGet = require('./baseGet'),
    baseIsEqual = require('./baseIsEqual'),
    baseSlice = require('./baseSlice'),
    isArray = require('../lang/isArray'),
    isKey = require('./isKey'),
    isStrictComparable = require('./isStrictComparable'),
    last = require('../array/last'),
    toObject = require('./toObject'),
    toPath = require('./toPath');

/**
 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to compare.
 * @returns {Function} Returns the new function.
 */
function baseMatchesProperty(path, srcValue) {
  var isArr = isArray(path),
      isCommon = isKey(path) && isStrictComparable(srcValue),
      pathKey = (path + '');

  path = toPath(path);
  return function(object) {
    if (object == null) {
      return false;
    }
    var key = pathKey;
    object = toObject(object);
    if ((isArr || !isCommon) && !(key in object)) {
      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
      if (object == null) {
        return false;
      }
      key = last(path);
      object = toObject(object);
    }
    return object[key] === srcValue
      ? (srcValue !== undefined || (key in object))
      : baseIsEqual(srcValue, object[key], undefined, true);
  };
}

module.exports = baseMatchesProperty;

},{"../array/last":89,"../lang/isArray":144,"./baseGet":106,"./baseIsEqual":108,"./baseSlice":115,"./isKey":134,"./isStrictComparable":137,"./toObject":141,"./toPath":142}],113:[function(require,module,exports){
var toObject = require('./toObject');

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : toObject(object)[key];
  };
}

module.exports = baseProperty;

},{"./toObject":141}],114:[function(require,module,exports){
var baseGet = require('./baseGet'),
    toPath = require('./toPath');

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 */
function basePropertyDeep(path) {
  var pathKey = (path + '');
  path = toPath(path);
  return function(object) {
    return baseGet(object, path, pathKey);
  };
}

module.exports = basePropertyDeep;

},{"./baseGet":106,"./toPath":142}],115:[function(require,module,exports){
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  start = start == null ? 0 : (+start || 0);
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = (end === undefined || end > length) ? length : (+end || 0);
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;

},{}],116:[function(require,module,exports){
/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` or `undefined` values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  return value == null ? '' : (value + '');
}

module.exports = baseToString;

},{}],117:[function(require,module,exports){
var identity = require('../utility/identity');

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

module.exports = bindCallback;

},{"../utility/identity":156}],118:[function(require,module,exports){
var isObject = require('../lang/isObject');

/**
 * Checks if `value` is in `cache` mimicking the return signature of
 * `_.indexOf` by returning `0` if the value is found, else `-1`.
 *
 * @private
 * @param {Object} cache The cache to search.
 * @param {*} value The value to search for.
 * @returns {number} Returns `0` if `value` is found, else `-1`.
 */
function cacheIndexOf(cache, value) {
  var data = cache.data,
      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

  return result ? 0 : -1;
}

module.exports = cacheIndexOf;

},{"../lang/isObject":147}],119:[function(require,module,exports){
var isObject = require('../lang/isObject');

/**
 * Adds `value` to the cache.
 *
 * @private
 * @name push
 * @memberOf SetCache
 * @param {*} value The value to cache.
 */
function cachePush(value) {
  var data = this.data;
  if (typeof value == 'string' || isObject(value)) {
    data.set.add(value);
  } else {
    data.hash[value] = true;
  }
}

module.exports = cachePush;

},{"../lang/isObject":147}],120:[function(require,module,exports){
var getLength = require('./getLength'),
    isLength = require('./isLength'),
    toObject = require('./toObject');

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    var length = collection ? getLength(collection) : 0;
    if (!isLength(length)) {
      return eachFunc(collection, iteratee);
    }
    var index = fromRight ? length : -1,
        iterable = toObject(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;

},{"./getLength":127,"./isLength":135,"./toObject":141}],121:[function(require,module,exports){
var toObject = require('./toObject');

/**
 * Creates a base function for `_.forIn` or `_.forInRight`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var iterable = toObject(object),
        props = keysFunc(object),
        length = props.length,
        index = fromRight ? length : -1;

    while ((fromRight ? index-- : ++index < length)) {
      var key = props[index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

},{"./toObject":141}],122:[function(require,module,exports){
(function (global){
var SetCache = require('./SetCache'),
    getNative = require('./getNative');

/** Native method references. */
var Set = getNative(global, 'Set');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeCreate = getNative(Object, 'create');

/**
 * Creates a `Set` cache object to optimize linear searches of large arrays.
 *
 * @private
 * @param {Array} [values] The values to cache.
 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
 */
function createCache(values) {
  return (nativeCreate && Set) ? new SetCache(values) : null;
}

module.exports = createCache;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./SetCache":92,"./getNative":129}],123:[function(require,module,exports){
var baseCallback = require('./baseCallback'),
    baseFind = require('./baseFind'),
    baseFindIndex = require('./baseFindIndex'),
    isArray = require('../lang/isArray');

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new find function.
 */
function createFind(eachFunc, fromRight) {
  return function(collection, predicate, thisArg) {
    predicate = baseCallback(predicate, thisArg, 3);
    if (isArray(collection)) {
      var index = baseFindIndex(collection, predicate, fromRight);
      return index > -1 ? collection[index] : undefined;
    }
    return baseFind(collection, predicate, eachFunc);
  };
}

module.exports = createFind;

},{"../lang/isArray":144,"./baseCallback":97,"./baseFind":100,"./baseFindIndex":101}],124:[function(require,module,exports){
var arraySome = require('./arraySome');

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing arrays.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var index = -1,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
    return false;
  }
  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index],
        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

    if (result !== undefined) {
      if (result) {
        continue;
      }
      return false;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (isLoose) {
      if (!arraySome(other, function(othValue) {
            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
          })) {
        return false;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
      return false;
    }
  }
  return true;
}

module.exports = equalArrays;

},{"./arraySome":96}],125:[function(require,module,exports){
/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    stringTag = '[object String]';

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag) {
  switch (tag) {
    case boolTag:
    case dateTag:
      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
      return +object == +other;

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case numberTag:
      // Treat `NaN` vs. `NaN` as equal.
      return (object != +object)
        ? other != +other
        : object == +other;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings primitives and string
      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
      return object == (other + '');
  }
  return false;
}

module.exports = equalByTag;

},{}],126:[function(require,module,exports){
var keys = require('../object/keys');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isLoose) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  var skipCtor = isLoose;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key],
        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

    // Recursively compare objects (susceptible to call stack limits).
    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
      return false;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (!skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      return false;
    }
  }
  return true;
}

module.exports = equalObjects;

},{"../object/keys":150}],127:[function(require,module,exports){
var baseProperty = require('./baseProperty');

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

module.exports = getLength;

},{"./baseProperty":113}],128:[function(require,module,exports){
var isStrictComparable = require('./isStrictComparable'),
    pairs = require('../object/pairs');

/**
 * Gets the propery names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = pairs(object),
      length = result.length;

  while (length--) {
    result[length][2] = isStrictComparable(result[length][1]);
  }
  return result;
}

module.exports = getMatchData;

},{"../object/pairs":153,"./isStrictComparable":137}],129:[function(require,module,exports){
var isNative = require('../lang/isNative');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

module.exports = getNative;

},{"../lang/isNative":146}],130:[function(require,module,exports){
/**
 * Gets the index at which the first occurrence of `NaN` is found in `array`.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
 */
function indexOfNaN(array, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 0 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    var other = array[index];
    if (other !== other) {
      return index;
    }
  }
  return -1;
}

module.exports = indexOfNaN;

},{}],131:[function(require,module,exports){
var getLength = require('./getLength'),
    isLength = require('./isLength');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

module.exports = isArrayLike;

},{"./getLength":127,"./isLength":135}],132:[function(require,module,exports){
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
var isHostObject = (function() {
  try {
    Object({ 'toString': 0 } + '');
  } catch(e) {
    return function() { return false; };
  }
  return function(value) {
    // IE < 9 presents many host objects as `Object` objects that can coerce
    // to strings despite having improperly defined `toString` methods.
    return typeof value.toString != 'function' && typeof (value + '') == 'string';
  };
}());

module.exports = isHostObject;

},{}],133:[function(require,module,exports){
/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

},{}],134:[function(require,module,exports){
var isArray = require('../lang/isArray'),
    toObject = require('./toObject');

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  var type = typeof value;
  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
    return true;
  }
  if (isArray(value)) {
    return false;
  }
  var result = !reIsDeepProp.test(value);
  return result || (object != null && value in toObject(object));
}

module.exports = isKey;

},{"../lang/isArray":144,"./toObject":141}],135:[function(require,module,exports){
/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],136:[function(require,module,exports){
/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],137:[function(require,module,exports){
var isObject = require('../lang/isObject');

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

},{"../lang/isObject":147}],138:[function(require,module,exports){
var toObject = require('./toObject');

/**
 * A specialized version of `_.pick` which picks `object` properties specified
 * by `props`.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property names to pick.
 * @returns {Object} Returns the new object.
 */
function pickByArray(object, props) {
  object = toObject(object);

  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index];
    if (key in object) {
      result[key] = object[key];
    }
  }
  return result;
}

module.exports = pickByArray;

},{"./toObject":141}],139:[function(require,module,exports){
var baseForIn = require('./baseForIn');

/**
 * A specialized version of `_.pick` which picks `object` properties `predicate`
 * returns truthy for.
 *
 * @private
 * @param {Object} object The source object.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Object} Returns the new object.
 */
function pickByCallback(object, predicate) {
  var result = {};
  baseForIn(object, function(value, key, object) {
    if (predicate(value, key, object)) {
      result[key] = value;
    }
  });
  return result;
}

module.exports = pickByCallback;

},{"./baseForIn":104}],140:[function(require,module,exports){
var isArguments = require('../lang/isArguments'),
    isArray = require('../lang/isArray'),
    isIndex = require('./isIndex'),
    isLength = require('./isLength'),
    isString = require('../lang/isString'),
    keysIn = require('../object/keysIn');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object) || isString(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = shimKeys;

},{"../lang/isArguments":143,"../lang/isArray":144,"../lang/isString":148,"../object/keysIn":151,"./isIndex":133,"./isLength":135}],141:[function(require,module,exports){
var isObject = require('../lang/isObject'),
    isString = require('../lang/isString'),
    support = require('../support');

/**
 * Converts `value` to an object if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Object} Returns the object.
 */
function toObject(value) {
  if (support.unindexedChars && isString(value)) {
    var index = -1,
        length = value.length,
        result = Object(value);

    while (++index < length) {
      result[index] = value.charAt(index);
    }
    return result;
  }
  return isObject(value) ? value : Object(value);
}

module.exports = toObject;

},{"../lang/isObject":147,"../lang/isString":148,"../support":155}],142:[function(require,module,exports){
var baseToString = require('./baseToString'),
    isArray = require('../lang/isArray');

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `value` to property path array if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Array} Returns the property path array.
 */
function toPath(value) {
  if (isArray(value)) {
    return value;
  }
  var result = [];
  baseToString(value).replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
}

module.exports = toPath;

},{"../lang/isArray":144,"./baseToString":116}],143:[function(require,module,exports){
var isArrayLike = require('../internal/isArrayLike'),
    isObjectLike = require('../internal/isObjectLike');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Native method references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is classified as an `arguments` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  return isObjectLike(value) && isArrayLike(value) &&
    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
}

module.exports = isArguments;

},{"../internal/isArrayLike":131,"../internal/isObjectLike":136}],144:[function(require,module,exports){
var getNative = require('../internal/getNative'),
    isLength = require('../internal/isLength'),
    isObjectLike = require('../internal/isObjectLike');

/** `Object#toString` result references. */
var arrayTag = '[object Array]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

module.exports = isArray;

},{"../internal/getNative":129,"../internal/isLength":135,"../internal/isObjectLike":136}],145:[function(require,module,exports){
var isObject = require('./isObject');

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 which returns 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

module.exports = isFunction;

},{"./isObject":147}],146:[function(require,module,exports){
var isFunction = require('./isFunction'),
    isHostObject = require('../internal/isHostObject'),
    isObjectLike = require('../internal/isObjectLike');

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
}

module.exports = isNative;

},{"../internal/isHostObject":132,"../internal/isObjectLike":136,"./isFunction":145}],147:[function(require,module,exports){
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],148:[function(require,module,exports){
var isObjectLike = require('../internal/isObjectLike');

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
}

module.exports = isString;

},{"../internal/isObjectLike":136}],149:[function(require,module,exports){
var isLength = require('../internal/isLength'),
    isObjectLike = require('../internal/isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dateTag] = typedArrayTags[errorTag] =
typedArrayTags[funcTag] = typedArrayTags[mapTag] =
typedArrayTags[numberTag] = typedArrayTags[objectTag] =
typedArrayTags[regexpTag] = typedArrayTags[setTag] =
typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
function isTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
}

module.exports = isTypedArray;

},{"../internal/isLength":135,"../internal/isObjectLike":136}],150:[function(require,module,exports){
var getNative = require('../internal/getNative'),
    isArrayLike = require('../internal/isArrayLike'),
    isObject = require('../lang/isObject'),
    shimKeys = require('../internal/shimKeys'),
    support = require('../support');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object == 'function' ? support.enumPrototypes : isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

module.exports = keys;

},{"../internal/getNative":129,"../internal/isArrayLike":131,"../internal/shimKeys":140,"../lang/isObject":147,"../support":155}],151:[function(require,module,exports){
var arrayEach = require('../internal/arrayEach'),
    isArguments = require('../lang/isArguments'),
    isArray = require('../lang/isArray'),
    isFunction = require('../lang/isFunction'),
    isIndex = require('../internal/isIndex'),
    isLength = require('../internal/isLength'),
    isObject = require('../lang/isObject'),
    isString = require('../lang/isString'),
    support = require('../support');

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    stringTag = '[object String]';

/** Used to fix the JScript `[[DontEnum]]` bug. */
var shadowProps = [
  'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
  'toLocaleString', 'toString', 'valueOf'
];

/** Used for native method references. */
var errorProto = Error.prototype,
    objectProto = Object.prototype,
    stringProto = String.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to avoid iterating over non-enumerable properties in IE < 9. */
var nonEnumProps = {};
nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
nonEnumProps[boolTag] = nonEnumProps[stringTag] = { 'constructor': true, 'toString': true, 'valueOf': true };
nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = { 'constructor': true, 'toString': true };
nonEnumProps[objectTag] = { 'constructor': true };

arrayEach(shadowProps, function(key) {
  for (var tag in nonEnumProps) {
    if (hasOwnProperty.call(nonEnumProps, tag)) {
      var props = nonEnumProps[tag];
      props[key] = hasOwnProperty.call(props, key);
    }
  }
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;

  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object) || isString(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      proto = (isFunction(Ctor) && Ctor.prototype) || objectProto,
      isProto = proto === object,
      result = Array(length),
      skipIndexes = length > 0,
      skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
      skipProto = support.enumPrototypes && isFunction(object);

  while (++index < length) {
    result[index] = (index + '');
  }
  // lodash skips the `constructor` property when it infers it's iterating
  // over a `prototype` object because IE < 9 can't set the `[[Enumerable]]`
  // attribute of an existing property and the `constructor` property of a
  // prototype defaults to non-enumerable.
  for (var key in object) {
    if (!(skipProto && key == 'prototype') &&
        !(skipErrorProps && (key == 'message' || key == 'name')) &&
        !(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  if (support.nonEnumShadows && object !== objectProto) {
    var tag = object === stringProto ? stringTag : (object === errorProto ? errorTag : objToString.call(object)),
        nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];

    if (tag == objectTag) {
      proto = objectProto;
    }
    length = shadowProps.length;
    while (length--) {
      key = shadowProps[length];
      var nonEnum = nonEnums[key];
      if (!(isProto && nonEnum) &&
          (nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
        result.push(key);
      }
    }
  }
  return result;
}

module.exports = keysIn;

},{"../internal/arrayEach":93,"../internal/isIndex":133,"../internal/isLength":135,"../lang/isArguments":143,"../lang/isArray":144,"../lang/isFunction":145,"../lang/isObject":147,"../lang/isString":148,"../support":155}],152:[function(require,module,exports){
var arrayMap = require('../internal/arrayMap'),
    baseDifference = require('../internal/baseDifference'),
    baseFlatten = require('../internal/baseFlatten'),
    bindCallback = require('../internal/bindCallback'),
    keysIn = require('./keysIn'),
    pickByArray = require('../internal/pickByArray'),
    pickByCallback = require('../internal/pickByCallback'),
    restParam = require('../function/restParam');

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable properties of `object` that are not omitted.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {Function|...(string|string[])} [predicate] The function invoked per
 *  iteration or property names to omit, specified as individual property
 *  names or arrays of property names.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.omit(object, 'age');
 * // => { 'user': 'fred' }
 *
 * _.omit(object, _.isNumber);
 * // => { 'user': 'fred' }
 */
var omit = restParam(function(object, props) {
  if (object == null) {
    return {};
  }
  if (typeof props[0] != 'function') {
    var props = arrayMap(baseFlatten(props), String);
    return pickByArray(object, baseDifference(keysIn(object), props));
  }
  var predicate = bindCallback(props[0], props[1], 3);
  return pickByCallback(object, function(value, key, object) {
    return !predicate(value, key, object);
  });
});

module.exports = omit;

},{"../function/restParam":91,"../internal/arrayMap":94,"../internal/baseDifference":98,"../internal/baseFlatten":102,"../internal/bindCallback":117,"../internal/pickByArray":138,"../internal/pickByCallback":139,"./keysIn":151}],153:[function(require,module,exports){
var keys = require('./keys'),
    toObject = require('../internal/toObject');

/**
 * Creates a two dimensional array of the key-value pairs for `object`,
 * e.g. `[[key1, value1], [key2, value2]]`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the new array of key-value pairs.
 * @example
 *
 * _.pairs({ 'barney': 36, 'fred': 40 });
 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
 */
function pairs(object) {
  object = toObject(object);

  var index = -1,
      props = keys(object),
      length = props.length,
      result = Array(length);

  while (++index < length) {
    var key = props[index];
    result[index] = [key, object[key]];
  }
  return result;
}

module.exports = pairs;

},{"../internal/toObject":141,"./keys":150}],154:[function(require,module,exports){
var baseFlatten = require('../internal/baseFlatten'),
    bindCallback = require('../internal/bindCallback'),
    pickByArray = require('../internal/pickByArray'),
    pickByCallback = require('../internal/pickByCallback'),
    restParam = require('../function/restParam');

/**
 * Creates an object composed of the picked `object` properties. Property
 * names may be specified as individual arguments or as arrays of property
 * names. If `predicate` is provided it's invoked for each property of `object`
 * picking the properties `predicate` returns truthy for. The predicate is
 * bound to `thisArg` and invoked with three arguments: (value, key, object).
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {Function|...(string|string[])} [predicate] The function invoked per
 *  iteration or property names to pick, specified as individual property
 *  names or arrays of property names.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 *
 * _.pick(object, _.isString);
 * // => { 'user': 'fred' }
 */
var pick = restParam(function(object, props) {
  if (object == null) {
    return {};
  }
  return typeof props[0] == 'function'
    ? pickByCallback(object, bindCallback(props[0], props[1], 3))
    : pickByArray(object, baseFlatten(props));
});

module.exports = pick;

},{"../function/restParam":91,"../internal/baseFlatten":102,"../internal/bindCallback":117,"../internal/pickByArray":138,"../internal/pickByCallback":139}],155:[function(require,module,exports){
/** Used for native method references. */
var arrayProto = Array.prototype,
    errorProto = Error.prototype,
    objectProto = Object.prototype;

/** Native method references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/**
 * An object environment feature flags.
 *
 * @static
 * @memberOf _
 * @type Object
 */
var support = {};

(function(x) {
  var Ctor = function() { this.x = x; },
      object = { '0': x, 'length': x },
      props = [];

  Ctor.prototype = { 'valueOf': x, 'y': x };
  for (var key in new Ctor) { props.push(key); }

  /**
   * Detect if `name` or `message` properties of `Error.prototype` are
   * enumerable by default (IE < 9, Safari < 5.1).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') ||
    propertyIsEnumerable.call(errorProto, 'name');

  /**
   * Detect if `prototype` properties are enumerable by default.
   *
   * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
   * (if the prototype or a property on the prototype has been set)
   * incorrectly set the `[[Enumerable]]` value of a function's `prototype`
   * property to `true`.
   *
   * @memberOf _.support
   * @type boolean
   */
  support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');

  /**
   * Detect if properties shadowing those on `Object.prototype` are non-enumerable.
   *
   * In IE < 9 an object's own properties, shadowing non-enumerable ones,
   * are made non-enumerable as well (a.k.a the JScript `[[DontEnum]]` bug).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.nonEnumShadows = !/valueOf/.test(props);

  /**
   * Detect if own properties are iterated after inherited properties (IE < 9).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.ownLast = props[0] != 'x';

  /**
   * Detect if `Array#shift` and `Array#splice` augment array-like objects
   * correctly.
   *
   * Firefox < 10, compatibility modes of IE 8, and IE < 9 have buggy Array
   * `shift()` and `splice()` functions that fail to remove the last element,
   * `value[0]`, of array-like objects even though the "length" property is
   * set to `0`. The `shift()` method is buggy in compatibility modes of IE 8,
   * while `splice()` is buggy regardless of mode in IE < 9.
   *
   * @memberOf _.support
   * @type boolean
   */
  support.spliceObjects = (splice.call(object, 0, 1), !object[0]);

  /**
   * Detect lack of support for accessing string characters by index.
   *
   * IE < 8 can't access characters by index. IE 8 can only access characters
   * by index on string literals, not string objects.
   *
   * @memberOf _.support
   * @type boolean
   */
  support.unindexedChars = ('x'[0] + Object('x')[0]) != 'xx';
}(1, 0));

module.exports = support;

},{}],156:[function(require,module,exports){
/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],157:[function(require,module,exports){
var baseProperty = require('../internal/baseProperty'),
    basePropertyDeep = require('../internal/basePropertyDeep'),
    isKey = require('../internal/isKey');

/**
 * Creates a function that returns the property value at `path` on a
 * given object.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': { 'c': 2 } } },
 *   { 'a': { 'b': { 'c': 1 } } }
 * ];
 *
 * _.map(objects, _.property('a.b.c'));
 * // => [2, 1]
 *
 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
}

module.exports = property;

},{"../internal/baseProperty":113,"../internal/basePropertyDeep":114,"../internal/isKey":134}],158:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],159:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PanelGroup = require('./PanelGroup');

var _PanelGroup2 = _interopRequireDefault(_PanelGroup);

var Accordion = _react2['default'].createClass({
  displayName: 'Accordion',

  render: function render() {
    return _react2['default'].createElement(
      _PanelGroup2['default'],
      _extends({}, this.props, { accordion: true }),
      this.props.children
    );
  }
});

exports['default'] = Accordion;
module.exports = exports['default'];
},{"./PanelGroup":214,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"react":"react"}],160:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _AffixMixin = require('./AffixMixin');

var _AffixMixin2 = _interopRequireDefault(_AffixMixin);

var Affix = _react2['default'].createClass({
  displayName: 'Affix',

  mixins: [_AffixMixin2['default']],

  render: function render() {
    var holderStyle = _extends({
      top: this.state.affixPositionTop
    }, this.props.style);

    // eslint-disable-line react/prop-types
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, this.state.affixClass),
        style: holderStyle }),
      this.props.children
    );
  }
});

exports['default'] = Affix;
module.exports = exports['default'];
// we don't want to expose the `style` property
},{"./AffixMixin":161,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],161:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

var _domHelpersQueryOffset = require('dom-helpers/query/offset');

var _domHelpersQueryOffset2 = _interopRequireDefault(_domHelpersQueryOffset);

var _utilsEventListener = require('./utils/EventListener');

var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);

var AffixMixin = {
  propTypes: {
    offset: _react2['default'].PropTypes.number,
    offsetTop: _react2['default'].PropTypes.number,
    offsetBottom: _react2['default'].PropTypes.number
  },

  getInitialState: function getInitialState() {
    return {
      affixClass: 'affix-top'
    };
  },

  getPinnedOffset: function getPinnedOffset(DOMNode) {
    if (this.pinnedOffset) {
      return this.pinnedOffset;
    }

    DOMNode.className = DOMNode.className.replace(/affix-top|affix-bottom|affix/, '');
    DOMNode.className += DOMNode.className.length ? ' affix' : 'affix';

    this.pinnedOffset = _domHelpersQueryOffset2['default'](DOMNode).top - window.pageYOffset;

    return this.pinnedOffset;
  },

  checkPosition: function checkPosition() {
    var DOMNode = undefined,
        scrollHeight = undefined,
        scrollTop = undefined,
        position = undefined,
        offsetTop = undefined,
        offsetBottom = undefined,
        affix = undefined,
        affixType = undefined,
        affixPositionTop = undefined;

    // TODO: or not visible
    if (!this.isMounted()) {
      return;
    }

    DOMNode = _reactDom2['default'].findDOMNode(this);
    scrollHeight = _utilsDomUtils2['default'].getDocumentHeight();
    scrollTop = window.pageYOffset;
    position = _domHelpersQueryOffset2['default'](DOMNode);

    if (this.affixed === 'top') {
      position.top += scrollTop;
    }

    offsetTop = this.props.offsetTop != null ? this.props.offsetTop : this.props.offset;
    offsetBottom = this.props.offsetBottom != null ? this.props.offsetBottom : this.props.offset;

    if (offsetTop == null && offsetBottom == null) {
      return;
    }
    if (offsetTop == null) {
      offsetTop = 0;
    }
    if (offsetBottom == null) {
      offsetBottom = 0;
    }

    if (this.unpin != null && scrollTop + this.unpin <= position.top) {
      affix = false;
    } else if (offsetBottom != null && position.top + DOMNode.offsetHeight >= scrollHeight - offsetBottom) {
      affix = 'bottom';
    } else if (offsetTop != null && scrollTop <= offsetTop) {
      affix = 'top';
    } else {
      affix = false;
    }

    if (this.affixed === affix) {
      return;
    }

    if (this.unpin != null) {
      DOMNode.style.top = '';
    }

    affixType = 'affix' + (affix ? '-' + affix : '');

    this.affixed = affix;
    this.unpin = affix === 'bottom' ? this.getPinnedOffset(DOMNode) : null;

    if (affix === 'bottom') {
      DOMNode.className = DOMNode.className.replace(/affix-top|affix-bottom|affix/, 'affix-bottom');
      affixPositionTop = scrollHeight - offsetBottom - DOMNode.offsetHeight - _domHelpersQueryOffset2['default'](DOMNode).top;
    }

    this.setState({
      affixClass: affixType,
      affixPositionTop: affixPositionTop
    });
  },

  checkPositionWithEventLoop: function checkPositionWithEventLoop() {
    setTimeout(this.checkPosition, 0);
  },

  componentDidMount: function componentDidMount() {
    this._onWindowScrollListener = _utilsEventListener2['default'].listen(window, 'scroll', this.checkPosition);
    this._onDocumentClickListener = _utilsEventListener2['default'].listen(_utilsDomUtils2['default'].ownerDocument(this), 'click', this.checkPositionWithEventLoop);
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this._onWindowScrollListener) {
      this._onWindowScrollListener.remove();
    }

    if (this._onDocumentClickListener) {
      this._onDocumentClickListener.remove();
    }
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    if (prevState.affixClass === this.state.affixClass) {
      this.checkPositionWithEventLoop();
    }
  }
};

exports['default'] = AffixMixin;
module.exports = exports['default'];
},{"./utils/EventListener":232,"./utils/domUtils":240,"babel-runtime/helpers/interop-require-default":15,"dom-helpers/query/offset":54,"react":"react","react-dom":"react-dom"}],162:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var Alert = _react2['default'].createClass({
  displayName: 'Alert',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    onDismiss: _react2['default'].PropTypes.func,
    dismissAfter: _react2['default'].PropTypes.number,
    closeLabel: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'alert',
      bsStyle: 'info',
      closeLabel: 'Close Alert'
    };
  },

  renderDismissButton: function renderDismissButton() {
    return _react2['default'].createElement(
      'button',
      {
        type: 'button',
        className: 'close',
        onClick: this.props.onDismiss,
        'aria-hidden': 'true' },
      _react2['default'].createElement(
        'span',
        null,
        '×'
      )
    );
  },

  renderSrOnlyDismissButton: function renderSrOnlyDismissButton() {
    return _react2['default'].createElement(
      'button',
      {
        type: 'button',
        className: 'close sr-only',
        onClick: this.props.onDismiss },
      this.props.closeLabel
    );
  },

  render: function render() {
    var classes = this.getBsClassSet();
    var isDismissable = !!this.props.onDismiss;

    classes['alert-dismissable'] = isDismissable;

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { role: 'alert', className: _classnames2['default'](this.props.className, classes) }),
      isDismissable ? this.renderDismissButton() : null,
      this.props.children,
      isDismissable ? this.renderSrOnlyDismissButton() : null
    );
  },

  componentDidMount: function componentDidMount() {
    if (this.props.dismissAfter && this.props.onDismiss) {
      this.dismissTimer = setTimeout(this.props.onDismiss, this.props.dismissAfter);
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  }
});

exports['default'] = Alert;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],163:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Badge = _react2['default'].createClass({
  displayName: 'Badge',

  propTypes: {
    pullRight: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      pullRight: false
    };
  },

  hasContent: function hasContent() {
    return _utilsValidComponentChildren2['default'].hasValidComponent(this.props.children) || _react2['default'].Children.count(this.props.children) > 1 || typeof this.props.children === 'string' || typeof this.props.children === 'number';
  },

  render: function render() {
    var classes = {
      'pull-right': this.props.pullRight,
      'badge': this.hasContent()
    };
    return _react2['default'].createElement(
      'span',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = Badge;
module.exports = exports['default'];
},{"./utils/ValidComponentChildren":234,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],164:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleMaps = require('./styleMaps');

var _styleMaps2 = _interopRequireDefault(_styleMaps);

var _reactPropTypesLibKeyOf = require('react-prop-types/lib/keyOf');

var _reactPropTypesLibKeyOf2 = _interopRequireDefault(_reactPropTypesLibKeyOf);

var BootstrapMixin = {
  propTypes: {
    /**
     * bootstrap className
     * @private
     */
    bsClass: _reactPropTypesLibKeyOf2['default'](_styleMaps2['default'].CLASSES),
    /**
     * Style variants
     * @type {("default"|"primary"|"success"|"info"|"warning"|"danger"|"link")}
     */
    bsStyle: _react2['default'].PropTypes.oneOf(_styleMaps2['default'].STYLES),
    /**
     * Size variants
     * @type {("xsmall"|"small"|"medium"|"large"|"xs"|"sm"|"md"|"lg")}
     */
    bsSize: _reactPropTypesLibKeyOf2['default'](_styleMaps2['default'].SIZES)
  },

  getBsClassSet: function getBsClassSet() {
    var classes = {};

    var bsClass = this.props.bsClass && _styleMaps2['default'].CLASSES[this.props.bsClass];
    if (bsClass) {
      classes[bsClass] = true;

      var prefix = bsClass + '-';

      var bsSize = this.props.bsSize && _styleMaps2['default'].SIZES[this.props.bsSize];
      if (bsSize) {
        classes[prefix + bsSize] = true;
      }

      if (this.props.bsStyle) {
        if (_styleMaps2['default'].STYLES.indexOf(this.props.bsStyle) >= 0) {
          classes[prefix + this.props.bsStyle] = true;
        } else {
          classes[this.props.bsStyle] = true;
        }
      }
    }

    return classes;
  },

  prefixClass: function prefixClass(subClass) {
    return _styleMaps2['default'].CLASSES[this.props.bsClass] + '-' + subClass;
  }
};

exports['default'] = BootstrapMixin;
module.exports = exports['default'];
},{"./styleMaps":230,"babel-runtime/helpers/interop-require-default":15,"react":"react","react-prop-types/lib/keyOf":259}],165:[function(require,module,exports){
'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var Breadcrumb = _react2['default'].createClass({
  displayName: 'Breadcrumb',

  propTypes: {
    /**
     * bootstrap className
     * @private
     */
    bsClass: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'breadcrumb'
    };
  },

  render: function render() {
    var _props = this.props;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['className']);

    return _react2['default'].createElement(
      'ol',
      _extends({}, props, {
        role: 'navigation',
        'aria-label': 'breadcrumbs',
        className: _classnames2['default'](className, this.props.bsClass) }),
      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderBreadcrumbItem)
    );
  },

  renderBreadcrumbItem: function renderBreadcrumbItem(child, index) {
    return _react.cloneElement(child, { key: child.key ? child.key : index });
  }
});

exports['default'] = Breadcrumb;
module.exports = exports['default'];
},{"./utils/ValidComponentChildren":234,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"react":"react"}],166:[function(require,module,exports){
'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var BreadcrumbItem = _react2['default'].createClass({
  displayName: 'BreadcrumbItem',

  propTypes: {
    /**
     * If set to true, renders `span` instead of `a`
     */
    active: _react2['default'].PropTypes.bool,
    /**
     * HTML id for the wrapper `li` element
     */
    id: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
    /**
     * HTML id for the inner `a` element
     */
    linkId: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
    /**
     * `href` attribute for the inner `a` element
     */
    href: _react2['default'].PropTypes.string,
    /**
     * `title` attribute for the inner `a` element
     */
    title: _react2['default'].PropTypes.node,
    /**
     * `target` attribute for the inner `a` element
     */
    target: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      active: false
    };
  },

  render: function render() {
    var _props = this.props;
    var active = _props.active;
    var className = _props.className;
    var id = _props.id;
    var linkId = _props.linkId;
    var children = _props.children;
    var href = _props.href;
    var title = _props.title;
    var target = _props.target;

    var props = _objectWithoutProperties(_props, ['active', 'className', 'id', 'linkId', 'children', 'href', 'title', 'target']);

    _warning2['default'](!(href && active), '[react-bootstrap] `href` and `active` properties cannot be set at the same time');

    var linkProps = {
      href: href,
      title: title,
      target: target,
      id: linkId
    };

    return _react2['default'].createElement(
      'li',
      { id: id, className: _classnames2['default'](className, { active: active }) },
      active ? _react2['default'].createElement(
        'span',
        props,
        children
      ) : _react2['default'].createElement(
        _SafeAnchor2['default'],
        _extends({}, props, linkProps),
        children
      )
    );
  }
});

exports['default'] = BreadcrumbItem;
module.exports = exports['default'];
},{"./SafeAnchor":219,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"react":"react","warning":282}],167:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var types = ['button', 'reset', 'submit'];

var Button = _react2['default'].createClass({
  displayName: 'Button',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    active: _react2['default'].PropTypes.bool,
    disabled: _react2['default'].PropTypes.bool,
    block: _react2['default'].PropTypes.bool,
    navItem: _react2['default'].PropTypes.bool,
    navDropdown: _react2['default'].PropTypes.bool,
    /**
     * You can use a custom element for this component
     */
    componentClass: _reactPropTypesLibElementType2['default'],
    href: _react2['default'].PropTypes.string,
    target: _react2['default'].PropTypes.string,
    /**
     * Defines HTML button type Attribute
     * @type {("button"|"reset"|"submit")}
     * @defaultValue 'button'
     */
    type: _react2['default'].PropTypes.oneOf(types)
  },

  getDefaultProps: function getDefaultProps() {
    return {
      active: false,
      block: false,
      bsClass: 'button',
      bsStyle: 'default',
      disabled: false,
      navItem: false,
      navDropdown: false
    };
  },

  render: function render() {
    var classes = this.props.navDropdown ? {} : this.getBsClassSet();
    var renderFuncName = undefined;

    classes = _extends({
      active: this.props.active,
      'btn-block': this.props.block
    }, classes);

    if (this.props.navItem) {
      return this.renderNavItem(classes);
    }

    renderFuncName = this.props.href || this.props.target || this.props.navDropdown ? 'renderAnchor' : 'renderButton';

    return this[renderFuncName](classes);
  },

  renderAnchor: function renderAnchor(classes) {
    var Component = this.props.componentClass || 'a';
    var href = this.props.href || '#';
    classes.disabled = this.props.disabled;

    return _react2['default'].createElement(
      Component,
      _extends({}, this.props, {
        href: href,
        className: _classnames2['default'](this.props.className, classes),
        role: 'button' }),
      this.props.children
    );
  },

  renderButton: function renderButton(classes) {
    var Component = this.props.componentClass || 'button';

    return _react2['default'].createElement(
      Component,
      _extends({}, this.props, {
        type: this.props.type || 'button',
        className: _classnames2['default'](this.props.className, classes) }),
      this.props.children
    );
  },

  renderNavItem: function renderNavItem(classes) {
    var liClasses = {
      active: this.props.active
    };

    return _react2['default'].createElement(
      'li',
      { className: _classnames2['default'](liClasses) },
      this.renderAnchor(classes)
    );
  }
});

Button.types = types;

exports['default'] = Button;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react","react-prop-types/lib/elementType":257}],168:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _reactPropTypesLibAll = require('react-prop-types/lib/all');

var _reactPropTypesLibAll2 = _interopRequireDefault(_reactPropTypesLibAll);

var ButtonGroup = _react2['default'].createClass({
  displayName: 'ButtonGroup',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    vertical: _react2['default'].PropTypes.bool,
    justified: _react2['default'].PropTypes.bool,
    /**
     * Display block buttons, only useful when used with the "vertical" prop.
     * @type {bool}
     */
    block: _reactPropTypesLibAll2['default'](_react2['default'].PropTypes.bool, function (props) {
      if (props.block && !props.vertical) {
        return new Error('The block property requires the vertical property to be set to have any effect');
      }
    })
  },

  getDefaultProps: function getDefaultProps() {
    return {
      block: false,
      bsClass: 'button-group',
      justified: false,
      vertical: false
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();
    classes['btn-group'] = !this.props.vertical;
    classes['btn-group-vertical'] = this.props.vertical;
    classes['btn-group-justified'] = this.props.justified;
    classes['btn-block'] = this.props.block;

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = ButtonGroup;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react","react-prop-types/lib/all":254}],169:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _InputBase2 = require('./InputBase');

var _InputBase3 = _interopRequireDefault(_InputBase2);

var _utilsChildrenValueInputValidation = require('./utils/childrenValueInputValidation');

var _utilsChildrenValueInputValidation2 = _interopRequireDefault(_utilsChildrenValueInputValidation);

var ButtonInput = (function (_InputBase) {
  _inherits(ButtonInput, _InputBase);

  function ButtonInput() {
    _classCallCheck(this, ButtonInput);

    _InputBase.apply(this, arguments);
  }

  ButtonInput.prototype.renderFormGroup = function renderFormGroup(children) {
    var _props = this.props;
    var bsStyle = _props.bsStyle;
    var value = _props.value;

    var other = _objectWithoutProperties(_props, ['bsStyle', 'value']);

    return _react2['default'].createElement(
      _FormGroup2['default'],
      other,
      children
    );
  };

  ButtonInput.prototype.renderInput = function renderInput() {
    var _props2 = this.props;
    var children = _props2.children;
    var value = _props2.value;

    var other = _objectWithoutProperties(_props2, ['children', 'value']);

    var val = children ? children : value;
    return _react2['default'].createElement(_Button2['default'], _extends({}, other, { componentClass: 'input', ref: 'input', key: 'input', value: val }));
  };

  return ButtonInput;
})(_InputBase3['default']);

ButtonInput.types = _Button2['default'].types;

ButtonInput.defaultProps = {
  type: 'button'
};

ButtonInput.propTypes = {
  type: _react2['default'].PropTypes.oneOf(ButtonInput.types),
  bsStyle: function bsStyle() {
    // defer to Button propTypes of bsStyle
    return null;
  },
  children: _utilsChildrenValueInputValidation2['default'],
  value: _utilsChildrenValueInputValidation2['default']
};

exports['default'] = ButtonInput;
module.exports = exports['default'];
},{"./Button":167,"./FormGroup":183,"./InputBase":188,"./utils/childrenValueInputValidation":236,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"react":"react"}],170:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var ButtonToolbar = _react2['default'].createClass({
  displayName: 'ButtonToolbar',

  mixins: [_BootstrapMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'button-toolbar'
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        role: 'toolbar',
        className: _classnames2['default'](this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = ButtonToolbar;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],171:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _Glyphicon = require('./Glyphicon');

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var Carousel = _react2['default'].createClass({
  displayName: 'Carousel',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    slide: _react2['default'].PropTypes.bool,
    indicators: _react2['default'].PropTypes.bool,
    interval: _react2['default'].PropTypes.number,
    controls: _react2['default'].PropTypes.bool,
    pauseOnHover: _react2['default'].PropTypes.bool,
    wrap: _react2['default'].PropTypes.bool,
    onSelect: _react2['default'].PropTypes.func,
    onSlideEnd: _react2['default'].PropTypes.func,
    activeIndex: _react2['default'].PropTypes.number,
    defaultActiveIndex: _react2['default'].PropTypes.number,
    direction: _react2['default'].PropTypes.oneOf(['prev', 'next']),
    prevIcon: _react2['default'].PropTypes.node,
    nextIcon: _react2['default'].PropTypes.node
  },

  getDefaultProps: function getDefaultProps() {
    return {
      slide: true,
      interval: 5000,
      pauseOnHover: true,
      wrap: true,
      indicators: true,
      controls: true,
      prevIcon: _react2['default'].createElement(_Glyphicon2['default'], { glyph: 'chevron-left' }),
      nextIcon: _react2['default'].createElement(_Glyphicon2['default'], { glyph: 'chevron-right' })
    };
  },

  getInitialState: function getInitialState() {
    return {
      activeIndex: this.props.defaultActiveIndex == null ? 0 : this.props.defaultActiveIndex,
      previousActiveIndex: null,
      direction: null
    };
  },

  getDirection: function getDirection(prevIndex, index) {
    if (prevIndex === index) {
      return null;
    }

    return prevIndex > index ? 'prev' : 'next';
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var activeIndex = this.getActiveIndex();

    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
      clearTimeout(this.timeout);
      this.setState({
        previousActiveIndex: activeIndex,
        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
      });
    }
  },

  componentDidMount: function componentDidMount() {
    this.waitForNext();
  },

  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this.timeout);
  },

  next: function next(e) {
    if (e) {
      e.preventDefault();
    }

    var index = this.getActiveIndex() + 1;
    var count = _utilsValidComponentChildren2['default'].numberOf(this.props.children);

    if (index > count - 1) {
      if (!this.props.wrap) {
        return;
      }
      index = 0;
    }

    this.handleSelect(index, 'next');
  },

  prev: function prev(e) {
    if (e) {
      e.preventDefault();
    }

    var index = this.getActiveIndex() - 1;

    if (index < 0) {
      if (!this.props.wrap) {
        return;
      }
      index = _utilsValidComponentChildren2['default'].numberOf(this.props.children) - 1;
    }

    this.handleSelect(index, 'prev');
  },

  pause: function pause() {
    this.isPaused = true;
    clearTimeout(this.timeout);
  },

  play: function play() {
    this.isPaused = false;
    this.waitForNext();
  },

  waitForNext: function waitForNext() {
    if (!this.isPaused && this.props.slide && this.props.interval && this.props.activeIndex == null) {
      this.timeout = setTimeout(this.next, this.props.interval);
    }
  },

  handleMouseOver: function handleMouseOver() {
    if (this.props.pauseOnHover) {
      this.pause();
    }
  },

  handleMouseOut: function handleMouseOut() {
    if (this.isPaused) {
      this.play();
    }
  },

  render: function render() {
    var classes = {
      carousel: true,
      slide: this.props.slide
    };

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, classes),
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut }),
      this.props.indicators ? this.renderIndicators() : null,
      _react2['default'].createElement(
        'div',
        { className: 'carousel-inner', ref: 'inner' },
        _utilsValidComponentChildren2['default'].map(this.props.children, this.renderItem)
      ),
      this.props.controls ? this.renderControls() : null
    );
  },

  renderPrev: function renderPrev() {
    return _react2['default'].createElement(
      'a',
      { className: 'left carousel-control', href: '#prev', key: 0, onClick: this.prev },
      this.props.prevIcon
    );
  },

  renderNext: function renderNext() {
    return _react2['default'].createElement(
      'a',
      { className: 'right carousel-control', href: '#next', key: 1, onClick: this.next },
      this.props.nextIcon
    );
  },

  renderControls: function renderControls() {
    if (!this.props.wrap) {
      var activeIndex = this.getActiveIndex();
      var count = _utilsValidComponentChildren2['default'].numberOf(this.props.children);

      return [activeIndex !== 0 ? this.renderPrev() : null, activeIndex !== count - 1 ? this.renderNext() : null];
    }

    return [this.renderPrev(), this.renderNext()];
  },

  renderIndicator: function renderIndicator(child, index) {
    var className = index === this.getActiveIndex() ? 'active' : null;

    return _react2['default'].createElement('li', {
      key: index,
      className: className,
      onClick: this.handleSelect.bind(this, index, null) });
  },

  renderIndicators: function renderIndicators() {
    var _this = this;

    var indicators = [];
    _utilsValidComponentChildren2['default'].forEach(this.props.children, function (child, index) {
      indicators.push(_this.renderIndicator(child, index),

      // Force whitespace between indicator elements, bootstrap
      // requires this for correct spacing of elements.
      ' ');
    }, this);

    return _react2['default'].createElement(
      'ol',
      { className: 'carousel-indicators' },
      indicators
    );
  },

  getActiveIndex: function getActiveIndex() {
    return this.props.activeIndex != null ? this.props.activeIndex : this.state.activeIndex;
  },

  handleItemAnimateOutEnd: function handleItemAnimateOutEnd() {
    var _this2 = this;

    this.setState({
      previousActiveIndex: null,
      direction: null
    }, function () {
      _this2.waitForNext();

      if (_this2.props.onSlideEnd) {
        _this2.props.onSlideEnd();
      }
    });
  },

  renderItem: function renderItem(child, index) {
    var activeIndex = this.getActiveIndex();
    var isActive = index === activeIndex;
    var isPreviousActive = this.state.previousActiveIndex != null && this.state.previousActiveIndex === index && this.props.slide;

    return _react.cloneElement(child, {
      active: isActive,
      ref: child.ref,
      key: child.key ? child.key : index,
      index: index,
      animateOut: isPreviousActive,
      animateIn: isActive && this.state.previousActiveIndex != null && this.props.slide,
      direction: this.state.direction,
      onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null
    });
  },

  handleSelect: function handleSelect(index, direction) {
    clearTimeout(this.timeout);

    if (this.isMounted()) {
      var previousActiveIndex = this.getActiveIndex();
      direction = direction || this.getDirection(previousActiveIndex, index);

      if (this.props.onSelect) {
        this.props.onSelect(index, direction);
      }

      if (this.props.activeIndex == null && index !== previousActiveIndex) {
        if (this.state.previousActiveIndex != null) {
          // If currently animating don't activate the new index.
          // TODO: look into queuing this canceled call and
          // animating after the current animation has ended.
          return;
        }

        this.setState({
          activeIndex: index,
          previousActiveIndex: previousActiveIndex,
          direction: direction
        });
      }
    }
  }
});

exports['default'] = Carousel;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"./Glyphicon":184,"./utils/ValidComponentChildren":234,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],172:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utilsTransitionEvents = require('./utils/TransitionEvents');

var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

var CarouselItem = _react2['default'].createClass({
  displayName: 'CarouselItem',

  propTypes: {
    direction: _react2['default'].PropTypes.oneOf(['prev', 'next']),
    onAnimateOutEnd: _react2['default'].PropTypes.func,
    active: _react2['default'].PropTypes.bool,
    animateIn: _react2['default'].PropTypes.bool,
    animateOut: _react2['default'].PropTypes.bool,
    caption: _react2['default'].PropTypes.node,
    index: _react2['default'].PropTypes.number
  },

  getInitialState: function getInitialState() {
    return {
      direction: null
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      active: false,
      animateIn: false,
      animateOut: false
    };
  },

  handleAnimateOutEnd: function handleAnimateOutEnd() {
    if (this.props.onAnimateOutEnd && this.isMounted()) {
      this.props.onAnimateOutEnd(this.props.index);
    }
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      this.setState({
        direction: null
      });
    }
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (!this.props.active && prevProps.active) {
      _utilsTransitionEvents2['default'].addEndEventListener(_reactDom2['default'].findDOMNode(this), this.handleAnimateOutEnd);
    }

    if (this.props.active !== prevProps.active) {
      setTimeout(this.startAnimation, 20);
    }
  },

  startAnimation: function startAnimation() {
    if (!this.isMounted()) {
      return;
    }

    this.setState({
      direction: this.props.direction === 'prev' ? 'right' : 'left'
    });
  },

  render: function render() {
    var classes = {
      item: true,
      active: this.props.active && !this.props.animateIn || this.props.animateOut,
      next: this.props.active && this.props.animateIn && this.props.direction === 'next',
      prev: this.props.active && this.props.animateIn && this.props.direction === 'prev'
    };

    if (this.state.direction && (this.props.animateIn || this.props.animateOut)) {
      classes[this.state.direction] = true;
    }

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
      this.props.children,
      this.props.caption ? this.renderCaption() : null
    );
  },

  renderCaption: function renderCaption() {
    return _react2['default'].createElement(
      'div',
      { className: 'carousel-caption' },
      this.props.caption
    );
  }
});

exports['default'] = CarouselItem;
module.exports = exports['default'];
},{"./utils/TransitionEvents":233,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react","react-dom":"react-dom"}],173:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styleMaps = require('./styleMaps');

var _styleMaps2 = _interopRequireDefault(_styleMaps);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var Col = _react2['default'].createClass({
  displayName: 'Col',

  propTypes: {
    /**
     * The number of columns you wish to span
     *
     * for Extra small devices Phones (<768px)
     *
     * class-prefix `col-xs-`
     */
    xs: _react2['default'].PropTypes.number,
    /**
     * The number of columns you wish to span
     *
     * for Small devices Tablets (≥768px)
     *
     * class-prefix `col-sm-`
     */
    sm: _react2['default'].PropTypes.number,
    /**
     * The number of columns you wish to span
     *
     * for Medium devices Desktops (≥992px)
     *
     * class-prefix `col-md-`
     */
    md: _react2['default'].PropTypes.number,
    /**
     * The number of columns you wish to span
     *
     * for Large devices Desktops (≥1200px)
     *
     * class-prefix `col-lg-`
     */
    lg: _react2['default'].PropTypes.number,
    /**
     * Move columns to the right
     *
     * for Extra small devices Phones
     *
     * class-prefix `col-xs-offset-`
     */
    xsOffset: _react2['default'].PropTypes.number,
    /**
     * Move columns to the right
     *
     * for Small devices Tablets
     *
     * class-prefix `col-sm-offset-`
     */
    smOffset: _react2['default'].PropTypes.number,
    /**
     * Move columns to the right
     *
     * for Medium devices Desktops
     *
     * class-prefix `col-md-offset-`
     */
    mdOffset: _react2['default'].PropTypes.number,
    /**
     * Move columns to the right
     *
     * for Large devices Desktops
     *
     * class-prefix `col-lg-offset-`
     */
    lgOffset: _react2['default'].PropTypes.number,
    /**
     * Change the order of grid columns to the right
     *
     * for Extra small devices Phones
     *
     * class-prefix `col-xs-push-`
     */
    xsPush: _react2['default'].PropTypes.number,
    /**
     * Change the order of grid columns to the right
     *
     * for Small devices Tablets
     *
     * class-prefix `col-sm-push-`
     */
    smPush: _react2['default'].PropTypes.number,
    /**
     * Change the order of grid columns to the right
     *
     * for Medium devices Desktops
     *
     * class-prefix `col-md-push-`
     */
    mdPush: _react2['default'].PropTypes.number,
    /**
     * Change the order of grid columns to the right
     *
     * for Large devices Desktops
     *
     * class-prefix `col-lg-push-`
     */
    lgPush: _react2['default'].PropTypes.number,
    /**
     * Change the order of grid columns to the left
     *
     * for Extra small devices Phones
     *
     * class-prefix `col-xs-pull-`
     */
    xsPull: _react2['default'].PropTypes.number,
    /**
     * Change the order of grid columns to the left
     *
     * for Small devices Tablets
     *
     * class-prefix `col-sm-pull-`
     */
    smPull: _react2['default'].PropTypes.number,
    /**
     * Change the order of grid columns to the left
     *
     * for Medium devices Desktops
     *
     * class-prefix `col-md-pull-`
     */
    mdPull: _react2['default'].PropTypes.number,
    /**
     * Change the order of grid columns to the left
     *
     * for Large devices Desktops
     *
     * class-prefix `col-lg-pull-`
     */
    lgPull: _react2['default'].PropTypes.number,
    /**
     * You can use a custom element for this component
     */
    componentClass: _reactPropTypesLibElementType2['default']
  },

  getDefaultProps: function getDefaultProps() {
    return {
      componentClass: 'div'
    };
  },

  render: function render() {
    var _this = this;

    var ComponentClass = this.props.componentClass;
    var classes = {};

    _Object$keys(_styleMaps2['default'].SIZES).forEach(function (key) {
      var size = _styleMaps2['default'].SIZES[key];
      var prop = size;
      var classPart = size + '-';

      if (_this.props[prop]) {
        classes['col-' + classPart + _this.props[prop]] = true;
      }

      prop = size + 'Offset';
      classPart = size + '-offset-';
      if (_this.props[prop] >= 0) {
        classes['col-' + classPart + _this.props[prop]] = true;
      }

      prop = size + 'Push';
      classPart = size + '-push-';
      if (_this.props[prop] >= 0) {
        classes['col-' + classPart + _this.props[prop]] = true;
      }

      prop = size + 'Pull';
      classPart = size + '-pull-';
      if (_this.props[prop] >= 0) {
        classes['col-' + classPart + _this.props[prop]] = true;
      }
    }, this);

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = Col;
module.exports = exports['default'];
},{"./styleMaps":230,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react","react-prop-types/lib/elementType":257}],174:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _domHelpersStyle = require('dom-helpers/style');

var _domHelpersStyle2 = _interopRequireDefault(_domHelpersStyle);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOverlaysLibTransition = require('react-overlays/lib/Transition');

var _reactOverlaysLibTransition2 = _interopRequireDefault(_reactOverlaysLibTransition);

var _reactPropTypesLibDeprecated = require('react-prop-types/lib/deprecated');

var _reactPropTypesLibDeprecated2 = _interopRequireDefault(_reactPropTypesLibDeprecated);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var capitalize = function capitalize(str) {
  return str[0].toUpperCase() + str.substr(1);
};

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
var triggerBrowserReflow = function triggerBrowserReflow(node) {
  return node.offsetHeight;
};

var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDimensionValue(dimension, elem) {
  var value = elem['offset' + capitalize(dimension)];
  var margins = MARGINS[dimension];

  return value + parseInt(_domHelpersStyle2['default'](elem, margins[0]), 10) + parseInt(_domHelpersStyle2['default'](elem, margins[1]), 10);
}

var Collapse = (function (_React$Component) {
  _inherits(Collapse, _React$Component);

  function Collapse(props, context) {
    _classCallCheck(this, Collapse);

    _React$Component.call(this, props, context);

    this.onEnterListener = this.handleEnter.bind(this);
    this.onEnteringListener = this.handleEntering.bind(this);
    this.onEnteredListener = this.handleEntered.bind(this);
    this.onExitListener = this.handleExit.bind(this);
    this.onExitingListener = this.handleExiting.bind(this);
  }

  // Explicitly copied from Transition for doc generation.
  // TODO: Remove duplication once #977 is resolved.

  Collapse.prototype.render = function render() {
    var enter = _utilsCreateChainedFunction2['default'](this.onEnterListener, this.props.onEnter);
    var entering = _utilsCreateChainedFunction2['default'](this.onEnteringListener, this.props.onEntering);
    var entered = _utilsCreateChainedFunction2['default'](this.onEnteredListener, this.props.onEntered);
    var exit = _utilsCreateChainedFunction2['default'](this.onExitListener, this.props.onExit);
    var exiting = _utilsCreateChainedFunction2['default'](this.onExitingListener, this.props.onExiting);

    return _react2['default'].createElement(
      _reactOverlaysLibTransition2['default'],
      _extends({
        ref: 'transition'
      }, this.props, {
        'aria-expanded': this.props.role ? this.props['in'] : null,
        className: this._dimension() === 'width' ? 'width' : '',
        exitedClassName: 'collapse',
        exitingClassName: 'collapsing',
        enteredClassName: 'collapse in',
        enteringClassName: 'collapsing',
        onEnter: enter,
        onEntering: entering,
        onEntered: entered,
        onExit: exit,
        onExiting: exiting,
        onExited: this.props.onExited
      }),
      this.props.children
    );
  };

  /* -- Expanding -- */

  Collapse.prototype.handleEnter = function handleEnter(elem) {
    var dimension = this._dimension();
    elem.style[dimension] = '0';
  };

  Collapse.prototype.handleEntering = function handleEntering(elem) {
    var dimension = this._dimension();

    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
  };

  Collapse.prototype.handleEntered = function handleEntered(elem) {
    var dimension = this._dimension();
    elem.style[dimension] = null;
  };

  /* -- Collapsing -- */

  Collapse.prototype.handleExit = function handleExit(elem) {
    var dimension = this._dimension();

    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
  };

  Collapse.prototype.handleExiting = function handleExiting(elem) {
    var dimension = this._dimension();

    triggerBrowserReflow(elem);
    elem.style[dimension] = '0';
  };

  Collapse.prototype._dimension = function _dimension() {
    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
  };

  // for testing

  Collapse.prototype._getTransitionInstance = function _getTransitionInstance() {
    return this.refs.transition;
  };

  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
    return elem['scroll' + capitalize(dimension)] + 'px';
  };

  return Collapse;
})(_react2['default'].Component);

Collapse.propTypes = {
  /**
   * Show the component; triggers the expand or collapse animation
   */
  'in': _react2['default'].PropTypes.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is collapsed
   */
  unmountOnExit: _react2['default'].PropTypes.bool,

  /**
   * Run the expand animation when the component mounts, if it is initially
   * shown
   */
  transitionAppear: _react2['default'].PropTypes.bool,

  /**
   * Duration of the collapse animation in milliseconds, to ensure that
   * finishing callbacks are fired even if the original browser transition end
   * events are canceled
   */
  timeout: _react2['default'].PropTypes.number,

  /**
   * duration
   * @private
   */
  duration: _reactPropTypesLibDeprecated2['default'](_react2['default'].PropTypes.number, 'Use `timeout`.'),

  /**
   * Callback fired before the component expands
   */
  onEnter: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component starts to expand
   */
  onEntering: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component has expanded
   */
  onEntered: _react2['default'].PropTypes.func,
  /**
   * Callback fired before the component collapses
   */
  onExit: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component starts to collapse
   */
  onExiting: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component has collapsed
   */
  onExited: _react2['default'].PropTypes.func,

  /**
   * The dimension used when collapsing, or a function that returns the
   * dimension
   *
   * _Note: Bootstrap only partially supports 'width'!
   * You will need to supply your own CSS animation for the `.width` CSS class._
   */
  dimension: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['height', 'width']), _react2['default'].PropTypes.func]),

  /**
   * Function that returns the height or width of the animating DOM node
   *
   * Allows for providing some custom logic for how much the Collapse component
   * should animate in its specified dimension. Called with the current
   * dimension prop value and the DOM node.
   */
  getDimensionValue: _react2['default'].PropTypes.func,

  /**
   * ARIA role of collapsible element
   */
  role: _react2['default'].PropTypes.string
};

Collapse.defaultProps = {
  'in': false,
  timeout: 300,
  unmountOnExit: false,
  transitionAppear: false,

  dimension: 'height',
  getDimensionValue: getDimensionValue
};

exports['default'] = Collapse;
module.exports = exports['default'];
},{"./utils/createChainedFunction":237,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"dom-helpers/style":60,"react":"react","react-overlays/lib/Transition":245,"react-prop-types/lib/deprecated":256}],175:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _Collapse = require('./Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var CollapsibleNav = _react2['default'].createClass({
  displayName: 'CollapsibleNav',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    onSelect: _react2['default'].PropTypes.func,
    activeHref: _react2['default'].PropTypes.string,
    activeKey: _react2['default'].PropTypes.any,
    collapsible: _react2['default'].PropTypes.bool,
    expanded: _react2['default'].PropTypes.bool,
    eventKey: _react2['default'].PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      collapsible: false,
      expanded: false
    };
  },

  render: function render() {
    /*
     * this.props.collapsible is set in NavBar when an eventKey is supplied.
     */
    var classes = this.props.collapsible ? 'navbar-collapse' : null;
    var renderChildren = this.props.collapsible ? this.renderCollapsibleNavChildren : this.renderChildren;

    var nav = _react2['default'].createElement(
      'div',
      { eventKey: this.props.eventKey, className: _classnames2['default'](this.props.className, classes) },
      _utilsValidComponentChildren2['default'].map(this.props.children, renderChildren)
    );

    if (this.props.collapsible) {
      return _react2['default'].createElement(
        _Collapse2['default'],
        { 'in': this.props.expanded },
        nav
      );
    }
    return nav;
  },

  getChildActiveProp: function getChildActiveProp(child) {
    if (child.props.active) {
      return true;
    }
    if (this.props.activeKey != null) {
      if (child.props.eventKey === this.props.activeKey) {
        return true;
      }
    }
    if (this.props.activeHref != null) {
      if (child.props.href === this.props.activeHref) {
        return true;
      }
    }

    return child.props.active;
  },

  renderChildren: function renderChildren(child, index) {
    var key = child.key ? child.key : index;
    return _react.cloneElement(child, {
      activeKey: this.props.activeKey,
      activeHref: this.props.activeHref,
      ref: 'nocollapse_' + key,
      key: key,
      navItem: true
    });
  },

  renderCollapsibleNavChildren: function renderCollapsibleNavChildren(child, index) {
    var key = child.key ? child.key : index;
    return _react.cloneElement(child, {
      active: this.getChildActiveProp(child),
      activeKey: this.props.activeKey,
      activeHref: this.props.activeHref,
      onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),
      ref: 'collapsible_' + key,
      key: key,
      navItem: true
    });
  }
});

exports['default'] = CollapsibleNav;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"./Collapse":174,"./utils/ValidComponentChildren":234,"./utils/createChainedFunction":237,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],176:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _domHelpersActiveElement = require('dom-helpers/activeElement');

var _domHelpersActiveElement2 = _interopRequireDefault(_domHelpersActiveElement);

var _domHelpersQueryContains = require('dom-helpers/query/contains');

var _domHelpersQueryContains2 = _interopRequireDefault(_domHelpersQueryContains);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _lodashCompatCollectionFind = require('lodash-compat/collection/find');

var _lodashCompatCollectionFind2 = _interopRequireDefault(_lodashCompatCollectionFind);

var _lodashCompatObjectOmit = require('lodash-compat/object/omit');

var _lodashCompatObjectOmit2 = _interopRequireDefault(_lodashCompatObjectOmit);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactPropTypesLibAll = require('react-prop-types/lib/all');

var _reactPropTypesLibAll2 = _interopRequireDefault(_reactPropTypesLibAll);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var _reactPropTypesLibIsRequiredForA11y = require('react-prop-types/lib/isRequiredForA11y');

var _reactPropTypesLibIsRequiredForA11y2 = _interopRequireDefault(_reactPropTypesLibIsRequiredForA11y);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownToggle = require('./DropdownToggle');

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var TOGGLE_REF = 'toggle-btn';
var TOGGLE_ROLE = _DropdownToggle2['default'].defaultProps.bsRole;
var MENU_ROLE = _DropdownMenu2['default'].defaultProps.bsRole;

var Dropdown = (function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    _React$Component.call(this, props);

    this.Toggle = _DropdownToggle2['default'];

    this.toggleOpen = this.toggleOpen.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.extractChildren = this.extractChildren.bind(this);

    this.refineMenu = this.refineMenu.bind(this);
    this.refineToggle = this.refineToggle.bind(this);

    this.childExtractors = [{
      key: 'toggle',
      matches: function matches(child) {
        return child.props.bsRole === TOGGLE_ROLE;
      },
      refine: this.refineToggle
    }, {
      key: 'menu',
      exclusive: true,
      matches: function matches(child) {
        return child.props.bsRole === MENU_ROLE;
      },
      refine: this.refineMenu
    }];

    this.state = {};

    this.lastOpenEventType = null;
  }

  Dropdown.prototype.componentDidMount = function componentDidMount() {
    this.focusNextOnOpen();
  };

  Dropdown.prototype.componentWillUpdate = function componentWillUpdate(nextProps) {
    if (!nextProps.open && this.props.open) {
      this._focusInDropdown = _domHelpersQueryContains2['default'](_reactDom2['default'].findDOMNode(this.refs.menu), _domHelpersActiveElement2['default'](document));
    }
  };

  Dropdown.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.open && !prevProps.open) {
      this.focusNextOnOpen();
    }

    if (!this.props.open && prevProps.open) {
      // if focus hasn't already moved from the menu lets return it
      // to the toggle
      if (this._focusInDropdown) {
        this._focusInDropdown = false;
        this.focus();
      }
    }
  };

  Dropdown.prototype.render = function render() {
    var children = this.extractChildren();
    var Component = this.props.componentClass;

    var props = _lodashCompatObjectOmit2['default'](this.props, ['id', 'role']);

    var rootClasses = {
      open: this.props.open,
      disabled: this.props.disabled,
      dropdown: !this.props.dropup,
      dropup: this.props.dropup
    };

    return _react2['default'].createElement(
      Component,
      _extends({}, props, {
        tabIndex: '-1',
        className: _classnames2['default'](this.props.className, rootClasses)
      }),
      children
    );
  };

  Dropdown.prototype.toggleOpen = function toggleOpen() {
    var eventType = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    var open = !this.props.open;

    if (open) {
      this.lastOpenEventType = eventType;
    }

    if (this.props.onToggle) {
      this.props.onToggle(open);
    }
  };

  Dropdown.prototype.handleClick = function handleClick() {
    if (this.props.disabled) {
      return;
    }

    this.toggleOpen('click');
  };

  Dropdown.prototype.handleKeyDown = function handleKeyDown(event) {
    if (this.props.disabled) {
      return;
    }

    switch (event.keyCode) {
      case _keycode2['default'].codes.down:
        if (!this.props.open) {
          this.toggleOpen('keydown');
        } else if (this.refs.menu.focusNext) {
          this.refs.menu.focusNext();
        }
        event.preventDefault();
        break;
      case _keycode2['default'].codes.esc:
      case _keycode2['default'].codes.tab:
        this.handleClose(event);
        break;
      default:
    }
  };

  Dropdown.prototype.handleClose = function handleClose() {
    if (!this.props.open) {
      return;
    }

    this.toggleOpen();
  };

  Dropdown.prototype.focusNextOnOpen = function focusNextOnOpen() {
    var menu = this.refs.menu;

    if (!menu.focusNext) {
      return;
    }

    if (this.lastOpenEventType === 'keydown' || this.props.role === 'menuitem') {
      menu.focusNext();
    }
  };

  Dropdown.prototype.focus = function focus() {
    var toggle = _reactDom2['default'].findDOMNode(this.refs[TOGGLE_REF]);

    if (toggle && toggle.focus) {
      toggle.focus();
    }
  };

  Dropdown.prototype.extractChildren = function extractChildren() {
    var _this = this;

    var open = !!this.props.open;
    var seen = {};

    return _utilsValidComponentChildren2['default'].map(this.props.children, function (child) {
      var extractor = _lodashCompatCollectionFind2['default'](_this.childExtractors, function (x) {
        return x.matches(child);
      });

      if (extractor) {
        if (seen[extractor.key]) {
          return false;
        }

        seen[extractor.key] = extractor.exclusive;
        child = extractor.refine(child, open);
      }

      return child;
    });
  };

  Dropdown.prototype.refineMenu = function refineMenu(menu, open) {
    var menuProps = {
      ref: 'menu',
      open: open,
      labelledBy: this.props.id,
      pullRight: this.props.pullRight
    };

    menuProps.onClose = _utilsCreateChainedFunction2['default'](menu.props.onClose, this.props.onClose, this.handleClose);

    menuProps.onSelect = _utilsCreateChainedFunction2['default'](menu.props.onSelect, this.props.onSelect, this.handleClose);

    return _react.cloneElement(menu, menuProps, menu.props.children);
  };

  Dropdown.prototype.refineToggle = function refineToggle(toggle, open) {
    var toggleProps = {
      open: open,
      id: this.props.id,
      ref: TOGGLE_REF,
      role: this.props.role
    };

    toggleProps.onClick = _utilsCreateChainedFunction2['default'](toggle.props.onClick, this.handleClick);

    toggleProps.onKeyDown = _utilsCreateChainedFunction2['default'](toggle.props.onKeyDown, this.handleKeyDown);

    return _react.cloneElement(toggle, toggleProps, toggle.props.children);
  };

  return Dropdown;
})(_react2['default'].Component);

Dropdown.Toggle = _DropdownToggle2['default'];

Dropdown.TOGGLE_REF = TOGGLE_REF;
Dropdown.TOGGLE_ROLE = TOGGLE_ROLE;
Dropdown.MENU_ROLE = MENU_ROLE;

Dropdown.defaultProps = {
  componentClass: _ButtonGroup2['default'],
  alwaysFocusNextOnOpen: false
};

Dropdown.propTypes = {
  /**
   * The menu will open above the dropdown button, instead of below it.
   */
  dropup: _react2['default'].PropTypes.bool,

  /**
   * An html id attribute, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: _reactPropTypesLibIsRequiredForA11y2['default'](_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])),

  componentClass: _reactPropTypesLibElementType2['default'],

  /**
   * The children of a Dropdown may be a `<Dropdown.Toggle/>` or a `<Dropdown.Menu/>`.
   * @type {node}
   */
  children: _reactPropTypesLibAll2['default'](_utilsCustomPropTypes2['default'].requiredRoles(TOGGLE_ROLE, MENU_ROLE), _utilsCustomPropTypes2['default'].exclusiveRoles(MENU_ROLE)),

  /**
   * Whether or not component is disabled.
   */
  disabled: _react2['default'].PropTypes.bool,

  /**
   * Align the menu to the right side of the Dropdown toggle
   */
  pullRight: _react2['default'].PropTypes.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  open: _react2['default'].PropTypes.bool,

  /**
   * A callback fired when the Dropdown closes.
   */
  onClose: _react2['default'].PropTypes.func,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `open` value.
   *
   * ```js
   * function(Boolean isOpen) {}
   * ```
   * @controllable open
   */
  onToggle: _react2['default'].PropTypes.func,

  /**
   * A callback fired when a menu item is selected.
   *
   * ```js
   * function(Object event, Any eventKey)
   * ```
   */
  onSelect: _react2['default'].PropTypes.func,

  /**
   * If `'menuitem'`, causes the dropdown to behave like a menu item rather than
   * a menu button.
   */
  role: _react2['default'].PropTypes.string
};

Dropdown = _uncontrollable2['default'](Dropdown, { open: 'onToggle' });

Dropdown.Toggle = _DropdownToggle2['default'];
Dropdown.Menu = _DropdownMenu2['default'];

exports['default'] = Dropdown;
module.exports = exports['default'];
},{"./ButtonGroup":168,"./DropdownMenu":178,"./DropdownToggle":179,"./utils/CustomPropTypes":231,"./utils/ValidComponentChildren":234,"./utils/createChainedFunction":237,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"dom-helpers/activeElement":47,"dom-helpers/query/contains":52,"keycode":88,"lodash-compat/collection/find":90,"lodash-compat/object/omit":152,"react":"react","react-dom":"react-dom","react-prop-types/lib/all":254,"react-prop-types/lib/elementType":257,"react-prop-types/lib/isRequiredForA11y":258,"uncontrollable":280}],177:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _lodashCompatObjectOmit = require('lodash-compat/object/omit');

var _lodashCompatObjectOmit2 = _interopRequireDefault(_lodashCompatObjectOmit);

var DropdownButton = (function (_React$Component) {
  _inherits(DropdownButton, _React$Component);

  function DropdownButton(props) {
    _classCallCheck(this, DropdownButton);

    _React$Component.call(this, props);
  }

  DropdownButton.prototype.render = function render() {
    var _props = this.props;
    var title = _props.title;

    var props = _objectWithoutProperties(_props, ['title']);

    var toggleProps = _lodashCompatObjectOmit2['default'](props, _Dropdown2['default'].ControlledComponent.propTypes);

    return _react2['default'].createElement(
      _Dropdown2['default'],
      props,
      _react2['default'].createElement(
        _Dropdown2['default'].Toggle,
        toggleProps,
        title
      ),
      _react2['default'].createElement(
        _Dropdown2['default'].Menu,
        null,
        this.props.children
      )
    );
  };

  return DropdownButton;
})(_react2['default'].Component);

DropdownButton.propTypes = _extends({
  /**
   * When used with the `title` prop, the noCaret option will not render a caret icon, in the toggle element.
   */
  noCaret: _react2['default'].PropTypes.bool,

  title: _react2['default'].PropTypes.node.isRequired

}, _Dropdown2['default'].propTypes, _BootstrapMixin2['default'].propTypes);

DropdownButton.defaultProps = {
  pullRight: false,
  dropup: false,
  navItem: false,
  noCaret: false
};

exports['default'] = DropdownButton;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"./Dropdown":176,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"lodash-compat/object/omit":152,"react":"react"}],178:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactOverlaysLibRootCloseWrapper = require('react-overlays/lib/RootCloseWrapper');

var _reactOverlaysLibRootCloseWrapper2 = _interopRequireDefault(_reactOverlaysLibRootCloseWrapper);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var DropdownMenu = (function (_React$Component) {
  _inherits(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    _classCallCheck(this, DropdownMenu);

    _React$Component.call(this, props);

    this.focusNext = this.focusNext.bind(this);
    this.focusPrevious = this.focusPrevious.bind(this);
    this.getFocusableMenuItems = this.getFocusableMenuItems.bind(this);
    this.getItemsAndActiveIndex = this.getItemsAndActiveIndex.bind(this);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  DropdownMenu.prototype.handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case _keycode2['default'].codes.down:
        this.focusNext();
        event.preventDefault();
        break;
      case _keycode2['default'].codes.up:
        this.focusPrevious();
        event.preventDefault();
        break;
      case _keycode2['default'].codes.esc:
      case _keycode2['default'].codes.tab:
        this.props.onClose(event);
        break;
      default:
    }
  };

  DropdownMenu.prototype.focusNext = function focusNext() {
    var _getItemsAndActiveIndex = this.getItemsAndActiveIndex();

    var items = _getItemsAndActiveIndex.items;
    var activeItemIndex = _getItemsAndActiveIndex.activeItemIndex;

    if (items.length === 0) {
      return;
    }

    if (activeItemIndex === items.length - 1) {
      items[0].focus();
      return;
    }

    items[activeItemIndex + 1].focus();
  };

  DropdownMenu.prototype.focusPrevious = function focusPrevious() {
    var _getItemsAndActiveIndex2 = this.getItemsAndActiveIndex();

    var items = _getItemsAndActiveIndex2.items;
    var activeItemIndex = _getItemsAndActiveIndex2.activeItemIndex;

    if (activeItemIndex === 0) {
      items[items.length - 1].focus();
      return;
    }

    items[activeItemIndex - 1].focus();
  };

  DropdownMenu.prototype.getItemsAndActiveIndex = function getItemsAndActiveIndex() {
    var items = this.getFocusableMenuItems();
    var activeElement = document.activeElement;
    var activeItemIndex = items.indexOf(activeElement);

    return { items: items, activeItemIndex: activeItemIndex };
  };

  DropdownMenu.prototype.getFocusableMenuItems = function getFocusableMenuItems() {
    var menuNode = _reactDom2['default'].findDOMNode(this);

    if (menuNode === undefined) {
      return [];
    }

    return [].slice.call(menuNode.querySelectorAll('[tabIndex="-1"]'), 0);
  };

  DropdownMenu.prototype.render = function render() {
    var _this = this;

    var _props = this.props;
    var children = _props.children;
    var onSelect = _props.onSelect;
    var pullRight = _props.pullRight;
    var className = _props.className;
    var labelledBy = _props.labelledBy;
    var open = _props.open;
    var onClose = _props.onClose;

    var props = _objectWithoutProperties(_props, ['children', 'onSelect', 'pullRight', 'className', 'labelledBy', 'open', 'onClose']);

    var items = _utilsValidComponentChildren2['default'].map(children, function (child) {
      var childProps = child.props || {};

      return _react2['default'].cloneElement(child, {
        onKeyDown: _utilsCreateChainedFunction2['default'](childProps.onKeyDown, _this.handleKeyDown),
        onSelect: _utilsCreateChainedFunction2['default'](childProps.onSelect, onSelect)
      }, childProps.children);
    });

    var classes = {
      'dropdown-menu': true,
      'dropdown-menu-right': pullRight
    };

    var list = _react2['default'].createElement(
      'ul',
      _extends({
        className: _classnames2['default'](className, classes),
        role: 'menu',
        'aria-labelledby': labelledBy
      }, props),
      items
    );

    if (open) {
      list = _react2['default'].createElement(
        _reactOverlaysLibRootCloseWrapper2['default'],
        { noWrap: true, onRootClose: onClose },
        list
      );
    }

    return list;
  };

  return DropdownMenu;
})(_react2['default'].Component);

DropdownMenu.defaultProps = {
  bsRole: 'menu',
  pullRight: false
};

DropdownMenu.propTypes = {
  open: _react2['default'].PropTypes.bool,
  pullRight: _react2['default'].PropTypes.bool,
  onClose: _react2['default'].PropTypes.func,
  labelledBy: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  onSelect: _react2['default'].PropTypes.func
};

exports['default'] = DropdownMenu;
module.exports = exports['default'];
},{"./utils/ValidComponentChildren":234,"./utils/createChainedFunction":237,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"keycode":88,"react":"react","react-dom":"react-dom","react-overlays/lib/RootCloseWrapper":244}],179:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var CARET = _react2['default'].createElement(
  'span',
  null,
  ' ',
  _react2['default'].createElement('span', { className: 'caret' })
);

var DropdownToggle = (function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  function DropdownToggle() {
    _classCallCheck(this, DropdownToggle);

    _React$Component.apply(this, arguments);
  }

  DropdownToggle.prototype.render = function render() {
    var caret = this.props.noCaret ? null : CARET;

    var classes = {
      'dropdown-toggle': true
    };

    var Component = this.props.useAnchor ? _SafeAnchor2['default'] : _Button2['default'];

    return _react2['default'].createElement(
      Component,
      _extends({}, this.props, {
        className: _classnames2['default'](classes, this.props.className),
        type: 'button',
        'aria-haspopup': true,
        'aria-expanded': this.props.open }),
      this.props.children || this.props.title,
      caret
    );
  };

  return DropdownToggle;
})(_react2['default'].Component);

exports['default'] = DropdownToggle;

DropdownToggle.defaultProps = {
  open: false,
  useAnchor: false,
  bsRole: 'toggle'
};

DropdownToggle.propTypes = {
  bsRole: _react2['default'].PropTypes.string,
  noCaret: _react2['default'].PropTypes.bool,
  open: _react2['default'].PropTypes.bool,
  title: _react2['default'].PropTypes.string,
  useAnchor: _react2['default'].PropTypes.bool
};

DropdownToggle.isToggle = true;
DropdownToggle.titleProp = 'title';
DropdownToggle.onClickProp = 'onClick';
module.exports = exports['default'];
},{"./Button":167,"./SafeAnchor":219,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],180:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOverlaysLibTransition = require('react-overlays/lib/Transition');

var _reactOverlaysLibTransition2 = _interopRequireDefault(_reactOverlaysLibTransition);

var _reactPropTypesLibDeprecated = require('react-prop-types/lib/deprecated');

var _reactPropTypesLibDeprecated2 = _interopRequireDefault(_reactPropTypesLibDeprecated);

var Fade = (function (_React$Component) {
  _inherits(Fade, _React$Component);

  function Fade() {
    _classCallCheck(this, Fade);

    _React$Component.apply(this, arguments);
  }

  // Explicitly copied from Transition for doc generation.
  // TODO: Remove duplication once #977 is resolved.

  Fade.prototype.render = function render() {
    var timeout = this.props.timeout || this.props.duration;

    return _react2['default'].createElement(
      _reactOverlaysLibTransition2['default'],
      _extends({}, this.props, {
        timeout: timeout,
        className: 'fade',
        enteredClassName: 'in',
        enteringClassName: 'in'
      }),
      this.props.children
    );
  };

  return Fade;
})(_react2['default'].Component);

Fade.propTypes = {
  /**
   * Show the component; triggers the fade in or fade out animation
   */
  'in': _react2['default'].PropTypes.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit: _react2['default'].PropTypes.bool,

  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  transitionAppear: _react2['default'].PropTypes.bool,

  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout: _react2['default'].PropTypes.number,

  /**
   * duration
   * @private
   */
  duration: _reactPropTypesLibDeprecated2['default'](_react2['default'].PropTypes.number, 'Use `timeout`.'),

  /**
   * Callback fired before the component fades in
   */
  onEnter: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component starts to fade in
   */
  onEntering: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the has component faded in
   */
  onEntered: _react2['default'].PropTypes.func,
  /**
   * Callback fired before the component fades out
   */
  onExit: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component starts to fade out
   */
  onExiting: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component has faded out
   */
  onExited: _react2['default'].PropTypes.func
};

Fade.defaultProps = {
  'in': false,
  timeout: 300,
  unmountOnExit: false,
  transitionAppear: false
};

exports['default'] = Fade;
module.exports = exports['default'];
},{"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"react":"react","react-overlays/lib/Transition":245,"react-prop-types/lib/deprecated":256}],181:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputBase2 = require('../InputBase');

var _InputBase3 = _interopRequireDefault(_InputBase2);

var _utilsChildrenValueInputValidation = require('../utils/childrenValueInputValidation');

var _utilsChildrenValueInputValidation2 = _interopRequireDefault(_utilsChildrenValueInputValidation);

var Static = (function (_InputBase) {
  _inherits(Static, _InputBase);

  function Static() {
    _classCallCheck(this, Static);

    _InputBase.apply(this, arguments);
  }

  Static.prototype.getValue = function getValue() {
    var _props = this.props;
    var children = _props.children;
    var value = _props.value;

    return children ? children : value;
  };

  Static.prototype.renderInput = function renderInput() {
    return _react2['default'].createElement(
      'p',
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control-static'), ref: 'input', key: 'input' }),
      this.getValue()
    );
  };

  return Static;
})(_InputBase3['default']);

Static.propTypes = {
  value: _utilsChildrenValueInputValidation2['default'],
  children: _utilsChildrenValueInputValidation2['default']
};

exports['default'] = Static;
module.exports = exports['default'];
},{"../InputBase":188,"../utils/childrenValueInputValidation":236,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],182:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _Static2 = require('./Static');

var _Static3 = _interopRequireDefault(_Static2);

exports.Static = _Static3['default'];
},{"./Static":181,"babel-runtime/helpers/interop-require-default":15}],183:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var FormGroup = (function (_React$Component) {
  _inherits(FormGroup, _React$Component);

  function FormGroup() {
    _classCallCheck(this, FormGroup);

    _React$Component.apply(this, arguments);
  }

  FormGroup.prototype.render = function render() {
    var classes = {
      'form-group': !this.props.standalone,
      'form-group-lg': !this.props.standalone && this.props.bsSize === 'large',
      'form-group-sm': !this.props.standalone && this.props.bsSize === 'small',
      'has-feedback': this.props.hasFeedback,
      'has-success': this.props.bsStyle === 'success',
      'has-warning': this.props.bsStyle === 'warning',
      'has-error': this.props.bsStyle === 'error'
    };

    return _react2['default'].createElement(
      'div',
      { className: _classnames2['default'](classes, this.props.groupClassName) },
      this.props.children
    );
  };

  return FormGroup;
})(_react2['default'].Component);

FormGroup.defaultProps = {
  hasFeedback: false,
  standalone: false
};

FormGroup.propTypes = {
  standalone: _react2['default'].PropTypes.bool,
  hasFeedback: _react2['default'].PropTypes.bool,
  bsSize: function bsSize(props) {
    if (props.standalone && props.bsSize !== undefined) {
      return new Error('bsSize will not be used when `standalone` is set.');
    }

    return _react2['default'].PropTypes.oneOf(['small', 'medium', 'large']).apply(null, arguments);
  },
  bsStyle: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error']),
  groupClassName: _react2['default'].PropTypes.string
};

exports['default'] = FormGroup;
module.exports = exports['default'];
},{"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],184:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Glyphicon = _react2['default'].createClass({
  displayName: 'Glyphicon',

  propTypes: {
    /**
     * bootstrap className
     * @private
     */
    bsClass: _react2['default'].PropTypes.string,
    /**
     * An icon name. See e.g. http://getbootstrap.com/components/#glyphicons
     */
    glyph: _react2['default'].PropTypes.string.isRequired,
    /**
     * Adds 'form-control-feedback' class
     * @private
     */
    formControlFeedback: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'glyphicon',
      formControlFeedback: false
    };
  },

  render: function render() {
    var _classNames;

    var className = _classnames2['default'](this.props.className, (_classNames = {}, _classNames[this.props.bsClass] = true, _classNames['glyphicon-' + this.props.glyph] = true, _classNames['form-control-feedback'] = this.props.formControlFeedback, _classNames));

    return _react2['default'].createElement(
      'span',
      _extends({}, this.props, { className: className }),
      this.props.children
    );
  }
});

exports['default'] = Glyphicon;
module.exports = exports['default'];
},{"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],185:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var Grid = _react2['default'].createClass({
  displayName: 'Grid',

  propTypes: {
    /**
     * Turn any fixed-width grid layout into a full-width layout by this property.
     *
     * Adds `container-fluid` class.
     */
    fluid: _react2['default'].PropTypes.bool,
    /**
     * You can use a custom element for this component
     */
    componentClass: _reactPropTypesLibElementType2['default']
  },

  getDefaultProps: function getDefaultProps() {
    return {
      componentClass: 'div',
      fluid: false
    };
  },

  render: function render() {
    var ComponentClass = this.props.componentClass;
    var className = this.props.fluid ? 'container-fluid' : 'container';

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, className) }),
      this.props.children
    );
  }
});

exports['default'] = Grid;
module.exports = exports['default'];
},{"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react","react-prop-types/lib/elementType":257}],186:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Image = _react2['default'].createClass({
  displayName: 'Image',

  propTypes: {

    /**
     * Sets image as responsive image
     */
    responsive: _react2['default'].PropTypes.bool,

    /**
     * Sets image shape as rounded
     */
    rounded: _react2['default'].PropTypes.bool,

    /**
     * Sets image shape as circle
     */
    circle: _react2['default'].PropTypes.bool,

    /**
     * Sets image shape as thumbnail
     */
    thumbnail: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      responsive: false,
      rounded: false,
      circle: false,
      thumbnail: false
    };
  },

  render: function render() {
    var classes = {
      'img-responsive': this.props.responsive,
      'img-rounded': this.props.rounded,
      'img-circle': this.props.circle,
      'img-thumbnail': this.props.thumbnail
    };

    return _react2['default'].createElement('img', _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }));
  }
});

exports['default'] = Image;
module.exports = exports['default'];
},{"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],187:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputBase2 = require('./InputBase');

var _InputBase3 = _interopRequireDefault(_InputBase2);

var _FormControls = require('./FormControls');

var FormControls = _interopRequireWildcard(_FormControls);

var _utilsDeprecationWarning = require('./utils/deprecationWarning');

var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

var Input = (function (_InputBase) {
  _inherits(Input, _InputBase);

  function Input() {
    _classCallCheck(this, Input);

    _InputBase.apply(this, arguments);
  }

  Input.prototype.render = function render() {
    if (this.props.type === 'static') {
      _utilsDeprecationWarning2['default']('Input type=static', 'FormControls.Static');
      return _react2['default'].createElement(FormControls.Static, this.props);
    }

    return _InputBase.prototype.render.call(this);
  };

  return Input;
})(_InputBase3['default']);

Input.propTypes = {
  type: _react2['default'].PropTypes.string
};

exports['default'] = Input;
module.exports = exports['default'];
},{"./FormControls":182,"./InputBase":188,"./utils/deprecationWarning":239,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/interop-require-wildcard":16,"react":"react"}],188:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Glyphicon = require('./Glyphicon');

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var InputBase = (function (_React$Component) {
  _inherits(InputBase, _React$Component);

  function InputBase() {
    _classCallCheck(this, InputBase);

    _React$Component.apply(this, arguments);
  }

  InputBase.prototype.getInputDOMNode = function getInputDOMNode() {
    return this.refs.input;
  };

  InputBase.prototype.getValue = function getValue() {
    if (this.props.type === 'static') {
      return this.props.value;
    } else if (this.props.type) {
      if (this.props.type === 'select' && this.props.multiple) {
        return this.getSelectedOptions();
      }
      return this.getInputDOMNode().value;
    }
    throw new Error('Cannot use getValue without specifying input type.');
  };

  InputBase.prototype.getChecked = function getChecked() {
    return this.getInputDOMNode().checked;
  };

  InputBase.prototype.getSelectedOptions = function getSelectedOptions() {
    var values = [];

    Array.prototype.forEach.call(this.getInputDOMNode().getElementsByTagName('option'), function (option) {
      if (option.selected) {
        var value = option.getAttribute('value') || option.innerHtml;
        values.push(value);
      }
    });

    return values;
  };

  InputBase.prototype.isCheckboxOrRadio = function isCheckboxOrRadio() {
    return this.props.type === 'checkbox' || this.props.type === 'radio';
  };

  InputBase.prototype.isFile = function isFile() {
    return this.props.type === 'file';
  };

  InputBase.prototype.renderInputGroup = function renderInputGroup(children) {
    var addonBefore = this.props.addonBefore ? _react2['default'].createElement(
      'span',
      { className: 'input-group-addon', key: 'addonBefore' },
      this.props.addonBefore
    ) : null;

    var addonAfter = this.props.addonAfter ? _react2['default'].createElement(
      'span',
      { className: 'input-group-addon', key: 'addonAfter' },
      this.props.addonAfter
    ) : null;

    var buttonBefore = this.props.buttonBefore ? _react2['default'].createElement(
      'span',
      { className: 'input-group-btn' },
      this.props.buttonBefore
    ) : null;

    var buttonAfter = this.props.buttonAfter ? _react2['default'].createElement(
      'span',
      { className: 'input-group-btn' },
      this.props.buttonAfter
    ) : null;

    var inputGroupClassName = undefined;
    switch (this.props.bsSize) {
      case 'small':
        inputGroupClassName = 'input-group-sm';break;
      case 'large':
        inputGroupClassName = 'input-group-lg';break;
      default:
    }

    return addonBefore || addonAfter || buttonBefore || buttonAfter ? _react2['default'].createElement(
      'div',
      { className: _classnames2['default'](inputGroupClassName, 'input-group'), key: 'input-group' },
      addonBefore,
      buttonBefore,
      children,
      addonAfter,
      buttonAfter
    ) : children;
  };

  InputBase.prototype.renderIcon = function renderIcon() {
    if (this.props.hasFeedback) {
      if (this.props.feedbackIcon) {
        return _react2['default'].cloneElement(this.props.feedbackIcon, { formControlFeedback: true });
      }

      switch (this.props.bsStyle) {
        case 'success':
          return _react2['default'].createElement(_Glyphicon2['default'], { formControlFeedback: true, glyph: 'ok', key: 'icon' });
        case 'warning':
          return _react2['default'].createElement(_Glyphicon2['default'], { formControlFeedback: true, glyph: 'warning-sign', key: 'icon' });
        case 'error':
          return _react2['default'].createElement(_Glyphicon2['default'], { formControlFeedback: true, glyph: 'remove', key: 'icon' });
        default:
          return _react2['default'].createElement('span', { className: 'form-control-feedback', key: 'icon' });
      }
    } else {
      return null;
    }
  };

  InputBase.prototype.renderHelp = function renderHelp() {
    return this.props.help ? _react2['default'].createElement(
      'span',
      { className: 'help-block', key: 'help' },
      this.props.help
    ) : null;
  };

  InputBase.prototype.renderCheckboxAndRadioWrapper = function renderCheckboxAndRadioWrapper(children) {
    var classes = {
      'checkbox': this.props.type === 'checkbox',
      'radio': this.props.type === 'radio'
    };

    return _react2['default'].createElement(
      'div',
      { className: _classnames2['default'](classes), key: 'checkboxRadioWrapper' },
      children
    );
  };

  InputBase.prototype.renderWrapper = function renderWrapper(children) {
    return this.props.wrapperClassName ? _react2['default'].createElement(
      'div',
      { className: this.props.wrapperClassName, key: 'wrapper' },
      children
    ) : children;
  };

  InputBase.prototype.renderLabel = function renderLabel(children) {
    var classes = {
      'control-label': !this.isCheckboxOrRadio()
    };
    classes[this.props.labelClassName] = this.props.labelClassName;

    return this.props.label ? _react2['default'].createElement(
      'label',
      { htmlFor: this.props.id, className: _classnames2['default'](classes), key: 'label' },
      children,
      this.props.label
    ) : children;
  };

  InputBase.prototype.renderInput = function renderInput() {
    if (!this.props.type) {
      return this.props.children;
    }

    switch (this.props.type) {
      case 'select':
        return _react2['default'].createElement(
          'select',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control'), ref: 'input', key: 'input' }),
          this.props.children
        );
      case 'textarea':
        return _react2['default'].createElement('textarea', _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control'), ref: 'input', key: 'input' }));
      case 'static':
        return _react2['default'].createElement(
          'p',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control-static'), ref: 'input', key: 'input' }),
          this.props.value
        );
      default:
        var className = this.isCheckboxOrRadio() || this.isFile() ? '' : 'form-control';
        return _react2['default'].createElement('input', _extends({}, this.props, { className: _classnames2['default'](this.props.className, className), ref: 'input', key: 'input' }));
    }
  };

  InputBase.prototype.renderFormGroup = function renderFormGroup(children) {
    return _react2['default'].createElement(
      _FormGroup2['default'],
      this.props,
      children
    );
  };

  InputBase.prototype.renderChildren = function renderChildren() {
    return !this.isCheckboxOrRadio() ? [this.renderLabel(), this.renderWrapper([this.renderInputGroup(this.renderInput()), this.renderIcon(), this.renderHelp()])] : this.renderWrapper([this.renderCheckboxAndRadioWrapper(this.renderLabel(this.renderInput())), this.renderHelp()]);
  };

  InputBase.prototype.render = function render() {
    var children = this.renderChildren();
    return this.renderFormGroup(children);
  };

  return InputBase;
})(_react2['default'].Component);

InputBase.propTypes = {
  type: _react2['default'].PropTypes.string,
  label: _react2['default'].PropTypes.node,
  help: _react2['default'].PropTypes.node,
  addonBefore: _react2['default'].PropTypes.node,
  addonAfter: _react2['default'].PropTypes.node,
  buttonBefore: _react2['default'].PropTypes.node,
  buttonAfter: _react2['default'].PropTypes.node,
  bsSize: _react2['default'].PropTypes.oneOf(['small', 'medium', 'large']),
  bsStyle: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error']),
  hasFeedback: _react2['default'].PropTypes.bool,
  feedbackIcon: _react2['default'].PropTypes.node,
  id: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  groupClassName: _react2['default'].PropTypes.string,
  wrapperClassName: _react2['default'].PropTypes.string,
  labelClassName: _react2['default'].PropTypes.string,
  multiple: _react2['default'].PropTypes.bool,
  disabled: _react2['default'].PropTypes.bool,
  value: _react2['default'].PropTypes.any
};

InputBase.defaultProps = {
  disabled: false,
  hasFeedback: false,
  multiple: false
};

exports['default'] = InputBase;
module.exports = exports['default'];
},{"./FormGroup":183,"./Glyphicon":184,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],189:[function(require,module,exports){
// https://www.npmjs.org/package/react-interpolate-component
// TODO: Drop this in favor of es6 string interpolation

'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var REGEXP = /\%\((.+?)\)s/;

var Interpolate = _react2['default'].createClass({
  displayName: 'Interpolate',

  propTypes: {
    component: _react2['default'].PropTypes.node,
    format: _react2['default'].PropTypes.string,
    unsafe: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      component: 'span',
      unsafe: false
    };
  },

  render: function render() {
    var format = _utilsValidComponentChildren2['default'].hasValidComponent(this.props.children) || typeof this.props.children === 'string' ? this.props.children : this.props.format;
    var parent = this.props.component;
    var unsafe = this.props.unsafe === true;
    var props = _extends({}, this.props);

    delete props.children;
    delete props.format;
    delete props.component;
    delete props.unsafe;

    if (unsafe) {
      var content = format.split(REGEXP).reduce(function (memo, match, index) {
        var html = undefined;

        if (index % 2 === 0) {
          html = match;
        } else {
          html = props[match];
          delete props[match];
        }

        if (_react2['default'].isValidElement(html)) {
          throw new Error('cannot interpolate a React component into unsafe text');
        }

        memo += html;

        return memo;
      }, '');

      props.dangerouslySetInnerHTML = { __html: content };

      return _react2['default'].createElement(parent, props);
    }
    var kids = format.split(REGEXP).reduce(function (memo, match, index) {
      var child = undefined;

      if (index % 2 === 0) {
        if (match.length === 0) {
          return memo;
        }

        child = match;
      } else {
        child = props[match];
        delete props[match];
      }

      memo.push(child);

      return memo;
    }, []);

    return _react2['default'].createElement(parent, props, kids);
  }
});

exports['default'] = Interpolate;
module.exports = exports['default'];
},{"./utils/ValidComponentChildren":234,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"react":"react"}],190:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var Jumbotron = _react2['default'].createClass({
  displayName: 'Jumbotron',

  propTypes: {
    /**
     * You can use a custom element for this component
     */
    componentClass: _reactPropTypesLibElementType2['default']
  },

  getDefaultProps: function getDefaultProps() {
    return { componentClass: 'div' };
  },

  render: function render() {
    var ComponentClass = this.props.componentClass;

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'jumbotron') }),
      this.props.children
    );
  }
});

exports['default'] = Jumbotron;
module.exports = exports['default'];
},{"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react","react-prop-types/lib/elementType":257}],191:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var Label = _react2['default'].createClass({
  displayName: 'Label',

  mixins: [_BootstrapMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'label',
      bsStyle: 'default'
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();

    return _react2['default'].createElement(
      'span',
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = Label;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],192:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListGroupItem = require('./ListGroupItem');

var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var ListGroup = (function (_React$Component) {
  _inherits(ListGroup, _React$Component);

  function ListGroup() {
    _classCallCheck(this, ListGroup);

    _React$Component.apply(this, arguments);
  }

  ListGroup.prototype.render = function render() {
    var _this = this;

    var items = _utilsValidComponentChildren2['default'].map(this.props.children, function (item, index) {
      return _react.cloneElement(item, { key: item.key ? item.key : index });
    });

    if (this.areCustomChildren(items)) {
      var Component = this.props.componentClass;
      return _react2['default'].createElement(
        Component,
        _extends({}, this.props, {
          className: _classnames2['default'](this.props.className, 'list-group') }),
        items
      );
    }

    var shouldRenderDiv = false;

    if (!this.props.children) {
      shouldRenderDiv = true;
    } else {
      _utilsValidComponentChildren2['default'].forEach(this.props.children, function (child) {
        if (_this.isAnchorOrButton(child.props)) {
          shouldRenderDiv = true;
        }
      });
    }

    return shouldRenderDiv ? this.renderDiv(items) : this.renderUL(items);
  };

  ListGroup.prototype.isAnchorOrButton = function isAnchorOrButton(props) {
    return props.href || props.onClick;
  };

  ListGroup.prototype.areCustomChildren = function areCustomChildren(children) {
    var customChildren = false;

    _utilsValidComponentChildren2['default'].forEach(children, function (child) {
      if (child.type !== _ListGroupItem2['default']) {
        customChildren = true;
      }
    }, this);

    return customChildren;
  };

  ListGroup.prototype.renderUL = function renderUL(items) {
    var listItems = _utilsValidComponentChildren2['default'].map(items, function (item) {
      return _react.cloneElement(item, { listItem: true });
    });

    return _react2['default'].createElement(
      'ul',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, 'list-group') }),
      listItems
    );
  };

  ListGroup.prototype.renderDiv = function renderDiv(items) {
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, 'list-group') }),
      items
    );
  };

  return ListGroup;
})(_react2['default'].Component);

ListGroup.defaultProps = {
  componentClass: 'div'
};

ListGroup.propTypes = {
  className: _react2['default'].PropTypes.string,
  /**
   * The element for ListGroup if children are
   * user-defined custom components.
   * @type {("ul"|"div")}
   */
  componentClass: _react2['default'].PropTypes.oneOf(['ul', 'div']),
  id: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])
};

exports['default'] = ListGroup;
module.exports = exports['default'];
},{"./ListGroupItem":193,"./utils/ValidComponentChildren":234,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],193:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ListGroupItem = _react2['default'].createClass({
  displayName: 'ListGroupItem',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    bsStyle: _react2['default'].PropTypes.oneOf(['danger', 'info', 'success', 'warning']),
    className: _react2['default'].PropTypes.string,
    active: _react2['default'].PropTypes.any,
    disabled: _react2['default'].PropTypes.any,
    header: _react2['default'].PropTypes.node,
    listItem: _react2['default'].PropTypes.bool,
    onClick: _react2['default'].PropTypes.func,
    href: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'list-group-item',
      listItem: false
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();

    classes.active = this.props.active;
    classes.disabled = this.props.disabled;

    if (this.props.href) {
      return this.renderAnchor(classes);
    } else if (this.props.onClick) {
      return this.renderButton(classes);
    } else if (this.props.listItem) {
      return this.renderLi(classes);
    }
    return this.renderSpan(classes);
  },

  renderLi: function renderLi(classes) {
    return _react2['default'].createElement(
      'li',
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
      this.props.header ? this.renderStructuredContent() : this.props.children
    );
  },

  renderAnchor: function renderAnchor(classes) {
    return _react2['default'].createElement(
      'a',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, classes)
      }),
      this.props.header ? this.renderStructuredContent() : this.props.children
    );
  },

  renderButton: function renderButton(classes) {
    return _react2['default'].createElement(
      'button',
      _extends({
        type: 'button'
      }, this.props, {
        className: _classnames2['default'](this.props.className, classes) }),
      this.props.header ? this.renderStructuredContent() : this.props.children
    );
  },

  renderSpan: function renderSpan(classes) {
    return _react2['default'].createElement(
      'span',
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
      this.props.header ? this.renderStructuredContent() : this.props.children
    );
  },

  renderStructuredContent: function renderStructuredContent() {
    var header = undefined;
    if (_react2['default'].isValidElement(this.props.header)) {
      header = _react.cloneElement(this.props.header, {
        key: 'header',
        className: _classnames2['default'](this.props.header.props.className, 'list-group-item-heading')
      });
    } else {
      header = _react2['default'].createElement(
        'h4',
        { key: 'header', className: 'list-group-item-heading' },
        this.props.header
      );
    }

    var content = _react2['default'].createElement(
      'p',
      { key: 'content', className: 'list-group-item-text' },
      this.props.children
    );

    return [header, content];
  }
});

exports['default'] = ListGroupItem;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],194:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPropTypesLibAll = require('react-prop-types/lib/all');

var _reactPropTypesLibAll2 = _interopRequireDefault(_reactPropTypesLibAll);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var MenuItem = (function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    _React$Component.call(this, props);

    this.handleClick = this.handleClick.bind(this);
  }

  MenuItem.prototype.handleClick = function handleClick(event) {
    if (!this.props.href || this.props.disabled) {
      event.preventDefault();
    }

    if (this.props.disabled) {
      return;
    }

    if (this.props.onSelect) {
      this.props.onSelect(event, this.props.eventKey);
    }
  };

  MenuItem.prototype.render = function render() {
    if (this.props.divider) {
      return _react2['default'].createElement('li', { role: 'separator', className: 'divider' });
    }

    if (this.props.header) {
      return _react2['default'].createElement(
        'li',
        { role: 'heading', className: 'dropdown-header' },
        this.props.children
      );
    }

    var _props = this.props;
    var className = _props.className;
    var style = _props.style;
    var onClick = _props.onClick;

    var props = _objectWithoutProperties(_props, ['className', 'style', 'onClick']);

    var classes = {
      disabled: this.props.disabled,
      active: this.props.active
    };

    return _react2['default'].createElement(
      'li',
      { role: 'presentation',
        className: _classnames2['default'](className, classes),
        style: style
      },
      _react2['default'].createElement(_SafeAnchor2['default'], _extends({}, props, {
        role: 'menuitem',
        tabIndex: '-1',
        onClick: _utilsCreateChainedFunction2['default'](onClick, this.handleClick)
      }))
    );
  };

  return MenuItem;
})(_react2['default'].Component);

exports['default'] = MenuItem;

MenuItem.propTypes = {
  active: _react2['default'].PropTypes.bool,
  disabled: _react2['default'].PropTypes.bool,
  divider: _reactPropTypesLibAll2['default'](_react2['default'].PropTypes.bool, function (props) {
    if (props.divider && props.children) {
      return new Error('Children will not be rendered for dividers');
    }
  }),
  eventKey: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
  header: _react2['default'].PropTypes.bool,
  href: _react2['default'].PropTypes.string,
  target: _react2['default'].PropTypes.string,
  title: _react2['default'].PropTypes.string,
  onClick: _react2['default'].PropTypes.func,
  onKeyDown: _react2['default'].PropTypes.func,
  onSelect: _react2['default'].PropTypes.func,
  id: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])
};

MenuItem.defaultProps = {
  divider: false,
  disabled: false,
  header: false
};
module.exports = exports['default'];
},{"./SafeAnchor":219,"./utils/createChainedFunction":237,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"react":"react","react-prop-types/lib/all":254}],195:[function(require,module,exports){
/* eslint-disable react/prop-types */

'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _Object$isFrozen = require('babel-runtime/core-js/object/is-frozen')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

var _domHelpersUtilScrollbarSize = require('dom-helpers/util/scrollbarSize');

var _domHelpersUtilScrollbarSize2 = _interopRequireDefault(_domHelpersUtilScrollbarSize);

var _utilsEventListener = require('./utils/EventListener');

var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var _domHelpersUtilInDOM = require('dom-helpers/util/inDOM');

var _domHelpersUtilInDOM2 = _interopRequireDefault(_domHelpersUtilInDOM);

var _domHelpersQueryContains = require('dom-helpers/query/contains');

var _domHelpersQueryContains2 = _interopRequireDefault(_domHelpersQueryContains);

var _domHelpersActiveElement = require('dom-helpers/activeElement');

var _domHelpersActiveElement2 = _interopRequireDefault(_domHelpersActiveElement);

var _reactOverlaysLibPortal = require('react-overlays/lib/Portal');

var _reactOverlaysLibPortal2 = _interopRequireDefault(_reactOverlaysLibPortal);

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _ModalDialog = require('./ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _ModalBody = require('./ModalBody');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalTitle = require('./ModalTitle');

var _ModalTitle2 = _interopRequireDefault(_ModalTitle);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

/**
 * Gets the correct clientHeight of the modal container
 * when the body/window/document you need to use the docElement clientHeight
 * @param  {HTMLElement} container
 * @param  {ReactElement|HTMLElement} context
 * @return {Number}
 */
function containerClientHeight(container, context) {
  var doc = _utilsDomUtils2['default'].ownerDocument(context);

  return container === doc.body || container === doc.documentElement ? doc.documentElement.clientHeight : container.clientHeight;
}

function getContainer(context) {
  return context.props.container && _reactDom2['default'].findDOMNode(context.props.container) || _utilsDomUtils2['default'].ownerDocument(context).body;
}

var currentFocusListener = undefined;

/**
 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
 *
 * We only allow one Listener at a time to avoid stack overflows
 *
 * @param  {ReactElement|HTMLElement} context
 * @param  {Function} handler
 */
function onFocus(context, handler) {
  var doc = _utilsDomUtils2['default'].ownerDocument(context);
  var useFocusin = !doc.addEventListener;
  var remove = undefined;

  if (currentFocusListener) {
    currentFocusListener.remove();
  }

  if (useFocusin) {
    document.attachEvent('onfocusin', handler);
    remove = function () {
      return document.detachEvent('onfocusin', handler);
    };
  } else {
    document.addEventListener('focus', handler, true);
    remove = function () {
      return document.removeEventListener('focus', handler, true);
    };
  }

  currentFocusListener = { remove: remove };

  return currentFocusListener;
}

var Modal = _react2['default'].createClass({
  displayName: 'Modal',

  propTypes: _extends({}, _reactOverlaysLibPortal2['default'].propTypes, _ModalDialog2['default'].propTypes, {

    /**
     * Include a backdrop component. Specify 'static' for a backdrop that doesn't trigger an "onHide" when clicked.
     */
    backdrop: _react2['default'].PropTypes.oneOf(['static', true, false]),

    /**
     * Close the modal when escape key is pressed
     */
    keyboard: _react2['default'].PropTypes.bool,

    /**
     * Open and close the Modal with a slide and fade animation.
     */
    animation: _react2['default'].PropTypes.bool,

    /**
     * A Component type that provides the modal content Markup. This is a useful prop when you want to use your own
     * styles and markup to create a custom modal component.
     */
    dialogComponent: _reactPropTypesLibElementType2['default'],

    /**
     * When `true` The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes.
     * Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.
     */
    autoFocus: _react2['default'].PropTypes.bool,

    /**
     * When `true` The modal will prevent focus from leaving the Modal while open.
     * Consider leaving the default value here, as it is necessary to make the Modal work well with assistive technologies,
     * such as screen readers.
     */
    enforceFocus: _react2['default'].PropTypes.bool,

    /**
     * Hide this from automatic props documentation generation.
     * @private
     */
    bsStyle: _react2['default'].PropTypes.string,

    /**
     * When `true` The modal will show itself.
     */
    show: _react2['default'].PropTypes.bool
  }),

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'modal',
      dialogComponent: _ModalDialog2['default'],
      show: false,
      animation: true,
      backdrop: true,
      keyboard: true,
      autoFocus: true,
      enforceFocus: true
    };
  },

  getInitialState: function getInitialState() {
    return {
      exited: !this.props.show
    };
  },

  render: function render() {
    var _props = this.props;
    var children = _props.children;
    var animation = _props.animation;
    var backdrop = _props.backdrop;

    var props = _objectWithoutProperties(_props, ['children', 'animation', 'backdrop']);

    var onExit = props.onExit;
    var onExiting = props.onExiting;
    var onEnter = props.onEnter;
    var onEntering = props.onEntering;
    var onEntered = props.onEntered;

    var show = !!props.show;
    var Dialog = props.dialogComponent;

    var mountModal = show || animation && !this.state.exited;
    if (!mountModal) {
      return null;
    }

    var modal = _react2['default'].createElement(
      Dialog,
      _extends({}, props, {
        ref: this._setDialogRef,
        className: _classnames2['default'](this.props.className, { 'in': show && !animation }),
        onClick: backdrop === true ? this.handleBackdropClick : null }),
      this.renderContent()
    );

    if (animation) {
      modal = _react2['default'].createElement(
        _Fade2['default'],
        {
          transitionAppear: true,
          unmountOnExit: true,
          'in': show,
          timeout: Modal.TRANSITION_DURATION,
          onExit: onExit,
          onExiting: onExiting,
          onExited: this.handleHidden,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered },
        modal
      );
    }

    if (backdrop) {
      modal = this.renderBackdrop(modal);
    }

    return _react2['default'].createElement(
      _reactOverlaysLibPortal2['default'],
      { container: props.container },
      modal
    );
  },

  renderContent: function renderContent() {
    var _this = this;

    return _react2['default'].Children.map(this.props.children, function (child) {
      // TODO: use context in 0.14
      if (child && child.type && child.type.__isModalHeader) {
        return _react.cloneElement(child, {
          onHide: _utilsCreateChainedFunction2['default'](_this.props.onHide, child.props.onHide)
        });
      }
      return child;
    });
  },

  renderBackdrop: function renderBackdrop(modal) {
    var _props2 = this.props;
    var animation = _props2.animation;
    var bsClass = _props2.bsClass;

    var duration = Modal.BACKDROP_TRANSITION_DURATION;

    // Don't handle clicks for "static" backdrops
    var onClick = this.props.backdrop === true ? this.handleBackdropClick : null;

    var backdrop = _react2['default'].createElement('div', {
      ref: 'backdrop',
      className: _classnames2['default'](bsClass + '-backdrop', { 'in': this.props.show && !animation }),
      onClick: onClick });

    return _react2['default'].createElement(
      'div',
      {
        ref: 'modal' },
      animation ? _react2['default'].createElement(
        _Fade2['default'],
        { transitionAppear: true, 'in': this.props.show, timeout: duration },
        backdrop
      ) : backdrop,
      modal
    );
  },

  _setDialogRef: function _setDialogRef(ref) {
    // issue #1074
    // due to: https://github.com/facebook/react/blob/v0.13.3/src/core/ReactCompositeComponent.js#L842
    //
    // when backdrop is `false` react hasn't had a chance to reassign the refs to a usable object, b/c there are no other
    // "classic" refs on the component (or they haven't been processed yet)
    // TODO: Remove the need for this in next breaking release
    if (_Object$isFrozen(this.refs) && !_Object$keys(this.refs).length) {
      this.refs = {};
    }

    this.refs.dialog = ref;

    // maintains backwards compat with older component breakdown
    if (!this.props.backdrop) {
      this.refs.modal = ref;
    }
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({ exited: false });
    } else if (!nextProps.animation) {
      // Otherwise let handleHidden take care of marking exited.
      this.setState({ exited: true });
    }
  },

  componentWillUpdate: function componentWillUpdate(nextProps) {
    if (nextProps.show) {
      this.checkForFocus();
    }
  },

  componentDidMount: function componentDidMount() {
    if (this.props.show) {
      this.onShow();
    }
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    var animation = this.props.animation;

    if (prevProps.show && !this.props.show && !animation) {
      // otherwise handleHidden will call this.
      this.onHide();
    } else if (!prevProps.show && this.props.show) {
      this.onShow();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.props.show) {
      this.onHide();
    }
  },

  onShow: function onShow() {
    var _this2 = this;

    var doc = _utilsDomUtils2['default'].ownerDocument(this);
    var win = _utilsDomUtils2['default'].ownerWindow(this);

    this._onDocumentKeyupListener = _utilsEventListener2['default'].listen(doc, 'keyup', this.handleDocumentKeyUp);

    this._onWindowResizeListener = _utilsEventListener2['default'].listen(win, 'resize', this.handleWindowResize);

    if (this.props.enforceFocus) {
      this._onFocusinListener = onFocus(this, this.enforceFocus);
    }

    var container = getContainer(this);

    container.className += container.className.length ? ' modal-open' : 'modal-open';

    this._containerIsOverflowing = container.scrollHeight > containerClientHeight(container, this);

    this._originalPadding = container.style.paddingRight;

    if (this._containerIsOverflowing) {
      container.style.paddingRight = parseInt(this._originalPadding || 0, 10) + _domHelpersUtilScrollbarSize2['default']() + 'px';
    }

    this.setState(this._getStyles(), function () {
      return _this2.focusModalContent();
    });
  },

  onHide: function onHide() {
    this._onDocumentKeyupListener.remove();
    this._onWindowResizeListener.remove();

    if (this._onFocusinListener) {
      this._onFocusinListener.remove();
    }

    var container = getContainer(this);

    container.style.paddingRight = this._originalPadding;

    container.className = container.className.replace(/ ?modal-open/, '');

    this.restoreLastFocus();
  },

  handleHidden: function handleHidden() {
    this.setState({ exited: true });

    this.onHide();

    if (this.props.onExited) {
      var _props3;

      (_props3 = this.props).onExited.apply(_props3, arguments);
    }
  },

  handleBackdropClick: function handleBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onHide();
  },

  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
    if (this.props.keyboard && e.keyCode === 27) {
      this.props.onHide();
    }
  },

  handleWindowResize: function handleWindowResize() {
    this.setState(this._getStyles());
  },

  checkForFocus: function checkForFocus() {
    if (_domHelpersUtilInDOM2['default']) {
      this.lastFocus = _domHelpersActiveElement2['default'](document);
    }
  },

  focusModalContent: function focusModalContent() {
    var modalContent = _reactDom2['default'].findDOMNode(this.refs.dialog);
    var current = _domHelpersActiveElement2['default'](_utilsDomUtils2['default'].ownerDocument(this));
    var focusInModal = current && _domHelpersQueryContains2['default'](modalContent, current);

    if (modalContent && this.props.autoFocus && !focusInModal) {
      this.lastFocus = current;
      modalContent.focus();
    }
  },

  restoreLastFocus: function restoreLastFocus() {
    if (this.lastFocus && this.lastFocus.focus) {
      this.lastFocus.focus();
      this.lastFocus = null;
    }
  },

  enforceFocus: function enforceFocus() {
    if (!this.isMounted()) {
      return;
    }

    var active = _domHelpersActiveElement2['default'](_utilsDomUtils2['default'].ownerDocument(this));
    var modal = _reactDom2['default'].findDOMNode(this.refs.dialog);

    if (modal && modal !== active && !_domHelpersQueryContains2['default'](modal, active)) {
      modal.focus();
    }
  },

  _getStyles: function _getStyles() {
    if (!_domHelpersUtilInDOM2['default']) {
      return {};
    }

    var node = _reactDom2['default'].findDOMNode(this.refs.modal);
    var scrollHt = node.scrollHeight;
    var container = getContainer(this);
    var containerIsOverflowing = this._containerIsOverflowing;
    var modalIsOverflowing = scrollHt > containerClientHeight(container, this);

    return {
      dialogStyles: {
        paddingRight: containerIsOverflowing && !modalIsOverflowing ? _domHelpersUtilScrollbarSize2['default']() : void 0,
        paddingLeft: !containerIsOverflowing && modalIsOverflowing ? _domHelpersUtilScrollbarSize2['default']() : void 0
      }
    };
  }

});

Modal.Body = _ModalBody2['default'];
Modal.Header = _ModalHeader2['default'];
Modal.Title = _ModalTitle2['default'];
Modal.Footer = _ModalFooter2['default'];

Modal.Dialog = _ModalDialog2['default'];

Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;

exports['default'] = Modal;
module.exports = exports['default'];
},{"./Fade":180,"./ModalBody":196,"./ModalDialog":197,"./ModalFooter":198,"./ModalHeader":199,"./ModalTitle":200,"./utils/EventListener":232,"./utils/createChainedFunction":237,"./utils/domUtils":240,"babel-runtime/core-js/object/is-frozen":9,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"dom-helpers/activeElement":47,"dom-helpers/query/contains":52,"dom-helpers/util/inDOM":68,"dom-helpers/util/scrollbarSize":69,"react":"react","react-dom":"react-dom","react-overlays/lib/Portal":242,"react-prop-types/lib/elementType":257}],196:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ModalBody = (function (_React$Component) {
  _inherits(ModalBody, _React$Component);

  function ModalBody() {
    _classCallCheck(this, ModalBody);

    _React$Component.apply(this, arguments);
  }

  ModalBody.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, this.props.modalClassName) }),
      this.props.children
    );
  };

  return ModalBody;
})(_react2['default'].Component);

ModalBody.propTypes = {
  /**
   * A css class applied to the Component
   */
  modalClassName: _react2['default'].PropTypes.string
};

ModalBody.defaultProps = {
  modalClassName: 'modal-body'
};

exports['default'] = ModalBody;
module.exports = exports['default'];
},{"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],197:[function(require,module,exports){
/* eslint-disable react/prop-types */
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var ModalDialog = _react2['default'].createClass({
  displayName: 'ModalDialog',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    /**
     * A Callback fired when the header closeButton or non-static backdrop is clicked.
     * @type {function}
     * @required
     */
    onHide: _react2['default'].PropTypes.func.isRequired,

    /**
     * A css class to apply to the Modal dialog DOM node.
     */
    dialogClassName: _react2['default'].PropTypes.string

  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'modal',
      closeButton: true
    };
  },

  render: function render() {
    var modalStyle = _extends({
      display: 'block'
    }, this.props.style);
    var bsClass = this.props.bsClass;
    var dialogClasses = this.getBsClassSet();

    delete dialogClasses.modal;
    dialogClasses[bsClass + '-dialog'] = true;

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        title: null,
        tabIndex: '-1',
        role: 'dialog',
        style: modalStyle,
        className: _classnames2['default'](this.props.className, bsClass) }),
      _react2['default'].createElement(
        'div',
        { className: _classnames2['default'](this.props.dialogClassName, dialogClasses) },
        _react2['default'].createElement(
          'div',
          { className: bsClass + '-content', role: 'document' },
          this.props.children
        )
      )
    );
  }
});

exports['default'] = ModalDialog;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],198:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ModalFooter = (function (_React$Component) {
  _inherits(ModalFooter, _React$Component);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    _React$Component.apply(this, arguments);
  }

  ModalFooter.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, this.props.modalClassName) }),
      this.props.children
    );
  };

  return ModalFooter;
})(_react2['default'].Component);

ModalFooter.propTypes = {
  /**
   * A css class applied to the Component
   */
  modalClassName: _react2['default'].PropTypes.string
};

ModalFooter.defaultProps = {
  modalClassName: 'modal-footer'
};

exports['default'] = ModalFooter;
module.exports = exports['default'];
},{"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],199:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ModalHeader = (function (_React$Component) {
  _inherits(ModalHeader, _React$Component);

  function ModalHeader() {
    _classCallCheck(this, ModalHeader);

    _React$Component.apply(this, arguments);
  }

  // used in liue of parent contexts right now to auto wire the close button

  ModalHeader.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, this.props.modalClassName) }),
      this.props.closeButton && _react2['default'].createElement(
        'button',
        {
          type: 'button',
          className: 'close',
          onClick: this.props.onHide },
        _react2['default'].createElement(
          'span',
          { 'aria-hidden': 'true' },
          '×'
        )
      ),
      this.props.children
    );
  };

  return ModalHeader;
})(_react2['default'].Component);

ModalHeader.__isModalHeader = true;

ModalHeader.propTypes = {
  /**
   * The 'aria-label' attribute is used to define a string that labels the current element.
   * It is used for Assistive Technology when the label text is not visible on screen.
   */
  'aria-label': _react2['default'].PropTypes.string,

  /**
   * A css class applied to the Component
   */
  modalClassName: _react2['default'].PropTypes.string,

  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: _react2['default'].PropTypes.bool,

  /**
   * A Callback fired when the close button is clicked. If used directly inside a Modal component, the onHide will automatically
   * be propagated up to the parent Modal `onHide`.
   */
  onHide: _react2['default'].PropTypes.func
};

ModalHeader.defaultProps = {
  'aria-label': 'Close',
  modalClassName: 'modal-header',
  closeButton: false
};

exports['default'] = ModalHeader;
module.exports = exports['default'];
},{"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],200:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ModalTitle = (function (_React$Component) {
  _inherits(ModalTitle, _React$Component);

  function ModalTitle() {
    _classCallCheck(this, ModalTitle);

    _React$Component.apply(this, arguments);
  }

  ModalTitle.prototype.render = function render() {
    return _react2['default'].createElement(
      'h4',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, this.props.modalClassName) }),
      this.props.children
    );
  };

  return ModalTitle;
})(_react2['default'].Component);

ModalTitle.propTypes = {
  /**
   * A css class applied to the Component
   */
  modalClassName: _react2['default'].PropTypes.string
};

ModalTitle.defaultProps = {
  modalClassName: 'modal-title'
};

exports['default'] = ModalTitle;
module.exports = exports['default'];
},{"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],201:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPropTypesLibAll = require('react-prop-types/lib/all');

var _reactPropTypesLibAll2 = _interopRequireDefault(_reactPropTypesLibAll);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _Collapse = require('./Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var Nav = _react2['default'].createClass({
  displayName: 'Nav',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    activeHref: _react2['default'].PropTypes.string,
    activeKey: _react2['default'].PropTypes.any,
    bsStyle: _react2['default'].PropTypes.oneOf(['tabs', 'pills']),
    stacked: _react2['default'].PropTypes.bool,
    /**
     * Make `NavItem`s equal widths on small or larger displays and stacked
     * otherwise. Not supported for `Nav`s in `Navbar`s.
     */
    justified: _reactPropTypesLibAll2['default'](_react2['default'].PropTypes.bool, function (_ref) {
      var justified = _ref.justified;
      var navbar = _ref.navbar;
      return justified && navbar ? Error('justified navbar `Nav`s are not supported') : null;
    }),
    onSelect: _react2['default'].PropTypes.func,
    collapsible: _react2['default'].PropTypes.bool,
    /**
     * CSS classes for the wrapper `nav` element
     */
    className: _react2['default'].PropTypes.string,
    /**
     * HTML id for the wrapper `nav` element
     */
    id: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
    /**
     * CSS classes for the inner `ul` element
     */
    ulClassName: _react2['default'].PropTypes.string,
    /**
     * HTML id for the inner `ul` element
     */
    ulId: _react2['default'].PropTypes.string,
    expanded: _react2['default'].PropTypes.bool,
    navbar: _react2['default'].PropTypes.bool,
    eventKey: _react2['default'].PropTypes.any,
    pullRight: _react2['default'].PropTypes.bool,
    right: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'nav',
      collapsible: false,
      expanded: true,
      justified: false,
      navbar: false,
      pullRight: false,
      right: false,
      stacked: false
    };
  },

  render: function render() {
    var classes = this.props.collapsible ? 'navbar-collapse' : null;

    if (this.props.navbar && !this.props.collapsible) {
      return this.renderUl();
    }

    return _react2['default'].createElement(
      _Collapse2['default'],
      { 'in': this.props.expanded },
      _react2['default'].createElement(
        'nav',
        _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
        this.renderUl()
      )
    );
  },

  renderUl: function renderUl() {
    var classes = this.getBsClassSet();

    classes['nav-stacked'] = this.props.stacked;
    classes['nav-justified'] = this.props.justified;
    classes['navbar-nav'] = this.props.navbar;
    classes['pull-right'] = this.props.pullRight;
    classes['navbar-right'] = this.props.right;

    return _react2['default'].createElement(
      'ul',
      _extends({}, this.props, {
        role: this.props.bsStyle === 'tabs' ? 'tablist' : null,
        className: _classnames2['default'](this.props.ulClassName, classes),
        id: this.props.ulId,
        ref: 'ul'
      }),
      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderNavItem)
    );
  },

  getChildActiveProp: function getChildActiveProp(child) {
    if (child.props.active) {
      return true;
    }
    if (this.props.activeKey != null) {
      if (child.props.eventKey === this.props.activeKey) {
        return true;
      }
    }
    if (this.props.activeHref != null) {
      if (child.props.href === this.props.activeHref) {
        return true;
      }
    }

    return child.props.active;
  },

  renderNavItem: function renderNavItem(child, index) {
    return _react.cloneElement(child, {
      role: this.props.bsStyle === 'tabs' ? 'tab' : null,
      active: this.getChildActiveProp(child),
      activeKey: this.props.activeKey,
      activeHref: this.props.activeHref,
      onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),
      key: child.key ? child.key : index,
      navItem: true
    });
  }
});

exports['default'] = Nav;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"./Collapse":174,"./utils/ValidComponentChildren":234,"./utils/createChainedFunction":237,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react","react-prop-types/lib/all":254}],202:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var NavBrand = (function (_React$Component) {
  _inherits(NavBrand, _React$Component);

  function NavBrand() {
    _classCallCheck(this, NavBrand);

    _React$Component.apply(this, arguments);
  }

  NavBrand.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['className', 'children']);

    if (_react2['default'].isValidElement(children)) {
      return _react2['default'].cloneElement(children, {
        className: _classnames2['default'](children.props.className, className, 'navbar-brand')
      });
    }

    return _react2['default'].createElement(
      'span',
      _extends({}, props, { className: _classnames2['default'](className, 'navbar-brand') }),
      children
    );
  };

  return NavBrand;
})(_react2['default'].Component);

NavBrand.propTypes = {
  bsRole: _react2['default'].PropTypes.string
};

NavBrand.defaultProps = {
  bsRole: 'brand'
};

exports['default'] = NavBrand;
module.exports = exports['default'];
},{"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"react":"react"}],203:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var NavDropdown = (function (_React$Component) {
  _inherits(NavDropdown, _React$Component);

  function NavDropdown() {
    _classCallCheck(this, NavDropdown);

    _React$Component.apply(this, arguments);
  }

  NavDropdown.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;
    var title = _props.title;
    var noCaret = _props.noCaret;

    var props = _objectWithoutProperties(_props, ['children', 'title', 'noCaret']);

    return _react2['default'].createElement(
      _Dropdown2['default'],
      _extends({}, props, { componentClass: 'li' }),
      _react2['default'].createElement(
        _Dropdown2['default'].Toggle,
        {
          useAnchor: true,
          disabled: props.disabled,
          noCaret: noCaret
        },
        title
      ),
      _react2['default'].createElement(
        _Dropdown2['default'].Menu,
        null,
        children
      )
    );
  };

  return NavDropdown;
})(_react2['default'].Component);

NavDropdown.propTypes = _extends({
  noCaret: _react2['default'].PropTypes.bool,
  title: _react2['default'].PropTypes.node.isRequired
}, _Dropdown2['default'].propTypes);

exports['default'] = NavDropdown;
module.exports = exports['default'];
},{"./Dropdown":176,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"react":"react"}],204:[function(require,module,exports){
'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var NavItem = _react2['default'].createClass({
  displayName: 'NavItem',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    linkId: _react2['default'].PropTypes.string,
    onSelect: _react2['default'].PropTypes.func,
    active: _react2['default'].PropTypes.bool,
    disabled: _react2['default'].PropTypes.bool,
    href: _react2['default'].PropTypes.string,
    onClick: _react2['default'].PropTypes.func,
    role: _react2['default'].PropTypes.string,
    title: _react2['default'].PropTypes.node,
    eventKey: _react2['default'].PropTypes.any,
    target: _react2['default'].PropTypes.string,
    'aria-controls': _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      active: false,
      disabled: false
    };
  },

  render: function render() {
    var _props = this.props;
    var role = _props.role;
    var linkId = _props.linkId;
    var disabled = _props.disabled;
    var active = _props.active;
    var href = _props.href;
    var onClick = _props.onClick;
    var title = _props.title;
    var target = _props.target;
    var children = _props.children;
    var tabIndex = _props.tabIndex;
    var ariaControls = _props['aria-controls'];

    var props = _objectWithoutProperties(_props, ['role', 'linkId', 'disabled', 'active', 'href', 'onClick', 'title', 'target', 'children', 'tabIndex', 'aria-controls']);

    var classes = {
      active: active,
      disabled: disabled
    };
    var linkProps = {
      role: role,
      href: href,
      onClick: _utilsCreateChainedFunction2['default'](onClick, this.handleClick),
      title: title,
      target: target,
      tabIndex: tabIndex,
      id: linkId
    };

    if (!role && href === '#') {
      linkProps.role = 'button';
    } else if (role === 'tab') {
      linkProps['aria-selected'] = active;
    }

    return _react2['default'].createElement(
      'li',
      _extends({}, props, { role: 'presentation', className: _classnames2['default'](props.className, classes) }),
      _react2['default'].createElement(
        _SafeAnchor2['default'],
        _extends({}, linkProps, { 'aria-controls': ariaControls }),
        children
      )
    );
  },

  handleClick: function handleClick(e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
      }
    }
  }
});

exports['default'] = NavItem;
module.exports = exports['default'];
//eslint-disable-line
},{"./BootstrapMixin":164,"./SafeAnchor":219,"./utils/createChainedFunction":237,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"react":"react"}],205:[function(require,module,exports){
'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPropTypesLibDeprecated = require('react-prop-types/lib/deprecated');

var _reactPropTypesLibDeprecated2 = _interopRequireDefault(_reactPropTypesLibDeprecated);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _NavBrand = require('./NavBrand');

var _NavBrand2 = _interopRequireDefault(_NavBrand);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var Navbar = _react2['default'].createClass({
  displayName: 'Navbar',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    fixedTop: _react2['default'].PropTypes.bool,
    fixedBottom: _react2['default'].PropTypes.bool,
    staticTop: _react2['default'].PropTypes.bool,
    inverse: _react2['default'].PropTypes.bool,
    fluid: _react2['default'].PropTypes.bool,
    role: _react2['default'].PropTypes.string,
    /**
     * You can use a custom element for this component
     */
    componentClass: _reactPropTypesLibElementType2['default'],
    brand: _reactPropTypesLibDeprecated2['default'](_react2['default'].PropTypes.node, 'Use the `NavBrand` component.'),
    toggleButton: _react2['default'].PropTypes.node,
    toggleNavKey: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
    onToggle: _react2['default'].PropTypes.func,
    navExpanded: _react2['default'].PropTypes.bool,
    defaultNavExpanded: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'navbar',
      bsStyle: 'default',
      role: 'navigation',
      componentClass: 'nav',
      fixedTop: false,
      fixedBottom: false,
      staticTop: false,
      inverse: false,
      fluid: false,
      defaultNavExpanded: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      navExpanded: this.props.defaultNavExpanded
    };
  },

  shouldComponentUpdate: function shouldComponentUpdate() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleToggle: function handleToggle() {
    if (this.props.onToggle) {
      this._isChanging = true;
      this.props.onToggle();
      this._isChanging = false;
    }

    this.setState({
      navExpanded: !this.state.navExpanded
    });
  },

  isNavExpanded: function isNavExpanded() {
    return this.props.navExpanded != null ? this.props.navExpanded : this.state.navExpanded;
  },

  hasNavBrandChild: function hasNavBrandChild() {
    return _utilsValidComponentChildren2['default'].findValidComponents(this.props.children, function (child) {
      return child.props.bsRole === 'brand';
    }).length > 0;
  },

  render: function render() {
    var _props = this.props;
    var brand = _props.brand;
    var toggleButton = _props.toggleButton;
    var toggleNavKey = _props.toggleNavKey;
    var fixedTop = _props.fixedTop;
    var fixedBottom = _props.fixedBottom;
    var staticTop = _props.staticTop;
    var inverse = _props.inverse;
    var ComponentClass = _props.componentClass;
    var fluid = _props.fluid;
    var className = _props.className;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['brand', 'toggleButton', 'toggleNavKey', 'fixedTop', 'fixedBottom', 'staticTop', 'inverse', 'componentClass', 'fluid', 'className', 'children']);

    var classes = this.getBsClassSet();
    classes['navbar-fixed-top'] = fixedTop;
    classes['navbar-fixed-bottom'] = fixedBottom;
    classes['navbar-static-top'] = staticTop;
    classes['navbar-inverse'] = inverse;

    var showHeader = (brand || toggleButton || toggleNavKey != null) && !this.hasNavBrandChild();

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, props, { className: _classnames2['default'](className, classes) }),
      _react2['default'].createElement(
        _Grid2['default'],
        { fluid: fluid },
        showHeader ? this.renderBrandHeader() : null,
        _utilsValidComponentChildren2['default'].map(children, this.renderChild)
      )
    );
  },

  renderBrandHeader: function renderBrandHeader() {
    var brand = this.props.brand;

    if (brand) {
      brand = _react2['default'].createElement(
        _NavBrand2['default'],
        null,
        brand
      );
    }

    return this.renderHeader(brand);
  },

  renderHeader: function renderHeader(brand) {
    var hasToggle = this.props.toggleButton || this.props.toggleNavKey != null;

    return _react2['default'].createElement(
      'div',
      { className: 'navbar-header' },
      brand,
      hasToggle ? this.renderToggleButton() : null
    );
  },

  renderChild: function renderChild(child, index) {
    var key = child.key != null ? child.key : index;

    if (child.props.bsRole === 'brand') {
      return _react2['default'].cloneElement(this.renderHeader(child), { key: key });
    }

    var toggleNavKey = this.props.toggleNavKey;

    var collapsible = toggleNavKey != null && toggleNavKey === child.props.eventKey;

    return _react2['default'].cloneElement(child, {
      navbar: true,
      collapsible: collapsible,
      expanded: collapsible && this.isNavExpanded(),
      key: key
    });
  },

  renderToggleButton: function renderToggleButton() {
    var toggleButton = this.props.toggleButton;

    if (_react2['default'].isValidElement(toggleButton)) {
      return _react2['default'].cloneElement(toggleButton, {
        className: _classnames2['default'](toggleButton.props.className, 'navbar-toggle'),
        onClick: _utilsCreateChainedFunction2['default'](this.handleToggle, toggleButton.props.onClick)
      });
    }

    var children = undefined;
    if (toggleButton != null) {
      children = toggleButton;
    } else {
      children = [_react2['default'].createElement(
        'span',
        { className: 'sr-only', key: 0 },
        'Toggle navigation'
      ), _react2['default'].createElement('span', { className: 'icon-bar', key: 1 }), _react2['default'].createElement('span', { className: 'icon-bar', key: 2 }), _react2['default'].createElement('span', { className: 'icon-bar', key: 3 })];
    }

    return _react2['default'].createElement(
      'button',
      {
        type: 'button',
        onClick: this.handleToggle,
        className: 'navbar-toggle'
      },
      children
    );
  }

});

exports['default'] = Navbar;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"./Grid":185,"./NavBrand":202,"./utils/ValidComponentChildren":234,"./utils/createChainedFunction":237,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"react":"react","react-prop-types/lib/deprecated":256,"react-prop-types/lib/elementType":257}],206:[function(require,module,exports){
/* eslint react/prop-types: [2, {ignore: ["container", "containerPadding", "target", "placement", "children"] }] */
/* These properties are validated in 'Portal' and 'Position' components */

'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOverlaysLibOverlay = require('react-overlays/lib/Overlay');

var _reactOverlaysLibOverlay2 = _interopRequireDefault(_reactOverlaysLibOverlay);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Overlay = (function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    _React$Component.apply(this, arguments);
  }

  Overlay.prototype.render = function render() {
    var _props = this.props;
    var child = _props.children;
    var transition = _props.animation;

    var props = _objectWithoutProperties(_props, ['children', 'animation']);

    if (transition === true) {
      transition = _Fade2['default'];
    }

    if (!transition) {
      child = _react.cloneElement(child, {
        className: _classnames2['default']('in', child.props.className)
      });
    }

    return _react2['default'].createElement(
      _reactOverlaysLibOverlay2['default'],
      _extends({}, props, {
        transition: transition
      }),
      child
    );
  };

  return Overlay;
})(_react2['default'].Component);

Overlay.propTypes = _extends({}, _reactOverlaysLibOverlay2['default'].propTypes, {

  /**
   * Set the visibility of the Overlay
   */
  show: _react2['default'].PropTypes.bool,
  /**
   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
   */
  rootClose: _react2['default'].PropTypes.bool,
  /**
   * A callback invoked by the overlay when it wishes to be hidden. Required if
   * `rootClose` is specified.
   */
  onHide: _react2['default'].PropTypes.func,

  /**
   * Use animation
   */
  animation: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _reactPropTypesLibElementType2['default']]),

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _react2['default'].PropTypes.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _react2['default'].PropTypes.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _react2['default'].PropTypes.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _react2['default'].PropTypes.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _react2['default'].PropTypes.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _react2['default'].PropTypes.func
});

Overlay.defaultProps = {
  animation: _Fade2['default'],
  rootClose: false,
  show: false
};

exports['default'] = Overlay;
module.exports = exports['default'];
},{"./Fade":180,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"react":"react","react-overlays/lib/Overlay":241,"react-prop-types/lib/elementType":257}],207:[function(require,module,exports){
/* eslint-disable react/prop-types */

'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _domHelpersQueryContains = require('dom-helpers/query/contains');

var _domHelpersQueryContains2 = _interopRequireDefault(_domHelpersQueryContains);

var _lodashCompatObjectPick = require('lodash-compat/object/pick');

var _lodashCompatObjectPick2 = _interopRequireDefault(_lodashCompatObjectPick);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

/**
 * Check if value one is inside or equal to the of value
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */
function isOneOf(one, of) {
  if (Array.isArray(of)) {
    return of.indexOf(one) >= 0;
  }
  return one === of;
}

var OverlayTrigger = _react2['default'].createClass({
  displayName: 'OverlayTrigger',

  propTypes: _extends({}, _Overlay2['default'].propTypes, {

    /**
    * Specify which action or actions trigger Overlay visibility
    */
    trigger: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['click', 'hover', 'focus']), _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.oneOf(['click', 'hover', 'focus']))]),

    /**
     * A millisecond delay amount to show and hide the Overlay once triggered
     */
    delay: _react2['default'].PropTypes.number,
    /**
     * A millisecond delay amount before showing the Overlay once triggered.
     */
    delayShow: _react2['default'].PropTypes.number,
    /**
     * A millisecond delay amount before hiding the Overlay once triggered.
     */
    delayHide: _react2['default'].PropTypes.number,

    /**
     * The initial visibility state of the Overlay, for more nuanced visibility controll consider
     * using the Overlay component directly.
     */
    defaultOverlayShown: _react2['default'].PropTypes.bool,

    /**
     * An element or text to overlay next to the target.
     */
    overlay: _react2['default'].PropTypes.node.isRequired,

    /**
     * @private
     */
    onBlur: _react2['default'].PropTypes.func,
    /**
     * @private
     */
    onClick: _react2['default'].PropTypes.func,
    /**
     * @private
     */
    onFocus: _react2['default'].PropTypes.func,
    /**
     * @private
     */
    onMouseEnter: _react2['default'].PropTypes.func,
    /**
     * @private
     */
    onMouseLeave: _react2['default'].PropTypes.func,

    // override specific overlay props
    /**
     * @private
     */
    target: function target() {},
    /**
    * @private
    */
    onHide: function onHide() {},
    /**
     * @private
     */
    show: function show() {}
  }),

  getDefaultProps: function getDefaultProps() {
    return {
      defaultOverlayShown: false,
      trigger: ['hover', 'focus']
    };
  },

  getInitialState: function getInitialState() {
    return {
      isOverlayShown: this.props.defaultOverlayShown
    };
  },

  show: function show() {
    this.setState({
      isOverlayShown: true
    });
  },

  hide: function hide() {
    this.setState({
      isOverlayShown: false
    });
  },

  toggle: function toggle() {
    if (this.state.isOverlayShown) {
      this.hide();
    } else {
      this.show();
    }
  },

  componentWillMount: function componentWillMount() {
    this.handleMouseOver = this.handleMouseOverOut.bind(null, this.handleDelayedShow);
    this.handleMouseOut = this.handleMouseOverOut.bind(null, this.handleDelayedHide);
  },

  componentDidMount: function componentDidMount() {
    this._mountNode = document.createElement('div');
    this.renderOverlay();
  },

  renderOverlay: function renderOverlay() {
    _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, this._overlay, this._mountNode);
  },

  componentWillUnmount: function componentWillUnmount() {
    _reactDom2['default'].unmountComponentAtNode(this._mountNode);
    this._mountNode = null;
    clearTimeout(this._hoverShowDelay);
    clearTimeout(this._hoverHideDelay);
  },

  componentDidUpdate: function componentDidUpdate() {
    if (this._mountNode) {
      this.renderOverlay();
    }
  },

  getOverlayTarget: function getOverlayTarget() {
    return _reactDom2['default'].findDOMNode(this);
  },

  getOverlay: function getOverlay() {
    var overlayProps = _extends({}, _lodashCompatObjectPick2['default'](this.props, _Object$keys(_Overlay2['default'].propTypes)), {
      show: this.state.isOverlayShown,
      onHide: this.hide,
      target: this.getOverlayTarget,
      onExit: this.props.onExit,
      onExiting: this.props.onExiting,
      onExited: this.props.onExited,
      onEnter: this.props.onEnter,
      onEntering: this.props.onEntering,
      onEntered: this.props.onEntered
    });

    var overlay = _react.cloneElement(this.props.overlay, {
      placement: overlayProps.placement,
      container: overlayProps.container
    });

    return _react2['default'].createElement(
      _Overlay2['default'],
      overlayProps,
      overlay
    );
  },

  render: function render() {
    var trigger = _react2['default'].Children.only(this.props.children);
    var triggerProps = trigger.props;

    var props = {
      'aria-describedby': this.props.overlay.props.id
    };

    // create in render otherwise owner is lost...
    this._overlay = this.getOverlay();

    props.onClick = _utilsCreateChainedFunction2['default'](triggerProps.onClick, this.props.onClick);

    if (isOneOf('click', this.props.trigger)) {
      props.onClick = _utilsCreateChainedFunction2['default'](this.toggle, props.onClick);
    }

    if (isOneOf('hover', this.props.trigger)) {
      _warning2['default'](!(this.props.trigger === 'hover'), '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibilty of the overlay to just mouse users. ' + 'Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.');

      props.onMouseOver = _utilsCreateChainedFunction2['default'](this.handleMouseOver, this.props.onMouseOver, triggerProps.onMouseOver);
      props.onMouseOut = _utilsCreateChainedFunction2['default'](this.handleMouseOut, this.props.onMouseOut, triggerProps.onMouseOut);
    }

    if (isOneOf('focus', this.props.trigger)) {
      props.onFocus = _utilsCreateChainedFunction2['default'](this.handleDelayedShow, this.props.onFocus, triggerProps.onFocus);
      props.onBlur = _utilsCreateChainedFunction2['default'](this.handleDelayedHide, this.props.onBlur, triggerProps.onBlur);
    }

    return _react.cloneElement(trigger, props);
  },

  handleDelayedShow: function handleDelayedShow() {
    var _this = this;

    if (this._hoverHideDelay != null) {
      clearTimeout(this._hoverHideDelay);
      this._hoverHideDelay = null;
      return;
    }

    if (this.state.isOverlayShown || this._hoverShowDelay != null) {
      return;
    }

    var delay = this.props.delayShow != null ? this.props.delayShow : this.props.delay;

    if (!delay) {
      this.show();
      return;
    }

    this._hoverShowDelay = setTimeout(function () {
      _this._hoverShowDelay = null;
      _this.show();
    }, delay);
  },

  handleDelayedHide: function handleDelayedHide() {
    var _this2 = this;

    if (this._hoverShowDelay != null) {
      clearTimeout(this._hoverShowDelay);
      this._hoverShowDelay = null;
      return;
    }

    if (!this.state.isOverlayShown || this._hoverHideDelay != null) {
      return;
    }

    var delay = this.props.delayHide != null ? this.props.delayHide : this.props.delay;

    if (!delay) {
      this.hide();
      return;
    }

    this._hoverHideDelay = setTimeout(function () {
      _this2._hoverHideDelay = null;
      _this2.hide();
    }, delay);
  },

  // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker moving
  // from one child element to another.
  handleMouseOverOut: function handleMouseOverOut(handler, e) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent.toElement;

    if (!related || related !== target && !_domHelpersQueryContains2['default'](target, related)) {
      handler(e);
    }
  }

});

exports['default'] = OverlayTrigger;
module.exports = exports['default'];
},{"./Overlay":206,"./utils/createChainedFunction":237,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"dom-helpers/query/contains":52,"lodash-compat/object/pick":154,"react":"react","react-dom":"react-dom","warning":282}],208:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var PageHeader = _react2['default'].createClass({
  displayName: 'PageHeader',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'page-header') }),
      _react2['default'].createElement(
        'h1',
        null,
        this.props.children
      )
    );
  }
});

exports['default'] = PageHeader;
module.exports = exports['default'];
},{"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],209:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var PageItem = _react2['default'].createClass({
  displayName: 'PageItem',

  propTypes: {
    href: _react2['default'].PropTypes.string,
    target: _react2['default'].PropTypes.string,
    title: _react2['default'].PropTypes.string,
    disabled: _react2['default'].PropTypes.bool,
    previous: _react2['default'].PropTypes.bool,
    next: _react2['default'].PropTypes.bool,
    onSelect: _react2['default'].PropTypes.func,
    eventKey: _react2['default'].PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      previous: false,
      next: false
    };
  },

  render: function render() {
    var classes = {
      'disabled': this.props.disabled,
      'previous': this.props.previous,
      'next': this.props.next
    };

    return _react2['default'].createElement(
      'li',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, classes) }),
      _react2['default'].createElement(
        _SafeAnchor2['default'],
        {
          href: this.props.href,
          title: this.props.title,
          target: this.props.target,
          onClick: this.handleSelect },
        this.props.children
      )
    );
  },

  handleSelect: function handleSelect(e) {
    if (this.props.onSelect || this.props.disabled) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
      }
    }
  }
});

exports['default'] = PageItem;
module.exports = exports['default'];
},{"./SafeAnchor":219,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],210:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var Pager = _react2['default'].createClass({
  displayName: 'Pager',

  propTypes: {
    onSelect: _react2['default'].PropTypes.func
  },

  render: function render() {
    return _react2['default'].createElement(
      'ul',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, 'pager') }),
      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderPageItem)
    );
  },

  renderPageItem: function renderPageItem(child, index) {
    return _react.cloneElement(child, {
      onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),
      key: child.key ? child.key : index
    });
  }
});

exports['default'] = Pager;
module.exports = exports['default'];
},{"./utils/ValidComponentChildren":234,"./utils/createChainedFunction":237,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],211:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _PaginationButton = require('./PaginationButton');

var _PaginationButton2 = _interopRequireDefault(_PaginationButton);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var Pagination = _react2['default'].createClass({
  displayName: 'Pagination',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    activePage: _react2['default'].PropTypes.number,
    items: _react2['default'].PropTypes.number,
    maxButtons: _react2['default'].PropTypes.number,
    /**
     * When `true`, will display the default node value ('...').
     * Otherwise, will display provided node (when specified).
     */
    ellipsis: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),
    /**
     * When `true`, will display the default node value ('&laquo;').
     * Otherwise, will display provided node (when specified).
     */
    first: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),
    /**
     * When `true`, will display the default node value ('&raquo;').
     * Otherwise, will display provided node (when specified).
     */
    last: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),
    /**
     * When `true`, will display the default node value ('&lsaquo;').
     * Otherwise, will display provided node (when specified).
     */
    prev: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),
    /**
     * When `true`, will display the default node value ('&rsaquo;').
     * Otherwise, will display provided node (when specified).
     */
    next: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),
    onSelect: _react2['default'].PropTypes.func,
    /**
     * You can use a custom element for the buttons
     */
    buttonComponentClass: _reactPropTypesLibElementType2['default']
  },

  getDefaultProps: function getDefaultProps() {
    return {
      activePage: 1,
      items: 1,
      maxButtons: 0,
      first: false,
      last: false,
      prev: false,
      next: false,
      ellipsis: true,
      buttonComponentClass: _SafeAnchor2['default'],
      bsClass: 'pagination'
    };
  },

  renderPageButtons: function renderPageButtons() {
    var pageButtons = [];
    var startPage = undefined,
        endPage = undefined,
        hasHiddenPagesAfter = undefined;
    var _props = this.props;
    var maxButtons = _props.maxButtons;
    var activePage = _props.activePage;
    var items = _props.items;
    var onSelect = _props.onSelect;
    var ellipsis = _props.ellipsis;
    var buttonComponentClass = _props.buttonComponentClass;

    if (maxButtons) {
      var hiddenPagesBefore = activePage - parseInt(maxButtons / 2, 10);
      startPage = hiddenPagesBefore > 1 ? hiddenPagesBefore : 1;
      hasHiddenPagesAfter = startPage + maxButtons <= items;

      if (!hasHiddenPagesAfter) {
        endPage = items;
        startPage = items - maxButtons + 1;
        if (startPage < 1) {
          startPage = 1;
        }
      } else {
        endPage = startPage + maxButtons - 1;
      }
    } else {
      startPage = 1;
      endPage = items;
    }

    for (var pagenumber = startPage; pagenumber <= endPage; pagenumber++) {
      pageButtons.push(_react2['default'].createElement(
        _PaginationButton2['default'],
        {
          key: pagenumber,
          eventKey: pagenumber,
          active: pagenumber === activePage,
          onSelect: onSelect,
          buttonComponentClass: buttonComponentClass },
        pagenumber
      ));
    }

    if (maxButtons && hasHiddenPagesAfter && ellipsis) {
      pageButtons.push(_react2['default'].createElement(
        _PaginationButton2['default'],
        {
          key: 'ellipsis',
          disabled: true,
          buttonComponentClass: buttonComponentClass },
        _react2['default'].createElement(
          'span',
          { 'aria-label': 'More' },
          this.props.ellipsis === true ? '...' : this.props.ellipsis
        )
      ));
    }

    return pageButtons;
  },

  renderPrev: function renderPrev() {
    if (!this.props.prev) {
      return null;
    }

    return _react2['default'].createElement(
      _PaginationButton2['default'],
      {
        key: 'prev',
        eventKey: this.props.activePage - 1,
        disabled: this.props.activePage === 1,
        onSelect: this.props.onSelect,
        buttonComponentClass: this.props.buttonComponentClass },
      _react2['default'].createElement(
        'span',
        { 'aria-label': 'Previous' },
        this.props.prev === true ? '‹' : this.props.prev
      )
    );
  },

  renderNext: function renderNext() {
    if (!this.props.next) {
      return null;
    }

    return _react2['default'].createElement(
      _PaginationButton2['default'],
      {
        key: 'next',
        eventKey: this.props.activePage + 1,
        disabled: this.props.activePage >= this.props.items,
        onSelect: this.props.onSelect,
        buttonComponentClass: this.props.buttonComponentClass },
      _react2['default'].createElement(
        'span',
        { 'aria-label': 'Next' },
        this.props.next === true ? '›' : this.props.next
      )
    );
  },

  renderFirst: function renderFirst() {
    if (!this.props.first) {
      return null;
    }

    return _react2['default'].createElement(
      _PaginationButton2['default'],
      {
        key: 'first',
        eventKey: 1,
        disabled: this.props.activePage === 1,
        onSelect: this.props.onSelect,
        buttonComponentClass: this.props.buttonComponentClass },
      _react2['default'].createElement(
        'span',
        { 'aria-label': 'First' },
        this.props.first === true ? '«' : this.props.first
      )
    );
  },

  renderLast: function renderLast() {
    if (!this.props.last) {
      return null;
    }

    return _react2['default'].createElement(
      _PaginationButton2['default'],
      {
        key: 'last',
        eventKey: this.props.items,
        disabled: this.props.activePage >= this.props.items,
        onSelect: this.props.onSelect,
        buttonComponentClass: this.props.buttonComponentClass },
      _react2['default'].createElement(
        'span',
        { 'aria-label': 'Last' },
        this.props.last === true ? '»' : this.props.last
      )
    );
  },

  render: function render() {
    return _react2['default'].createElement(
      'ul',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, this.getBsClassSet()) }),
      this.renderFirst(),
      this.renderPrev(),
      this.renderPageButtons(),
      this.renderNext(),
      this.renderLast()
    );
  }
});

exports['default'] = Pagination;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"./PaginationButton":212,"./SafeAnchor":219,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react","react-prop-types/lib/elementType":257}],212:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _utilsCreateSelectedEvent = require('./utils/createSelectedEvent');

var _utilsCreateSelectedEvent2 = _interopRequireDefault(_utilsCreateSelectedEvent);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var PaginationButton = _react2['default'].createClass({
  displayName: 'PaginationButton',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    className: _react2['default'].PropTypes.string,
    eventKey: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
    onSelect: _react2['default'].PropTypes.func,
    disabled: _react2['default'].PropTypes.bool,
    active: _react2['default'].PropTypes.bool,
    /**
     * You can use a custom element for this component
     */
    buttonComponentClass: _reactPropTypesLibElementType2['default']
  },

  getDefaultProps: function getDefaultProps() {
    return {
      active: false,
      disabled: false
    };
  },

  handleClick: function handleClick(event) {
    if (this.props.disabled) {
      return;
    }

    if (this.props.onSelect) {
      var selectedEvent = _utilsCreateSelectedEvent2['default'](this.props.eventKey);
      this.props.onSelect(event, selectedEvent);
    }
  },

  render: function render() {
    var classes = _extends({
      active: this.props.active,
      disabled: this.props.disabled
    }, this.getBsClassSet());

    var _props = this.props;
    var className = _props.className;

    var anchorProps = _objectWithoutProperties(_props, ['className']);

    var ButtonComponentClass = this.props.buttonComponentClass;

    return _react2['default'].createElement(
      'li',
      { className: _classnames2['default'](className, classes) },
      _react2['default'].createElement(ButtonComponentClass, _extends({}, anchorProps, {
        onClick: this.handleClick }))
    );
  }
});

exports['default'] = PaginationButton;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"./utils/createSelectedEvent":238,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"react":"react","react-prop-types/lib/elementType":257}],213:[function(require,module,exports){
'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _Collapse = require('./Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var Panel = _react2['default'].createClass({
  displayName: 'Panel',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    collapsible: _react2['default'].PropTypes.bool,
    onSelect: _react2['default'].PropTypes.func,
    header: _react2['default'].PropTypes.node,
    id: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
    footer: _react2['default'].PropTypes.node,
    defaultExpanded: _react2['default'].PropTypes.bool,
    expanded: _react2['default'].PropTypes.bool,
    eventKey: _react2['default'].PropTypes.any,
    headerRole: _react2['default'].PropTypes.string,
    panelRole: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'panel',
      bsStyle: 'default',
      defaultExpanded: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      expanded: this.props.defaultExpanded
    };
  },

  handleSelect: function handleSelect(e) {
    e.selected = true;

    if (this.props.onSelect) {
      this.props.onSelect(e, this.props.eventKey);
    } else {
      e.preventDefault();
    }

    if (e.selected) {
      this.handleToggle();
    }
  },

  handleToggle: function handleToggle() {
    this.setState({ expanded: !this.state.expanded });
  },

  isExpanded: function isExpanded() {
    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
  },

  render: function render() {
    var _props = this.props;
    var headerRole = _props.headerRole;
    var panelRole = _props.panelRole;

    var props = _objectWithoutProperties(_props, ['headerRole', 'panelRole']);

    return _react2['default'].createElement(
      'div',
      _extends({}, props, {
        className: _classnames2['default'](this.props.className, this.getBsClassSet()),
        id: this.props.collapsible ? null : this.props.id, onSelect: null }),
      this.renderHeading(headerRole),
      this.props.collapsible ? this.renderCollapsibleBody(panelRole) : this.renderBody(),
      this.renderFooter()
    );
  },

  renderCollapsibleBody: function renderCollapsibleBody(panelRole) {
    var props = {
      className: this.prefixClass('collapse'),
      id: this.props.id,
      ref: 'panel',
      'aria-hidden': !this.isExpanded()
    };
    if (panelRole) {
      props.role = panelRole;
    }

    return _react2['default'].createElement(
      _Collapse2['default'],
      { 'in': this.isExpanded() },
      _react2['default'].createElement(
        'div',
        props,
        this.renderBody()
      )
    );
  },

  renderBody: function renderBody() {
    var _this = this;

    var allChildren = this.props.children;
    var bodyElements = [];
    var panelBodyChildren = [];
    var bodyClass = this.prefixClass('body');

    function getProps() {
      return { key: bodyElements.length };
    }

    function addPanelChild(child) {
      bodyElements.push(_react.cloneElement(child, getProps()));
    }

    function addPanelBody(children) {
      bodyElements.push(_react2['default'].createElement(
        'div',
        _extends({ className: bodyClass }, getProps()),
        children
      ));
    }

    function maybeRenderPanelBody() {
      if (panelBodyChildren.length === 0) {
        return;
      }

      addPanelBody(panelBodyChildren);
      panelBodyChildren = [];
    }

    // Handle edge cases where we should not iterate through children.
    if (!Array.isArray(allChildren) || allChildren.length === 0) {
      if (this.shouldRenderFill(allChildren)) {
        addPanelChild(allChildren);
      } else {
        addPanelBody(allChildren);
      }
    } else {
      allChildren.forEach(function (child) {
        if (_this.shouldRenderFill(child)) {
          maybeRenderPanelBody();

          // Separately add the filled element.
          addPanelChild(child);
        } else {
          panelBodyChildren.push(child);
        }
      });

      maybeRenderPanelBody();
    }

    return bodyElements;
  },

  shouldRenderFill: function shouldRenderFill(child) {
    return _react2['default'].isValidElement(child) && child.props.fill != null;
  },

  renderHeading: function renderHeading(headerRole) {
    var header = this.props.header;

    if (!header) {
      return null;
    }

    if (!_react2['default'].isValidElement(header) || Array.isArray(header)) {
      header = this.props.collapsible ? this.renderCollapsibleTitle(header, headerRole) : header;
    } else {
      var className = _classnames2['default'](this.prefixClass('title'), header.props.className);

      if (this.props.collapsible) {
        header = _react.cloneElement(header, {
          className: className,
          children: this.renderAnchor(header.props.children, headerRole)
        });
      } else {
        header = _react.cloneElement(header, { className: className });
      }
    }

    return _react2['default'].createElement(
      'div',
      { className: this.prefixClass('heading') },
      header
    );
  },

  renderAnchor: function renderAnchor(header, headerRole) {
    return _react2['default'].createElement(
      'a',
      {
        href: '#' + (this.props.id || ''),
        'aria-controls': this.props.collapsible ? this.props.id : null,
        className: this.isExpanded() ? null : 'collapsed',
        'aria-expanded': this.isExpanded(),
        'aria-selected': this.isExpanded(),
        onClick: this.handleSelect,
        role: headerRole },
      header
    );
  },

  renderCollapsibleTitle: function renderCollapsibleTitle(header, headerRole) {
    return _react2['default'].createElement(
      'h4',
      { className: this.prefixClass('title'), role: 'presentation' },
      this.renderAnchor(header, headerRole)
    );
  },

  renderFooter: function renderFooter() {
    if (!this.props.footer) {
      return null;
    }

    return _react2['default'].createElement(
      'div',
      { className: this.prefixClass('footer') },
      this.props.footer
    );
  }
});

exports['default'] = Panel;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"./Collapse":174,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"react":"react"}],214:[function(require,module,exports){
/* eslint react/prop-types: [2, {ignore: "bsStyle"}] */
/* BootstrapMixin contains `bsStyle` type validation */

'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var PanelGroup = _react2['default'].createClass({
  displayName: 'PanelGroup',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    accordion: _react2['default'].PropTypes.bool,
    activeKey: _react2['default'].PropTypes.any,
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node,
    defaultActiveKey: _react2['default'].PropTypes.any,
    onSelect: _react2['default'].PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      accordion: false,
      bsClass: 'panel-group'
    };
  },

  getInitialState: function getInitialState() {
    var defaultActiveKey = this.props.defaultActiveKey;

    return {
      activeKey: defaultActiveKey
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();
    var _props = this.props;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['className']);

    if (this.props.accordion) {
      props.role = 'tablist';
    }
    return _react2['default'].createElement(
      'div',
      _extends({}, props, { className: _classnames2['default'](className, classes), onSelect: null }),
      _utilsValidComponentChildren2['default'].map(props.children, this.renderPanel)
    );
  },

  renderPanel: function renderPanel(child, index) {
    var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;

    var props = {
      bsStyle: child.props.bsStyle || this.props.bsStyle,
      key: child.key ? child.key : index,
      ref: child.ref
    };

    if (this.props.accordion) {
      props.headerRole = 'tab';
      props.panelRole = 'tabpanel';
      props.collapsible = true;
      props.expanded = child.props.eventKey === activeKey;
      props.onSelect = this.handleSelect;
    }

    return _react.cloneElement(child, props);
  },

  shouldComponentUpdate: function shouldComponentUpdate() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleSelect: function handleSelect(e, key) {
    e.preventDefault();

    if (this.props.onSelect) {
      this._isChanging = true;
      this.props.onSelect(key);
      this._isChanging = false;
    }

    if (this.state.activeKey === key) {
      key = null;
    }

    this.setState({
      activeKey: key
    });
  }
});

exports['default'] = PanelGroup;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"./utils/ValidComponentChildren":234,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"react":"react"}],215:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _reactPropTypesLibIsRequiredForA11y = require('react-prop-types/lib/isRequiredForA11y');

var _reactPropTypesLibIsRequiredForA11y2 = _interopRequireDefault(_reactPropTypesLibIsRequiredForA11y);

var Popover = _react2['default'].createClass({
  displayName: 'Popover',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    /**
     * An html id attribute, necessary for accessibility
     * @type {string}
     * @required
     */
    id: _reactPropTypesLibIsRequiredForA11y2['default'](_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])),

    /**
     * Sets the direction the Popover is positioned towards.
     */
    placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * The "left" position value for the Popover.
     */
    positionLeft: _react2['default'].PropTypes.number,
    /**
     * The "top" position value for the Popover.
     */
    positionTop: _react2['default'].PropTypes.number,
    /**
     * The "left" position value for the Popover arrow.
     */
    arrowOffsetLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
    /**
     * The "top" position value for the Popover arrow.
     */
    arrowOffsetTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
    /**
     * Title text
     */
    title: _react2['default'].PropTypes.node
  },

  getDefaultProps: function getDefaultProps() {
    return {
      placement: 'right'
    };
  },

  render: function render() {
    var _classes;

    var classes = (_classes = {
      'popover': true
    }, _classes[this.props.placement] = true, _classes);

    var style = _extends({
      'left': this.props.positionLeft,
      'top': this.props.positionTop,
      'display': 'block'
    }, this.props.style);

    // eslint-disable-line react/prop-types
    var arrowStyle = {
      'left': this.props.arrowOffsetLeft,
      'top': this.props.arrowOffsetTop
    };

    return _react2['default'].createElement(
      'div',
      _extends({ role: 'tooltip' }, this.props, { className: _classnames2['default'](this.props.className, classes), style: style, title: null }),
      _react2['default'].createElement('div', { className: 'arrow', style: arrowStyle }),
      this.props.title ? this.renderTitle() : null,
      _react2['default'].createElement(
        'div',
        { className: 'popover-content' },
        this.props.children
      )
    );
  },

  renderTitle: function renderTitle() {
    return _react2['default'].createElement(
      'h3',
      { className: 'popover-title' },
      this.props.title
    );
  }
});

exports['default'] = Popover;
module.exports = exports['default'];
// we don't want to expose the `style` property
},{"./BootstrapMixin":164,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react","react-prop-types/lib/isRequiredForA11y":258}],216:[function(require,module,exports){
/* eslint react/prop-types: [2, {ignore: "bsStyle"}] */
/* BootstrapMixin contains `bsStyle` type validation */

'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Interpolate = require('./Interpolate');

var _Interpolate2 = _interopRequireDefault(_Interpolate);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var ProgressBar = _react2['default'].createClass({
  displayName: 'ProgressBar',

  propTypes: {
    min: _react.PropTypes.number,
    now: _react.PropTypes.number,
    max: _react.PropTypes.number,
    label: _react.PropTypes.node,
    srOnly: _react.PropTypes.bool,
    striped: _react.PropTypes.bool,
    active: _react.PropTypes.bool,
    children: onlyProgressBar, // eslint-disable-line no-use-before-define
    className: _react2['default'].PropTypes.string,
    interpolateClass: _react.PropTypes.node,
    /**
     * @private
     */
    isChild: _react.PropTypes.bool
  },

  mixins: [_BootstrapMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'progress-bar',
      min: 0,
      max: 100,
      active: false,
      isChild: false,
      srOnly: false,
      striped: false
    };
  },

  getPercentage: function getPercentage(now, min, max) {
    var roundPrecision = 1000;
    return Math.round((now - min) / (max - min) * 100 * roundPrecision) / roundPrecision;
  },

  render: function render() {
    if (this.props.isChild) {
      return this.renderProgressBar();
    }

    var content = undefined;

    if (this.props.children) {
      content = _utilsValidComponentChildren2['default'].map(this.props.children, this.renderChildBar);
    } else {
      content = this.renderProgressBar();
    }

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, 'progress'),
        min: null,
        max: null,
        label: null,
        'aria-valuetext': null
      }),
      content
    );
  },

  renderChildBar: function renderChildBar(child, index) {
    return _react.cloneElement(child, {
      isChild: true,
      key: child.key ? child.key : index
    });
  },

  renderProgressBar: function renderProgressBar() {
    var _props = this.props;
    var className = _props.className;
    var label = _props.label;
    var now = _props.now;
    var min = _props.min;
    var max = _props.max;

    var props = _objectWithoutProperties(_props, ['className', 'label', 'now', 'min', 'max']);

    var percentage = this.getPercentage(now, min, max);

    if (typeof label === 'string') {
      label = this.renderLabel(percentage);
    }

    if (this.props.srOnly) {
      label = _react2['default'].createElement(
        'span',
        { className: 'sr-only' },
        label
      );
    }

    var classes = _classnames2['default'](className, this.getBsClassSet(), {
      active: this.props.active,
      'progress-bar-striped': this.props.active || this.props.striped
    });

    return _react2['default'].createElement(
      'div',
      _extends({}, props, {
        className: classes,
        role: 'progressbar',
        style: { width: percentage + '%' },
        'aria-valuenow': this.props.now,
        'aria-valuemin': this.props.min,
        'aria-valuemax': this.props.max }),
      label
    );
  },

  renderLabel: function renderLabel(percentage) {
    var InterpolateClass = this.props.interpolateClass || _Interpolate2['default'];

    return _react2['default'].createElement(
      InterpolateClass,
      {
        now: this.props.now,
        min: this.props.min,
        max: this.props.max,
        percent: percentage,
        bsStyle: this.props.bsStyle },
      this.props.label
    );
  }
});

/**
 * Custom propTypes checker
 */
function onlyProgressBar(props, propName, componentName) {
  if (props[propName]) {
    var _ret = (function () {
      var error = undefined,
          childIdentifier = undefined;

      _react2['default'].Children.forEach(props[propName], function (child) {
        if (child.type !== ProgressBar) {
          childIdentifier = child.type.displayName ? child.type.displayName : child.type;
          error = new Error('Children of ' + componentName + ' can contain only ProgressBar components. Found ' + childIdentifier);
        }
      });

      return {
        v: error
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  }
}

exports['default'] = ProgressBar;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"./Interpolate":189,"./utils/ValidComponentChildren":234,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"react":"react"}],217:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var ResponsiveEmbed = (function (_React$Component) {
  _inherits(ResponsiveEmbed, _React$Component);

  function ResponsiveEmbed() {
    _classCallCheck(this, ResponsiveEmbed);

    _React$Component.apply(this, arguments);
  }

  ResponsiveEmbed.prototype.render = function render() {
    var _props = this.props;
    var bsClass = _props.bsClass;
    var className = _props.className;
    var a16by9 = _props.a16by9;
    var a4by3 = _props.a4by3;

    var props = _objectWithoutProperties(_props, ['bsClass', 'className', 'a16by9', 'a4by3']);

    _warning2['default'](!(!a16by9 && !a4by3), '`a16by9` or `a4by3` attribute must be set.');
    _warning2['default'](!(a16by9 && a4by3), 'Either `a16by9` or `a4by3` attribute can be set. Not both.');

    var aspectRatio = {
      'embed-responsive-16by9': a16by9,
      'embed-responsive-4by3': a4by3
    };

    return _react2['default'].createElement(
      'div',
      { className: _classnames2['default'](bsClass, aspectRatio) },
      _react.cloneElement(this.props.children, _extends({}, props, {
        className: _classnames2['default'](className, 'embed-responsive-item')
      }))
    );
  };

  return ResponsiveEmbed;
})(_react2['default'].Component);

ResponsiveEmbed.defaultProps = {
  bsClass: 'embed-responsive',
  a16by9: false,
  a4by3: false
};

ResponsiveEmbed.propTypes = {
  /**
   * bootstrap className
   * @private
   */
  bsClass: _react.PropTypes.string,
  /**
   * This component accepts only one child element
   */
  children: _react.PropTypes.element.isRequired,
  /**
   * 16by9 aspect ratio
   */
  a16by9: _react.PropTypes.bool,
  /**
   * 4by3 aspect ratio
   */
  a4by3: _react.PropTypes.bool
};

exports['default'] = ResponsiveEmbed;
module.exports = exports['default'];
},{"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"react":"react","warning":282}],218:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var Row = _react2['default'].createClass({
  displayName: 'Row',

  propTypes: {
    /**
     * You can use a custom element for this component
     */
    componentClass: _reactPropTypesLibElementType2['default']
  },

  getDefaultProps: function getDefaultProps() {
    return {
      componentClass: 'div'
    };
  },

  render: function render() {
    var ComponentClass = this.props.componentClass;

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'row') }),
      this.props.children
    );
  }
});

exports['default'] = Row;
module.exports = exports['default'];
},{"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react","react-prop-types/lib/elementType":257}],219:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

/**
 * Note: This is intended as a stop-gap for accessibility concerns that the
 * Bootstrap CSS does not address as they have styled anchors and not buttons
 * in many cases.
 */

var SafeAnchor = (function (_React$Component) {
  _inherits(SafeAnchor, _React$Component);

  function SafeAnchor(props) {
    _classCallCheck(this, SafeAnchor);

    _React$Component.call(this, props);

    this.handleClick = this.handleClick.bind(this);
  }

  SafeAnchor.prototype.handleClick = function handleClick(event) {
    if (this.props.href === undefined) {
      event.preventDefault();
    }
  };

  SafeAnchor.prototype.render = function render() {
    return _react2['default'].createElement('a', _extends({ role: this.props.href ? undefined : 'button'
    }, this.props, {
      onClick: _utilsCreateChainedFunction2['default'](this.props.onClick, this.handleClick),
      href: this.props.href || '' }));
  };

  return SafeAnchor;
})(_react2['default'].Component);

exports['default'] = SafeAnchor;

SafeAnchor.propTypes = {
  href: _react2['default'].PropTypes.string,
  onClick: _react2['default'].PropTypes.func
};
module.exports = exports['default'];
},{"./utils/createChainedFunction":237,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"react":"react"}],220:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _SplitToggle = require('./SplitToggle');

var _SplitToggle2 = _interopRequireDefault(_SplitToggle);

var SplitButton = (function (_React$Component) {
  _inherits(SplitButton, _React$Component);

  function SplitButton() {
    _classCallCheck(this, SplitButton);

    _React$Component.apply(this, arguments);
  }

  SplitButton.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;
    var title = _props.title;
    var onClick = _props.onClick;
    var target = _props.target;
    var href = _props.href;
    var
    // bsStyle is validated by 'Button' component
    bsStyle = _props.bsStyle;

    var props = _objectWithoutProperties(_props, ['children', 'title', 'onClick', 'target', 'href', 'bsStyle']);

    var disabled = props.disabled;

    var button = _react2['default'].createElement(
      _Button2['default'],
      {
        onClick: onClick,
        bsStyle: bsStyle,
        disabled: disabled,
        target: target,
        href: href
      },
      title
    );

    return _react2['default'].createElement(
      _Dropdown2['default'],
      props,
      button,
      _react2['default'].createElement(_SplitToggle2['default'], {
        'aria-label': title,
        bsStyle: bsStyle,
        disabled: disabled
      }),
      _react2['default'].createElement(
        _Dropdown2['default'].Menu,
        null,
        children
      )
    );
  };

  return SplitButton;
})(_react2['default'].Component);

SplitButton.propTypes = _extends({}, _Dropdown2['default'].propTypes, _BootstrapMixin2['default'].propTypes, {

  /**
   * @private
   */
  onClick: function onClick() {},
  target: _react2['default'].PropTypes.string,
  href: _react2['default'].PropTypes.string,
  /**
   * The content of the split button.
   */
  title: _react2['default'].PropTypes.node.isRequired
});

SplitButton.defaultProps = {
  disabled: false,
  dropup: false,
  pullRight: false
};

SplitButton.Toggle = _SplitToggle2['default'];

exports['default'] = SplitButton;
module.exports = exports['default'];
// eslint-disable-line
},{"./BootstrapMixin":164,"./Button":167,"./Dropdown":176,"./SplitToggle":221,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"react":"react"}],221:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DropdownToggle = require('./DropdownToggle');

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var SplitToggle = (function (_React$Component) {
  _inherits(SplitToggle, _React$Component);

  function SplitToggle() {
    _classCallCheck(this, SplitToggle);

    _React$Component.apply(this, arguments);
  }

  SplitToggle.prototype.render = function render() {
    return _react2['default'].createElement(_DropdownToggle2['default'], _extends({}, this.props, {
      useAnchor: false,
      noCaret: false
    }));
  };

  return SplitToggle;
})(_react2['default'].Component);

exports['default'] = SplitToggle;

SplitToggle.defaultProps = _DropdownToggle2['default'].defaultProps;
module.exports = exports['default'];
},{"./DropdownToggle":179,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"react":"react"}],222:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var SubNav = _react2['default'].createClass({
  displayName: 'SubNav',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    onSelect: _react2['default'].PropTypes.func,
    active: _react2['default'].PropTypes.bool,
    activeHref: _react2['default'].PropTypes.string,
    activeKey: _react2['default'].PropTypes.any,
    disabled: _react2['default'].PropTypes.bool,
    eventKey: _react2['default'].PropTypes.any,
    href: _react2['default'].PropTypes.string,
    title: _react2['default'].PropTypes.string,
    text: _react2['default'].PropTypes.node,
    target: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'nav',
      active: false,
      disabled: false
    };
  },

  handleClick: function handleClick(e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
      }
    }
  },

  isActive: function isActive() {
    return this.isChildActive(this);
  },

  isChildActive: function isChildActive(child) {
    var _this = this;

    if (child.props.active) {
      return true;
    }

    if (this.props.activeKey != null && this.props.activeKey === child.props.eventKey) {
      return true;
    }

    if (this.props.activeHref != null && this.props.activeHref === child.props.href) {
      return true;
    }

    if (child.props.children) {
      var isActive = false;

      _utilsValidComponentChildren2['default'].forEach(child.props.children, function (grandchild) {
        if (_this.isChildActive(grandchild)) {
          isActive = true;
        }
      }, this);

      return isActive;
    }

    return false;
  },

  getChildActiveProp: function getChildActiveProp(child) {
    if (child.props.active) {
      return true;
    }
    if (this.props.activeKey != null) {
      if (child.props.eventKey === this.props.activeKey) {
        return true;
      }
    }
    if (this.props.activeHref != null) {
      if (child.props.href === this.props.activeHref) {
        return true;
      }
    }

    return child.props.active;
  },

  render: function render() {
    var classes = {
      'active': this.isActive(),
      'disabled': this.props.disabled
    };

    return _react2['default'].createElement(
      'li',
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
      _react2['default'].createElement(
        _SafeAnchor2['default'],
        {
          href: this.props.href,
          title: this.props.title,
          target: this.props.target,
          onClick: this.handleClick },
        this.props.text
      ),
      _react2['default'].createElement(
        'ul',
        { className: 'nav' },
        _utilsValidComponentChildren2['default'].map(this.props.children, this.renderNavItem)
      )
    );
  },

  renderNavItem: function renderNavItem(child, index) {
    return _react.cloneElement(child, {
      active: this.getChildActiveProp(child),
      onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),
      key: child.key ? child.key : index
    });
  }
});

exports['default'] = SubNav;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"./SafeAnchor":219,"./utils/ValidComponentChildren":234,"./utils/createChainedFunction":237,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],223:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utilsTransitionEvents = require('./utils/TransitionEvents');

var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

var Tab = _react2['default'].createClass({
  displayName: 'Tab',

  propTypes: {
    /**
     * @private
     */
    active: _react2['default'].PropTypes.bool,
    animation: _react2['default'].PropTypes.bool,
    /**
     * It is used by 'Tabs' - parent component
     * @private
     */
    onAnimateOutEnd: _react2['default'].PropTypes.func,
    disabled: _react2['default'].PropTypes.bool,
    title: _react2['default'].PropTypes.node,
    /**
     * tabClassName is used as className for the associated NavItem
     */
    tabClassName: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      animation: true
    };
  },

  getInitialState: function getInitialState() {
    return {
      animateIn: false,
      animateOut: false
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.animation) {
      if (!this.state.animateIn && nextProps.active && !this.props.active) {
        this.setState({
          animateIn: true
        });
      } else if (!this.state.animateOut && !nextProps.active && this.props.active) {
        this.setState({
          animateOut: true
        });
      }
    }
  },

  componentDidUpdate: function componentDidUpdate() {
    if (this.state.animateIn) {
      setTimeout(this.startAnimateIn, 0);
    }
    if (this.state.animateOut) {
      _utilsTransitionEvents2['default'].addEndEventListener(_reactDom2['default'].findDOMNode(this), this.stopAnimateOut);
    }
  },

  startAnimateIn: function startAnimateIn() {
    if (this.isMounted()) {
      this.setState({
        animateIn: false
      });
    }
  },

  stopAnimateOut: function stopAnimateOut() {
    if (this.isMounted()) {
      this.setState({
        animateOut: false
      });

      if (this.props.onAnimateOutEnd) {
        this.props.onAnimateOutEnd();
      }
    }
  },

  render: function render() {
    var classes = {
      'tab-pane': true,
      'fade': true,
      'active': this.props.active || this.state.animateOut,
      'in': this.props.active && !this.state.animateIn
    };

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        title: undefined,
        role: 'tabpanel',
        'aria-hidden': !this.props.active,
        className: _classnames2['default'](this.props.className, classes)
      }),
      this.props.children
    );
  }
});

exports['default'] = Tab;
module.exports = exports['default'];
},{"./utils/TransitionEvents":233,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react","react-dom":"react-dom"}],224:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Table = _react2['default'].createClass({
  displayName: 'Table',

  propTypes: {
    striped: _react2['default'].PropTypes.bool,
    bordered: _react2['default'].PropTypes.bool,
    condensed: _react2['default'].PropTypes.bool,
    hover: _react2['default'].PropTypes.bool,
    responsive: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bordered: false,
      condensed: false,
      hover: false,
      responsive: false,
      striped: false
    };
  },

  render: function render() {
    var classes = {
      'table': true,
      'table-striped': this.props.striped,
      'table-bordered': this.props.bordered,
      'table-condensed': this.props.condensed,
      'table-hover': this.props.hover
    };
    var table = _react2['default'].createElement(
      'table',
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
      this.props.children
    );

    return this.props.responsive ? _react2['default'].createElement(
      'div',
      { className: 'table-responsive' },
      table
    ) : table;
  }
});

exports['default'] = Table;
module.exports = exports['default'];
},{"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],225:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _styleMaps = require('./styleMaps');

var _styleMaps2 = _interopRequireDefault(_styleMaps);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var paneId = function paneId(props, child) {
  return child.props.id ? child.props.id : props.id && props.id + '___pane___' + child.props.eventKey;
};
var tabId = function tabId(props, child) {
  return child.props.id ? child.props.id + '___tab' : props.id && props.id + '___tab___' + child.props.eventKey;
};

var findChild = _utilsValidComponentChildren2['default'].find;

function getDefaultActiveKeyFromChildren(children) {
  var defaultActiveKey = undefined;

  _utilsValidComponentChildren2['default'].forEach(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });

  return defaultActiveKey;
}

function move(children, currentKey, keys, moveNext) {
  var lastIdx = keys.length - 1;
  var stopAt = keys[moveNext ? Math.max(lastIdx, 0) : 0];
  var nextKey = currentKey;

  function getNext() {
    var idx = keys.indexOf(nextKey);
    nextKey = moveNext ? keys[Math.min(lastIdx, idx + 1)] : keys[Math.max(0, idx - 1)];

    return findChild(children, function (_child) {
      return _child.props.eventKey === nextKey;
    });
  }

  var next = getNext();

  while (next.props.eventKey !== stopAt && next.props.disabled) {
    next = getNext();
  }

  return next.props.disabled ? currentKey : next.props.eventKey;
}

var Tabs = _react2['default'].createClass({
  displayName: 'Tabs',

  propTypes: {
    activeKey: _react2['default'].PropTypes.any,
    defaultActiveKey: _react2['default'].PropTypes.any,
    /**
     * Navigation style for tabs
     *
     * If not specified, it will be treated as `'tabs'` when vertically
     * positioned and `'pills'` when horizontally positioned.
     */
    bsStyle: _react2['default'].PropTypes.oneOf(['tabs', 'pills']),
    animation: _react2['default'].PropTypes.bool,
    id: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
    onSelect: _react2['default'].PropTypes.func,
    position: _react2['default'].PropTypes.oneOf(['top', 'left', 'right']),
    /**
     * Number of grid columns for the tabs if horizontally positioned
     *
     * This accepts either a single width or a mapping of size to width.
     */
    tabWidth: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.object]),
    /**
     * Number of grid columns for the panes if horizontally positioned
     *
     * This accepts either a single width or a mapping of size to width. If not
     * specified, it will be treated as `styleMaps.GRID_COLUMNS` minus
     * `tabWidth`.
     */
    paneWidth: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.object]),
    /**
     * Render without clearfix if horizontally positioned
     */
    standalone: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      animation: true,
      tabWidth: 2,
      position: 'top',
      standalone: false
    };
  },

  getInitialState: function getInitialState() {
    var defaultActiveKey = this.props.defaultActiveKey != null ? this.props.defaultActiveKey : getDefaultActiveKeyFromChildren(this.props.children);

    return {
      activeKey: defaultActiveKey,
      previousActiveKey: null
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this = this;

    if (nextProps.activeKey != null && nextProps.activeKey !== this.props.activeKey) {
      (function () {
        // check if the 'previousActiveKey' child still exists
        var previousActiveKey = _this.props.activeKey;
        _react2['default'].Children.forEach(nextProps.children, function (child) {
          if (_react2['default'].isValidElement(child)) {
            if (child.props.eventKey === previousActiveKey) {
              _this.setState({
                previousActiveKey: previousActiveKey
              });
              return;
            }
          }
        });
      })();
    }
  },

  componentDidUpdate: function componentDidUpdate() {
    var tabs = this._tabs;
    var tabIdx = this._eventKeys().indexOf(this.getActiveKey());

    if (this._needsRefocus) {
      this._needsRefocus = false;
      if (tabs && tabIdx !== -1) {
        var tabNode = _reactDom2['default'].findDOMNode(tabs[tabIdx]);

        if (tabNode) {
          tabNode.firstChild.focus();
        }
      }
    }
  },

  handlePaneAnimateOutEnd: function handlePaneAnimateOutEnd() {
    this.setState({
      previousActiveKey: null
    });
  },

  render: function render() {
    var _props = this.props;
    var id = _props.id;
    var className = _props.className;
    var style = _props.style;
    var position = _props.position;
    var bsStyle = _props.bsStyle;
    var tabWidth = _props.tabWidth;
    var paneWidth = _props.paneWidth;
    var standalone = _props.standalone;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['id', 'className', 'style', 'position', 'bsStyle', 'tabWidth', 'paneWidth', 'standalone', 'children']);

    var isHorizontal = position === 'left' || position === 'right';

    if (bsStyle == null) {
      bsStyle = isHorizontal ? 'pills' : 'tabs';
    }

    var containerProps = { id: id, className: className, style: style };

    var tabsProps = _extends({}, props, {
      bsStyle: bsStyle,
      stacked: isHorizontal,
      activeKey: this.getActiveKey(),
      onSelect: this.handleSelect,
      ref: 'tabs',
      role: 'tablist'
    });
    var childTabs = _utilsValidComponentChildren2['default'].map(children, this.renderTab);

    var panesProps = {
      className: 'tab-content',
      ref: 'panes'
    };
    var childPanes = _utilsValidComponentChildren2['default'].map(children, this.renderPane);

    if (isHorizontal) {
      if (!standalone) {
        containerProps.className = _classnames2['default'](containerProps.className, 'clearfix');
      }

      var _getColProps = this.getColProps({ tabWidth: tabWidth, paneWidth: paneWidth });

      var tabsColProps = _getColProps.tabsColProps;
      var panesColProps = _getColProps.panesColProps;

      var tabs = _react2['default'].createElement(
        _Col2['default'],
        _extends({ componentClass: _Nav2['default'] }, tabsProps, tabsColProps),
        childTabs
      );
      var panes = _react2['default'].createElement(
        _Col2['default'],
        _extends({}, panesProps, panesColProps),
        childPanes
      );

      if (position === 'left') {
        return _react2['default'].createElement(
          'div',
          containerProps,
          tabs,
          panes
        );
      }

      return _react2['default'].createElement(
        'div',
        containerProps,
        panes,
        tabs
      );
    }

    return _react2['default'].createElement(
      'div',
      containerProps,
      _react2['default'].createElement(
        _Nav2['default'],
        tabsProps,
        childTabs
      ),
      _react2['default'].createElement(
        'div',
        panesProps,
        childPanes
      )
    );
  },

  getActiveKey: function getActiveKey() {
    return this.props.activeKey !== undefined ? this.props.activeKey : this.state.activeKey;
  },

  renderPane: function renderPane(child, index) {
    var previousActiveKey = this.state.previousActiveKey;

    var shouldPaneBeSetActive = child.props.eventKey === this.getActiveKey();
    var thereIsNoActivePane = previousActiveKey == null;

    var paneIsAlreadyActive = previousActiveKey != null && child.props.eventKey === previousActiveKey;

    return _react.cloneElement(child, {
      active: shouldPaneBeSetActive && (thereIsNoActivePane || !this.props.animation),
      id: paneId(this.props, child),
      'aria-labelledby': tabId(this.props, child),
      key: child.key ? child.key : index,
      animation: this.props.animation,
      onAnimateOutEnd: paneIsAlreadyActive ? this.handlePaneAnimateOutEnd : null
    });
  },

  renderTab: function renderTab(child, index) {
    var _this2 = this;

    if (child.props.title == null) {
      return null;
    }

    var _child$props = child.props;
    var eventKey = _child$props.eventKey;
    var title = _child$props.title;
    var disabled = _child$props.disabled;
    var onKeyDown = _child$props.onKeyDown;
    var tabClassName = _child$props.tabClassName;
    var _child$props$tabIndex = _child$props.tabIndex;
    var tabIndex = _child$props$tabIndex === undefined ? 0 : _child$props$tabIndex;

    var isActive = this.getActiveKey() === eventKey;

    return _react2['default'].createElement(
      _NavItem2['default'],
      {
        linkId: tabId(this.props, child),
        ref: function (ref) {
          return (_this2._tabs || (_this2._tabs = []))[index] = ref;
        },
        'aria-controls': paneId(this.props, child),
        onKeyDown: _utilsCreateChainedFunction2['default'](this.handleKeyDown, onKeyDown),
        eventKey: eventKey,
        tabIndex: isActive ? tabIndex : -1,
        disabled: disabled,
        className: tabClassName },
      title
    );
  },

  getColProps: function getColProps(_ref) {
    var tabWidth = _ref.tabWidth;
    var paneWidth = _ref.paneWidth;

    var tabsColProps = undefined;
    if (tabWidth instanceof Object) {
      tabsColProps = tabWidth;
    } else {
      tabsColProps = { xs: tabWidth };
    }

    var panesColProps = undefined;
    if (paneWidth == null) {
      panesColProps = {};
      _Object$keys(tabsColProps).forEach(function (size) {
        panesColProps[size] = _styleMaps2['default'].GRID_COLUMNS - tabsColProps[size];
      });
    } else if (paneWidth instanceof Object) {
      panesColProps = paneWidth;
    } else {
      panesColProps = { xs: paneWidth };
    }

    return { tabsColProps: tabsColProps, panesColProps: panesColProps };
  },

  shouldComponentUpdate: function shouldComponentUpdate() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleSelect: function handleSelect(selectedKey) {
    if (this.props.onSelect) {
      this._isChanging = true;
      this.props.onSelect(selectedKey);
      this._isChanging = false;
      return;
    }

    // if there is no external handler, then use embedded one
    var previousActiveKey = this.getActiveKey();
    if (selectedKey !== previousActiveKey) {
      this.setState({
        activeKey: selectedKey,
        previousActiveKey: previousActiveKey
      });
    }
  },

  handleKeyDown: function handleKeyDown(event) {
    var keys = this._eventKeys();
    var currentKey = this.getActiveKey() || keys[0];
    var next = undefined;

    switch (event.keyCode) {

      case _keycode2['default'].codes.left:
      case _keycode2['default'].codes.up:
        next = move(this.props.children, currentKey, keys, false);

        if (next && next !== currentKey) {
          event.preventDefault();
          this.handleSelect(next);
          this._needsRefocus = true;
        }
        break;
      case _keycode2['default'].codes.right:
      case _keycode2['default'].codes.down:
        next = move(this.props.children, currentKey, keys, true);

        if (next && next !== currentKey) {
          event.preventDefault();
          this.handleSelect(next);
          this._needsRefocus = true;
        }
        break;
      default:
    }
  },

  _eventKeys: function _eventKeys() {
    var keys = [];

    _utilsValidComponentChildren2['default'].forEach(this.props.children, function (_ref2) {
      var eventKey = _ref2.props.eventKey;
      return keys.push(eventKey);
    });

    return keys;
  }
});

exports['default'] = Tabs;
module.exports = exports['default'];
},{"./Col":173,"./Nav":201,"./NavItem":204,"./styleMaps":230,"./utils/ValidComponentChildren":234,"./utils/createChainedFunction":237,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"keycode":88,"react":"react","react-dom":"react-dom"}],226:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var Thumbnail = _react2['default'].createClass({
  displayName: 'Thumbnail',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    alt: _react2['default'].PropTypes.string,
    href: _react2['default'].PropTypes.string,
    src: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'thumbnail'
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();

    if (this.props.href) {
      return _react2['default'].createElement(
        _SafeAnchor2['default'],
        _extends({}, this.props, { href: this.props.href, className: _classnames2['default'](this.props.className, classes) }),
        _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt })
      );
    }

    if (this.props.children) {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
        _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt }),
        _react2['default'].createElement(
          'div',
          { className: 'caption' },
          this.props.children
        )
      );
    }

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
      _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt })
    );
  }
});

exports['default'] = Thumbnail;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"./SafeAnchor":219,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],227:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPropTypesLibIsRequiredForA11y = require('react-prop-types/lib/isRequiredForA11y');

var _reactPropTypesLibIsRequiredForA11y2 = _interopRequireDefault(_reactPropTypesLibIsRequiredForA11y);

var Tooltip = (function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    _React$Component.apply(this, arguments);
  }

  Tooltip.prototype.render = function render() {
    var _props = this.props;
    var placement = _props.placement;
    var positionLeft = _props.positionLeft;
    var positionTop = _props.positionTop;
    var arrowOffsetLeft = _props.arrowOffsetLeft;
    var arrowOffsetTop = _props.arrowOffsetTop;
    var className = _props.className;
    var style = _props.style;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['placement', 'positionLeft', 'positionTop', 'arrowOffsetLeft', 'arrowOffsetTop', 'className', 'style', 'children']);

    return _react2['default'].createElement(
      'div',
      _extends({
        role: 'tooltip'
      }, props, {
        className: _classnames2['default'](className, 'tooltip', placement),
        style: _extends({ left: positionLeft, top: positionTop }, style)
      }),
      _react2['default'].createElement('div', {
        className: 'tooltip-arrow',
        style: { left: arrowOffsetLeft, top: arrowOffsetTop }
      }),
      _react2['default'].createElement(
        'div',
        { className: 'tooltip-inner' },
        children
      )
    );
  };

  return Tooltip;
})(_react2['default'].Component);

exports['default'] = Tooltip;

Tooltip.propTypes = {
  /**
   * An html id attribute, necessary for accessibility
   * @type {string}
   * @required
   */
  id: _reactPropTypesLibIsRequiredForA11y2['default'](_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])),

  /**
   * The direction the tooltip is positioned towards
   */
  placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The `left` position value for the tooltip
   */
  positionLeft: _react2['default'].PropTypes.number,
  /**
   * The `top` position value for the tooltip
   */
  positionTop: _react2['default'].PropTypes.number,
  /**
   * The `left` position value for the tooltip arrow
   */
  arrowOffsetLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
  /**
   * The `top` position value for the tooltip arrow
   */
  arrowOffsetTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string])
};

Tooltip.defaultProps = {
  placement: 'right'
};
module.exports = exports['default'];
},{"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/object-without-properties":17,"classnames":18,"react":"react","react-prop-types/lib/isRequiredForA11y":258}],228:[function(require,module,exports){
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var Well = _react2['default'].createClass({
  displayName: 'Well',

  mixins: [_BootstrapMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'well'
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = Well;
module.exports = exports['default'];
},{"./BootstrapMixin":164,"babel-runtime/helpers/extends":13,"babel-runtime/helpers/interop-require-default":15,"classnames":18,"react":"react"}],229:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

exports.__esModule = true;

var _utilsChildrenValueInputValidation = require('./utils/childrenValueInputValidation');

var _utilsChildrenValueInputValidation2 = _interopRequireDefault(_utilsChildrenValueInputValidation);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _Accordion2 = require('./Accordion');

var _Accordion3 = _interopRequireDefault(_Accordion2);

exports.Accordion = _Accordion3['default'];

var _Affix2 = require('./Affix');

var _Affix3 = _interopRequireDefault(_Affix2);

exports.Affix = _Affix3['default'];

var _AffixMixin2 = require('./AffixMixin');

var _AffixMixin3 = _interopRequireDefault(_AffixMixin2);

exports.AffixMixin = _AffixMixin3['default'];

var _Alert2 = require('./Alert');

var _Alert3 = _interopRequireDefault(_Alert2);

exports.Alert = _Alert3['default'];

var _Badge2 = require('./Badge');

var _Badge3 = _interopRequireDefault(_Badge2);

exports.Badge = _Badge3['default'];

var _BootstrapMixin2 = require('./BootstrapMixin');

var _BootstrapMixin3 = _interopRequireDefault(_BootstrapMixin2);

exports.BootstrapMixin = _BootstrapMixin3['default'];

var _Breadcrumb2 = require('./Breadcrumb');

var _Breadcrumb3 = _interopRequireDefault(_Breadcrumb2);

exports.Breadcrumb = _Breadcrumb3['default'];

var _BreadcrumbItem2 = require('./BreadcrumbItem');

var _BreadcrumbItem3 = _interopRequireDefault(_BreadcrumbItem2);

exports.BreadcrumbItem = _BreadcrumbItem3['default'];

var _Button2 = require('./Button');

var _Button3 = _interopRequireDefault(_Button2);

exports.Button = _Button3['default'];

var _ButtonGroup2 = require('./ButtonGroup');

var _ButtonGroup3 = _interopRequireDefault(_ButtonGroup2);

exports.ButtonGroup = _ButtonGroup3['default'];

var _ButtonInput2 = require('./ButtonInput');

var _ButtonInput3 = _interopRequireDefault(_ButtonInput2);

exports.ButtonInput = _ButtonInput3['default'];

var _ButtonToolbar2 = require('./ButtonToolbar');

var _ButtonToolbar3 = _interopRequireDefault(_ButtonToolbar2);

exports.ButtonToolbar = _ButtonToolbar3['default'];

var _Carousel2 = require('./Carousel');

var _Carousel3 = _interopRequireDefault(_Carousel2);

exports.Carousel = _Carousel3['default'];

var _CarouselItem2 = require('./CarouselItem');

var _CarouselItem3 = _interopRequireDefault(_CarouselItem2);

exports.CarouselItem = _CarouselItem3['default'];

var _Col2 = require('./Col');

var _Col3 = _interopRequireDefault(_Col2);

exports.Col = _Col3['default'];

var _CollapsibleNav2 = require('./CollapsibleNav');

var _CollapsibleNav3 = _interopRequireDefault(_CollapsibleNav2);

exports.CollapsibleNav = _CollapsibleNav3['default'];

var _Dropdown2 = require('./Dropdown');

var _Dropdown3 = _interopRequireDefault(_Dropdown2);

exports.Dropdown = _Dropdown3['default'];

var _DropdownButton2 = require('./DropdownButton');

var _DropdownButton3 = _interopRequireDefault(_DropdownButton2);

exports.DropdownButton = _DropdownButton3['default'];

var _Glyphicon2 = require('./Glyphicon');

var _Glyphicon3 = _interopRequireDefault(_Glyphicon2);

exports.Glyphicon = _Glyphicon3['default'];

var _Grid2 = require('./Grid');

var _Grid3 = _interopRequireDefault(_Grid2);

exports.Grid = _Grid3['default'];

var _Image2 = require('./Image');

var _Image3 = _interopRequireDefault(_Image2);

exports.Image = _Image3['default'];

var _Input2 = require('./Input');

var _Input3 = _interopRequireDefault(_Input2);

exports.Input = _Input3['default'];

var _Interpolate2 = require('./Interpolate');

var _Interpolate3 = _interopRequireDefault(_Interpolate2);

exports.Interpolate = _Interpolate3['default'];

var _Jumbotron2 = require('./Jumbotron');

var _Jumbotron3 = _interopRequireDefault(_Jumbotron2);

exports.Jumbotron = _Jumbotron3['default'];

var _Label2 = require('./Label');

var _Label3 = _interopRequireDefault(_Label2);

exports.Label = _Label3['default'];

var _ListGroup2 = require('./ListGroup');

var _ListGroup3 = _interopRequireDefault(_ListGroup2);

exports.ListGroup = _ListGroup3['default'];

var _ListGroupItem2 = require('./ListGroupItem');

var _ListGroupItem3 = _interopRequireDefault(_ListGroupItem2);

exports.ListGroupItem = _ListGroupItem3['default'];

var _MenuItem2 = require('./MenuItem');

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

exports.MenuItem = _MenuItem3['default'];

var _Modal2 = require('./Modal');

var _Modal3 = _interopRequireDefault(_Modal2);

exports.Modal = _Modal3['default'];

var _ModalBody2 = require('./ModalBody');

var _ModalBody3 = _interopRequireDefault(_ModalBody2);

exports.ModalBody = _ModalBody3['default'];

var _ModalFooter2 = require('./ModalFooter');

var _ModalFooter3 = _interopRequireDefault(_ModalFooter2);

exports.ModalFooter = _ModalFooter3['default'];

var _ModalHeader2 = require('./ModalHeader');

var _ModalHeader3 = _interopRequireDefault(_ModalHeader2);

exports.ModalHeader = _ModalHeader3['default'];

var _ModalTitle2 = require('./ModalTitle');

var _ModalTitle3 = _interopRequireDefault(_ModalTitle2);

exports.ModalTitle = _ModalTitle3['default'];

var _Nav2 = require('./Nav');

var _Nav3 = _interopRequireDefault(_Nav2);

exports.Nav = _Nav3['default'];

var _Navbar2 = require('./Navbar');

var _Navbar3 = _interopRequireDefault(_Navbar2);

exports.Navbar = _Navbar3['default'];

var _NavBrand2 = require('./NavBrand');

var _NavBrand3 = _interopRequireDefault(_NavBrand2);

exports.NavBrand = _NavBrand3['default'];

var _NavDropdown2 = require('./NavDropdown');

var _NavDropdown3 = _interopRequireDefault(_NavDropdown2);

exports.NavDropdown = _NavDropdown3['default'];

var _NavItem2 = require('./NavItem');

var _NavItem3 = _interopRequireDefault(_NavItem2);

exports.NavItem = _NavItem3['default'];

var _Overlay2 = require('./Overlay');

var _Overlay3 = _interopRequireDefault(_Overlay2);

exports.Overlay = _Overlay3['default'];

var _OverlayTrigger2 = require('./OverlayTrigger');

var _OverlayTrigger3 = _interopRequireDefault(_OverlayTrigger2);

exports.OverlayTrigger = _OverlayTrigger3['default'];

var _PageHeader2 = require('./PageHeader');

var _PageHeader3 = _interopRequireDefault(_PageHeader2);

exports.PageHeader = _PageHeader3['default'];

var _PageItem2 = require('./PageItem');

var _PageItem3 = _interopRequireDefault(_PageItem2);

exports.PageItem = _PageItem3['default'];

var _Pager2 = require('./Pager');

var _Pager3 = _interopRequireDefault(_Pager2);

exports.Pager = _Pager3['default'];

var _Pagination2 = require('./Pagination');

var _Pagination3 = _interopRequireDefault(_Pagination2);

exports.Pagination = _Pagination3['default'];

var _Panel2 = require('./Panel');

var _Panel3 = _interopRequireDefault(_Panel2);

exports.Panel = _Panel3['default'];

var _PanelGroup2 = require('./PanelGroup');

var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);

exports.PanelGroup = _PanelGroup3['default'];

var _Popover2 = require('./Popover');

var _Popover3 = _interopRequireDefault(_Popover2);

exports.Popover = _Popover3['default'];

var _ProgressBar2 = require('./ProgressBar');

var _ProgressBar3 = _interopRequireDefault(_ProgressBar2);

exports.ProgressBar = _ProgressBar3['default'];

var _ResponsiveEmbed2 = require('./ResponsiveEmbed');

var _ResponsiveEmbed3 = _interopRequireDefault(_ResponsiveEmbed2);

exports.ResponsiveEmbed = _ResponsiveEmbed3['default'];

var _Row2 = require('./Row');

var _Row3 = _interopRequireDefault(_Row2);

exports.Row = _Row3['default'];

var _SafeAnchor2 = require('./SafeAnchor');

var _SafeAnchor3 = _interopRequireDefault(_SafeAnchor2);

exports.SafeAnchor = _SafeAnchor3['default'];

var _SplitButton3 = require('./SplitButton');

var _SplitButton4 = _interopRequireDefault(_SplitButton3);

exports.SplitButton = _SplitButton4['default'];

var _SplitButton5 = _interopRequireDefault(_SplitButton3);

exports.SplitButton = _SplitButton5['default'];

var _styleMaps2 = require('./styleMaps');

var _styleMaps3 = _interopRequireDefault(_styleMaps2);

exports.styleMaps = _styleMaps3['default'];

var _SubNav2 = require('./SubNav');

var _SubNav3 = _interopRequireDefault(_SubNav2);

exports.SubNav = _SubNav3['default'];

var _Tab2 = require('./Tab');

var _Tab3 = _interopRequireDefault(_Tab2);

exports.Tab = _Tab3['default'];

var _Table2 = require('./Table');

var _Table3 = _interopRequireDefault(_Table2);

exports.Table = _Table3['default'];

var _Tabs2 = require('./Tabs');

var _Tabs3 = _interopRequireDefault(_Tabs2);

exports.Tabs = _Tabs3['default'];

var _Thumbnail2 = require('./Thumbnail');

var _Thumbnail3 = _interopRequireDefault(_Thumbnail2);

exports.Thumbnail = _Thumbnail3['default'];

var _Tooltip2 = require('./Tooltip');

var _Tooltip3 = _interopRequireDefault(_Tooltip2);

exports.Tooltip = _Tooltip3['default'];

var _Well2 = require('./Well');

var _Well3 = _interopRequireDefault(_Well2);

exports.Well = _Well3['default'];

var _Collapse2 = require('./Collapse');

var _Collapse3 = _interopRequireDefault(_Collapse2);

exports.Collapse = _Collapse3['default'];

var _Fade2 = require('./Fade');

var _Fade3 = _interopRequireDefault(_Fade2);

exports.Fade = _Fade3['default'];

var _FormControls2 = require('./FormControls');

var _FormControls = _interopRequireWildcard(_FormControls2);

exports.FormControls = _FormControls;
var utils = {
  childrenValueInputValidation: _utilsChildrenValueInputValidation2['default'],
  createChainedFunction: _utilsCreateChainedFunction2['default'],
  ValidComponentChildren: _utilsValidComponentChildren2['default']
};
exports.utils = utils;
},{"./Accordion":159,"./Affix":160,"./AffixMixin":161,"./Alert":162,"./Badge":163,"./BootstrapMixin":164,"./Breadcrumb":165,"./BreadcrumbItem":166,"./Button":167,"./ButtonGroup":168,"./ButtonInput":169,"./ButtonToolbar":170,"./Carousel":171,"./CarouselItem":172,"./Col":173,"./Collapse":174,"./CollapsibleNav":175,"./Dropdown":176,"./DropdownButton":177,"./Fade":180,"./FormControls":182,"./Glyphicon":184,"./Grid":185,"./Image":186,"./Input":187,"./Interpolate":189,"./Jumbotron":190,"./Label":191,"./ListGroup":192,"./ListGroupItem":193,"./MenuItem":194,"./Modal":195,"./ModalBody":196,"./ModalFooter":198,"./ModalHeader":199,"./ModalTitle":200,"./Nav":201,"./NavBrand":202,"./NavDropdown":203,"./NavItem":204,"./Navbar":205,"./Overlay":206,"./OverlayTrigger":207,"./PageHeader":208,"./PageItem":209,"./Pager":210,"./Pagination":211,"./Panel":213,"./PanelGroup":214,"./Popover":215,"./ProgressBar":216,"./ResponsiveEmbed":217,"./Row":218,"./SafeAnchor":219,"./SplitButton":220,"./SubNav":222,"./Tab":223,"./Table":224,"./Tabs":225,"./Thumbnail":226,"./Tooltip":227,"./Well":228,"./styleMaps":230,"./utils/ValidComponentChildren":234,"./utils/childrenValueInputValidation":236,"./utils/createChainedFunction":237,"babel-runtime/helpers/interop-require-default":15,"babel-runtime/helpers/interop-require-wildcard":16}],230:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var styleMaps = {
  CLASSES: {
    'alert': 'alert',
    'button': 'btn',
    'button-group': 'btn-group',
    'button-toolbar': 'btn-toolbar',
    'column': 'col',
    'input-group': 'input-group',
    'form': 'form',
    'glyphicon': 'glyphicon',
    'label': 'label',
    'thumbnail': 'thumbnail',
    'list-group-item': 'list-group-item',
    'panel': 'panel',
    'panel-group': 'panel-group',
    'pagination': 'pagination',
    'progress-bar': 'progress-bar',
    'nav': 'nav',
    'navbar': 'navbar',
    'modal': 'modal',
    'row': 'row',
    'well': 'well'
  },
  STYLES: ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link', 'inline', 'tabs', 'pills'],
  addStyle: function addStyle(name) {
    styleMaps.STYLES.push(name);
  },
  SIZES: {
    'large': 'lg',
    'medium': 'md',
    'small': 'sm',
    'xsmall': 'xs',
    'lg': 'lg',
    'md': 'md',
    'sm': 'sm',
    'xs': 'xs'
  },
  GRID_COLUMNS: 12
};

exports['default'] = styleMaps;
module.exports = exports['default'];
},{}],231:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _reactPropTypesLibCommon = require('react-prop-types/lib/common');

var _childrenToArray = require('./childrenToArray');

var _childrenToArray2 = _interopRequireDefault(_childrenToArray);

exports['default'] = {

  requiredRoles: function requiredRoles() {
    for (var _len = arguments.length, roles = Array(_len), _key = 0; _key < _len; _key++) {
      roles[_key] = arguments[_key];
    }

    return _reactPropTypesLibCommon.createChainableTypeChecker(function requiredRolesValidator(props, propName, component) {
      var missing = undefined;
      var children = _childrenToArray2['default'](props.children);

      var inRole = function inRole(role, child) {
        return role === child.props.bsRole;
      };

      roles.every(function (role) {
        if (!children.some(function (child) {
          return inRole(role, child);
        })) {
          missing = role;
          return false;
        }
        return true;
      });

      if (missing) {
        return new Error('(children) ' + component + ' - Missing a required child with bsRole: ' + missing + '. ' + (component + ' must have at least one child of each of the following bsRoles: ' + roles.join(', ')));
      }
    });
  },

  exclusiveRoles: function exclusiveRoles() {
    for (var _len2 = arguments.length, roles = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      roles[_key2] = arguments[_key2];
    }

    return _reactPropTypesLibCommon.createChainableTypeChecker(function exclusiveRolesValidator(props, propName, component) {
      var children = _childrenToArray2['default'](props.children);
      var duplicate = undefined;

      roles.every(function (role) {
        var childrenWithRole = children.filter(function (child) {
          return child.props.bsRole === role;
        });

        if (childrenWithRole.length > 1) {
          duplicate = role;
          return false;
        }
        return true;
      });

      if (duplicate) {
        return new Error('(children) ' + component + ' - Duplicate children detected of bsRole: ' + duplicate + '. ' + ('Only one child each allowed with the following bsRoles: ' + roles.join(', ')));
      }
    });
  }
};
module.exports = exports['default'];
},{"./childrenToArray":235,"babel-runtime/helpers/interop-require-default":15,"react-prop-types/lib/common":255}],232:[function(require,module,exports){
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * This file contains a modified version of:
 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/EventListener.js
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * TODO: remove in favour of solution provided by:
 *  https://github.com/facebook/react/issues/285
 */

/**
 * Does not take into account specific nature of platform.
 */
'use strict';

exports.__esModule = true;
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function listen(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  }
};

exports['default'] = EventListener;
module.exports = exports['default'];
},{}],233:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This file contains a modified version of:
 * https://github.com/facebook/react/blob/v0.12.0/src/addons/transitions/ReactTransitionEvents.js
 *
 * This source code is licensed under the BSD-style license found here:
 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
 * An additional grant of patent rights can be found here:
 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
 */

'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * EVENT_NAME_MAP is used to determine which event fired when a
 * transition/animation ends, based on the style property used to
 * define that event.
 */
var EVENT_NAME_MAP = {
  transitionend: {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'mozTransitionEnd',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd'
  },

  animationend: {
    'animation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd',
    'MozAnimation': 'mozAnimationEnd',
    'OAnimation': 'oAnimationEnd',
    'msAnimation': 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are useable, and if not remove them
  // from the map
  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    // eslint-disable-line guard-for-in
    var baseEvents = EVENT_NAME_MAP[baseEventName];
    for (var styleName in baseEvents) {
      if (styleName in style) {
        endEvents.push(baseEvents[styleName]);
        break;
      }
    }
  }
}

if (canUseDOM) {
  detectEvents();
}

// We use the raw {add|remove}EventListener() call because EventListener
// does not know how to remove event listeners and we really should
// clean up. Also, these events are not triggered in older browsers
// so we should be A-OK here.

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var ReactTransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      // If CSS transitions are not supported, trigger an "end animation"
      // event immediately.
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },

  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports['default'] = ReactTransitionEvents;
module.exports = exports['default'];
},{}],234:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * Maps children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} mapFunction.
 * @param {*} mapContext Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapValidComponents(children, func, context) {
  var index = 0;

  return _react2['default'].Children.map(children, function (child) {
    if (_react2['default'].isValidElement(child)) {
      var lastIndex = index;
      index++;
      return func.call(context, child, lastIndex);
    }

    return child;
  });
}

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc.
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachValidComponents(children, func, context) {
  var index = 0;

  return _react2['default'].Children.forEach(children, function (child) {
    if (_react2['default'].isValidElement(child)) {
      func.call(context, child, index);
      index++;
    }
  });
}

/**
 * Count the number of "valid components" in the Children container.
 *
 * @param {?*} children Children tree container.
 * @returns {number}
 */
function numberOfValidComponents(children) {
  var count = 0;

  _react2['default'].Children.forEach(children, function (child) {
    if (_react2['default'].isValidElement(child)) {
      count++;
    }
  });

  return count;
}

/**
 * Determine if the Child container has one or more "valid components".
 *
 * @param {?*} children Children tree container.
 * @returns {boolean}
 */
function hasValidComponent(children) {
  var hasValid = false;

  _react2['default'].Children.forEach(children, function (child) {
    if (!hasValid && _react2['default'].isValidElement(child)) {
      hasValid = true;
    }
  });

  return hasValid;
}

function find(children, finder) {
  var child = undefined;

  forEachValidComponents(children, function (c, idx) {
    if (!child && finder(c, idx, children)) {
      child = c;
    }
  });

  return child;
}

/**
 * Finds children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} findFunc.
 * @param {*} findContext Context for findContext.
 * @returns {array} of children that meet the findFunc return statement
 */
function findValidComponents(children, func, context) {
  var index = 0;
  var returnChildren = [];

  _react2['default'].Children.forEach(children, function (child) {
    if (_react2['default'].isValidElement(child)) {
      if (func.call(context, child, index)) {
        returnChildren.push(child);
      }
      index++;
    }
  });

  return returnChildren;
}

exports['default'] = {
  map: mapValidComponents,
  forEach: forEachValidComponents,
  numberOf: numberOfValidComponents,
  find: find,
  findValidComponents: findValidComponents,
  hasValidComponent: hasValidComponent
};
module.exports = exports['default'];
},{"babel-runtime/helpers/interop-require-default":15,"react":"react"}],235:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;
exports['default'] = childrenAsArray;

var _ValidComponentChildren = require('./ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function childrenAsArray(children) {
  var result = [];

  if (children === undefined) {
    return result;
  }

  _ValidComponentChildren2['default'].forEach(children, function (child) {
    result.push(child);
  });

  return result;
}

module.exports = exports['default'];
},{"./ValidComponentChildren":234,"babel-runtime/helpers/interop-require-default":15}],236:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;
exports['default'] = valueValidation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPropTypesLibSinglePropFrom = require('react-prop-types/lib/singlePropFrom');

var _reactPropTypesLibSinglePropFrom2 = _interopRequireDefault(_reactPropTypesLibSinglePropFrom);

function valueValidation(props, propName, componentName) {
  var error = _reactPropTypesLibSinglePropFrom2['default']('children', 'value')(props, propName, componentName);

  if (!error) {
    error = _react2['default'].PropTypes.node(props, propName, componentName);
  }

  return error;
}

module.exports = exports['default'];
},{"babel-runtime/helpers/interop-require-default":15,"react":"react","react-prop-types/lib/singlePropFrom":260}],237:[function(require,module,exports){
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
'use strict';

exports.__esModule = true;
function createChainedFunction() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) {
      return f;
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

exports['default'] = createChainedFunction;
module.exports = exports['default'];
},{}],238:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = createSelectedEvent;

function createSelectedEvent(eventKey) {
  var selectionPrevented = false;

  return {
    eventKey: eventKey,

    preventSelection: function preventSelection() {
      selectionPrevented = true;
    },

    isSelectionPrevented: function isSelectionPrevented() {
      return selectionPrevented;
    }
  };
}

module.exports = exports["default"];
},{}],239:[function(require,module,exports){
'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var warned = {};

function deprecationWarning(oldname, newname, link) {
  var message = undefined;

  if (typeof oldname === 'object') {
    message = oldname.message;
  } else {
    message = oldname + ' is deprecated. Use ' + newname + ' instead.';

    if (link) {
      message += '\nYou can read more about it at ' + link;
    }
  }

  if (warned[message]) {
    return;
  }

  _warning2['default'](false, message);
  warned[message] = true;
}

deprecationWarning.wrapper = function (Component) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return (function (_Component) {
    _inherits(DeprecatedComponent, _Component);

    function DeprecatedComponent() {
      _classCallCheck(this, DeprecatedComponent);

      _Component.apply(this, arguments);
    }

    DeprecatedComponent.prototype.componentWillMount = function componentWillMount() {
      deprecationWarning.apply(undefined, args);

      if (_Component.prototype.componentWillMount) {
        var _Component$prototype$componentWillMount;

        for (var _len2 = arguments.length, methodArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          methodArgs[_key2] = arguments[_key2];
        }

        (_Component$prototype$componentWillMount = _Component.prototype.componentWillMount).call.apply(_Component$prototype$componentWillMount, [this].concat(methodArgs));
      }
    };

    return DeprecatedComponent;
  })(Component);
};

exports['default'] = deprecationWarning;
module.exports = exports['default'];
},{"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15,"warning":282}],240:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domHelpersOwnerDocument = require('dom-helpers/ownerDocument');

var _domHelpersOwnerDocument2 = _interopRequireDefault(_domHelpersOwnerDocument);

var _domHelpersOwnerWindow = require('dom-helpers/ownerWindow');

var _domHelpersOwnerWindow2 = _interopRequireDefault(_domHelpersOwnerWindow);

function ownerDocument(componentOrElement) {
  var elem = _reactDom2['default'].findDOMNode(componentOrElement);
  return _domHelpersOwnerDocument2['default'](elem && elem.ownerDocument || document);
}

function ownerWindow(componentOrElement) {
  var doc = ownerDocument(componentOrElement);
  return _domHelpersOwnerWindow2['default'](doc);
}

/**
 * Get the height of the document
 *
 * @returns {documentHeight: number}
 */
function getDocumentHeight() {
  return Math.max(document.documentElement.offsetHeight, document.height, document.body.scrollHeight, document.body.offsetHeight);
}

/**
 * Get an element's size
 *
 * @param {HTMLElement} elem
 * @returns {{width: number, height: number}}
 */
function getSize(elem) {
  var rect = {
    width: elem.offsetWidth || 0,
    height: elem.offsetHeight || 0
  };
  if (typeof elem.getBoundingClientRect !== 'undefined') {
    var _elem$getBoundingClientRect = elem.getBoundingClientRect();

    var width = _elem$getBoundingClientRect.width;
    var height = _elem$getBoundingClientRect.height;

    rect.width = width || rect.width;
    rect.height = height || rect.height;
  }
  return rect;
}

exports['default'] = {
  ownerWindow: ownerWindow,
  ownerDocument: ownerDocument,
  getDocumentHeight: getDocumentHeight,
  getSize: getSize
};
module.exports = exports['default'];
},{"babel-runtime/helpers/interop-require-default":15,"dom-helpers/ownerDocument":50,"dom-helpers/ownerWindow":51,"react-dom":"react-dom"}],241:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Position = require('./Position');

var _Position2 = _interopRequireDefault(_Position);

var _RootCloseWrapper = require('./RootCloseWrapper');

var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

/**
 * Built on top of `<Position/>` and `<Portal/>`, the overlay component is great for custom tooltip overlays.
 */

var Overlay = (function (_React$Component) {
  function Overlay(props, context) {
    _classCallCheck(this, Overlay);

    _React$Component.call(this, props, context);

    this.state = { exited: !props.show };
    this.onHiddenListener = this.handleHidden.bind(this);
  }

  _inherits(Overlay, _React$Component);

  Overlay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({ exited: false });
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      this.setState({ exited: true });
    }
  };

  Overlay.prototype.render = function render() {
    var _props = this.props;
    var container = _props.container;
    var containerPadding = _props.containerPadding;
    var target = _props.target;
    var placement = _props.placement;
    var rootClose = _props.rootClose;
    var children = _props.children;
    var Transition = _props.transition;

    var props = _objectWithoutProperties(_props, ['container', 'containerPadding', 'target', 'placement', 'rootClose', 'children', 'transition']);

    // Don't un-render the overlay while it's transitioning out.
    var mountOverlay = props.show || Transition && !this.state.exited;
    if (!mountOverlay) {
      // Don't bother showing anything if we don't have to.
      return null;
    }

    var child = children;

    // Position is be inner-most because it adds inline styles into the child,
    // which the other wrappers don't forward correctly.
    child = _react2['default'].createElement(
      _Position2['default'],
      { container: container, containerPadding: containerPadding, target: target, placement: placement },
      child
    );

    if (Transition) {
      var onExit = props.onExit;
      var onExiting = props.onExiting;
      var onEnter = props.onEnter;
      var onEntering = props.onEntering;
      var onEntered = props.onEntered;

      // This animates the child node by injecting props, so it must precede
      // anything that adds a wrapping div.
      child = _react2['default'].createElement(
        Transition,
        {
          'in': props.show,
          transitionAppear: true,
          onExit: onExit,
          onExiting: onExiting,
          onExited: this.onHiddenListener,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered
        },
        child
      );
    }

    // This goes after everything else because it adds a wrapping div.
    if (rootClose) {
      child = _react2['default'].createElement(
        _RootCloseWrapper2['default'],
        { onRootClose: props.onHide },
        child
      );
    }

    return _react2['default'].createElement(
      _Portal2['default'],
      { container: container },
      child
    );
  };

  Overlay.prototype.handleHidden = function handleHidden() {
    this.setState({ exited: true });

    if (this.props.onExited) {
      var _props2;

      (_props2 = this.props).onExited.apply(_props2, arguments);
    }
  };

  return Overlay;
})(_react2['default'].Component);

Overlay.propTypes = _extends({}, _Portal2['default'].propTypes, _Position2['default'].propTypes, {
  /**
   * Set the visibility of the Overlay
   */
  show: _react2['default'].PropTypes.bool,
  /**
   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
   */
  rootClose: _react2['default'].PropTypes.bool,
  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   */
  onHide: _react2['default'].PropTypes.func,

  /**
   * A `<Transition/>` component used to animate the overlay changes visibility.
   */
  transition: _reactPropTypesLibElementType2['default'],

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _react2['default'].PropTypes.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _react2['default'].PropTypes.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _react2['default'].PropTypes.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _react2['default'].PropTypes.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _react2['default'].PropTypes.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _react2['default'].PropTypes.func
});

exports['default'] = Overlay;
module.exports = exports['default'];
},{"./Portal":242,"./Position":243,"./RootCloseWrapper":244,"react":"react","react-prop-types/lib/elementType":252}],242:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactPropTypesLibMountable = require('react-prop-types/lib/mountable');

var _reactPropTypesLibMountable2 = _interopRequireDefault(_reactPropTypesLibMountable);

var _utilsOwnerDocument = require('./utils/ownerDocument');

var _utilsOwnerDocument2 = _interopRequireDefault(_utilsOwnerDocument);

var _utilsGetContainer = require('./utils/getContainer');

var _utilsGetContainer2 = _interopRequireDefault(_utilsGetContainer);

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal = _react2['default'].createClass({

  displayName: 'Portal',

  propTypes: {
    /**
     * A Node, Component instance, or function that returns either. The `container` will have the Portal children
     * appended to it.
     */
    container: _react2['default'].PropTypes.oneOfType([_reactPropTypesLibMountable2['default'], _react2['default'].PropTypes.func])
  },

  componentDidMount: function componentDidMount() {
    this._renderOverlay();
  },

  componentDidUpdate: function componentDidUpdate() {
    this._renderOverlay();
  },

  componentWillUnmount: function componentWillUnmount() {
    this._unrenderOverlay();
    this._unmountOverlayTarget();
  },

  _mountOverlayTarget: function _mountOverlayTarget() {
    if (!this._overlayTarget) {
      this._overlayTarget = document.createElement('div');
      this.getContainerDOMNode().appendChild(this._overlayTarget);
    }
  },

  _unmountOverlayTarget: function _unmountOverlayTarget() {
    if (this._overlayTarget) {
      this.getContainerDOMNode().removeChild(this._overlayTarget);
      this._overlayTarget = null;
    }
  },

  _renderOverlay: function _renderOverlay() {

    var overlay = !this.props.children ? null : _react2['default'].Children.only(this.props.children);

    // Save reference for future access.
    if (overlay !== null) {
      this._mountOverlayTarget();
      this._overlayInstance = _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, overlay, this._overlayTarget);
    } else {
      // Unrender if the component is null for transitions to null
      this._unrenderOverlay();
      this._unmountOverlayTarget();
    }
  },

  _unrenderOverlay: function _unrenderOverlay() {
    if (this._overlayTarget) {
      _reactDom2['default'].unmountComponentAtNode(this._overlayTarget);
      this._overlayInstance = null;
    }
  },

  render: function render() {
    return null;
  },

  getMountNode: function getMountNode() {
    return this._overlayTarget;
  },

  getOverlayDOMNode: function getOverlayDOMNode() {
    if (!this.isMounted()) {
      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
    }

    if (this._overlayInstance) {
      if (this._overlayInstance.getWrappedDOMNode) {
        return this._overlayInstance.getWrappedDOMNode();
      } else {
        return _reactDom2['default'].findDOMNode(this._overlayInstance);
      }
    }

    return null;
  },

  getContainerDOMNode: function getContainerDOMNode() {
    return _utilsGetContainer2['default'](this.props.container, _utilsOwnerDocument2['default'](this).body);
  }
});

exports['default'] = Portal;
module.exports = exports['default'];
},{"./utils/getContainer":248,"./utils/ownerDocument":250,"react":"react","react-dom":"react-dom","react-prop-types/lib/mountable":253}],243:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsOwnerDocument = require('./utils/ownerDocument');

var _utilsOwnerDocument2 = _interopRequireDefault(_utilsOwnerDocument);

var _utilsGetContainer = require('./utils/getContainer');

var _utilsGetContainer2 = _interopRequireDefault(_utilsGetContainer);

var _utilsOverlayPositionUtils = require('./utils/overlayPositionUtils');

var _reactPropTypesLibMountable = require('react-prop-types/lib/mountable');

var _reactPropTypesLibMountable2 = _interopRequireDefault(_reactPropTypesLibMountable);

/**
 * The Position component calulates the corrdinates for its child, to
 * position it relative to a `target` component or node. Useful for creating callouts and tooltips,
 * the Position component injects a `style` props with `left` and `top` values for positioning your component.
 *
 * It also injects "arrow" `left`, and `top` values for styling callout arrows for giving your components
 * a sense of directionality.
 */

var Position = (function (_React$Component) {
  function Position(props, context) {
    _classCallCheck(this, Position);

    _React$Component.call(this, props, context);

    this.state = {
      positionLeft: null,
      positionTop: null,
      arrowOffsetLeft: null,
      arrowOffsetTop: null
    };

    this._needsFlush = false;
    this._lastTarget = null;
  }

  _inherits(Position, _React$Component);

  Position.prototype.componentDidMount = function componentDidMount() {
    this.updatePosition();
  };

  Position.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this._needsFlush = true;
  };

  Position.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this._needsFlush) {
      this._needsFlush = false;
      this.updatePosition(prevProps.placement !== this.props.placement);
    }
  };

  Position.prototype.componentWillUnmount = function componentWillUnmount() {
    // Probably not necessary, but just in case holding a reference to the
    // target causes problems somewhere.
    this._lastTarget = null;
  };

  Position.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['children', 'className']);

    var _state = this.state;
    var positionLeft = _state.positionLeft;
    var positionTop = _state.positionTop;

    var arrowPosition = _objectWithoutProperties(_state, ['positionLeft', 'positionTop']);

    var child = _react2['default'].Children.only(children);
    return _react.cloneElement(child, _extends({}, props, arrowPosition, {
      //do we need to also forward positionLeft and positionTop if they are set to style?
      positionLeft: positionLeft,
      positionTop: positionTop,
      className: _classnames2['default'](className, child.props.className),
      style: _extends({}, child.props.style, {
        left: positionLeft,
        top: positionTop
      })
    }));
  };

  Position.prototype.getTargetSafe = function getTargetSafe() {
    if (!this.props.target) {
      return null;
    }

    var target = this.props.target(this.props);
    if (!target) {
      // This is so we can just use === check below on all falsy targets.
      return null;
    }

    return target;
  };

  Position.prototype.updatePosition = function updatePosition(placementChanged) {
    var target = this.getTargetSafe();

    if (target === this._lastTarget && !placementChanged) {
      return;
    }

    this._lastTarget = target;

    if (!target) {
      this.setState({
        positionLeft: null,
        positionTop: null,
        arrowOffsetLeft: null,
        arrowOffsetTop: null
      });

      return;
    }

    var overlay = _reactDom2['default'].findDOMNode(this);
    var container = _utilsGetContainer2['default'](this.props.container, _utilsOwnerDocument2['default'](this).body);

    this.setState(_utilsOverlayPositionUtils.calcOverlayPosition(this.props.placement, overlay, target, container, this.props.containerPadding));
  };

  return Position;
})(_react2['default'].Component);

Position.propTypes = {
  /**
   * Function mapping props to a DOM node the component is positioned next to
   */
  target: _react2['default'].PropTypes.func,
  /**
   * "offsetParent" of the component
   */
  container: _reactPropTypesLibMountable2['default'],
  /**
   * Minimum spacing in pixels between container border and component border
   */
  containerPadding: _react2['default'].PropTypes.number,
  /**
   * How to position the component relative to the target
   */
  placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};

Position.displayName = 'Position';

Position.defaultProps = {
  containerPadding: 0,
  placement: 'right'
};

exports['default'] = Position;
module.exports = exports['default'];
},{"./utils/getContainer":248,"./utils/overlayPositionUtils":249,"./utils/ownerDocument":250,"classnames":18,"react":"react","react-dom":"react-dom","react-prop-types/lib/mountable":253}],244:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utilsAddEventListener = require('./utils/addEventListener');

var _utilsAddEventListener2 = _interopRequireDefault(_utilsAddEventListener);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsOwnerDocument = require('./utils/ownerDocument');

var _utilsOwnerDocument2 = _interopRequireDefault(_utilsOwnerDocument);

// TODO: Consider using an ES6 symbol here, once we use babel-runtime.
var CLICK_WAS_INSIDE = '__click_was_inside';

var counter = 0;

function getSuppressRootClose() {
  var id = CLICK_WAS_INSIDE + '_' + counter++;
  return {
    id: id,
    suppressRootClose: function suppressRootClose(event) {
      // Tag the native event to prevent the root close logic on document click.
      // This seems safer than using event.nativeEvent.stopImmediatePropagation(),
      // which is only supported in IE >= 9.
      event.nativeEvent[id] = true;
    }
  };
}

var RootCloseWrapper = (function (_React$Component) {
  function RootCloseWrapper(props) {
    _classCallCheck(this, RootCloseWrapper);

    _React$Component.call(this, props);

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleDocumentKeyUp = this.handleDocumentKeyUp.bind(this);

    var _getSuppressRootClose = getSuppressRootClose();

    var id = _getSuppressRootClose.id;
    var suppressRootClose = _getSuppressRootClose.suppressRootClose;

    this._suppressRootId = id;

    this._suppressRootCloseHandler = suppressRootClose;
  }

  _inherits(RootCloseWrapper, _React$Component);

  RootCloseWrapper.prototype.bindRootCloseHandlers = function bindRootCloseHandlers() {
    var doc = _utilsOwnerDocument2['default'](this);

    this._onDocumentClickListener = _utilsAddEventListener2['default'](doc, 'click', this.handleDocumentClick);

    this._onDocumentKeyupListener = _utilsAddEventListener2['default'](doc, 'keyup', this.handleDocumentKeyUp);
  };

  RootCloseWrapper.prototype.handleDocumentClick = function handleDocumentClick(e) {
    // This is now the native event.
    if (e[this._suppressRootId]) {
      return;
    }

    this.props.onRootClose();
  };

  RootCloseWrapper.prototype.handleDocumentKeyUp = function handleDocumentKeyUp(e) {
    if (e.keyCode === 27) {
      this.props.onRootClose();
    }
  };

  RootCloseWrapper.prototype.unbindRootCloseHandlers = function unbindRootCloseHandlers() {
    if (this._onDocumentClickListener) {
      this._onDocumentClickListener.remove();
    }

    if (this._onDocumentKeyupListener) {
      this._onDocumentKeyupListener.remove();
    }
  };

  RootCloseWrapper.prototype.componentDidMount = function componentDidMount() {
    this.bindRootCloseHandlers();
  };

  RootCloseWrapper.prototype.render = function render() {
    var _props = this.props;
    var noWrap = _props.noWrap;
    var children = _props.children;

    var child = _react2['default'].Children.only(children);

    if (noWrap) {
      return _react2['default'].cloneElement(child, {
        onClick: _utilsCreateChainedFunction2['default'](this._suppressRootCloseHandler, child.props.onClick)
      });
    }

    // Wrap the child in a new element, so the child won't have to handle
    // potentially combining multiple onClick listeners.
    return _react2['default'].createElement(
      'div',
      { onClick: this._suppressRootCloseHandler },
      child
    );
  };

  RootCloseWrapper.prototype.getWrappedDOMNode = function getWrappedDOMNode() {
    // We can't use a ref to identify the wrapped child, since we might be
    // stealing the ref from the owner, but we know exactly the DOM structure
    // that will be rendered, so we can just do this to get the child's DOM
    // node for doing size calculations in OverlayMixin.
    var node = _reactDom2['default'].findDOMNode(this);
    return this.props.noWrap ? node : node.firstChild;
  };

  RootCloseWrapper.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unbindRootCloseHandlers();
  };

  return RootCloseWrapper;
})(_react2['default'].Component);

exports['default'] = RootCloseWrapper;

RootCloseWrapper.displayName = 'RootCloseWrapper';

RootCloseWrapper.propTypes = {
  onRootClose: _react2['default'].PropTypes.func.isRequired,

  /**
   * Passes the suppress click handler directly to the child component instead
   * of placing it on a wrapping div. Only use when you can be sure the child
   * properly handle the click event.
   */
  noWrap: _react2['default'].PropTypes.bool
};
module.exports = exports['default'];
},{"./utils/addEventListener":246,"./utils/createChainedFunction":247,"./utils/ownerDocument":250,"react":"react","react-dom":"react-dom"}],245:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domHelpersTransitionProperties = require('dom-helpers/transition/properties');

var _domHelpersTransitionProperties2 = _interopRequireDefault(_domHelpersTransitionProperties);

var _domHelpersEventsOn = require('dom-helpers/events/on');

var _domHelpersEventsOn2 = _interopRequireDefault(_domHelpersEventsOn);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var transitionEndEvent = _domHelpersTransitionProperties2['default'].end;

var UNMOUNTED = 0;
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 1;
exports.EXITED = EXITED;
var ENTERING = 2;
exports.ENTERING = ENTERING;
var ENTERED = 3;
exports.ENTERED = ENTERED;
var EXITING = 4;

exports.EXITING = EXITING;
/**
 * The Transition component lets you define and run css transitions with a simple declarative api.
 * It works similar to React's own [CSSTransitionGroup](http://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup)
 * but is specifically optimized for transitioning a single child "in" or "out".
 *
 * You don't even need to use class based css transitions if you don't want to (but it is easiest).
 * The extensive set of lifecyle callbacks means you have control over
 * the transitioning now at each step of the way.
 */

var Transition = (function (_React$Component) {
  function Transition(props, context) {
    _classCallCheck(this, Transition);

    _React$Component.call(this, props, context);

    var initialStatus = undefined;
    if (props['in']) {
      // Start enter transition in componentDidMount.
      initialStatus = props.transitionAppear ? EXITED : ENTERED;
    } else {
      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
    }
    this.state = { status: initialStatus };

    this.nextCallback = null;
  }

  _inherits(Transition, _React$Component);

  Transition.prototype.componentDidMount = function componentDidMount() {
    if (this.props.transitionAppear && this.props['in']) {
      this.performEnter(this.props);
    }
  };

  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var status = this.state.status;
    if (nextProps['in']) {
      if (status === EXITING) {
        this.performEnter(nextProps);
      } else if (this.props.unmountOnExit) {
        if (status === UNMOUNTED) {
          // Start enter transition in componentDidUpdate.
          this.setState({ status: EXITED });
        }
      } else if (status === EXITED) {
        this.performEnter(nextProps);
      }

      // Otherwise we're already entering or entered.
    } else {
      if (status === ENTERING || status === ENTERED) {
        this.performExit(nextProps);
      }

      // Otherwise we're already exited or exiting.
    }
  };

  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.unmountOnExit && this.state.status === EXITED) {
      // EXITED is always a transitional state to either ENTERING or UNMOUNTED
      // when using unmountOnExit.
      if (this.props['in']) {
        this.performEnter(this.props);
      } else {
        this.setState({ status: UNMOUNTED });
      }
    }
  };

  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  Transition.prototype.performEnter = function performEnter(props) {
    var _this = this;

    this.cancelNextCallback();
    var node = _reactDom2['default'].findDOMNode(this);

    // Not this.props, because we might be about to receive new props.
    props.onEnter(node);

    this.safeSetState({ status: ENTERING }, function () {
      _this.props.onEntering(node);

      _this.onTransitionEnd(node, function () {
        _this.safeSetState({ status: ENTERED }, function () {
          _this.props.onEntered(node);
        });
      });
    });
  };

  Transition.prototype.performExit = function performExit(props) {
    var _this2 = this;

    this.cancelNextCallback();
    var node = _reactDom2['default'].findDOMNode(this);

    // Not this.props, because we might be about to receive new props.
    props.onExit(node);

    this.safeSetState({ status: EXITING }, function () {
      _this2.props.onExiting(node);

      _this2.onTransitionEnd(node, function () {
        _this2.safeSetState({ status: EXITED }, function () {
          _this2.props.onExited(node);
        });
      });
    });
  };

  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    this.setState(nextState, this.setNextCallback(callback));
  };

  Transition.prototype.setNextCallback = function setNextCallback(callback) {
    var _this3 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this3.nextCallback = null;

        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
    this.setNextCallback(handler);

    if (node) {
      _domHelpersEventsOn2['default'](node, transitionEndEvent, this.nextCallback);
      setTimeout(this.nextCallback, this.props.timeout);
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  Transition.prototype.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }

    var _props = this.props;
    var children = _props.children;
    var className = _props.className;

    var childProps = _objectWithoutProperties(_props, ['children', 'className']);

    Object.keys(Transition.propTypes).forEach(function (key) {
      return delete childProps[key];
    });

    var transitionClassName = undefined;
    if (status === EXITED) {
      transitionClassName = this.props.exitedClassName;
    } else if (status === ENTERING) {
      transitionClassName = this.props.enteringClassName;
    } else if (status === ENTERED) {
      transitionClassName = this.props.enteredClassName;
    } else if (status === EXITING) {
      transitionClassName = this.props.exitingClassName;
    }

    var child = _react2['default'].Children.only(children);
    return _react2['default'].cloneElement(child, _extends({}, childProps, {
      className: _classnames2['default'](child.props.className, className, transitionClassName)
    }));
  };

  return Transition;
})(_react2['default'].Component);

Transition.propTypes = {
  /**
   * Show the component; triggers the enter or exit animation
   */
  'in': _react2['default'].PropTypes.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is not shown
   */
  unmountOnExit: _react2['default'].PropTypes.bool,

  /**
   * Run the enter animation when the component mounts, if it is initially
   * shown
   */
  transitionAppear: _react2['default'].PropTypes.bool,

  /**
   * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
   * transition indefinately if the browser transitionEnd events are
   * canceled or interrupted.
   *
   * By default this is set to a high number (5 seconds) as a failsafe. You should consider
   * setting this to the duration of your animation (or a bit above it).
   */
  timeout: _react2['default'].PropTypes.number,

  /**
   * CSS class or classes applied when the component is exited
   */
  exitedClassName: _react2['default'].PropTypes.string,
  /**
   * CSS class or classes applied while the component is exiting
   */
  exitingClassName: _react2['default'].PropTypes.string,
  /**
   * CSS class or classes applied when the component is entered
   */
  enteredClassName: _react2['default'].PropTypes.string,
  /**
   * CSS class or classes applied while the component is entering
   */
  enteringClassName: _react2['default'].PropTypes.string,

  /**
   * Callback fired before the "entering" classes are applied
   */
  onEnter: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the "entering" classes are applied
   */
  onEntering: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the "enter" classes are applied
   */
  onEntered: _react2['default'].PropTypes.func,
  /**
   * Callback fired before the "exiting" classes are applied
   */
  onExit: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the "exiting" classes are applied
   */
  onExiting: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the "exited" classes are applied
   */
  onExited: _react2['default'].PropTypes.func
};

// Name the function so it is clearer in the documentation
function noop() {}

Transition.displayName = 'Transition';

Transition.defaultProps = {
  'in': false,
  unmountOnExit: false,
  transitionAppear: false,

  timeout: 5000,

  onEnter: noop,
  onEntering: noop,
  onEntered: noop,

  onExit: noop,
  onExiting: noop,
  onExited: noop
};

exports['default'] = Transition;
},{"classnames":18,"dom-helpers/events/on":49,"dom-helpers/transition/properties":62,"react":"react","react-dom":"react-dom"}],246:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _domHelpersEventsOn = require('dom-helpers/events/on');

var _domHelpersEventsOn2 = _interopRequireDefault(_domHelpersEventsOn);

var _domHelpersEventsOff = require('dom-helpers/events/off');

var _domHelpersEventsOff2 = _interopRequireDefault(_domHelpersEventsOff);

exports['default'] = function (node, event, handler) {
  _domHelpersEventsOn2['default'](node, event, handler);
  return {
    remove: function remove() {
      _domHelpersEventsOff2['default'](node, event, handler);
    }
  };
};

module.exports = exports['default'];
},{"dom-helpers/events/off":48,"dom-helpers/events/on":49}],247:[function(require,module,exports){
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
'use strict';

exports.__esModule = true;
function createChainedFunction() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) {
      return f;
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

exports['default'] = createChainedFunction;
module.exports = exports['default'];
},{}],248:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = getContainer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom2['default'].findDOMNode(container) || defaultContainer;
}

module.exports = exports['default'];
},{"react-dom":"react-dom"}],249:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ownerDocument = require('./ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _domHelpersQueryOffset = require('dom-helpers/query/offset');

var _domHelpersQueryOffset2 = _interopRequireDefault(_domHelpersQueryOffset);

var _domHelpersQueryPosition = require('dom-helpers/query/position');

var _domHelpersQueryPosition2 = _interopRequireDefault(_domHelpersQueryPosition);

var _domHelpersQueryScrollTop = require('dom-helpers/query/scrollTop');

var _domHelpersQueryScrollTop2 = _interopRequireDefault(_domHelpersQueryScrollTop);

var utils = {

  getContainerDimensions: function getContainerDimensions(containerNode) {
    var width = undefined,
        height = undefined,
        scroll = undefined;

    if (containerNode.tagName === 'BODY') {
      width = window.innerWidth;
      height = window.innerHeight;

      scroll = _domHelpersQueryScrollTop2['default'](_ownerDocument2['default'](containerNode).documentElement) || _domHelpersQueryScrollTop2['default'](containerNode);
    } else {
      var _getOffset = _domHelpersQueryOffset2['default'](containerNode);

      width = _getOffset.width;
      height = _getOffset.height;

      scroll = _domHelpersQueryScrollTop2['default'](containerNode);
    }

    return { width: width, height: height, scroll: scroll };
  },

  getPosition: function getPosition(target, container) {
    var offset = container.tagName === 'BODY' ? _domHelpersQueryOffset2['default'](target) : _domHelpersQueryPosition2['default'](target, container);

    return offset;
  },

  calcOverlayPosition: function calcOverlayPosition(placement, overlayNode, target, container, padding) {
    var childOffset = utils.getPosition(target, container);

    var _getOffset2 = _domHelpersQueryOffset2['default'](overlayNode);

    var overlayHeight = _getOffset2.height;
    var overlayWidth = _getOffset2.width;

    var positionLeft = undefined,
        positionTop = undefined,
        arrowOffsetLeft = undefined,
        arrowOffsetTop = undefined;

    if (placement === 'left' || placement === 'right') {
      positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;

      if (placement === 'left') {
        positionLeft = childOffset.left - overlayWidth;
      } else {
        positionLeft = childOffset.left + childOffset.width;
      }

      var topDelta = getTopDelta(positionTop, overlayHeight, container, padding);

      positionTop += topDelta;
      arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
      arrowOffsetLeft = void 0;
    } else if (placement === 'top' || placement === 'bottom') {
      positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;

      if (placement === 'top') {
        positionTop = childOffset.top - overlayHeight;
      } else {
        positionTop = childOffset.top + childOffset.height;
      }

      var leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);
      positionLeft += leftDelta;
      arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
      arrowOffsetTop = void 0;
    } else {
      throw new Error('calcOverlayPosition(): No such placement of "' + placement + '" found.');
    }

    return { positionLeft: positionLeft, positionTop: positionTop, arrowOffsetLeft: arrowOffsetLeft, arrowOffsetTop: arrowOffsetTop };
  }
};

function getTopDelta(top, overlayHeight, container, padding) {
  var containerDimensions = utils.getContainerDimensions(container);
  var containerScroll = containerDimensions.scroll;
  var containerHeight = containerDimensions.height;

  var topEdgeOffset = top - padding - containerScroll;
  var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;

  if (topEdgeOffset < 0) {
    return -topEdgeOffset;
  } else if (bottomEdgeOffset > containerHeight) {
    return containerHeight - bottomEdgeOffset;
  } else {
    return 0;
  }
}

function getLeftDelta(left, overlayWidth, container, padding) {
  var containerDimensions = utils.getContainerDimensions(container);
  var containerWidth = containerDimensions.width;

  var leftEdgeOffset = left - padding;
  var rightEdgeOffset = left + padding + overlayWidth;

  if (leftEdgeOffset < 0) {
    return -leftEdgeOffset;
  } else if (rightEdgeOffset > containerWidth) {
    return containerWidth - rightEdgeOffset;
  } else {
    return 0;
  }
}
exports['default'] = utils;
module.exports = exports['default'];
},{"./ownerDocument":250,"dom-helpers/query/offset":54,"dom-helpers/query/position":56,"dom-helpers/query/scrollTop":58}],250:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domHelpersOwnerDocument = require('dom-helpers/ownerDocument');

var _domHelpersOwnerDocument2 = _interopRequireDefault(_domHelpersOwnerDocument);

exports['default'] = function (componentOrElement) {
  return _domHelpersOwnerDocument2['default'](_reactDom2['default'].findDOMNode(componentOrElement));
};

module.exports = exports['default'];
},{"dom-helpers/ownerDocument":50,"react-dom":"react-dom"}],251:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.errMsg = errMsg;
exports.createChainableTypeChecker = createChainableTypeChecker;

function errMsg(props, propName, componentName, msgContinuation) {
  return 'Invalid prop \'' + propName + '\' of value \'' + props[propName] + '\'' + (' supplied to \'' + componentName + '\'' + msgContinuation);
}

/**
 * Create chain-able isRequired validator
 *
 * Largely copied directly from:
 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
 */

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName) {
    componentName = componentName || '<<anonymous>>';
    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required prop \'' + propName + '\' was not specified in \'' + componentName + '\'.');
      }
    } else {
      return validate(props, propName, componentName);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
},{}],252:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _common = require('./common');

/**
 * Checks whether a prop provides a type of element.
 *
 * The type of element can be provided in two forms:
 * - tag name (string)
 * - a return value of React.createClass(...)
 *
 * @param props
 * @param propName
 * @param componentName
 * @returns {Error|undefined}
 */

function validate(props, propName, componentName) {
  var errBeginning = _common.errMsg(props, propName, componentName, '. Expected an Element `type`');

  if (typeof props[propName] !== 'function') {
    if (_react2['default'].isValidElement(props[propName])) {
      return new Error(errBeginning + ', not an actual Element');
    }

    if (typeof props[propName] !== 'string') {
      return new Error(errBeginning + ' such as a tag name or return value of React.createClass(...)');
    }
  }
}

exports['default'] = _common.createChainableTypeChecker(validate);
module.exports = exports['default'];
},{"./common":251,"react":"react"}],253:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _common = require('./common');

/**
 * Checks whether a prop provides a DOM element
 *
 * The element can be provided in two forms:
 * - Directly passed
 * - Or passed an object that has a `render` method
 *
 * @param props
 * @param propName
 * @param componentName
 * @returns {Error|undefined}
 */

function validate(props, propName, componentName) {
  if (typeof props[propName] !== 'object' || typeof props[propName].render !== 'function' && props[propName].nodeType !== 1) {
    return new Error(_common.errMsg(props, propName, componentName, ', expected a DOM element or an object that has a `render` method'));
  }
}

exports['default'] = _common.createChainableTypeChecker(validate);
module.exports = exports['default'];
},{"./common":251}],254:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = all;

function all() {
  for (var _len = arguments.length, propTypes = Array(_len), _key = 0; _key < _len; _key++) {
    propTypes[_key] = arguments[_key];
  }

  if (propTypes === undefined) {
    throw new Error('No validations provided');
  }

  if (propTypes.some(function (propType) {
    return typeof propType !== 'function';
  })) {
    throw new Error('Invalid arguments, must be functions');
  }

  if (propTypes.length === 0) {
    throw new Error('No validations provided');
  }

  return function validate(props, propName, componentName) {
    for (var i = 0; i < propTypes.length; i++) {
      var result = propTypes[i](props, propName, componentName);

      if (result !== undefined && result !== null) {
        return result;
      }
    }
  };
}

module.exports = exports['default'];
},{}],255:[function(require,module,exports){
arguments[4][251][0].apply(exports,arguments)
},{"dup":251}],256:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = deprecated;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] != null) {
      _warning2['default'](false, '"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation);
    }

    return propType(props, propName, componentName);
  };
}

module.exports = exports['default'];
},{"warning":282}],257:[function(require,module,exports){
arguments[4][252][0].apply(exports,arguments)
},{"./common":255,"dup":252,"react":"react"}],258:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = isRequiredForA11y;

function isRequiredForA11y(propType) {
  return function validate(props, propName, componentName) {
    if (props[propName] == null) {
      return new Error("The prop '" + propName + "' is required to make '" + componentName + "' accessible" + " for users using assistive technologies such as screen readers");
    }

    return propType(props, propName, componentName);
  };
}

module.exports = exports["default"];
},{}],259:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = keyOf;

var _common = require('./common');

/**
 * Checks whether a prop matches a key of an associated object
 *
 * @param props
 * @param propName
 * @param componentName
 * @returns {Error|undefined}
 */

function keyOf(obj) {
  function validate(props, propName, componentName) {
    var propValue = props[propName];
    if (!obj.hasOwnProperty(propValue)) {
      var valuesString = JSON.stringify(Object.keys(obj));
      return new Error(_common.errMsg(props, propName, componentName, ', expected one of ' + valuesString + '.'));
    }
  }
  return _common.createChainableTypeChecker(validate);
}

module.exports = exports['default'];
},{"./common":255}],260:[function(require,module,exports){
/**
 * Checks if only one of the listed properties is in use. An error is given
 * if multiple have a value
 *
 * @param props
 * @param propName
 * @param componentName
 * @returns {Error|undefined}
 */
'use strict';

exports.__esModule = true;
exports['default'] = createSinglePropFromChecker;

function createSinglePropFromChecker() {
  for (var _len = arguments.length, arrOfProps = Array(_len), _key = 0; _key < _len; _key++) {
    arrOfProps[_key] = arguments[_key];
  }

  function validate(props, propName, componentName) {
    var usedPropCount = arrOfProps.map(function (listedProp) {
      return props[listedProp];
    }).reduce(function (acc, curr) {
      return acc + (curr !== undefined ? 1 : 0);
    }, 0);

    if (usedPropCount > 1) {
      var first = arrOfProps[0];
      var others = arrOfProps.slice(1);

      var message = others.join(', ') + ' and ' + first;
      return new Error('Invalid prop \'' + propName + '\', only one of the following ' + ('may be provided: ' + message));
    }
  }
  return validate;
}

module.exports = exports['default'];
},{}],261:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyOf
 */

/**
 * Allows extraction of a minified key. Let's the build system minify keys
 * without losing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */
"use strict";

var keyOf = function (oneKeyObj) {
  var key;
  for (key in oneKeyObj) {
    if (!oneKeyObj.hasOwnProperty(key)) {
      continue;
    }
    return key;
  }
  return null;
};

module.exports = keyOf;
},{}],262:[function(require,module,exports){
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule TapEventPlugin
 * @typechecks static-only
 */

"use strict";

var EventConstants = require('react/lib/EventConstants');
var EventPluginUtils = require('react/lib/EventPluginUtils');
var EventPropagators = require('react/lib/EventPropagators');
var SyntheticUIEvent = require('react/lib/SyntheticUIEvent');
var TouchEventUtils = require('./TouchEventUtils');
var ViewportMetrics = require('react/lib/ViewportMetrics');

var keyOf = require('fbjs/lib/keyOf');
var topLevelTypes = EventConstants.topLevelTypes;

var isStartish = EventPluginUtils.isStartish;
var isEndish = EventPluginUtils.isEndish;

var isTouch = function(topLevelType) {
  var touchTypes = [
    topLevelTypes.topTouchCancel,
    topLevelTypes.topTouchEnd,
    topLevelTypes.topTouchStart,
    topLevelTypes.topTouchMove
  ];
  return touchTypes.indexOf(topLevelType) >= 0;
}

/**
 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
 * in order to still be considered a 'tap' event.
 */
var tapMoveThreshold = 10;
var ignoreMouseThreshold = 750;
var startCoords = {x: null, y: null};
var lastTouchEvent = null;

var Axis = {
  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
};

function getAxisCoordOfEvent(axis, nativeEvent) {
  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
  if (singleTouch) {
    return singleTouch[axis.page];
  }
  return axis.page in nativeEvent ?
    nativeEvent[axis.page] :
    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
}

function getDistance(coords, nativeEvent) {
  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
  return Math.pow(
    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
    0.5
  );
}

var touchEvents = [
  topLevelTypes.topTouchStart,
  topLevelTypes.topTouchCancel,
  topLevelTypes.topTouchEnd,
  topLevelTypes.topTouchMove,
];

var dependencies = [
  topLevelTypes.topMouseDown,
  topLevelTypes.topMouseMove,
  topLevelTypes.topMouseUp,
].concat(touchEvents);

var eventTypes = {
  touchTap: {
    phasedRegistrationNames: {
      bubbled: keyOf({onTouchTap: null}),
      captured: keyOf({onTouchTapCapture: null})
    },
    dependencies: dependencies
  }
};

var now = (function() {
  if (Date.now) {
    return Date.now;
  } else {
    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
    return function () {
      return +new Date;
    }
  }
})();

var TapEventPlugin = {

  tapMoveThreshold: tapMoveThreshold,

  ignoreMouseThreshold: ignoreMouseThreshold,

  eventTypes: eventTypes,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent,
      nativeEventTarget) {

    if (isTouch(topLevelType)) {
      lastTouchEvent = now();
    } else {
      if (lastTouchEvent && (now() - lastTouchEvent) < ignoreMouseThreshold) {
        return null;
      }
    }

    if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
      return null;
    }
    var event = null;
    var distance = getDistance(startCoords, nativeEvent);
    if (isEndish(topLevelType) && distance < tapMoveThreshold) {
      event = SyntheticUIEvent.getPooled(
        eventTypes.touchTap,
        topLevelTargetID,
        nativeEvent,
        nativeEventTarget
      );
    }
    if (isStartish(topLevelType)) {
      startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
      startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
    } else if (isEndish(topLevelType)) {
      startCoords.x = 0;
      startCoords.y = 0;
    }
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }

};

module.exports = TapEventPlugin;

},{"./TouchEventUtils":263,"fbjs/lib/keyOf":261,"react/lib/EventConstants":265,"react/lib/EventPluginUtils":268,"react/lib/EventPropagators":269,"react/lib/SyntheticUIEvent":274,"react/lib/ViewportMetrics":275}],263:[function(require,module,exports){
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule TouchEventUtils
 */

var TouchEventUtils = {
  /**
   * Utility function for common case of extracting out the primary touch from a
   * touch event.
   * - `touchEnd` events usually do not have the `touches` property.
   *   http://stackoverflow.com/questions/3666929/
   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
   *
   * @param {Event} nativeEvent Native event that may or may not be a touch.
   * @return {TouchesObject?} an object with pageX and pageY or null.
   */
  extractSingleTouch: function(nativeEvent) {
    var touches = nativeEvent.touches;
    var changedTouches = nativeEvent.changedTouches;
    var hasTouches = touches && touches.length > 0;
    var hasChangedTouches = changedTouches && changedTouches.length > 0;

    return !hasTouches && hasChangedTouches ? changedTouches[0] :
           hasTouches ? touches[0] :
           nativeEvent;
  }
};

module.exports = TouchEventUtils;

},{}],264:[function(require,module,exports){
module.exports = function injectTapEventPlugin () {
  require('react/lib/EventPluginHub').injection.injectEventPluginsByName({
    "TapEventPlugin":       require('./TapEventPlugin.js')
  });
};

},{"./TapEventPlugin.js":262,"react/lib/EventPluginHub":266}],265:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventConstants
 */

'use strict';

var keyMirror = require('fbjs/lib/keyMirror');

var PropagationPhases = keyMirror({ bubbled: null, captured: null });

/**
 * Types of raw signals from the browser caught at the top level.
 */
var topLevelTypes = keyMirror({
  topAbort: null,
  topBlur: null,
  topCanPlay: null,
  topCanPlayThrough: null,
  topChange: null,
  topClick: null,
  topCompositionEnd: null,
  topCompositionStart: null,
  topCompositionUpdate: null,
  topContextMenu: null,
  topCopy: null,
  topCut: null,
  topDoubleClick: null,
  topDrag: null,
  topDragEnd: null,
  topDragEnter: null,
  topDragExit: null,
  topDragLeave: null,
  topDragOver: null,
  topDragStart: null,
  topDrop: null,
  topDurationChange: null,
  topEmptied: null,
  topEncrypted: null,
  topEnded: null,
  topError: null,
  topFocus: null,
  topInput: null,
  topKeyDown: null,
  topKeyPress: null,
  topKeyUp: null,
  topLoad: null,
  topLoadedData: null,
  topLoadedMetadata: null,
  topLoadStart: null,
  topMouseDown: null,
  topMouseMove: null,
  topMouseOut: null,
  topMouseOver: null,
  topMouseUp: null,
  topPaste: null,
  topPause: null,
  topPlay: null,
  topPlaying: null,
  topProgress: null,
  topRateChange: null,
  topReset: null,
  topScroll: null,
  topSeeked: null,
  topSeeking: null,
  topSelectionChange: null,
  topStalled: null,
  topSubmit: null,
  topSuspend: null,
  topTextInput: null,
  topTimeUpdate: null,
  topTouchCancel: null,
  topTouchEnd: null,
  topTouchMove: null,
  topTouchStart: null,
  topVolumeChange: null,
  topWaiting: null,
  topWheel: null
});

var EventConstants = {
  topLevelTypes: topLevelTypes,
  PropagationPhases: PropagationPhases
};

module.exports = EventConstants;
},{"fbjs/lib/keyMirror":72}],266:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginHub
 */

'use strict';

var EventPluginRegistry = require('./EventPluginRegistry');
var EventPluginUtils = require('./EventPluginUtils');
var ReactErrorUtils = require('./ReactErrorUtils');

var accumulateInto = require('./accumulateInto');
var forEachAccumulated = require('./forEachAccumulated');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

/**
 * Internal store for event listeners
 */
var listenerBank = {};

/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */
var eventQueue = null;

/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */
var executeDispatchesAndRelease = function (event, simulated) {
  if (event) {
    EventPluginUtils.executeDispatchesInOrder(event, simulated);

    if (!event.isPersistent()) {
      event.constructor.release(event);
    }
  }
};
var executeDispatchesAndReleaseSimulated = function (e) {
  return executeDispatchesAndRelease(e, true);
};
var executeDispatchesAndReleaseTopLevel = function (e) {
  return executeDispatchesAndRelease(e, false);
};

/**
 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
 *   hierarchy given ids of the logical DOM elements involved.
 */
var InstanceHandle = null;

function validateInstanceHandle() {
  var valid = InstanceHandle && InstanceHandle.traverseTwoPhase && InstanceHandle.traverseEnterLeave;
  process.env.NODE_ENV !== 'production' ? warning(valid, 'InstanceHandle not injected before use!') : undefined;
}

/**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */
var EventPluginHub = {

  /**
   * Methods for injecting dependencies.
   */
  injection: {

    /**
     * @param {object} InjectedMount
     * @public
     */
    injectMount: EventPluginUtils.injection.injectMount,

    /**
     * @param {object} InjectedInstanceHandle
     * @public
     */
    injectInstanceHandle: function (InjectedInstanceHandle) {
      InstanceHandle = InjectedInstanceHandle;
      if (process.env.NODE_ENV !== 'production') {
        validateInstanceHandle();
      }
    },

    getInstanceHandle: function () {
      if (process.env.NODE_ENV !== 'production') {
        validateInstanceHandle();
      }
      return InstanceHandle;
    },

    /**
     * @param {array} InjectedEventPluginOrder
     * @public
     */
    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

    /**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */
    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName

  },

  eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,

  registrationNameModules: EventPluginRegistry.registrationNameModules,

  /**
   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {?function} listener The callback to store.
   */
  putListener: function (id, registrationName, listener) {
    !(typeof listener === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : invariant(false) : undefined;

    var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
    bankForRegistrationName[id] = listener;

    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.didPutListener) {
      PluginModule.didPutListener(id, registrationName, listener);
    }
  },

  /**
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */
  getListener: function (id, registrationName) {
    var bankForRegistrationName = listenerBank[registrationName];
    return bankForRegistrationName && bankForRegistrationName[id];
  },

  /**
   * Deletes a listener from the registration bank.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */
  deleteListener: function (id, registrationName) {
    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.willDeleteListener) {
      PluginModule.willDeleteListener(id, registrationName);
    }

    var bankForRegistrationName = listenerBank[registrationName];
    // TODO: This should never be null -- when is it?
    if (bankForRegistrationName) {
      delete bankForRegistrationName[id];
    }
  },

  /**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {string} id ID of the DOM element.
   */
  deleteAllListeners: function (id) {
    for (var registrationName in listenerBank) {
      if (!listenerBank[registrationName][id]) {
        continue;
      }

      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
      if (PluginModule && PluginModule.willDeleteListener) {
        PluginModule.willDeleteListener(id, registrationName);
      }

      delete listenerBank[registrationName][id];
    }
  },

  /**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @internal
   */
  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
    var events;
    var plugins = EventPluginRegistry.plugins;
    for (var i = 0; i < plugins.length; i++) {
      // Not every plugin in the ordering may be loaded at runtime.
      var possiblePlugin = plugins[i];
      if (possiblePlugin) {
        var extractedEvents = possiblePlugin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
        if (extractedEvents) {
          events = accumulateInto(events, extractedEvents);
        }
      }
    }
    return events;
  },

  /**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */
  enqueueEvents: function (events) {
    if (events) {
      eventQueue = accumulateInto(eventQueue, events);
    }
  },

  /**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */
  processEventQueue: function (simulated) {
    // Set `eventQueue` to null before processing it so that we can tell if more
    // events get enqueued while processing.
    var processingEventQueue = eventQueue;
    eventQueue = null;
    if (simulated) {
      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
    } else {
      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
    }
    !!eventQueue ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing ' + 'an event queue. Support for this has not yet been implemented.') : invariant(false) : undefined;
    // This would be a good time to rethrow if any of the event handlers threw.
    ReactErrorUtils.rethrowCaughtError();
  },

  /**
   * These are needed for tests only. Do not use!
   */
  __purge: function () {
    listenerBank = {};
  },

  __getListenerBank: function () {
    return listenerBank;
  }

};

module.exports = EventPluginHub;
}).call(this,require('_process'))
},{"./EventPluginRegistry":267,"./EventPluginUtils":268,"./ReactErrorUtils":272,"./accumulateInto":276,"./forEachAccumulated":277,"_process":158,"fbjs/lib/invariant":71,"fbjs/lib/warning":73}],267:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginRegistry
 * @typechecks static-only
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 * Injectable ordering of event plugins.
 */
var EventPluginOrder = null;

/**
 * Injectable mapping from names to event plugin modules.
 */
var namesToPlugins = {};

/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function recomputePluginOrdering() {
  if (!EventPluginOrder) {
    // Wait until an `EventPluginOrder` is injected.
    return;
  }
  for (var pluginName in namesToPlugins) {
    var PluginModule = namesToPlugins[pluginName];
    var pluginIndex = EventPluginOrder.indexOf(pluginName);
    !(pluginIndex > -1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.', pluginName) : invariant(false) : undefined;
    if (EventPluginRegistry.plugins[pluginIndex]) {
      continue;
    }
    !PluginModule.extractEvents ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.', pluginName) : invariant(false) : undefined;
    EventPluginRegistry.plugins[pluginIndex] = PluginModule;
    var publishedEvents = PluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      !publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : invariant(false) : undefined;
    }
  }
}

/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
  !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.', eventName) : invariant(false) : undefined;
  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
      }
    }
    return true;
  } else if (dispatchConfig.registrationName) {
    publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
    return true;
  }
  return false;
}

/**
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function publishRegistrationName(registrationName, PluginModule, eventName) {
  !!EventPluginRegistry.registrationNameModules[registrationName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName) : invariant(false) : undefined;
  EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
  EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */
var EventPluginRegistry = {

  /**
   * Ordered list of injected plugins.
   */
  plugins: [],

  /**
   * Mapping from event name to dispatch config
   */
  eventNameDispatchConfigs: {},

  /**
   * Mapping from registration name to plugin module
   */
  registrationNameModules: {},

  /**
   * Mapping from registration name to event name
   */
  registrationNameDependencies: {},

  /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */
  injectEventPluginOrder: function (InjectedEventPluginOrder) {
    !!EventPluginOrder ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.') : invariant(false) : undefined;
    // Clone the ordering so it cannot be dynamically mutated.
    EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
    recomputePluginOrdering();
  },

  /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */
  injectEventPluginsByName: function (injectedNamesToPlugins) {
    var isOrderingDirty = false;
    for (var pluginName in injectedNamesToPlugins) {
      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
        continue;
      }
      var PluginModule = injectedNamesToPlugins[pluginName];
      if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
        !!namesToPlugins[pluginName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.', pluginName) : invariant(false) : undefined;
        namesToPlugins[pluginName] = PluginModule;
        isOrderingDirty = true;
      }
    }
    if (isOrderingDirty) {
      recomputePluginOrdering();
    }
  },

  /**
   * Looks up the plugin for the supplied event.
   *
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */
  getPluginModuleForEvent: function (event) {
    var dispatchConfig = event.dispatchConfig;
    if (dispatchConfig.registrationName) {
      return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
    }
    for (var phase in dispatchConfig.phasedRegistrationNames) {
      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
        continue;
      }
      var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
      if (PluginModule) {
        return PluginModule;
      }
    }
    return null;
  },

  /**
   * Exposed for unit testing.
   * @private
   */
  _resetEventPlugins: function () {
    EventPluginOrder = null;
    for (var pluginName in namesToPlugins) {
      if (namesToPlugins.hasOwnProperty(pluginName)) {
        delete namesToPlugins[pluginName];
      }
    }
    EventPluginRegistry.plugins.length = 0;

    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
    for (var eventName in eventNameDispatchConfigs) {
      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
        delete eventNameDispatchConfigs[eventName];
      }
    }

    var registrationNameModules = EventPluginRegistry.registrationNameModules;
    for (var registrationName in registrationNameModules) {
      if (registrationNameModules.hasOwnProperty(registrationName)) {
        delete registrationNameModules[registrationName];
      }
    }
  }

};

module.exports = EventPluginRegistry;
}).call(this,require('_process'))
},{"_process":158,"fbjs/lib/invariant":71}],268:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginUtils
 */

'use strict';

var EventConstants = require('./EventConstants');
var ReactErrorUtils = require('./ReactErrorUtils');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

/**
 * Injected dependencies:
 */

/**
 * - `Mount`: [required] Module that can convert between React dom IDs and
 *   actual node references.
 */
var injection = {
  Mount: null,
  injectMount: function (InjectedMount) {
    injection.Mount = InjectedMount;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(InjectedMount && InjectedMount.getNode && InjectedMount.getID, 'EventPluginUtils.injection.injectMount(...): Injected Mount ' + 'module is missing getNode or getID.') : undefined;
    }
  }
};

var topLevelTypes = EventConstants.topLevelTypes;

function isEndish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
}

function isMoveish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
}
function isStartish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
}

var validateEventDispatches;
if (process.env.NODE_ENV !== 'production') {
  validateEventDispatches = function (event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchIDs = event._dispatchIDs;

    var listenersIsArr = Array.isArray(dispatchListeners);
    var idsIsArr = Array.isArray(dispatchIDs);
    var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

    process.env.NODE_ENV !== 'production' ? warning(idsIsArr === listenersIsArr && IDsLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : undefined;
  };
}

/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {string} domID DOM id to pass to the callback.
 */
function executeDispatch(event, simulated, listener, domID) {
  var type = event.type || 'unknown-event';
  event.currentTarget = injection.Mount.getNode(domID);
  if (simulated) {
    ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event, domID);
  } else {
    ReactErrorUtils.invokeGuardedCallback(type, listener, event, domID);
  }
  event.currentTarget = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches.
 */
function executeDispatchesInOrder(event, simulated) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchIDs = event._dispatchIDs;
  if (process.env.NODE_ENV !== 'production') {
    validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and IDs are two parallel arrays that are always in sync.
      executeDispatch(event, simulated, dispatchListeners[i], dispatchIDs[i]);
    }
  } else if (dispatchListeners) {
    executeDispatch(event, simulated, dispatchListeners, dispatchIDs);
  }
  event._dispatchListeners = null;
  event._dispatchIDs = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return {?string} id of the first dispatch execution who's listener returns
 * true, or null if no listener returned true.
 */
function executeDispatchesInOrderStopAtTrueImpl(event) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchIDs = event._dispatchIDs;
  if (process.env.NODE_ENV !== 'production') {
    validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and IDs are two parallel arrays that are always in sync.
      if (dispatchListeners[i](event, dispatchIDs[i])) {
        return dispatchIDs[i];
      }
    }
  } else if (dispatchListeners) {
    if (dispatchListeners(event, dispatchIDs)) {
      return dispatchIDs;
    }
  }
  return null;
}

/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */
function executeDispatchesInOrderStopAtTrue(event) {
  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
  event._dispatchIDs = null;
  event._dispatchListeners = null;
  return ret;
}

/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */
function executeDirectDispatch(event) {
  if (process.env.NODE_ENV !== 'production') {
    validateEventDispatches(event);
  }
  var dispatchListener = event._dispatchListeners;
  var dispatchID = event._dispatchIDs;
  !!Array.isArray(dispatchListener) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : invariant(false) : undefined;
  var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
  event._dispatchListeners = null;
  event._dispatchIDs = null;
  return res;
}

/**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */
function hasDispatches(event) {
  return !!event._dispatchListeners;
}

/**
 * General utilities that are useful in creating custom Event Plugins.
 */
var EventPluginUtils = {
  isEndish: isEndish,
  isMoveish: isMoveish,
  isStartish: isStartish,

  executeDirectDispatch: executeDirectDispatch,
  executeDispatchesInOrder: executeDispatchesInOrder,
  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
  hasDispatches: hasDispatches,

  getNode: function (id) {
    return injection.Mount.getNode(id);
  },
  getID: function (node) {
    return injection.Mount.getID(node);
  },

  injection: injection
};

module.exports = EventPluginUtils;
}).call(this,require('_process'))
},{"./EventConstants":265,"./ReactErrorUtils":272,"_process":158,"fbjs/lib/invariant":71,"fbjs/lib/warning":73}],269:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPropagators
 */

'use strict';

var EventConstants = require('./EventConstants');
var EventPluginHub = require('./EventPluginHub');

var warning = require('fbjs/lib/warning');

var accumulateInto = require('./accumulateInto');
var forEachAccumulated = require('./forEachAccumulated');

var PropagationPhases = EventConstants.PropagationPhases;
var getListener = EventPluginHub.getListener;

/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
function listenerAtPhase(id, event, propagationPhase) {
  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
  return getListener(id, registrationName);
}

/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
function accumulateDirectionalDispatches(domID, upwards, event) {
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(domID, 'Dispatching id must not be null') : undefined;
  }
  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
  var listener = listenerAtPhase(domID, event, phase);
  if (listener) {
    event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
    event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
  }
}

/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */
function accumulateTwoPhaseDispatchesSingle(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker, accumulateDirectionalDispatches, event);
  }
}

/**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */
function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    EventPluginHub.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(event.dispatchMarker, accumulateDirectionalDispatches, event);
  }
}

/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */
function accumulateDispatches(id, ignoredDirection, event) {
  if (event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = getListener(id, registrationName);
    if (listener) {
      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
      event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
    }
  }
}

/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */
function accumulateDirectDispatchesSingle(event) {
  if (event && event.dispatchConfig.registrationName) {
    accumulateDispatches(event.dispatchMarker, null, event);
  }
}

function accumulateTwoPhaseDispatches(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
}

function accumulateTwoPhaseDispatchesSkipTarget(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
}

function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
  EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID, toID, accumulateDispatches, leave, enter);
}

function accumulateDirectDispatches(events) {
  forEachAccumulated(events, accumulateDirectDispatchesSingle);
}

/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 *
 * @constructor EventPropagators
 */
var EventPropagators = {
  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
  accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
  accumulateDirectDispatches: accumulateDirectDispatches,
  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
};

module.exports = EventPropagators;
}).call(this,require('_process'))
},{"./EventConstants":265,"./EventPluginHub":266,"./accumulateInto":276,"./forEachAccumulated":277,"_process":158,"fbjs/lib/warning":73}],270:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

'use strict';

function assign(target, sources) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }

  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    // We don't currently support accessors nor proxies. Therefore this
    // copy cannot throw. If we ever supported this then we must handle
    // exceptions and side-effects. We don't support symbols so they won't
    // be transferred.

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  return to;
}

module.exports = assign;
},{}],271:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PooledClass
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4, a5);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4, a5);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : undefined;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances (optional).
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler,
  fiveArgumentPooler: fiveArgumentPooler
};

module.exports = PooledClass;
}).call(this,require('_process'))
},{"_process":158,"fbjs/lib/invariant":71}],272:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactErrorUtils
 * @typechecks
 */

'use strict';

var caughtError = null;

/**
 * Call a function while guarding against errors that happens within it.
 *
 * @param {?String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} a First argument
 * @param {*} b Second argument
 */
function invokeGuardedCallback(name, func, a, b) {
  try {
    return func(a, b);
  } catch (x) {
    if (caughtError === null) {
      caughtError = x;
    }
    return undefined;
  }
}

var ReactErrorUtils = {
  invokeGuardedCallback: invokeGuardedCallback,

  /**
   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
   * handler are sure to be rethrown by rethrowCaughtError.
   */
  invokeGuardedCallbackWithCatch: invokeGuardedCallback,

  /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */
  rethrowCaughtError: function () {
    if (caughtError) {
      var error = caughtError;
      caughtError = null;
      throw error;
    }
  }
};

if (process.env.NODE_ENV !== 'production') {
  /**
   * To help development we can get better devtools integration by simulating a
   * real browser event.
   */
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
    var fakeNode = document.createElement('react');
    ReactErrorUtils.invokeGuardedCallback = function (name, func, a, b) {
      var boundFunc = func.bind(null, a, b);
      var evtType = 'react-' + name;
      fakeNode.addEventListener(evtType, boundFunc, false);
      var evt = document.createEvent('Event');
      evt.initEvent(evtType, false, false);
      fakeNode.dispatchEvent(evt);
      fakeNode.removeEventListener(evtType, boundFunc, false);
    };
  }
}

module.exports = ReactErrorUtils;
}).call(this,require('_process'))
},{"_process":158}],273:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticEvent
 * @typechecks static-only
 */

'use strict';

var PooledClass = require('./PooledClass');

var assign = require('./Object.assign');
var emptyFunction = require('fbjs/lib/emptyFunction');
var warning = require('fbjs/lib/warning');

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var EventInterface = {
  type: null,
  // currentTarget is set when dispatching; no use in copying it here
  currentTarget: emptyFunction.thatReturnsNull,
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function (event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 */
function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  this.dispatchConfig = dispatchConfig;
  this.dispatchMarker = dispatchMarker;
  this.nativeEvent = nativeEvent;
  this.target = nativeEventTarget;
  this.currentTarget = nativeEventTarget;

  var Interface = this.constructor.Interface;
  for (var propName in Interface) {
    if (!Interface.hasOwnProperty(propName)) {
      continue;
    }
    var normalize = Interface[propName];
    if (normalize) {
      this[propName] = normalize(nativeEvent);
    } else {
      this[propName] = nativeEvent[propName];
    }
  }

  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
  if (defaultPrevented) {
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  } else {
    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
  }
  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
}

assign(SyntheticEvent.prototype, {

  preventDefault: function () {
    this.defaultPrevented = true;
    var event = this.nativeEvent;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `preventDefault` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
    }
    if (!event) {
      return;
    }

    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  },

  stopPropagation: function () {
    var event = this.nativeEvent;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `stopPropagation` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
    }
    if (!event) {
      return;
    }

    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
  },

  /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
  persist: function () {
    this.isPersistent = emptyFunction.thatReturnsTrue;
  },

  /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
  isPersistent: emptyFunction.thatReturnsFalse,

  /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
  destructor: function () {
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      this[propName] = null;
    }
    this.dispatchConfig = null;
    this.dispatchMarker = null;
    this.nativeEvent = null;
  }

});

SyntheticEvent.Interface = EventInterface;

/**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */
SyntheticEvent.augmentClass = function (Class, Interface) {
  var Super = this;

  var prototype = Object.create(Super.prototype);
  assign(prototype, Class.prototype);
  Class.prototype = prototype;
  Class.prototype.constructor = Class;

  Class.Interface = assign({}, Super.Interface, Interface);
  Class.augmentClass = Super.augmentClass;

  PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
};

PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);

module.exports = SyntheticEvent;
}).call(this,require('_process'))
},{"./Object.assign":270,"./PooledClass":271,"_process":158,"fbjs/lib/emptyFunction":70,"fbjs/lib/warning":73}],274:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticUIEvent
 * @typechecks static-only
 */

'use strict';

var SyntheticEvent = require('./SyntheticEvent');

var getEventTarget = require('./getEventTarget');

/**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var UIEventInterface = {
  view: function (event) {
    if (event.view) {
      return event.view;
    }

    var target = getEventTarget(event);
    if (target != null && target.window === target) {
      // target is a window object
      return target;
    }

    var doc = target.ownerDocument;
    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
    if (doc) {
      return doc.defaultView || doc.parentWindow;
    } else {
      return window;
    }
  },
  detail: function (event) {
    return event.detail || 0;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

module.exports = SyntheticUIEvent;
},{"./SyntheticEvent":273,"./getEventTarget":278}],275:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViewportMetrics
 */

'use strict';

var ViewportMetrics = {

  currentScrollLeft: 0,

  currentScrollTop: 0,

  refreshScrollValues: function (scrollPosition) {
    ViewportMetrics.currentScrollLeft = scrollPosition.x;
    ViewportMetrics.currentScrollTop = scrollPosition.y;
  }

};

module.exports = ViewportMetrics;
},{}],276:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule accumulateInto
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 *
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */

function accumulateInto(current, next) {
  !(next != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : invariant(false) : undefined;
  if (current == null) {
    return next;
  }

  // Both are not empty. Warning: Never call x.concat(y) when you are not
  // certain that x is an Array (x could be a string with concat method).
  var currentIsArray = Array.isArray(current);
  var nextIsArray = Array.isArray(next);

  if (currentIsArray && nextIsArray) {
    current.push.apply(current, next);
    return current;
  }

  if (currentIsArray) {
    current.push(next);
    return current;
  }

  if (nextIsArray) {
    // A bit too dangerous to mutate `next`.
    return [current].concat(next);
  }

  return [current, next];
}

module.exports = accumulateInto;
}).call(this,require('_process'))
},{"_process":158,"fbjs/lib/invariant":71}],277:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule forEachAccumulated
 */

'use strict';

/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */
var forEachAccumulated = function (arr, cb, scope) {
  if (Array.isArray(arr)) {
    arr.forEach(cb, scope);
  } else if (arr) {
    cb.call(scope, arr);
  }
};

module.exports = forEachAccumulated;
},{}],278:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventTarget
 * @typechecks static-only
 */

'use strict';

/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */
function getEventTarget(nativeEvent) {
  var target = nativeEvent.target || nativeEvent.srcElement || window;
  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
  // @see http://www.quirksmode.org/js/events_properties.html
  return target.nodeType === 3 ? target.parentNode : target;
}

module.exports = getEventTarget;
},{}],279:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = createUncontrollable;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function createUncontrollable(mixins, set) {

  return uncontrollable;

  function uncontrollable(Component, controlledValues) {
    var methods = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

    var displayName = Component.displayName || Component.name || 'Component',
        basePropTypes = utils.getType(Component).propTypes,
        propTypes;

    propTypes = utils.uncontrolledPropTypes(controlledValues, basePropTypes, displayName);

    methods = utils.transform(methods, function (obj, method) {
      obj[method] = function () {
        var _refs$inner;

        return (_refs$inner = this.refs.inner)[method].apply(_refs$inner, arguments);
      };
    }, {});

    var component = _react2['default'].createClass(_extends({

      displayName: 'Uncontrolled(' + displayName + ')',

      mixins: mixins,

      propTypes: propTypes

    }, methods, {

      componentWillMount: function componentWillMount() {
        var props = this.props,
            keys = Object.keys(controlledValues);

        this._values = utils.transform(keys, function (values, key) {
          values[key] = props[utils.defaultKey(key)];
        }, {});
      },

      /**
       * If a prop switches from controlled to Uncontrolled
       * reset its value to the defaultValue
       */
      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var _this = this;

        var props = this.props,
            keys = Object.keys(controlledValues);

        keys.forEach(function (key) {
          if (utils.getValue(nextProps, key) === undefined && utils.getValue(props, key) !== undefined) {
            _this._values[key] = nextProps[utils.defaultKey(key)];
          }
        });
      },

      render: function render() {
        var _this2 = this;

        var newProps = {};
        var _props = this.props;
        var valueLink = _props.valueLink;
        var checkedLink = _props.checkedLink;

        var props = _objectWithoutProperties(_props, ['valueLink', 'checkedLink']);

        utils.each(controlledValues, function (handle, propName) {
          var linkPropName = utils.getLinkName(propName),
              prop = _this2.props[propName];

          if (linkPropName && !isProp(_this2.props, propName) && isProp(_this2.props, linkPropName)) {
            prop = _this2.props[linkPropName].value;
          }

          newProps[propName] = prop !== undefined ? prop : _this2._values[propName];

          newProps[handle] = setAndNotify.bind(_this2, propName);
        });

        newProps = _extends({}, props, newProps, { ref: 'inner' });

        return _react2['default'].createElement(Component, newProps);
      }

    }));

    component.ControlledComponent = Component;

    return component;

    function setAndNotify(propName, value) {
      var linkName = utils.getLinkName(propName),
          handler = this.props[controlledValues[propName]];

      if (linkName && isProp(this.props, linkName) && !handler) {
        handler = this.props[linkName].requestChange;
      }

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      set(this, propName, handler, value, args);
    }

    function isProp(props, prop) {
      return props[prop] !== undefined;
    }
  }
}

module.exports = exports['default'];
},{"./utils":281,"react":"react"}],280:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _createUncontrollable = require('./createUncontrollable');

var _createUncontrollable2 = _interopRequireDefault(_createUncontrollable);

var mixin = {
  shouldComponentUpdate: function shouldComponentUpdate() {
    //let the forceUpdate trigger the update
    return !this._notifying;
  }
};

function set(component, propName, handler, value, args) {
  if (handler) {
    component._notifying = true;
    handler.call.apply(handler, [component, value].concat(args));
    component._notifying = false;
  }

  component._values[propName] = value;

  if (component.isMounted()) component.forceUpdate();
}

exports['default'] = _createUncontrollable2['default']([mixin], set);
module.exports = exports['default'];
},{"./createUncontrollable":279}],281:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.customPropType = customPropType;
exports.uncontrolledPropTypes = uncontrolledPropTypes;
exports.getType = getType;
exports.getValue = getValue;
exports.getLinkName = getLinkName;
exports.defaultKey = defaultKey;
exports.chain = chain;
exports.transform = transform;
exports.each = each;
exports.has = has;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function customPropType(handler, propType, name) {

  return function (props, propName) {

    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error('You have provided a `' + propName + '` prop to ' + '`' + name + '` without an `' + handler + '` handler. This will render a read-only field. ' + 'If the field should be mutable use `' + defaultKey(propName) + '`. Otherwise, set `' + handler + '`');
      }

      return propType && propType(props, propName, name);
    }
  };
}

function uncontrolledPropTypes(controlledValues, basePropTypes, displayName) {
  var propTypes = {};

  if (process.env.NODE_ENV !== 'production' && basePropTypes) {
    transform(controlledValues, function (obj, handler, prop) {
      var type = basePropTypes[prop];

      _invariant2['default'](typeof handler === 'string' && handler.trim().length, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop);

      obj[prop] = customPropType(handler, type, displayName);

      if (type !== undefined) obj[defaultKey(prop)] = type;
    }, propTypes);
  }

  return propTypes;
}

var version = _react2['default'].version.split('.').map(parseFloat);

exports.version = version;

function getType(component) {
  if (version[0] === 0 && version[1] >= 13) return component;

  return component.type;
}

function getValue(props, name) {
  var linkPropName = getLinkName(name);

  if (linkPropName && !isProp(props, name) && isProp(props, linkPropName)) return props[linkPropName].value;

  return props[name];
}

function isProp(props, prop) {
  return props[prop] !== undefined;
}

function getLinkName(name) {
  return name === 'value' ? 'valueLink' : name === 'checked' ? 'checkedLink' : null;
}

function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}

function chain(thisArg, a, b) {
  return function chainedFunction() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    a && a.call.apply(a, [thisArg].concat(args));
    b && b.call.apply(b, [thisArg].concat(args));
  };
}

function transform(obj, cb, seed) {
  each(obj, cb.bind(null, seed = seed || (Array.isArray(obj) ? [] : {})));
  return seed;
}

function each(obj, cb, thisArg) {
  if (Array.isArray(obj)) return obj.forEach(cb, thisArg);

  for (var key in obj) if (has(obj, key)) cb.call(thisArg, obj[key], key, obj);
}

function has(o, k) {
  return o ? Object.prototype.hasOwnProperty.call(o, k) : false;
}
}).call(this,require('_process'))
},{"_process":158,"invariant":87,"react":"react"}],282:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))
},{"_process":158}]},{},[5]);
