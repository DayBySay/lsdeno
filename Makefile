.PHONY: build
build:
	@mkdir -p build
	deno compile --unstable --allow-read -o build/lsdeno lsdeno.ts

.PHONY: test
test:
	deno test --unstable --allow-read

lint:
	deno lint

SRC?=build/lsdeno
DST?=/usr/local/bin

install: build
	cp -f ${SRC} ${DST}
