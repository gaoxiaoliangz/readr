# FROM node:7.9.0-alpine
FROM node:6.9.2

# Install fonts, phantom needs this to render
RUN apt-get update && apt-get install -y --force-yes --no-install-recommends fonts-wqy-microhei ttf-wqy-zenhei

# RUN npm install -g yarn

RUN node -v
RUN npm -v
# RUN yarn -v

# Set a working directory
WORKDIR /usr/readr_app

# Copy application files
COPY . /usr/readr_app

RUN npm install
RUN npm run build

# Exec
CMD [ "node", "bin/www" ]
