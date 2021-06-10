FROM node:alpine as BUILDER
WORKDIR /cache

RUN apk add --no-cache python3 make g++ \
    && rm -fR /var/cache/apk/*

COPY package*.json .
RUN npm install

FROM node:alpine
WORKDIR /app

COPY --from=BUILDER /cache ./
COPY . .

RUN npm install -g gatsby-cli gatsby-dev-cli
RUN npm install

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230

CMD ["gatsby", "develop", "-H", "0.0.0.0"]