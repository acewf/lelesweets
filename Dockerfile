FROM node:9.2.0-alpine

RUN apk add --update \
  git \
  bash

COPY . /src
WORKDIR /src

RUN npm install
RUN npm run prod
CMD npm run start
