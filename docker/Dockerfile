FROM 13.8.0-alpine3.10 as builder

RUN apk update && apk add build-base autoconf automake libtool pkgconfig nasm

WORKDIR /app
COPY ./package*.json ./
RUN mkdir node_modules && npm install

FROM 13.8.0-alpine3.10
RUN npm install --global gatsby-cli && gatsby telemetry --disable && mkdir /save
COPY --from=builder /app/node_modules /save/node_modules
