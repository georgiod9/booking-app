FROM node:15.13-alpine

WORKDIR /back-end


COPY package.json ./

RUN npm install npm@latest -g

RUN npm install 

COPY . .

CMD ["npm", "start"]



EXPOSE 1337