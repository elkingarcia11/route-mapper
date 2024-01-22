# Use the official Node.js runtime as the base image
FROM node:lts AS development

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

FROM development AS build

# Set build arguments during the build process
ARG REACT_APP_GOOGLE_MAPS_API_KEY
ARG REACT_APP_GOOGLE_MAPS_MAP_API_KEY

# Set environment variables during the build process
ENV REACT_APP_GOOGLE_MAPS_API_KEY=${REACT_APP_GOOGLE_MAPS_API_KEY:-default_value}
ENV REACT_APP_GOOGLE_MAPS_MAP_API_KEY=${REACT_APP_GOOGLE_MAPS_MAP_API_KEY:-default_value}

# Build the React app for production
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine AS production

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]