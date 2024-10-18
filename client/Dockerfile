# Use the official Node.js image as the base image
FROM public.ecr.aws/c9y0a3x2/node14:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
# RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
