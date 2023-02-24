FROM node:16-alpine 
USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/node
COPY package.json .
RUN npm install --only=prod
COPY . .
RUN yarn build:production

EXPOSE 8081
CMD ["yarn", "start"]
