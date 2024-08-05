# News Application assignment

## Tech Stack

- React
- React Rourter DOM
- Styled Components
- React Select
- React Toastify
- NewsAPI
- HeroIcons

# Running the React Application Locally with Docker

This guide provides instructions for running a React application locally using Docker. The Docker image for the React application is `ayush027/react-newsapp`, and you can specify the image tag as needed.

## Prerequisites

- **Docker Installed**: Ensure Docker is installed and running on your local machine. Download Docker from [Docker's official website](https://www.docker.com/products/docker-desktop).

## Steps to Run the React Application Locally

1. **Pull the Docker Image**

   Pull the Docker image from the Docker repository by running the following command.
   ```bash
     docker pull ayush027/react-newsapp:dev

## Run the Docker Container

Start a Docker container from the pulled image and map the container's port to your local machine:


```docker run -p 5173:5173 ayush027/react-newsapp:dev```


## Access the Application

Open a web browser and navigate to:
http://localhost:5173


Then stop the container using:
```
docker stop container_id