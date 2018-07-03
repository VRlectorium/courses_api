FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install mocha chai ts-node typescript -g
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]