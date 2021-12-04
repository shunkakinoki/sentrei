load:
	@if [ ! -f .env ]; \
	then \
		export $(cat .env | xargs); \
	fi

connect:
	redis-cli --tls -u redis://${UPSTASH_REST_API_PASSWORD}@${UPSTASH_REST_API_DOMAIN}:30846
