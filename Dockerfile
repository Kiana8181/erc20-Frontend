From node:19-alpine3.16

WORKDIR /usr/src/app

ENV VITE_API_URL "https://api.applymorning.com"

EXPOSE 4173

COPY . .

RUN npm install --force

RUN npm run build

CMD ["npm", "run", "preview"]