# Step 1: Build the Vite App
FROM node:20 AS builder
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build
ARG GIT_COMMIT
ARG BRANCH
# Copy the .env file and the script
COPY .env.sentry-staging ./.env.sentry-staging
RUN ls -la /app/dist
RUN /bin/bash -c 'source ./.env.sentry-staging && \
echo "SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN" && \
echo "SENTRY_ORG=$SENTRY_ORG" && \
echo "SENTRY_PROJECT=$SENTRY_PROJECT" && \
echo "GIT_COMMIT=$GIT_COMMIT" && \
npx @sentry/cli releases new $BRANCH-$GIT_COMMIT --org $SENTRY_ORG --project $SENTRY_PROJECT --auth-token $SENTRY_AUTH_TOKEN && \
npx @sentry/cli releases files $BRANCH-$GIT_COMMIT upload-sourcemaps /app/dist --org $SENTRY_ORG --project $SENTRY_PROJECT --auth-token $SENTRY_AUTH_TOKEN && \
npx @sentry/cli releases finalize $BRANCH-$GIT_COMMIT --org $SENTRY_ORG --project $SENTRY_PROJECT --auth-token $SENTRY_AUTH_TOKEN'

COPY .env.sentry-production ./.env.sentry-production
RUN ls -la /app/dist
RUN /bin/bash -c 'source ./.env.sentry-production && \
echo "SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN" && \
echo "SENTRY_ORG=$SENTRY_ORG" && \
echo "SENTRY_PROJECT=$SENTRY_PROJECT" && \
echo "GIT_COMMIT=$GIT_COMMIT" && \
npx @sentry/cli releases new $BRANCH-$GIT_COMMIT --org $SENTRY_ORG --project $SENTRY_PROJECT --auth-token $SENTRY_AUTH_TOKEN && \
npx @sentry/cli releases files $BRANCH-$GIT_COMMIT upload-sourcemaps /app/dist --org $SENTRY_ORG --project $SENTRY_PROJECT --auth-token $SENTRY_AUTH_TOKEN && \
npx @sentry/cli releases finalize $BRANCH-$GIT_COMMIT --org $SENTRY_ORG --project $SENTRY_PROJECT --auth-token $SENTRY_AUTH_TOKEN'


# Step 2: Serve the App with Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .

# Step 3: Replace the Placeholder at Runtime
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Copy Nginx configuration
COPY ./docker-nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
