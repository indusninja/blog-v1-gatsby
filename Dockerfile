FROM node:alpine
RUN npm install --global gatsby-cli
WORKDIR "/app"