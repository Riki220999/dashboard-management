#!/bin/sh -eu
if [[ -z "${HOST}" ]]; then
    HOST_JSON=undefined
else
    HOST_JSON="${HOST}"
fi
 
cat <<EOF
window.REACT_APP_HOST="$HOST_JSON";
EOF