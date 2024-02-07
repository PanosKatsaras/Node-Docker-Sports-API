FROM node:20-alpine

WORKDIR /api

COPY . .

RUN npm install

EXPOSE 8000

CMD [ "node", "index.js" ]

