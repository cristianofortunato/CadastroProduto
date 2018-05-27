FROM node:carbon


# Create app directory
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app
WORKDIR /


# Bundle app source
COPY . .
#RUN npx npm@5.6 i -g npm@latest

# Install app dependencies
RUN npx npm@5.6 i -g npm@latest && npm install && npm install express --save && npm install mongodb --save && npm install mongoose --save && npm install body-parser --save && npm install validator --save


EXPOSE 5000
CMD ["node", "app"]