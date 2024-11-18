FROM alpine:3.20

WORKDIR /app

RUN apk add --no-cache curl

COPY traffic-gen.sh traffic-gen.sh

RUN chmod +x traffic-gen.sh

ENTRYPOINT [ "./traffic-gen.sh" ]