var React = require('react');
var ReactDOM = require('react-dom');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');
var SearchForm=require('./SearchForm.js');
var SearchResults=require('./SearchResults.js');


function getAppState() {
    return {
        results:AppStore.getResults(),
        searchText:AppStore.getSearchText()
    }
}
var App = React.createClass({
    componentDidMount:function(){
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount:function(){
        AppStore.removeChangeListener(this._onChange);
    },
    render: function () {
        return (
            <div>
                <SearchForm/>
                <SearchResults results={this.state.results} searchText={this.state.searchText}/>
            </div>
        )
    },
    getInitialState:function(){
        return getAppState();
    },
    _onChange:function(){
        this.setState(getAppState());
    }
});

module.exports = App;