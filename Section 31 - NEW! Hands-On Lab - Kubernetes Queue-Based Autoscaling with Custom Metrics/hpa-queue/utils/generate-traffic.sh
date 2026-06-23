#!/usr/bin/env bash
# generate-traffic.sh
# Sends a continuous stream of diverse translation requests to the frontend service.
# Waits 0.2–0.7 s between requests to simulate realistic load.
# Covers success paths (valid languages) and several failure scenarios.

BASE_URL="${TRANSLATE_URL:-http://localhost:3001/api/translate}"
RESET='\033[0m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'

# ---------------------------------------------------------------------------- #
# Payloads
# Each entry is a JSON string. Invalid payloads intentionally trigger errors.
# ---------------------------------------------------------------------------- #

SUCCESS_PAYLOADS=(
  # Single language targets
  '{"text": "Hello world", "targetLanguages": ["es"]}'
  '{"text": "Hello world", "targetLanguages": ["fr"]}'
  '{"text": "Hello world", "targetLanguages": ["de"]}'

  # Multiple language targets
  '{"text": "Hello world", "targetLanguages": ["es", "fr"]}'
  '{"text": "Hello world", "targetLanguages": ["es", "de"]}'
  '{"text": "Hello world", "targetLanguages": ["fr", "de"]}'
  '{"text": "Hello world", "targetLanguages": ["es", "fr", "de"]}'

  # Varied phrases
  '{"text": "Good morning", "targetLanguages": ["es", "fr"]}'
  '{"text": "How are you?", "targetLanguages": ["de"]}'
  '{"text": "Thank you very much", "targetLanguages": ["fr", "de"]}'
  '{"text": "OpenTelemetry is amazing", "targetLanguages": ["es"]}'
  '{"text": "The quick brown fox jumps over the lazy dog", "targetLanguages": ["de"]}'
  '{"text": "I love distributed tracing", "targetLanguages": ["es", "fr", "de"]}'
  '{"text": "Metrics help us understand performance", "targetLanguages": ["fr"]}'
  '{"text": "Logs are essential for debugging", "targetLanguages": ["de"]}'
  '{"text": "Goodbye", "targetLanguages": ["es", "fr"]}'
  '{"text": "Please help me", "targetLanguages": ["de"]}'
  '{"text": "Where is the nearest hospital?", "targetLanguages": ["es"]}'
  '{"text": "I need a coffee", "targetLanguages": ["fr", "de"]}'
  '{"text": "The weather is nice today", "targetLanguages": ["es", "fr", "de"]}'
)

FAILURE_PAYLOADS=(
  # Unsupported target language
  '{"text": "Hello world", "targetLanguages": ["it"]}'
  '{"text": "Hello world", "targetLanguages": ["pt"]}'
  '{"text": "Hello world", "targetLanguages": ["ja"]}'
  '{"text": "Hello world", "targetLanguages": ["zh"]}'
  '{"text": "Hello world", "targetLanguages": ["es", "xx"]}'

  # Missing required fields
  '{"targetLanguages": ["es"]}'
  '{"text": "Hello world"}'
  '{}'

  # Empty / blank values
  '{"text": "", "targetLanguages": ["es"]}'
  '{"text": "Hello world", "targetLanguages": []}'

  # Wrong types
  '{"text": 12345, "targetLanguages": ["es"]}'
  '{"text": "Hello world", "targetLanguages": "es"}'

  # Malformed JSON — sent as a raw string so curl forwards it verbatim
  'not-valid-json'
)

# ---------------------------------------------------------------------------- #
# Helpers
# ---------------------------------------------------------------------------- #

random_delay() {
  # Produce a random float in [0.2, 0.7] using awk (no bc dependency)
  awk 'BEGIN { srand(); printf "%.2f\n", 0.2 + rand() * 0.5 }'
}

pick_random() {
  local arr=("$@")
  echo "${arr[RANDOM % ${#arr[@]}]}"
}

send_request() {
  local label="$1"
  local payload="$2"
  local color="$3"

  local http_code
  http_code=$(curl -s -o /dev/null -w "%{http_code}" \
    -X POST "$BASE_URL" \
    -H "Content-Type: application/json" \
    -d "$payload")

  local ts
  ts=$(date '+%H:%M:%S')

  echo -e "${color}[${ts}] ${label} | HTTP ${http_code}${RESET}"
  echo -e "  ${CYAN}payload:${RESET} ${payload}"
}

# ---------------------------------------------------------------------------- #
# Main loop
# ---------------------------------------------------------------------------- #

echo -e "${YELLOW}Starting traffic generator → ${BASE_URL}${RESET}"
echo -e "${YELLOW}Press Ctrl+C to stop.${RESET}\n"

REQUEST_COUNT=0

while true; do
  # Weight roughly 70 % success, 30 % failure
  if (( RANDOM % 10 < 7 )); then
    payload=$(pick_random "${SUCCESS_PAYLOADS[@]}")
    send_request "SUCCESS" "$payload" "$GREEN"
  else
    payload=$(pick_random "${FAILURE_PAYLOADS[@]}")
    send_request "FAILURE" "$payload" "$RED"
  fi

  (( REQUEST_COUNT++ ))
  echo -e "  ${YELLOW}total requests: ${REQUEST_COUNT}${RESET}\n"

  delay=$(random_delay)
  sleep "$delay"
done
