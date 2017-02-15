# extend the official nginx image from https://hub.docker.com/_/nginx/
# use mainline as recommended by devs and alpine for reduced size
FROM nginx:1.11-alpine

# create new user with id 1001
# RUN adduser -S 1001

# copy artifacts from the public folder into the html folder
COPY build /usr/share/nginx/html

# TODO: make nginx run as 1001
