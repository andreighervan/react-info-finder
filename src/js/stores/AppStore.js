var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI.js');
var CHANGE_EVENT = 'change';
var _searchText = '';
var _results=[];

var AppStore = assign({}, EventEmitter.prototype, {
    setSearchText: function (search) {
        _searchText = search.text;
    },
    setResults:function(results){
      _results=results;
    },
    getResults:function(){
      return _results;
    },
    getSearchText:function(){
      return _searchText;
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
        case AppConstants.SEARCH_TEXT:
            AppStore.setSearchText(action.search);
            AppAPI.searchText(action.search);
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.RECEIVE_RESULTS:
            AppStore.setResults(action.results);
            AppStore.emit(CHANGE_EVENT);
            break;
    }
    return true;
});

module.exports = AppStore;
