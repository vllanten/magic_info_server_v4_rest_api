# MagicInfoApi.AuthApi

All URIs are relative to *http://127.0.0.1:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorization**](AuthApi.md#authorization) | **POST** /auth | Authorization
[**refreshAuthorization**](AuthApi.md#refreshAuthorization) | **GET** /auth/refresh | Refresh Authorization Token


<a name="authorization"></a>
# **authorization**
> TokenAuth authorization(userLogin)

Authorization

### Example
```javascript
var MagicInfoApi = require('magic_info_api');

var apiInstance = new MagicInfoApi.AuthApi();

var userLogin = new MagicInfoApi.AuthResource(); // AuthResource | resource


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authorization(userLogin, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userLogin** | [**AuthResource**](AuthResource.md)| resource | 

### Return type

[**TokenAuth**](TokenAuth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="refreshAuthorization"></a>
# **refreshAuthorization**
> TokenAuth refreshAuthorization()

Refresh Authorization Token

### Example
```javascript
var MagicInfoApi = require('magic_info_api');
var defaultClient = MagicInfoApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refreshAuthorization(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TokenAuth**](TokenAuth.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

