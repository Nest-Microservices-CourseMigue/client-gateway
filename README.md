<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Client Gateway
The gateway is the point of comunication between our clients and our services, is in charge of receiving the petitions, send to corresponding services and return the response to client

## Dev
1. Clone repository
2. Install dependencies
3. Create `.env` file cloning the `.env.template`
4. Init Nats server
```
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```
5. Start all microservices that Gateway consume
6. Start project with `npm run start:dev`
7. Run command to create image docker prod
    ```
    docker build -f dockerfile.prod -t client-gateway .
    ```
