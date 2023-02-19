FROM node:16.13.1-alpine3.14

WORKDIR /app
COPY . .
RUN npm ci 
RUN npm run build
ENV NODE_ENV production

EXPOSE 8081
CMD [ "npx", "serve", "build" ]