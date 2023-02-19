FROM node:16-alpine 
WORKDIR /app
COPY . .
RUN groupadd non-root-postgres-group
RUN useradd non-root-postgres-user --group non-root-postgres-group
RUN chown -R non-root-postgres-user:non-root-postgres-group /app
RUN chmod 777 /app
USER non-root-postgres

RUN yarn install
RUN yarn run build:production

EXPOSE 8081
CMD [ "npx", "serve", "build" ]