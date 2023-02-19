FROM node:16-alpine 
WORKDIR /usr/src/app
COPY . .
RUN yarn install
#RUN yarn run build:production

EXPOSE 8081
CMD yarn start