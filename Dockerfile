FROM node:16-alpine 
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build:production

EXPOSE 3000
CMD [ "npx", "serve", "build" ]