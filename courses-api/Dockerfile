FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g mocha
RUN npm install ts-node/register
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]