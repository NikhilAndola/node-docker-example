FROM node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Run npm install
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node","index.js" ]