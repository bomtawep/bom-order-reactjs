FROM node:16-alpine 
WORKDIR /bom-order-nodejs
COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]
COPY ./public ./public
COPY ./src ./src
RUN yarn install
RUN yarn build:production

EXPOSE 8081
CMD ["yarn", "start"]