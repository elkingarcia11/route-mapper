# Route Mapper Web App

A web application built with React, Google Maps API, and LocalStorage for efficient route management. Utilizes GitHub, Cloud Build, Artifact Registry, and Cloud Run for a seamless CI/CD pipeline.

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Version Control](#version-control)
4. [CI/CD Pipeline](#ci-cd-pipeline)
5. [Dependencies](#dependencies)
6. [Development](#development)
7. [Features](#features)
8. [Upcoming Features](#upcoming-features)
9. [Contact](#contact)
10. [Acknowledgments](#acknowledgments)

## Installation

1. Install Node Package Manager (npm)
2. Install project dependencies: `npm install`
   
## Configuration

1. Configure the environment variables for the project by creating a `.env` file and adding your Google Maps API credentials
  
## Version Control

1. GitHub for source code
2. Artifact Registry for Docker image
3. Cloud Run for deployment version control

## CI/CD Pipeline

1. Changes are pushed to the `main` branch of the source code
2. Cloud Build triggers a new Docker image build and pushes it to Artifact Registry
3. Cloud Build initiates a new Cloud Run version deployment of the web app using the new Docker image in Artifact Registry

## Dependencies

- `npm i @react-google-maps/api`
- `npm i react-google-autocomplete`
- `npm i react-tiny-popover`
- `npm install react-icons`
- `npm i google-map-react`
- `npm i @vis.gl/react-google-maps`

## Development

To run the app locally, execute `npm start` in the project directory.

This command launches the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload when you make changes, and lint errors will be displayed in the console.

## Features

- Add and delete stops
- View stops on the map
- Select stops on the map to view stop information
  
## Upcoming Features

- LocalStorage implementation for temporary data storage during sessions
- Cloud Firestore implementation for data storage over longer periods

## Contact

For questions, feedback, or inquiries, feel free to contact me via email at elkingarcia.11@gmail.com or connect with me on [LinkedIn](https://www.linkedin.com/in/elkingarcia11/)

## Acknowledgments

Special thanks to GitHub for source code version control and Google for providing tools like Artifact Registry, Cloud Build, and Cloud Run to enhance the CI/CD pipeline.
