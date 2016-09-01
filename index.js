var $ = require('jquery');

var AjaxException = function(message) {
  this.message = message;
  this.name = 'AjaxException';
};

var _getDefaultOptions = {
  path: null,
  query: {}
};

var _postDefaultOptions = {
  path: null,
  data: {}
};

var _deleteDefaultOptions = {
  path: null,
  data: {}
};

function _getData(options, successCallback, errorCallback) {
  try {
    options = options || _getDefaultOptions;
    options = $.extend(true, {}, _getDefaultOptions, options);

    $.ajax({
      dataType: 'json',
      url: options.path,
      data: options.query,
      headers: options.headers,
      cache: false,
      success: function(data) {
        successCallback(data);
      },
      error: function(err) {
        errorCallback(err);
      }
    });
  } catch (e) {
    throw e;
  }
}

function _postData(options, successCallback, errorCallback) {
  try {
    options = options || _postDefaultOptions;
    options = $.extend(true, {}, _postDefaultOptions, options);

    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: options.path,
      data: options.data,
      headers: options.headers,
      success: function(data) {
        successCallback(data);
      },
      error: function(err) {
        errorCallback(err);
      }
    });
  } catch (e) {
    throw e;
  }
}

function _deleteData(options, successCallback, errorCallback) {
  try {
    options = options || _deleteDefaultOptions;
    options = $.extend(true, {}, _deleteDefaultOptions, options);

    $.ajax({
      method: 'DELETE',
      dataType: 'json',
      url: options.path,
      headers: options.headers,
      success: function(data) {
        successCallback(data);
      },
      error: function(err) {
        errorCallback(err);
      }
    });
  } catch (e) {
    throw e;
  }
}

module.exports = {
  get: _getData,
  post: _postData,
  delete: _deleteData
}