FROM node:16-alpine 
WORKDIR /bom-order-reactjs
COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]
COPY ./public ./public
COPY ./src ./src
RUN chown -R node:node /bom-order-reactjs
RUN yarn install
RUN chown -R node:node /bom-order-reactjs
RUN yarn build:production

EXPOSE 8081
CMD ["yarn", "start"]
USER node
