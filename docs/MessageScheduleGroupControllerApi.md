# MagicInfoApi.MessageScheduleGroupControllerApi

All URIs are relative to *http://127.0.0.1:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChildGroupsUsingGET3**](MessageScheduleGroupControllerApi.md#getChildGroupsUsingGET3) | **GET** /restapi/v1.0/dms/schedule/messages/groups/{groupId}/child | getChildGroups
[**getRootGroupsUsingGET2**](MessageScheduleGroupControllerApi.md#getRootGroupsUsingGET2) | **GET** /restapi/v1.0/dms/schedule/messages/groups | getRootGroups
[**listMessageScheduleGroupInfoUsingGET**](MessageScheduleGroupControllerApi.md#listMessageScheduleGroupInfoUsingGET) | **GET** /restapi/v1.0/dms/schedule/messages/groups/{groupId} | listMessageScheduleGroupInfo


<a name="getChildGroupsUsingGET3"></a>
# **getChildGroupsUsingGET3**
> ResponseBody getChildGroupsUsingGET3(groupId)

getChildGroups

### Example
```javascript
var MagicInfoApi = require('magic_info_api');
var defaultClient = MagicInfoApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoApi.MessageScheduleGroupControllerApi();

var groupId = "groupId_example"; // String | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChildGroupsUsingGET3(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| groupId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRootGroupsUsingGET2"></a>
# **getRootGroupsUsingGET2**
> ResponseBody getRootGroupsUsingGET2()

getRootGroups

### Example
```javascript
var MagicInfoApi = require('magic_info_api');
var defaultClient = MagicInfoApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoApi.MessageScheduleGroupControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRootGroupsUsingGET2(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listMessageScheduleGroupInfoUsingGET"></a>
# **listMessageScheduleGroupInfoUsingGET**
> ResponseBody listMessageScheduleGroupInfoUsingGET(groupId)

listMessageScheduleGroupInfo

### Example
```javascript
var MagicInfoApi = require('magic_info_api');
var defaultClient = MagicInfoApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoApi.MessageScheduleGroupControllerApi();

var groupId = 789; // Number | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMessageScheduleGroupInfoUsingGET(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| groupId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

