FROM node:16-alpine 
WORKDIR /bom-order-reactjs
COPY --chown=node:node package.json .
RUN npm install
COPY --chown=node:node . .
USER node

EXPOSE 8081
CMD ["yarn", "start"]
