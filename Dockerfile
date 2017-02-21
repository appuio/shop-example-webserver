# extend the official nginx image from https://hub.docker.com/_/nginx/
# use mainline as recommended by devs and alpine for reduced size
FROM nginx:1.11-alpine

# create new user with id 1001 and add to root group
RUN adduser -S 1001 -G root

# expose port 9000
EXPOSE 9000

# copy the custom nginx config to /etc/nginx
COPY docker/nginx.conf /etc/nginx/nginx.conf

# copy artifacts from the public folder into the html folder
COPY build /usr/share/nginx/html

# switch to user 1001 (non-root)
USER 1001
