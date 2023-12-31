# Use an official Node.js runtime as a parent image
FROM node:18.16.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install -y
RUN npm audit fix --force


# Bundle app source
COPY . .

# Expose the port your app runs on
EXPOSE 5001

# Define the command to run your app
CMD ["node", "index.js"]


