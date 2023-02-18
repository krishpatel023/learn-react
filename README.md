NOTES:

## ProtectedRoutes

* App.js some protected routes are added.
* Now in protected routes we cheched that is the value of login is true or false in the key(login) of local storage.
* Then in login onClick we changed the value of the key and then we can access the pages.

--> If we try to access the protected pages if the value is false then we can not access the pages(about & filter) but after login we can.

# Before Login
[!Screenshot](./ScreenShots/before.png);

# After Login
[!Screenshot](./ScreenShots/after.png);