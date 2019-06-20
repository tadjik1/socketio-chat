FROM node:12.2.0

COPY . /application

WORKDIR /application

RUN npm install

EXPOSE 3000

CMD node index.js
