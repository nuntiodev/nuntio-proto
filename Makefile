.PHONY: build-connect-go-proto
build-connect-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./nuntio_connect.proto
	
.PHONY: build-connect-js-proto
build-connect-js-proto:
	protoc -I. nuntio_connect.proto --js_out=import_style=commonjs:./js_nuntio/nuntio_connect --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_nuntio/nuntio_connect

.PHONY: build-proto
build-proto:
	make build-connect-go-proto && \
	make build-connect-js-proto
	