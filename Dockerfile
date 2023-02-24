FROM node:16-alpine 
RUN mkdir -p /bom-order-reactjs
RUN chown newuser /bom-order-reactjs
USER newuser
WORKDIR /bom-order-reactjs

COPY package.json .
RUN yarn install
COPY . .

EXPOSE 8081
CMD ["yarn", "start"]
