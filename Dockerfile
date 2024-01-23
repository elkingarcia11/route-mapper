# Use the official Node.js runtime as the base image
FROM node:lts AS development

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Create .env file
RUN echo $REACT_APP_GOOGLE_MAPS_API_KEY
RUN echo REACT_APP_GOOGLE_MAPS_API_KEY=$REACT_APP_GOOGLE_MAPS_API_KEY > .env
RUN echo REACT_APP_GOOGLE_MAPS_MAP_API_KEY=$REACT_APP_GOOGLE_MAPS_MAP_API_KEY >> .env

# Copy the entire application code to the container
COPY . .

# Build the application
RUN npm run build

# Remove the .env file
RUN rm .env

# Use Nginx as the production server
FROM nginx:alpine AS production

# Copy the built React app from the development stage to Nginx's web server directory
COPY --from=development /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]