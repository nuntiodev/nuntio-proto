.PHONY: build-connect-go-proto
build-connect-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./social_connect.proto
	
.PHONY: build-connect-js-proto
build-connect-js-proto:
	protoc -I. social_connect.proto --js_out=import_style=commonjs:./js_social --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_social

.PHONY: build-user-go-proto
build-user-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./social_user.proto
	
.PHONY: build-user-js-proto
build-user-js-proto:
	protoc -I. social_user.proto --js_out=import_style=commonjs:./js_social --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_social

.PHONY: build-go-proto
build-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./social.proto
	
.PHONY: build-js-proto
build-js-proto:
	protoc -I. social.proto --js_out=import_style=commonjs:./js_social --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_social

.PHONY: build-proto
build-proto:
	make build-connect-go-proto && \
	make build-connect-js-proto && \
	make build-user-go-proto && \
	make build-user-js-proto && \
	make build-go-proto && \
	make build-js-proto
	