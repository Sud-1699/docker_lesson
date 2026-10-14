# Today docker learning
## Create Nginx server using docker

## Prerequistics
```
Ngnix image
Docker
Docker CLI
```

## Step
### 1. Setup folder and create custom html file
```
Created a simple html file index.html
Created a Dockerfile to build custom nginx image with custom html
```
### 2. Build a custom image
```
docker build -t <image-name>:<version> .

docker build -t simple-nginx:0.0.1 .
```
_Note:_ version is optional and __.__ mean your Dockerfile in parent folder

### 3. Create a container from custom image
```
docker run --name <container-name> -p <host_port>:<container_port> -d <image-name>

docker run --name simple-nginx-container -p 8080:80 -d simple-nginx:0.0.1
```
_Note:_ -p -> port, -d -> detact mode

__Final output open http:localhost:8080 in browser to check you custom html is reflecting or not__

## Additional docker commands
_To check running or non-running container_
```
docker ps
docker ps -a
```

_To stop running or remove non-running container_
```
docker stop <container-name or container-id>
docker rm <container-name or container-id>
```

_Check image list_
```
docker image ls
```

_To remove image from list_
```
docker image rm <image-name>:<version>

version is optional is not mentioned
```