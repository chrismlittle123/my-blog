# Use an official Node.js runtime as the base image
FROM node:18.16.0 AS build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Use Nginx for serving the built files
FROM nginx:1.21.1-alpine AS prod-stage

# Copy the build files from the build stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# Copy the Nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the desired port
EXPOSE 80

# The command that starts nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
