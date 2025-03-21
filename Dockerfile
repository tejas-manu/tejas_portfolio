
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install build dependencies for native modules
RUN apk add --no-cache python3 make g++ gcc libc-dev

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies with clean install
RUN npm ci --legacy-peer-deps

# Copy project files
COPY . .

# Build the app
RUN npm run build

# Production stage - use smaller nginx image
FROM nginx:alpine-slim

# Copy built files from build stage to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
