# Networking for Backend Developers

If you don't understand how data moves, you can't build scalable microservices.

## The OSI Model from 30,000 feet
For most of us, **Layer 4 (Transport)** and **Layer 7 (Application)** are where the magic happens.

- **TCP vs UDP:** Reliability vs Speed.
- **HTTP/2 & gRPC:** Why traditional REST is sometimes too slow for internal microservice communication.

## Subnetting & Security
In a Docker/Kubernetes environment, understanding internal networking and CIDR blocks is essential for securing your PostgreSQL instances and ensuring services can actually talk to each other.
