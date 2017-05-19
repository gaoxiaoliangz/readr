# FROM node:7.9.0-alpine
FROM node:6.9.2

# Check versions
RUN node -v
RUN npm -v

# Set a working directory
WORKDIR /usr/src/app

# Copy application files
# COPY ./build /usr/src/app

# Install Node.js dependencies
# RUN yarn install --production --no-progress

RUN ls
RUN pwd

RUN npm install
RUN npm run build
# CMD [ "node", "server.js" ]
CMD [ "node", "bin", "-p" ]

