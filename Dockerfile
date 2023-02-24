FROM alpine:3.16.2
 
RUN addgroup --g 1000 groupcontainer
RUN adduser -u 1000 -G groupcontainer -h /bom-order-reactjs -D containeruser
 
USER containeruser

COPY package.json .
COPY . .
RUN yarn install

EXPOSE 8081
CMD ["yarn", "start"]
