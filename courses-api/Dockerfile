FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/node_modules/.bin:$PATH

ADD package.json /usr/src/app/package.json
RUN npm install

CMD ["npm", "run", "dev"]