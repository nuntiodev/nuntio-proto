.PHONY: build-go-proto
build-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./nuntio_connect.proto
	
.PHONY: build-js-proto
build-js-proto:
	protoc -I. nuntio_connect.proto --js_out=import_style=commonjs:./js_nuntio --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_nuntio

.PHONY: build-proto
build-proto:
	make build-go-proto && \
	make build-js-proto
