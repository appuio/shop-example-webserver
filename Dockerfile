# extend the official nginx image from https://hub.docker.com/_/nginx/
# use mainline as recommended by devs and alpine for reduced size
FROM nginx:1.11-alpine

# create new user with id 1001 and add to root group
RUN adduser -S 1001 -G root && \
  mkdir -p /app/html

# expose port 9000
EXPOSE 9000

# copy the custom nginx config to /etc/nginx
COPY docker/nginx.conf /etc/nginx/nginx.conf

# inject the custom entrypoint
COPY entrypoint.sh /app/entrypoint.sh

# copy artifacts from the public folder into the html folder
COPY build /app/html

# make the entrypoint group executable
RUN chown 1001:0 /app && \
  chmod -R g+w /app && \
  chmod g+x /app/entrypoint.sh

# switch to user 1001 (non-root)
USER 1001

# define the custom entrypoint
# this will dynamically replace the endpoint of the main API
ENTRYPOINT ["/app/entrypoint.sh"]

# run nginx
CMD ["nginx", "-g", "daemon off;"]
