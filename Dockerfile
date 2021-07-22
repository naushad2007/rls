FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN apk add --no-cache make gcc g++ python3 && \
  npm install && \
  npm rebuild bcrypt --build-from-source && \
  apk del make gcc g++ python3

EXPOSE 3000

EXPOSE 4000

CMD [ "npm", "run", "dev" ]