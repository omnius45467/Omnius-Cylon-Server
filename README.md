# Cylon Server


Install Deps
```
    npm i
```

run server
```
    node server
```

run ngrok
```
    ngrok http 8080
```

Handle Requests to this server, this will give you the available commands
```
curl http://{{ngrok-ip-address}}/api/robots/omnius/commands
```