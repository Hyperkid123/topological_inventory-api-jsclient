# topological_inventory

TopologicalInventory - JavaScript client for topological_inventory
Topological Inventory
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.0.1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install topological_inventory --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

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
var TopologicalInventory = require('topological_inventory');

var defaultClient = TopologicalInventory.ApiClient.instance;

// Configure HTTP basic authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.username = 'YOUR USERNAME'
UserSecurity.password = 'YOUR PASSWORD'

var api = new TopologicalInventory.DefaultApi()

var body = new TopologicalInventory.Id(); // {Id} 

api.createEndpoint(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://virtserver.swaggerhub.com/api/v0.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TopologicalInventory.DefaultApi* | [**createEndpoint**](docs/DefaultApi.md#createEndpoint) | **POST** /endpoints | Create a new Endpoint
*TopologicalInventory.DefaultApi* | [**createSource**](docs/DefaultApi.md#createSource) | **POST** /sources | Create a new Source
*TopologicalInventory.DefaultApi* | [**deleteEndpoint**](docs/DefaultApi.md#deleteEndpoint) | **DELETE** /endpoints/{id} | Delete an existing Endpoint
*TopologicalInventory.DefaultApi* | [**deleteSource**](docs/DefaultApi.md#deleteSource) | **DELETE** /sources/{id} | Delete an existing Source
*TopologicalInventory.DefaultApi* | [**listContainerGroups**](docs/DefaultApi.md#listContainerGroups) | **GET** /container_groups | List ContainerGroups
*TopologicalInventory.DefaultApi* | [**listContainerNodeContainerGroups**](docs/DefaultApi.md#listContainerNodeContainerGroups) | **GET** /container_nodes/{id}/container_groups | List ContainerGroups for ContainerNode
*TopologicalInventory.DefaultApi* | [**listContainerNodes**](docs/DefaultApi.md#listContainerNodes) | **GET** /container_nodes | List ContainerNodes
*TopologicalInventory.DefaultApi* | [**listContainerProjectContainerGroups**](docs/DefaultApi.md#listContainerProjectContainerGroups) | **GET** /container_projects/{id}/container_groups | List ContainerGroups for ContainerProject
*TopologicalInventory.DefaultApi* | [**listContainerProjectContainerTemplates**](docs/DefaultApi.md#listContainerProjectContainerTemplates) | **GET** /container_projects/{id}/container_templates | List ContainerTemplates for ContainerProject
*TopologicalInventory.DefaultApi* | [**listContainerProjects**](docs/DefaultApi.md#listContainerProjects) | **GET** /container_projects | List ContainerProjects
*TopologicalInventory.DefaultApi* | [**listContainerTemplates**](docs/DefaultApi.md#listContainerTemplates) | **GET** /container_templates | List ContainerTemplates
*TopologicalInventory.DefaultApi* | [**listEndpoints**](docs/DefaultApi.md#listEndpoints) | **GET** /endpoints | List Endpoints
*TopologicalInventory.DefaultApi* | [**listServiceInstances**](docs/DefaultApi.md#listServiceInstances) | **GET** /service_instances | List ServiceInstances
*TopologicalInventory.DefaultApi* | [**listServiceOfferingServiceInstances**](docs/DefaultApi.md#listServiceOfferingServiceInstances) | **GET** /service_offerings/{id}/service_instances | List ServiceInstances for ServiceOffering
*TopologicalInventory.DefaultApi* | [**listServiceOfferingServicePlans**](docs/DefaultApi.md#listServiceOfferingServicePlans) | **GET** /service_offerings/{id}/service_plans | List ServicePlans for ServiceOffering
*TopologicalInventory.DefaultApi* | [**listServiceOfferings**](docs/DefaultApi.md#listServiceOfferings) | **GET** /service_offerings | List ServiceOfferings
*TopologicalInventory.DefaultApi* | [**listServicePlanServiceInstances**](docs/DefaultApi.md#listServicePlanServiceInstances) | **GET** /service_plans/{id}/service_instances | List ServiceInstances for ServicePlan
*TopologicalInventory.DefaultApi* | [**listServicePlans**](docs/DefaultApi.md#listServicePlans) | **GET** /service_plans | List ServicePlans
*TopologicalInventory.DefaultApi* | [**listSourceContainerGroups**](docs/DefaultApi.md#listSourceContainerGroups) | **GET** /sources/{id}/container_groups | List ContainerGroups for Source
*TopologicalInventory.DefaultApi* | [**listSourceContainerNodes**](docs/DefaultApi.md#listSourceContainerNodes) | **GET** /sources/{id}/container_nodes | List ContainerNodes for Source
*TopologicalInventory.DefaultApi* | [**listSourceContainerProjects**](docs/DefaultApi.md#listSourceContainerProjects) | **GET** /sources/{id}/container_projects | List ContainerProjects for Source
*TopologicalInventory.DefaultApi* | [**listSourceContainerTemplates**](docs/DefaultApi.md#listSourceContainerTemplates) | **GET** /sources/{id}/container_templates | List ContainerTemplates for Source
*TopologicalInventory.DefaultApi* | [**listSourceEndpoints**](docs/DefaultApi.md#listSourceEndpoints) | **GET** /sources/{id}/endpoints | List Endpoints for Source
*TopologicalInventory.DefaultApi* | [**listSourceServiceInstances**](docs/DefaultApi.md#listSourceServiceInstances) | **GET** /sources/{id}/service_instances | List ServiceInstances for Source
*TopologicalInventory.DefaultApi* | [**listSourceServiceOfferings**](docs/DefaultApi.md#listSourceServiceOfferings) | **GET** /sources/{id}/service_offerings | List ServiceOfferings for Source
*TopologicalInventory.DefaultApi* | [**listSourceServicePlans**](docs/DefaultApi.md#listSourceServicePlans) | **GET** /sources/{id}/service_plans | List ServicePlans for Source
*TopologicalInventory.DefaultApi* | [**listSources**](docs/DefaultApi.md#listSources) | **GET** /sources | List Sources
*TopologicalInventory.DefaultApi* | [**replaceEndpoint**](docs/DefaultApi.md#replaceEndpoint) | **PUT** /endpoints/{id} | Replace an existing Endpoint
*TopologicalInventory.DefaultApi* | [**replaceSource**](docs/DefaultApi.md#replaceSource) | **PUT** /sources/{id} | Replace an existing Source
*TopologicalInventory.DefaultApi* | [**showContainerGroup**](docs/DefaultApi.md#showContainerGroup) | **GET** /container_groups/{id} | Show an existing ContainerGroup
*TopologicalInventory.DefaultApi* | [**showContainerNode**](docs/DefaultApi.md#showContainerNode) | **GET** /container_nodes/{id} | Show an existing ContainerNode
*TopologicalInventory.DefaultApi* | [**showContainerProject**](docs/DefaultApi.md#showContainerProject) | **GET** /container_projects/{id} | Show an existing ContainerProject
*TopologicalInventory.DefaultApi* | [**showContainerTemplate**](docs/DefaultApi.md#showContainerTemplate) | **GET** /container_templates/{id} | Show an existing ContainerTemplate
*TopologicalInventory.DefaultApi* | [**showEndpoint**](docs/DefaultApi.md#showEndpoint) | **GET** /endpoints/{id} | Show an existing Endpoint
*TopologicalInventory.DefaultApi* | [**showServiceInstance**](docs/DefaultApi.md#showServiceInstance) | **GET** /service_instances/{id} | Show an existing ServiceInstance
*TopologicalInventory.DefaultApi* | [**showServiceOffering**](docs/DefaultApi.md#showServiceOffering) | **GET** /service_offerings/{id} | Show an existing ServiceOffering
*TopologicalInventory.DefaultApi* | [**showServicePlan**](docs/DefaultApi.md#showServicePlan) | **GET** /service_plans/{id} | Show an existing ServicePlan
*TopologicalInventory.DefaultApi* | [**showSource**](docs/DefaultApi.md#showSource) | **GET** /sources/{id} | Show an existing Source
*TopologicalInventory.DefaultApi* | [**updateEndpoint**](docs/DefaultApi.md#updateEndpoint) | **PATCH** /endpoints/{id} | Update an existing Endpoint
*TopologicalInventory.DefaultApi* | [**updateSource**](docs/DefaultApi.md#updateSource) | **PATCH** /sources/{id} | Update an existing Source


## Documentation for Models

 - [TopologicalInventory.ContainerGroup](docs/ContainerGroup.md)
 - [TopologicalInventory.ContainerNode](docs/ContainerNode.md)
 - [TopologicalInventory.ContainerProject](docs/ContainerProject.md)
 - [TopologicalInventory.ContainerTemplate](docs/ContainerTemplate.md)
 - [TopologicalInventory.Endpoint](docs/Endpoint.md)
 - [TopologicalInventory.Id](docs/Id.md)
 - [TopologicalInventory.ServiceInstance](docs/ServiceInstance.md)
 - [TopologicalInventory.ServiceOffering](docs/ServiceOffering.md)
 - [TopologicalInventory.ServicePlan](docs/ServicePlan.md)
 - [TopologicalInventory.Source](docs/Source.md)
 - [TopologicalInventory.SourceType](docs/SourceType.md)
 - [TopologicalInventory.Task](docs/Task.md)
 - [TopologicalInventory.Vm](docs/Vm.md)
 - [TopologicalInventory.Volume](docs/Volume.md)
 - [TopologicalInventory.VolumeAttachment](docs/VolumeAttachment.md)
 - [TopologicalInventory.VolumeType](docs/VolumeType.md)


## Documentation for Authorization


### UserSecurity

- **Type**: HTTP basic authentication

