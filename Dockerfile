# FROM node:7.9.0-alpine
FROM node:6.9.2

# Set a working directory
# WORKDIR /usr/src/app

# Copy application files
# COPY ./build /usr/src/app

# Install Node.js dependencies
# RUN yarn install --production --no-progress

# CMD [ "node", "server.js" ]


RUN yarn install
RUN yarn run build
CMD [ "node", "bin", "-p" ]
