# Navigator.ts
*An open source single-page app navigation framework written in Typescript*


## Overview
During our development of [Playstr](https://www.playstr.link) we ran into a problem,
while Windows 10*, Web and iOS don't really have a dedicated back button Windows 10 Mobile and Android have.
This meant that we had to options switch from injecting sub pages directly into the ```#app-page``` div to navigate to new pages
(this meant that Music playback would stop as soon as you navigated away from the current page, so this weren't really an option)
or implement our own navigation framework this is the result from the later.

**it does but it's really only extensively used in tablet mode... so far...*

## Getting Started
```javascript
//Create a new Navigator
pageNavigator = new NavigatorTs.Navigator();

//Hook our own navigation function
pageNavigator.NavigationHandler = function(pageName: string) {
    alert(pageName);
}

//Do some navigation
pageNavigator.AddEntry('Page1');
pageNavigator.AddEntry('Page2');
pageNavigator.AddEntry('Page3');

//Go back twice then forward
pageNavigator.GoBack();
pageNavigator.GoBack();
pageNavigator.GoForward();

/* We're now at Page2 */
```

## Documentation
*TODO*

##Building
1. Start by grabbing Typescript using node
```
npm install -g typescript
```
2. Navigate to the root of Navigator.ts and type
```
tsc --out navigator.js navigator.ts -t ES5
```
