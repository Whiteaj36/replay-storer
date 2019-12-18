FROM node:10

COPY ./db /src/db
COPY ./api /src/api
COPY ./package.json /src/package.json
COPY ./index.js /src/index.js
COPY ./.env.prod /src/.env.prod

WORKDIR /src

RUN npm install

ENV ENVIRONMENT prod

RUN npm start
