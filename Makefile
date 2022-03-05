.PHONY: build-connect-go-proto
build-connect-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./nuntio_connect.proto
	
.PHONY: build-connect-js-proto
build-connect-js-proto:
	protoc -I. nuntio_connect.proto --js_out=import_style=commonjs:./js_nuntio/nuntio_connect --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_nuntio/nuntio_connect

.PHONY: build-user-go-proto
build-user-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./nuntio_user.proto
	
.PHONY: build-user-js-proto
build-user-js-proto:
	protoc -I. nuntio_user.proto --js_out=import_style=commonjs:./js_nuntio/nuntio_user --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_nuntio/nuntio_user

.PHONY: build-go-proto
build-user-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./nuntio.proto
	
.PHONY: build-js-proto
build-js-proto:
	protoc -I. nuntio.proto --js_out=import_style=commonjs:./js_nuntio/nuntio --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_nuntio/nuntio

.PHONY: build-proto
build-proto:
	make build-connect-go-proto && \
	make build-connect-js-proto && \
	make build-user-go-proto && \
	make build-user-js-proto && \
	make build-go-proto && \
	make build-js-proto
	