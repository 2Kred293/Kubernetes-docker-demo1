FROM node:10-alpine As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install 

COPY . .

RUN npm run build --prod

FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/angular-nodejs-example/ /usr/share/nginx/html