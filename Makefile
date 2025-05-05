.PHONY: prod-image

COUNT := $(shell git rev-list --all --count)
TAG := $(shell git describe --abbrev=0)
SHA1 := $(shell git log -1 --format=%h)
BRANCH := $(shell git branch --show-current | tr / _)
DATE := $(shell date)
DIFF := $(shell git rev-list --left-right --count  origin...main)
VERSION:= 1.1.0-$(COUNT)


prod-image:
	docker build -t vengagedockerhub/online-appointment:$(BRANCH)-$(TAG)-$(COUNT) --build-arg GIT_COMMIT=$(SHA1) --build-arg BRANCH=$(BRANCH) .
	docker push vengagedockerhub/online-appointment:$(BRANCH)-$(TAG)-$(COUNT)

