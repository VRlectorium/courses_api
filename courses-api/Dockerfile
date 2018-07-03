FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]