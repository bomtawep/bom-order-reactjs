FROM node:16-alpine 
WORKDIR /usr/src/app
COPY . .
RUN sudo chown -R 1007260000:0 "/.npm"
RUN yarn install
RUN yarn run build:production

EXPOSE 8081
CMD [ "npx", "serve", "build" ]