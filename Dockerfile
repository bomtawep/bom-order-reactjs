FROM node:16-alpine 
WORKDIR /bom-order-reactjs
COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]
COPY ./public ./public
COPY ./src ./src
RUN yarn install
RUN sudo chmod -R 777 bom-order-reactjs
RUN yarn build:production

EXPOSE 8081
CMD ["yarn", "start"]
USER node
