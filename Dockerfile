# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Write environment variables to a .env file before building
RUN echo "REACT_APP_API_URL=\"https://cicdm1.onrender.com\"" > .env \
    && echo "REACT_APP_GOOGLE_OAUTH_CLIENT_ID=\"52040285425-oi8cuem7ihdra1lqp3l5ashu39hst1e5.apps.googleusercontent.com\"" >> .env

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Install serve globally to serve the build folder
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Serve the build folder using the global serve binary
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
