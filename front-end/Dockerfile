FROM node:15.13-alpine

WORKDIR /front-end


COPY package.json ./


RUN npm install 

COPY . .

CMD ["npm", "start"]

EXPOSE 3000