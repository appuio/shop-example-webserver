# extend the official nginx image from https://hub.docker.com/_/nginx/
# use mainline as recommended by devs and alpine for reduced size
FROM nginx:1.11-alpine

# TODO: create new user with id 1001

# copy artifacts from the public folder into the html folder
COPY public /usr/share/nginx/html

# TODO: make nginx run as 1001
