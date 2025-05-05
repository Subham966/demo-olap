#!/bin/sh

echo "VITE_BASE_URL: $VITE_BASE_URL"
# Replace placeholder with actual API URL from environment variable
sed -i "s|__BASE_URL__|${VITE_BASE_URL}|g" /usr/share/nginx/html/assets/*.js
sed -i "s|__BASE_URL__|${VITE_BASE_URL}|g" /usr/share/nginx/html/*.js

echo "SENTRY_DSN: $VITE_SENTRY_DSN"
# Replace placeholder with actual API URL from environment variable
sed -i "s|__SENTRY_DSN__|${VITE_SENTRY_DSN}|g" /usr/share/nginx/html/assets/*.js
sed -i "s|__SENTRY_DSN__|${VITE_SENTRY_DSN}|g" /usr/share/nginx/html/*.js

# Start Nginx
nginx -g "daemon off;"
