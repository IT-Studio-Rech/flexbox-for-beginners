FROM gitpod/workspace-full:latest

USER gitpod
RUN npm install -g http-server

USER root