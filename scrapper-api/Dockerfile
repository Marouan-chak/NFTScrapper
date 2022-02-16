FROM golang:1.16 AS builder
WORKDIR /go/src/app/
RUN go get -u github.com/gorilla/mux 
COPY app/app.go    ./
RUN go mod init mod
RUN go mod tidy
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:latest  
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /go/src/app/app ./
CMD ["./app"] 
