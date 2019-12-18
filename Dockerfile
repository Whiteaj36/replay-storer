FROM node:10

COPY ./db /src/db
COPY ./api /src/api
COPY ./package.json /src/package.json
COPY ./index.js /src/index.js
COPY ./.env.prod /src/.env.prod
COPY ./config.json /src/config.json

WORKDIR /src

RUN npm install

ENV ENVIRONMENT prod

CMD npm start
