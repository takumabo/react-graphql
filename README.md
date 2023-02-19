# React + GraphQL App

this is react application with grapql server

> construction
- .devcontainer<br>
    you can set up app with remote dev container
- backend<br>
    node.js, grapql, mongoDB.
- frontend<br>
    react app with typescript
- scripts<br>
    here is initial instaling of global modules.
- .gitignore
- nodemon.json
- README.md


# backend

this application depends on some following modules.

noted: you need set up ```nodemon app.ts``` at ```/backend``` and check ```Running on http://localhost:4000``` at server.

### nodemon

this application use `nodemon` to set up backend.

if you start backend, please following.
```
$ cd /workspace/backend
# nodemon -r dotenv/config app.ts && dotenv_config_path=.env
```
reference urls:
```
https://www.digitalocean.com/community/tutorials/workflow-nodemon-jas
```

> notice: you have yo create backend .env. Please refer .env.example.


# frontend
this application depends on react with typescript

noted: you need set up ```npm start``` at ```/frontend``` and check ```localhost:3000``` at browser.

# other
some modules use not latest because of resolving dependencies modules.
<br>
if you cann't install successfully anything, please follow this options
```
$ npm i [module name] --save --legacy-peer-deps
```
Basically, it seems good to change the version of the library to be used or consider another library to find a way to match the integration compared with using ```--legacy-peer-deps``` when there is nothing you can do about it.




