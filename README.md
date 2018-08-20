This task was developed on a Ubuntu machine using node v10.5.0, npm v6.4.0 and mongoDB server v4.0.0

1) Install & Start mongoDB server (version: 4.0.0) & connect to: mongodb://127.0.0.1:27017. 
For more info: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
- $ sudo service mongod start

2) Install & Start the 'backend' express node server.
Using a browser, endpoints should be viewable from localhost:3001/calc and localhost:3001/users
- $ cd we-are-vista-test-backend
- $ npm install
- $ PORT=3001 npm start


3) Install & start 'frontend' react client.
- $ cd we-are-vista-test
- $ npm install
- $ npm start
