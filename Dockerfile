##################################
# BASE
##################################
FROM node:lts-alpine AS base
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

##################################
# DEPENDENCIES
##################################
FROM base AS devdeps
ENV NODE_ENV=development
RUN npm i --force
COPY . ./

##################################
# BUILD
##################################
FROM devdeps AS build
RUN npm run build

##################################
# PROD DEPENDENCIES
##################################
FROM base AS deps
ENV NODE_ENV=production
RUN npm ci --force \
    && npm cache clean --force \
    && npm prune --dry-run
COPY . ./

##################################
# PROD ENVIRONMENT
##################################
FROM base AS prod
ENV NODE_ENV=production
COPY --chown=node:node --from=build /app/dist ./dist
COPY --chown=node:node --from=deps /app/node_modules ./node_modules
USER node
CMD [ "node", "dist/server.js" ]

