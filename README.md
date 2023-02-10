NOTES:

* Only works after any state/props updates.
* If we have 4 states it will run on any of the updation of the state.
* Always use CONDITION while using this or it will run INFINITELY.
* It will not run on page load.

## ARGUMENTS 
* preState --> It will print previous state. See in console. It will always show preState. 

* preProps --> It will print previous props. See in console. It will always show preProps.

* snapshot --> It will always be undefined here. If your component implements getSnapshotBeforeUpdate() lifecycle than only its value will be seen.


## The main use of it is if we want compare current state and previous state.
