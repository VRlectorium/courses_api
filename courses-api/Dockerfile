FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install mocha chai ts-node -g

COPY . .

CMD ["npm", "run", "dev"]