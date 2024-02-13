# Use the official Node.js runtime as the base image
FROM node:lts AS development

ARG REACT_APP_FB_API_KEY
ARG REACT_APP_FB_AUTH_DOMAIN
ARG REACT_APP_FB_PROJECT_ID
ARG REACT_APP_FB_STORAGE_BUCKET
ARG REACT_APP_FB_MESSAGINGSENDER_ID
ARG REACT_APP_FB_APP_ID
ARG REACT_APP_FB_MEASUREMENT_ID

ENV REACT_APP_FB_API_KEY=$REACT_APP_FB_API_KEY
ENV REACT_APP_FB_AUTH_DOMAIN=$REACT_APP_FB_AUTH_DOMAIN
ENV REACT_APP_FB_PROJECT_ID=$REACT_APP_FB_PROJECT_ID
ENV REACT_APP_FB_STORAGE_BUCKET=$REACT_APP_FB_STORAGE_BUCKET
ENV REACT_APP_FB_MESSAGINGSENDER_ID=$REACT_APP_FB_MESSAGINGSENDER_ID
ENV REACT_APP_FB_APP_ID=$REACT_APP_FB_APP_ID
ENV REACT_APP_FB_MEASUREMENT_ID=$REACT_APP_FB_MEASUREMENT_ID

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Build the application
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine AS production

# Copy the built React app from the development stage to Nginx's web server directory
COPY --from=development /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
