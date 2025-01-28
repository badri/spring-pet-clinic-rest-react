#!/bin/bash

# Create config file with environment variables
cat <<EOF > /usr/share/nginx/html/config.js
window.REACT_APP_API_BASE_URL = "${REACT_APP_API_BASE_URL:-http://localhost:9966/petclinic/api}";
EOF

# Start nginx
nginx -g 'daemon off;'
