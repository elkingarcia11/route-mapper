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

# The .env file is now created during Cloud Build
COPY .env .   

RUN npm run build

# Remove the .env file
RUN rm .env

# Use Nginx as the production server
FROM nginx:alpine AS production

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]