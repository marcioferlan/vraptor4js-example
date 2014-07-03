# VRaptor4js Example

This project contains 2 simple web application to help you test and get started with VRaptor4js plugin (both client-side and server-side).

Just import it and its modules to your IDE as Maven Projects, add them to your application server or servlet container and start it.

Server-side app
---------------

Visit http://localhost:8080/vraptor4js-api

You should see something like this: ```{"string":"It works! You have installed VRaptor4js plugin correctly."}```

> * Notice: Keep the same project context path or ensure you reflect any changes in the test application as well.

Client-side app
---------------

Visit http://localhost:8080/vraptor4js-test

You should see a page with options for you to test using either AngularJS or jQuery.

The client app will fetch that message from the server and present it on the page using VRaptor4js API.

> Tested on Tomcat 7 (with Eclipse Kepler for JEE Developers).