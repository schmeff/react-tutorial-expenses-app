FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

VOLUME [ "/app/node_modules" ]

EXPOSE 3000

CMD ["npm", "start"]

# docker build -t expense-app .

# docker run -d --rm -v "%cd%":/app --name expense-tracker expense-app