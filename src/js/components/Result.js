var React = require('react');
var ReactDOM = require('react-dom');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var Result= React.createClass({
    render: function () {
        return (
            <div>
              <p className="content lead" dangerouslySetInnerHTML={{__html:this.props.result.Result}}></p>
            </div>
        )
    }
});

module.exports = Result;