# base image
FROM node:9.6.1
MAINTAINER Fabio-Muñoz
LABEL authors=Fabio-Muñoz

# Configurar el directorio de trabajo
RUN mkdir /usr/src/app-calcular-edad
WORKDIR /usr/src/app-calcular-edad

# añadir el path
ENV PATH /usr/src/app-calcular-edad/node_modules/.bin:$PATH

# instalar angular dentro de la imagen
RUN npm install \
npm install -g @angular/cli \
npm cache clean

# añadir aplicacion
COPY . /usr/src/app-calcular-edad

# iniciar la aplicacion
CMD ng serve --host 0.0.0.0