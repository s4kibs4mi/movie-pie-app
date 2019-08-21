FROM golang:alpine

RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
RUN apk add --update nodejs npm
RUN npm install -g create-react-app

COPY . /app
WORKDIR /app
