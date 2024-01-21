# Route Mapper Web App
Web App that uses React, Google Maps API and LocalStorage to manage routes. Uses GitHub, Cloud Build, Artifact Registry and Cloud Run for CI/CD.

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Version Control](#version-control)
4. [CI/CD Pipeline](#ci/cd-pipeline)
5. [Dependencies](#dependencies)
6. [Development](#development)
7. [Features](#features)
7. [Upcoming Features](#upcoming-features)
8. [Contact](#contact)
8. [Acknowledgments](#acknowledgements)

## Installation

1. Install Node Package Manager (npm)
2. Install project dependencies: `npm install`
   
## Configuration

1. Configure the environment variables for the project by creating a `.env` file and adding your Google Maps API credentials
  
## Version Control:

1. GitHub for source code
2. Artifact Registry for Docker image
3. Cloud Run for deployment version control

## CI/CD Pipeline:

1. Changes are pushed to `main` branch of source code
2. Cloud Build triggers new Docker image build and pushes it to Artifact Registry
3. Cloud Build triggers a new Cloud Run version deployment of web app using new Docker image in Artifact Registry

## Dependencies

- `npm i @react-google-maps/api`
- `npm i react-google-autocomplete`
- `npm i react-tiny-popover`
- `npm install react-icons`
- `npm i google-map-react`
- `npm i @vis.gl/react-google-maps`

## Development

In the project directory, you can run `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Features

- Adds and Deletes stops
- View stops on Map
- Select stops on Map to view stop information
  
## Upcoming Features

- LocalStorage implementation for temporary data storage during session
- Cloud Firestore implementation for data storage for longer periods

## Contact

For questions, feedback, or inquiries, feel free to contact me via email at elkingarcia.11@gmail.com or connect with me on [LinkedIn](https://www.linkedin.com/in/elkingarcia11/)

## Acknowledgments

Special thanks to GitHub for source code version control and Google for providing tools like Artifact Registry, Cloud Build and Cloud Run to improve CI/CD pipeline.
