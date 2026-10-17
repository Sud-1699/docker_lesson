# Build the Angular Application
FROM node:24.22.0-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy application source and run it
COPY . .
ENTRYPOINT [ "npm", "run", "start", "--", "--host", "0.0.0.0"]