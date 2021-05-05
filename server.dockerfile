FROM node:10 AS server-build

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

COPY ./app ./app
RUN npm install
COPY server.js .
EXPOSE 8080
CMD ["node", "server.js"]