FROM node:16.13.1-alpine3.14

WORKDIR /usr/src/app
COPY . .
RUN npm install

EXPOSE 8081
CMD npm run start