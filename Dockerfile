# Use official node image as the base image
FROM node:16-alpine3.12 as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install 

# Generate the build of the application
RUN  npm run build

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/meal-randomizer /usr/share/nginx/html

# PASTE THIS LINE INTO PROMPT TO CREATE DOCKER IMAGE
#docker build -t tanks-on-minimal-image:latest  .

# PASTE THIS LINE INTO PROMPT TO CREATE AND RUN DOCKER CONTAINER
#docker run -d -p 8081:80 tanks-on-minimal-image:latest