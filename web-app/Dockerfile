FROM nodejs:22-alpine3.20

RUN useradd -m appuser
USER appuser

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

HEALTHCHECK CMD curl --fail http://localhost:8080/ || exit 1

EXPOSE 8080
CMD [ "npm", "start" ]
