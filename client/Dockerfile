FROM node:alpine3.11

WORKDIR /client

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./