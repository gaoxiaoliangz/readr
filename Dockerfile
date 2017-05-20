# FROM node:7.9.0-alpine
FROM node:6.9.2

# Set a working directory
WORKDIR /usr/src/app

# Copy application files
COPY . /usr/src/app

RUN npm install
RUN npm run build

# Exec
CMD [ "node", "bin", "-p" ]
