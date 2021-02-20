FROM node

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

ENV PORT=3000

COPY package*.json ./


RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent


COPY . ./

CMD ["npm", "start"]