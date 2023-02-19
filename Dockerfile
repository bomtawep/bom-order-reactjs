FROM node:16-alpine 
WORKDIR /usr/src/app
COPY . .
RUN yarn install
#RUN yarn run build:production
RUN groupadd non-root-postgres-group
RUN useradd non-root-postgres-user --group non-root-postgres-group
RUN chown -R non-root-postgres-user:non-root-postgres-group /usr/src/app
RUN chmod 777 /usr/src/app
USER non-root-postgres

EXPOSE 8081
CMD yarn start