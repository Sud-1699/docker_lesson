## Created a express js backend

### Build docker image usind dockerfile to run the container

#### CMD
```
docker build -t express-app:0.0.1 .
docker run --name express-app-container -d -p 8080:8080 express-app:0.0.1
```