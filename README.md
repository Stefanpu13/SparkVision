# sparkvision

> A simple Vue.js project for SparkVision`s interview task

## App
[Try it](http://sparkvision.azurewebsites.net/)

----

## Decisions
### 1. Why Vue.js?
1. To use simple library with binding and livecycle.
2. To avoid direct manipulation of dom
3. To automate the build process, through Vue-cli
4. To separate menu and pictures in little components

### 2. Why styles, html and scripts are in same files?
I followed Vue reccomendation on [single-file components](https://vuejs.org/v2/guide/single-file-components.html).

### 3. Why bootstrap 4?
1. It has ability to make layout responsive with flexbox
2. It has nice navbar styling
2. It has styles for buttons

### 4. Why Azure
1. I am familiar and have subscription
2. It can host webapps and static content

### 5. Loading Parsing an xml file
I used [x2js](https://badge.fury.io/js/x2js) as it was simple and did the work

For sake of show off and experiment I load the file from Azure File Storage and
provide it through [SAS](https://docs.microsoft.com/en-us/azure/storage/common/storage-dotnet-shared-access-signature-part-1) as it allows for limited access to assets.
As usual, boastings do not go that well, so If you do not see the menu on page load - reload the page.

Edit: used Azure blob storage and things should be working fine.
### 6. Loading the pictures

Ideally the images would be served on demand(so the user does not need to download all at initial page load)
However, I encountered problems with Azure File Storage and decided to add them as static content, and have a working demo.

### 7. Centering the pictures

 Adding `position:relative` to images' containers and centering them with  `position:absolute`
 turned out the only solution that works on edge, chrome, firefox.

### 8. Visualizing the menus

Using flex allowed for both responsiveness and positioning.

Rebuilding list of displayed menus is simple and avoids direct dom manipulations.

### 9. Deploying the app

Trough Vue-cli the app is built (as easy as `npm run build`).
The content of 'dist' directory is then manually copied over ftp to Azure.

----

## A few Problems...

1. The app is a bit over-engineered - for exmaple, there is no actual need to load files trhough Azure, bootstrap can be replaced by a little custom css
2. If it is going to be an app, a linter will be usefull during develoment process.
3. The xml parser library was not carefully researched, looking at github it does not seem popular.
4. There is a warning on the github page for 'potential security vulnerability'.

----
