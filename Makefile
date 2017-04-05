MODULES = ./node_modules/.bin
WEBPACK = $(MODULES)/webpack
SERVER  = $(MODULES)/webpack-dev-server
MOCHA   = $(MODULES)/mocha

help:
	@grep -E '^[a-zA-Z\._-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

bundle: ## bundles source
	$(WEBPACK) --progress --colors

bundle-analyse: ## bundles source with stats
	$(WEBPACK) --progress --colors --stats --json > webpack.bundle.json

test-bundle: ## bundles tests
	$(WEBPACK) --config webpack.config.test.babel.js --progress --colors

test: test-bundle ## tests files
	$(MOCHA) test/test.js

dist: ## creates dist version of bundles
	$(WEBPACK) --progress --colors --dist

develop: ## develop source
	$(SERVER) --progress --colors --inline

setup: ## sets up project
	npm install
