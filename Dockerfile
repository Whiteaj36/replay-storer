FROM node:10

RUN npm run install

COPY ./db /src/db
COPY ./api /src/api

WORKDIR /src

RUN npm run install
