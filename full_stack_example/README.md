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

## Run angular behind the proxy
If the client app is started only via `docker-compose up client-app` the angular page is not exposed.

We need to access the app through the proxy, so let's fire it up:
```bash
docker-compose up client-app proxy
```

Our ping script now correctly shows that the other two backends are not reachable.
The site is served as expected
```bash
$ ./ping_hosts.sh
================================
Pinging whoami1
404 page not found
================================
================================
Pinging api through subdomain. I want to get routed to /api tough.
404 page not found
================================
================================
Pinging client app
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ClientApp</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="styles.3ff695c00d717f2d2a11.css"></head>
<body>
  <app-root></app-root>
<script type="text/javascript" src="runtime.ec2944dd8b20ec099bf3.js"></script><script type="text/javascript" src="polyfills.1ef83d22ada557f4a131.js"></script><script type="text/javascript" src="main.b6ed7d20dc442226f609.js"></script></body>
</html>
================================
```
