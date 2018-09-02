# magic_info_server_v41___rest_api

MagicInfoServerV41RestApi - JavaScript client for magic_info_server_v41___rest_api
MagicInfo Server V4.1 - REST API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install magic_info_server_v41___rest_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your magic_info_server_v41___rest_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('magic_info_server_v41___rest_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/magic_info_server_v41___rest_api
then install it via:

```shell
    npm install YOUR_USERNAME/magic_info_server_v41___rest_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');

var api = new MagicInfoServerV41RestApi.AuthApi()

var userLogin = new MagicInfoServerV41RestApi.AuthResource(); // {AuthResource} resource


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.authorization(userLogin, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://127.0.0.2:7001/MagicInfo*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MagicInfoServerV41RestApi.AuthApi* | [**authorization**](docs/AuthApi.md#authorization) | **POST** /auth | Authorization
*MagicInfoServerV41RestApi.AuthApi* | [**refreshAuthorization**](docs/AuthApi.md#refreshAuthorization) | **GET** /auth/refresh | Refresh Authorization Token
*MagicInfoServerV41RestApi.ContentControllerApi* | [**approveContentsUsingPUT1**](docs/ContentControllerApi.md#approveContentsUsingPUT1) | **PUT** /restapi/v1.0/cms/contents/{contentId}/approval | approveContents
*MagicInfoServerV41RestApi.ContentControllerApi* | [**deleteContentUsingDELETE1**](docs/ContentControllerApi.md#deleteContentUsingDELETE1) | **DELETE** /restapi/v1.0/cms/contents/{contentId} | deleteContent
*MagicInfoServerV41RestApi.ContentControllerApi* | [**forceDeleteContentUsingDELETE1**](docs/ContentControllerApi.md#forceDeleteContentUsingDELETE1) | **DELETE** /restapi/v1.0/cms/contents/force/{contentId} | forceDeleteContent
*MagicInfoServerV41RestApi.ContentControllerApi* | [**getActiveContentInfoUsingGET**](docs/ContentControllerApi.md#getActiveContentInfoUsingGET) | **GET** /restapi/v1.0/cms/contents/{contentId} | getActiveContentInfo
*MagicInfoServerV41RestApi.ContentControllerApi* | [**listAllContentUsingGET**](docs/ContentControllerApi.md#listAllContentUsingGET) | **GET** /restapi/v1.0/cms/contents | listAllContent
*MagicInfoServerV41RestApi.ContentControllerApi* | [**listContentUsingPOST1**](docs/ContentControllerApi.md#listContentUsingPOST1) | **POST** /restapi/v1.0/cms/contents/filter | listContent
*MagicInfoServerV41RestApi.ContentControllerApi* | [**listDashboardContentInfoUsingGET**](docs/ContentControllerApi.md#listDashboardContentInfoUsingGET) | **GET** /restapi/v1.0/cms/contents/dashboard | listDashboardContentInfo
*MagicInfoServerV41RestApi.ContentControllerApi* | [**uploadContentUsingPOST**](docs/ContentControllerApi.md#uploadContentUsingPOST) | **POST** /restapi/v1.0/cms/contents/{groupId} | uploadContent
*MagicInfoServerV41RestApi.ContentGroupControllerApi* | [**getGroupUsingGET**](docs/ContentGroupControllerApi.md#getGroupUsingGET) | **GET** /restapi/v1.0/cms/contents/groups/{groupId} | getGroup
*MagicInfoServerV41RestApi.ContentGroupControllerApi* | [**listChildGroupUsingGET1**](docs/ContentGroupControllerApi.md#listChildGroupUsingGET1) | **GET** /restapi/v1.0/cms/contents/groups/{groupId}/child | listChildGroup
*MagicInfoServerV41RestApi.ContentGroupControllerApi* | [**listDefaultGroupUsingGET1**](docs/ContentGroupControllerApi.md#listDefaultGroupUsingGET1) | **GET** /restapi/v1.0/cms/contents/groups | listDefaultGroup
*MagicInfoServerV41RestApi.ContentScheduleControllerApi* | [**copyContentScheduleUsingPUT1**](docs/ContentScheduleControllerApi.md#copyContentScheduleUsingPUT1) | **PUT** /restapi/v1.0/dms/schedule/contents/{programId}/copy | copyContentSchedule
*MagicInfoServerV41RestApi.ContentScheduleControllerApi* | [**createContentScheduleUsingPOST1**](docs/ContentScheduleControllerApi.md#createContentScheduleUsingPOST1) | **POST** /restapi/v1.0/dms/schedule/contents | createContentSchedule
*MagicInfoServerV41RestApi.ContentScheduleControllerApi* | [**deleteContentScheduleUsingDELETE**](docs/ContentScheduleControllerApi.md#deleteContentScheduleUsingDELETE) | **DELETE** /restapi/v1.0/dms/schedule/contents/{programId} | deleteContentSchedule
*MagicInfoServerV41RestApi.ContentScheduleControllerApi* | [**deployContentScheduleUsingPUT**](docs/ContentScheduleControllerApi.md#deployContentScheduleUsingPUT) | **PUT** /restapi/v1.0/dms/schedule/contents/{programId}/deploy | deployContentSchedule
*MagicInfoServerV41RestApi.ContentScheduleControllerApi* | [**editContentScheduleUsingPUT**](docs/ContentScheduleControllerApi.md#editContentScheduleUsingPUT) | **PUT** /restapi/v1.0/dms/schedule/contents/{programId} | editContentSchedule
*MagicInfoServerV41RestApi.ContentScheduleControllerApi* | [**getProgramInfoUsingGET1**](docs/ContentScheduleControllerApi.md#getProgramInfoUsingGET1) | **GET** /restapi/v1.0/dms/schedule/contents/{programId} | getProgramInfo
*MagicInfoServerV41RestApi.ContentScheduleControllerApi* | [**getPublishStatusUsingGET**](docs/ContentScheduleControllerApi.md#getPublishStatusUsingGET) | **GET** /restapi/v1.0/dms/schedule/contents/{programId}/publishStatus | getPublishStatus
*MagicInfoServerV41RestApi.ContentScheduleControllerApi* | [**listContentScheduleAllUsingGET1**](docs/ContentScheduleControllerApi.md#listContentScheduleAllUsingGET1) | **GET** /restapi/v1.0/dms/schedule/contents | listContentScheduleAll
*MagicInfoServerV41RestApi.ContentScheduleControllerApi* | [**listContentScheduleByGroupUsingPOST1**](docs/ContentScheduleControllerApi.md#listContentScheduleByGroupUsingPOST1) | **POST** /restapi/v1.0/dms/schedule/contents/filter | listContentScheduleByGroup
*MagicInfoServerV41RestApi.ContentScheduleControllerApi* | [**listDashboardScheduleInfoUsingGET**](docs/ContentScheduleControllerApi.md#listDashboardScheduleInfoUsingGET) | **GET** /restapi/v1.0/dms/schedule/contents/dashboard | listDashboardScheduleInfo
*MagicInfoServerV41RestApi.ContentScheduleGroupControllerApi* | [**getChildGroupsUsingGET**](docs/ContentScheduleGroupControllerApi.md#getChildGroupsUsingGET) | **GET** /restapi/v1.0/dms/schedule/contents/groups/{groupId}/child | getChildGroups
*MagicInfoServerV41RestApi.ContentScheduleGroupControllerApi* | [**getRootGroupsUsingGET**](docs/ContentScheduleGroupControllerApi.md#getRootGroupsUsingGET) | **GET** /restapi/v1.0/dms/schedule/contents/groups | getRootGroups
*MagicInfoServerV41RestApi.ContentScheduleGroupControllerApi* | [**listContentScheduleGroupInfoUsingGET**](docs/ContentScheduleGroupControllerApi.md#listContentScheduleGroupInfoUsingGET) | **GET** /restapi/v1.0/dms/schedule/contents/groups/{groupId} | listContentScheduleGroupInfo
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**approveDeviceUsingPUT**](docs/DeviceControllerApi.md#approveDeviceUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/approval | approveDevice
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**deleteDeviceUsingDELETE**](docs/DeviceControllerApi.md#deleteDeviceUsingDELETE) | **DELETE** /restapi/v1.0/rms/devices/{deviceId} | deleteDevice
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**filterDeviceListUsingPOST**](docs/DeviceControllerApi.md#filterDeviceListUsingPOST) | **POST** /restapi/v1.0/rms/devices/filter | filterDeviceList
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getCabinetListUsingPOST1**](docs/DeviceControllerApi.md#getCabinetListUsingPOST1) | **POST** /restapi/v1.0/rms/devices/{deviceId}/cabinet | getCabinetList
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getCurrentStatusDisplayUsingGET1**](docs/DeviceControllerApi.md#getCurrentStatusDisplayUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/status/display/{requestId} | getCurrentStatusDisplay
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getCurrentStatusDisplayUsingGET3**](docs/DeviceControllerApi.md#getCurrentStatusDisplayUsingGET3) | **GET** /restapi/v1.0/rms/devices/{deviceId}/status/display | getCurrentStatusDisplay
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getCurrentStatusSecurityUsingGET1**](docs/DeviceControllerApi.md#getCurrentStatusSecurityUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/status/security/{requestId} | getCurrentStatusSecurity
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getCurrentStatusSecurityUsingGET3**](docs/DeviceControllerApi.md#getCurrentStatusSecurityUsingGET3) | **GET** /restapi/v1.0/rms/devices/{deviceId}/status/security | getCurrentStatusSecurity
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getCurrentStatusTimeUsingGET**](docs/DeviceControllerApi.md#getCurrentStatusTimeUsingGET) | **GET** /restapi/v1.0/rms/devices/{deviceId}/status/time/{requestId} | getCurrentStatusTime
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getCurrentStatusTimeUsingGET3**](docs/DeviceControllerApi.md#getCurrentStatusTimeUsingGET3) | **GET** /restapi/v1.0/rms/devices/{deviceId}/status/time | getCurrentStatusTime
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getDashboardDeviceInfoUsingGET**](docs/DeviceControllerApi.md#getDashboardDeviceInfoUsingGET) | **GET** /restapi/v1.0/rms/devices/dashboard | getDashboardDeviceInfo
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getDeviceUsingGET1**](docs/DeviceControllerApi.md#getDeviceUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId} | getDevice
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getDisplayControlInfoUsingGET1**](docs/DeviceControllerApi.md#getDisplayControlInfoUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/display | getDisplayControlInfo
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getGeneralInfoUsingGET1**](docs/DeviceControllerApi.md#getGeneralInfoUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/general | getGeneralInfo
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getSecurityControlInfoUsingGET1**](docs/DeviceControllerApi.md#getSecurityControlInfoUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/security | getSecurityControlInfo
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getSetupInfoUsingGET1**](docs/DeviceControllerApi.md#getSetupInfoUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/setup | getSetupInfo
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getTimeInfoUsingGET**](docs/DeviceControllerApi.md#getTimeInfoUsingGET) | **GET** /restapi/v1.0/rms/devices/{deviceId}/time | getTimeInfo
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getUpdatedDisplayInfoResultUsingGET1**](docs/DeviceControllerApi.md#getUpdatedDisplayInfoResultUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/display/{requestId} | getUpdatedDisplayInfoResult
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getUpdatedGeneralInfoResultUsingGET**](docs/DeviceControllerApi.md#getUpdatedGeneralInfoResultUsingGET) | **GET** /restapi/v1.0/rms/devices/{deviceId}/general/{requestId} | getUpdatedGeneralInfoResult
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getUpdatedSetupInfoResultUsingGET1**](docs/DeviceControllerApi.md#getUpdatedSetupInfoResultUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/setup/{requestId} | getUpdatedSetupInfoResult
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**getUpdatedTimeInfoResultUsingGET**](docs/DeviceControllerApi.md#getUpdatedTimeInfoResultUsingGET) | **GET** /restapi/v1.0/rms/devices/{deviceId}/time/{requestId} | getUpdatedTimeInfoResult
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**listAllDeviceUsingGET**](docs/DeviceControllerApi.md#listAllDeviceUsingGET) | **GET** /restapi/v1.0/rms/devices | listAllDevice
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**moveDeviceUsingPUT**](docs/DeviceControllerApi.md#moveDeviceUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/move | moveDevice
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**startRmServerVncUsingGET**](docs/DeviceControllerApi.md#startRmServerVncUsingGET) | **GET** /restapi/v1.0/rms/devices/{deviceId}/rmserver/start | startRmServerVnc
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**stopRmServerVncUsingGET**](docs/DeviceControllerApi.md#stopRmServerVncUsingGET) | **GET** /restapi/v1.0/rms/devices/{deviceId}/rmserver/stop | stopRmServerVnc
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**updateCabinetInfoUsingPUT**](docs/DeviceControllerApi.md#updateCabinetInfoUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/cabinet | updateCabinetInfo
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**updateDisplayInfoUsingPUT**](docs/DeviceControllerApi.md#updateDisplayInfoUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/display | updateDisplayInfo
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**updateGeneralInfoUsingPUT**](docs/DeviceControllerApi.md#updateGeneralInfoUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/general/info | updateGeneralInfo
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**updateGeneralUsingPUT**](docs/DeviceControllerApi.md#updateGeneralUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/general | updateGeneral
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**updateSecurityInfoUsingPUT**](docs/DeviceControllerApi.md#updateSecurityInfoUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/security | updateSecurityInfo
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**updateSetupInfoUsingPUT**](docs/DeviceControllerApi.md#updateSetupInfoUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/setup | updateSetupInfo
*MagicInfoServerV41RestApi.DeviceControllerApi* | [**updateTimeInfoUsingPUT1**](docs/DeviceControllerApi.md#updateTimeInfoUsingPUT1) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/time | updateTimeInfo
*MagicInfoServerV41RestApi.DeviceGroupControllerApi* | [**listDeviceGroupChildUsingGET**](docs/DeviceGroupControllerApi.md#listDeviceGroupChildUsingGET) | **GET** /restapi/v1.0/rms/devices/groups/{groupId}/child | listDeviceGroupChild
*MagicInfoServerV41RestApi.DeviceGroupControllerApi* | [**listDeviceGroupInfoUsingGET1**](docs/DeviceGroupControllerApi.md#listDeviceGroupInfoUsingGET1) | **GET** /restapi/v1.0/rms/devices/groups/{groupId} | listDeviceGroupInfo
*MagicInfoServerV41RestApi.DeviceGroupControllerApi* | [**listDeviceGroupOrganUsingGET**](docs/DeviceGroupControllerApi.md#listDeviceGroupOrganUsingGET) | **GET** /restapi/v1.0/rms/devices/groups | listDeviceGroupOrgan
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**checkLicenseStatusUsingGET1**](docs/EnvironmentControllerApi.md#checkLicenseStatusUsingGET1) | **GET** /restapi/v1.0/ems/license/check | checkLicenseStatus
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**createDashboardUsingGET1**](docs/EnvironmentControllerApi.md#createDashboardUsingGET1) | **GET** /restapi/v1.0/ems/dashboard/create | createDashboard
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**createNoticeInfoUsingPOST**](docs/EnvironmentControllerApi.md#createNoticeInfoUsingPOST) | **POST** /restapi/v1.0/ems/dashboard/notice/edit | createNoticeInfo
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**deleteDashboardUsingDELETE1**](docs/EnvironmentControllerApi.md#deleteDashboardUsingDELETE1) | **DELETE** /restapi/v1.0/ems/dashboard | deleteDashboard
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**deleteNoticeInfoUsingDELETE**](docs/EnvironmentControllerApi.md#deleteNoticeInfoUsingDELETE) | **DELETE** /restapi/v1.0/ems/dashboard/notice/edit | deleteNoticeInfo
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**getCategoryInfoUsingGET**](docs/EnvironmentControllerApi.md#getCategoryInfoUsingGET) | **GET** /restapi/v1.0/ems/category/{categoryId} | getCategoryInfo
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**getDeviceStatusInfoUsingGET**](docs/EnvironmentControllerApi.md#getDeviceStatusInfoUsingGET) | **GET** /restapi/v1.0/ems/device/check | getDeviceStatusInfo
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**getLicenseCheckDetailUsingGET1**](docs/EnvironmentControllerApi.md#getLicenseCheckDetailUsingGET1) | **GET** /restapi/v1.0/ems/license/check/detail | getLicenseCheckDetail
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**getMenuItemCountUsingGET**](docs/EnvironmentControllerApi.md#getMenuItemCountUsingGET) | **GET** /restapi/v1.0/ems/menu/count | getMenuItemCount
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**getServerSetupInfoUsingGET1**](docs/EnvironmentControllerApi.md#getServerSetupInfoUsingGET1) | **GET** /restapi/v1.0/ems/setup | getServerSetupInfo
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**getTagListInfoUsingPOST1**](docs/EnvironmentControllerApi.md#getTagListInfoUsingPOST1) | **POST** /restapi/v1.0/ems/tag | getTagListInfo
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**listDashboardInfoUsingGET1**](docs/EnvironmentControllerApi.md#listDashboardInfoUsingGET1) | **GET** /restapi/v1.0/ems/dashboard | listDashboardInfo
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**listDashboardLoginInfoUsingGET1**](docs/EnvironmentControllerApi.md#listDashboardLoginInfoUsingGET1) | **GET** /restapi/v1.0/ems/dashboard/login | listDashboardLoginInfo
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**listDashboardNoticeInfoUsingGET1**](docs/EnvironmentControllerApi.md#listDashboardNoticeInfoUsingGET1) | **GET** /restapi/v1.0/ems/dashboard/notice | listDashboardNoticeInfo
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**listDashboardStorageInfoUsingGET**](docs/EnvironmentControllerApi.md#listDashboardStorageInfoUsingGET) | **GET** /restapi/v1.0/ems/dashboard/storage | listDashboardStorageInfo
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**listEditNoticeInfoUsingGET1**](docs/EnvironmentControllerApi.md#listEditNoticeInfoUsingGET1) | **GET** /restapi/v1.0/ems/dashboard/notice/edit | listEditNoticeInfo
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**listLicenseUsingGET1**](docs/EnvironmentControllerApi.md#listLicenseUsingGET1) | **GET** /restapi/v1.0/ems/license | listLicense
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**listMenuUsingGET**](docs/EnvironmentControllerApi.md#listMenuUsingGET) | **GET** /restapi/v1.0/ems/menu | listMenu
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**updateDashboardPriorityUsingPUT**](docs/EnvironmentControllerApi.md#updateDashboardPriorityUsingPUT) | **PUT** /restapi/v1.0/ems/dashboard | updateDashboardPriority
*MagicInfoServerV41RestApi.EnvironmentControllerApi* | [**updateNoticeInfoUsingPUT1**](docs/EnvironmentControllerApi.md#updateNoticeInfoUsingPUT1) | **PUT** /restapi/v1.0/ems/dashboard/notice/edit | updateNoticeInfo
*MagicInfoServerV41RestApi.MessageScheduleControllerApi* | [**copyMessageScheduleUsingPUT1**](docs/MessageScheduleControllerApi.md#copyMessageScheduleUsingPUT1) | **PUT** /restapi/v1.0/dms/schedule/messages/{messageId}/copy | copyMessageSchedule
*MagicInfoServerV41RestApi.MessageScheduleControllerApi* | [**createMessageScheduleUsingPOST**](docs/MessageScheduleControllerApi.md#createMessageScheduleUsingPOST) | **POST** /restapi/v1.0/dms/schedule/messages | createMessageSchedule
*MagicInfoServerV41RestApi.MessageScheduleControllerApi* | [**deleteMessageScheduleUsingDELETE1**](docs/MessageScheduleControllerApi.md#deleteMessageScheduleUsingDELETE1) | **DELETE** /restapi/v1.0/dms/schedule/messages/{messageId} | deleteMessageSchedule
*MagicInfoServerV41RestApi.MessageScheduleControllerApi* | [**deployMessageScheduleUsingPUT**](docs/MessageScheduleControllerApi.md#deployMessageScheduleUsingPUT) | **PUT** /restapi/v1.0/dms/schedule/messages/{messageId}/deploy | deployMessageSchedule
*MagicInfoServerV41RestApi.MessageScheduleControllerApi* | [**editMessageScheduleUsingPUT1**](docs/MessageScheduleControllerApi.md#editMessageScheduleUsingPUT1) | **PUT** /restapi/v1.0/dms/schedule/messages/{messageId} | editMessageSchedule
*MagicInfoServerV41RestApi.MessageScheduleControllerApi* | [**getMessageInfoUsingGET1**](docs/MessageScheduleControllerApi.md#getMessageInfoUsingGET1) | **GET** /restapi/v1.0/dms/schedule/messages/{messageId} | getMessageInfo
*MagicInfoServerV41RestApi.MessageScheduleControllerApi* | [**listAllMessageScheduleUsingGET**](docs/MessageScheduleControllerApi.md#listAllMessageScheduleUsingGET) | **GET** /restapi/v1.0/dms/schedule/messages | listAllMessageSchedule
*MagicInfoServerV41RestApi.MessageScheduleControllerApi* | [**listMessageUsingPOST**](docs/MessageScheduleControllerApi.md#listMessageUsingPOST) | **POST** /restapi/v1.0/dms/schedule/messages/filter | listMessage
*MagicInfoServerV41RestApi.MessageScheduleGroupControllerApi* | [**getChildGroupsUsingGET3**](docs/MessageScheduleGroupControllerApi.md#getChildGroupsUsingGET3) | **GET** /restapi/v1.0/dms/schedule/messages/groups/{groupId}/child | getChildGroups
*MagicInfoServerV41RestApi.MessageScheduleGroupControllerApi* | [**getRootGroupsUsingGET2**](docs/MessageScheduleGroupControllerApi.md#getRootGroupsUsingGET2) | **GET** /restapi/v1.0/dms/schedule/messages/groups | getRootGroups
*MagicInfoServerV41RestApi.MessageScheduleGroupControllerApi* | [**listMessageScheduleGroupInfoUsingGET**](docs/MessageScheduleGroupControllerApi.md#listMessageScheduleGroupInfoUsingGET) | **GET** /restapi/v1.0/dms/schedule/messages/groups/{groupId} | listMessageScheduleGroupInfo
*MagicInfoServerV41RestApi.PlaylistControllerApi* | [**copyPlaylistUsingPUT1**](docs/PlaylistControllerApi.md#copyPlaylistUsingPUT1) | **PUT** /restapi/v1.0/cms/playlists/{playlistId}/copy | copyPlaylist
*MagicInfoServerV41RestApi.PlaylistControllerApi* | [**createPlaylistUsingPOST**](docs/PlaylistControllerApi.md#createPlaylistUsingPOST) | **POST** /restapi/v1.0/cms/playlists | createPlaylist
*MagicInfoServerV41RestApi.PlaylistControllerApi* | [**deletePlaylistUsingDELETE**](docs/PlaylistControllerApi.md#deletePlaylistUsingDELETE) | **DELETE** /restapi/v1.0/cms/playlists/{playlistId} | deletePlaylist
*MagicInfoServerV41RestApi.PlaylistControllerApi* | [**editPlaylistUsingPUT**](docs/PlaylistControllerApi.md#editPlaylistUsingPUT) | **PUT** /restapi/v1.0/cms/playlists/{playlistId} | editPlaylist
*MagicInfoServerV41RestApi.PlaylistControllerApi* | [**getActivePlaylistInfoUsingGET**](docs/PlaylistControllerApi.md#getActivePlaylistInfoUsingGET) | **GET** /restapi/v1.0/cms/playlists/{playlistId} | getActivePlaylistInfo
*MagicInfoServerV41RestApi.PlaylistControllerApi* | [**getDashboardPlaylistInfoUsingGET1**](docs/PlaylistControllerApi.md#getDashboardPlaylistInfoUsingGET1) | **GET** /restapi/v1.0/cms/playlists/dashboard | getDashboardPlaylistInfo
*MagicInfoServerV41RestApi.PlaylistControllerApi* | [**listAllPlaylistUsingGET1**](docs/PlaylistControllerApi.md#listAllPlaylistUsingGET1) | **GET** /restapi/v1.0/cms/playlists | listAllPlaylist
*MagicInfoServerV41RestApi.PlaylistControllerApi* | [**listPlaylistUsingPOST1**](docs/PlaylistControllerApi.md#listPlaylistUsingPOST1) | **POST** /restapi/v1.0/cms/playlists/filter | listPlaylist
*MagicInfoServerV41RestApi.PlaylistGroupControllerApi* | [**getGroupUsingGET3**](docs/PlaylistGroupControllerApi.md#getGroupUsingGET3) | **GET** /restapi/v1.0/cms/playlists/groups/{groupId} | getGroup
*MagicInfoServerV41RestApi.PlaylistGroupControllerApi* | [**listChildGroupUsingGET2**](docs/PlaylistGroupControllerApi.md#listChildGroupUsingGET2) | **GET** /restapi/v1.0/cms/playlists/groups/{groupId}/child | listChildGroup
*MagicInfoServerV41RestApi.PlaylistGroupControllerApi* | [**listDefaultGroupUsingGET2**](docs/PlaylistGroupControllerApi.md#listDefaultGroupUsingGET2) | **GET** /restapi/v1.0/cms/playlists/groups | listDefaultGroup
*MagicInfoServerV41RestApi.UserControllerApi* | [**createUserSignUpUsingPOST**](docs/UserControllerApi.md#createUserSignUpUsingPOST) | **POST** /restapi/v1.0/ums/users/signup | createUserSignUp
*MagicInfoServerV41RestApi.UserControllerApi* | [**createUserUsingPOST**](docs/UserControllerApi.md#createUserUsingPOST) | **POST** /restapi/v1.0/ums/users | createUser
*MagicInfoServerV41RestApi.UserControllerApi* | [**listDashboardUserInfoUsingGET**](docs/UserControllerApi.md#listDashboardUserInfoUsingGET) | **GET** /restapi/v1.0/ums/users/dashboard | listDashboardUserInfo
*MagicInfoServerV41RestApi.UserControllerApi* | [**listMyInfoUsingGET**](docs/UserControllerApi.md#listMyInfoUsingGET) | **GET** /restapi/v1.0/ums/users/me | Get specific admin
*MagicInfoServerV41RestApi.UserControllerApi* | [**listUserOrganUsingGET1**](docs/UserControllerApi.md#listUserOrganUsingGET1) | **GET** /restapi/v1.0/ums/users/organization | listUserOrgan
*MagicInfoServerV41RestApi.UserControllerApi* | [**updateMyInfoUsingPUT1**](docs/UserControllerApi.md#updateMyInfoUsingPUT1) | **PUT** /restapi/v1.0/ums/users/me | updateMyInfo
*MagicInfoServerV41RestApi.UserGroupControllerApi* | [**listUserGroupChildUsingGET1**](docs/UserGroupControllerApi.md#listUserGroupChildUsingGET1) | **GET** /restapi/v1.0/ums/users/groups/{groupId}/child | listUserGroupChild
*MagicInfoServerV41RestApi.UserGroupControllerApi* | [**listUserGroupInfoUsingGET1**](docs/UserGroupControllerApi.md#listUserGroupInfoUsingGET1) | **GET** /restapi/v1.0/ums/users/groups/{groupId} | listUserGroupInfo
*MagicInfoServerV41RestApi.UserGroupControllerApi* | [**listUserGroupOrganUsingGET1**](docs/UserGroupControllerApi.md#listUserGroupOrganUsingGET1) | **GET** /restapi/v1.0/ums/users/groups | listUserGroupOrgan


## Documentation for Models

 - [MagicInfoServerV41RestApi.AuthResource](docs/AuthResource.md)
 - [MagicInfoServerV41RestApi.ContentApproveResource](docs/ContentApproveResource.md)
 - [MagicInfoServerV41RestApi.ContentFilter](docs/ContentFilter.md)
 - [MagicInfoServerV41RestApi.ContentScheduleItemResource](docs/ContentScheduleItemResource.md)
 - [MagicInfoServerV41RestApi.ContentScheduleResource](docs/ContentScheduleResource.md)
 - [MagicInfoServerV41RestApi.DeviceApproveResource](docs/DeviceApproveResource.md)
 - [MagicInfoServerV41RestApi.DeviceDisplayConfResource](docs/DeviceDisplayConfResource.md)
 - [MagicInfoServerV41RestApi.DeviceDisplayConfSubResource](docs/DeviceDisplayConfSubResource.md)
 - [MagicInfoServerV41RestApi.DeviceDisplayCustomLogoResource](docs/DeviceDisplayCustomLogoResource.md)
 - [MagicInfoServerV41RestApi.DeviceDownloadServerResource](docs/DeviceDownloadServerResource.md)
 - [MagicInfoServerV41RestApi.DeviceFilter](docs/DeviceFilter.md)
 - [MagicInfoServerV41RestApi.DeviceGeneralConfResource](docs/DeviceGeneralConfResource.md)
 - [MagicInfoServerV41RestApi.DeviceLedCabinetResource](docs/DeviceLedCabinetResource.md)
 - [MagicInfoServerV41RestApi.DeviceSecurityConfResource](docs/DeviceSecurityConfResource.md)
 - [MagicInfoServerV41RestApi.DeviceSystemSetupConfResource](docs/DeviceSystemSetupConfResource.md)
 - [MagicInfoServerV41RestApi.DeviceTimeClockConf](docs/DeviceTimeClockConf.md)
 - [MagicInfoServerV41RestApi.DeviceTimeHolidayResource](docs/DeviceTimeHolidayResource.md)
 - [MagicInfoServerV41RestApi.DeviceTimeTimerConf](docs/DeviceTimeTimerConf.md)
 - [MagicInfoServerV41RestApi.DeviceTimeconfResource](docs/DeviceTimeconfResource.md)
 - [MagicInfoServerV41RestApi.EnvironmentNoticeFilter](docs/EnvironmentNoticeFilter.md)
 - [MagicInfoServerV41RestApi.EnvironmentPriorityFilter](docs/EnvironmentPriorityFilter.md)
 - [MagicInfoServerV41RestApi.Error](docs/Error.md)
 - [MagicInfoServerV41RestApi.HashMapstringobject](docs/HashMapstringobject.md)
 - [MagicInfoServerV41RestApi.Map](docs/Map.md)
 - [MagicInfoServerV41RestApi.MessageResource](docs/MessageResource.md)
 - [MagicInfoServerV41RestApi.MessageScheduleFilter](docs/MessageScheduleFilter.md)
 - [MagicInfoServerV41RestApi.MessageScheduleResource](docs/MessageScheduleResource.md)
 - [MagicInfoServerV41RestApi.PlaylistFilter](docs/PlaylistFilter.md)
 - [MagicInfoServerV41RestApi.PlaylistItemResource](docs/PlaylistItemResource.md)
 - [MagicInfoServerV41RestApi.PlaylistResource](docs/PlaylistResource.md)
 - [MagicInfoServerV41RestApi.Property](docs/Property.md)
 - [MagicInfoServerV41RestApi.Response](docs/Response.md)
 - [MagicInfoServerV41RestApi.ResponseBody](docs/ResponseBody.md)
 - [MagicInfoServerV41RestApi.ScheduleFilter](docs/ScheduleFilter.md)
 - [MagicInfoServerV41RestApi.TagResource](docs/TagResource.md)
 - [MagicInfoServerV41RestApi.Timestamp](docs/Timestamp.md)
 - [MagicInfoServerV41RestApi.TokenAuth](docs/TokenAuth.md)
 - [MagicInfoServerV41RestApi.UserFilter](docs/UserFilter.md)
 - [MagicInfoServerV41RestApi.Xml](docs/Xml.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: api_key
- **Location**: HTTP header

