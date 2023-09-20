FROM node:18.16.1

RUN mkdir -p /usr/src/app
RUN chmod -R 777 /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm i

COPY . ./

VOLUME /usr/src/app/node_modules

EXPOSE 3000

#CMD ["npm", "run", "dev"]