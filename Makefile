.PHONY: setup
setup:
	mkdir -p misc
	mkdir -p misc/directory{1..5}
	touch misc/file{1..5}
	touch misc/.dotfile{1..5}

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

install:
	cp -f ${SRC} ${DST}
