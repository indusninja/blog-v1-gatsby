FROM node:alpine

RUN apk add --no-cache python make g++ \
    && rm -fR /var/cache/apk/*

RUN npm install -g gatsby-cli
RUN gatsby telemetry --disable

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230

CMD ["yarn", "develop", "-H", "0.0.0.0"]