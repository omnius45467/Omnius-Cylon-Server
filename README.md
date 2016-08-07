# Cylon Server

## The goal of this api is to create a way for a user to control a droid through https connections with nodejs

Install Deps
```
    npm i
```

Run server
```
    node server
```

Run ngrok
```
    ngrok http 8080
```

Handle Requests to this server, this will give you the available commands
```
curl http://<ngrok_domain>:8080/api/robots/omnius/commands
```
