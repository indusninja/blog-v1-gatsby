FROM node:alpine as BUILDER
WORKDIR /cache

RUN apk add --no-cache python make g++ \
    && rm -fR /var/cache/apk/*

COPY package.json .
COPY yarn.lock .
RUN yarn install

FROM node:alpine
WORKDIR /app

COPY --from=BUILDER /cache ./
COPY . .

RUN yarn global add gatsby-cli gatsby-dev-cli
RUN yarn install && yarn cache clean

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230

CMD ["yarn", "develop", "-H", "0.0.0.0"]