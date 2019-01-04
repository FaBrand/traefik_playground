# The Angular frontend

```bash
source ping_hosts.sh
# or
./ping_hosts.sh
```

## The image itself can be run independently of the other images
```bash
docker build ./frontend -t frontend:latest && docker run -p "80:80" frontend:latest
```
With this configuration the browser should show the default angular welcome site when accessing localhost.

