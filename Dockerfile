FROM node:9.2.0-alpine

ENV WORKDIR /usr/src/app
WORKDIR $WORKDIR
RUN mkdir -p $WORKDIR

RUN apk add --update --no-cache \
  git \
  python \
  autoconf \
  automake \
  bash \
  gcc \
  g++ \
  libc6-compat \
  libjpeg-turbo-dev \
  libpng-dev \
  libtool \
  make \
  nasm \
  util-linux

RUN apk add vips-tools vips-dev fftw-dev build-base --update-cache \
  --repository https://alpine.global.ssl.fastly.net/alpine/edge/testing/ \
  --repository https://alpine.global.ssl.fastly.net/alpine/edge/main \
  --repository http://dl-cdn.alpinelinux.org/alpine/edge/community

COPY .npmrc package.json package-lock.json ./
COPY . .
RUN npm install
CMD npm run deploy:serve
