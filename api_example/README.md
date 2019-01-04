# Basic Example with traefic

Holds information from [this example](https://blog.codecentric.de/en/2017/09/traefik-modern-reverse-proxy/)

Run this to `curl GET` the configured subservers
```bash
source ping_hosts.sh
# or
./ping_hosts.sh
```

# Learnings

More specific `frontend.rule` settings are more greedy

e.g.
```yml
    labels:
      - "traefik.backend=api"
      - "traefik.frontend.rule=PathPrefixStrip:/api, /"
```
is quite greedy disregarding the different Host setting in the whoami frontend rule
```yml
    labels:
      - "traefik.backend=whoami"
      - "traefik.frontend.rule=Host:whoami.localhost, PathPrefix:/"
```
According to [the docs](https://docs.traefik.io/basics/#matchers) `,` is an __OR__ operator and `;` __AND__
In theory `;` should match more greedily than `,`.

When using `;` the requests are correctly routed:
```bash
$ ./ping_hosts.sh
================================
Pinging whoami1
Hostname: ed59cd0934c1
IP: 127.0.0.1
IP: 172.27.0.4
GET / HTTP/1.1
Host: whoami.localhost
User-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)
Accept: */*
Accept-Encoding: gzip
Referer:
X-Forwarded-For: 172.27.0.1
X-Forwarded-Host: whoami.localhost
X-Forwarded-Port: 80
X-Forwarded-Proto: http
X-Forwarded-Server: 33e77a2cb82d
X-Real-Ip: 172.27.0.1

================================
================================
Pinging api in /api
{"headers":{"Accept":"*/*","Accept-Encoding":"gzip","Host":"localhost","Referer":"","User-Agent":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)","X-Forwarded-For":"172.27.0.1","X-Forwarded-Host":"localhost","X-Forwarded-Port":"80","X-Forwarded-Prefix":"/api","X-Forwarded-Proto":"http","X-Forwarded-Server":"33e77a2cb82d","X-Real-Ip":"172.27.0.1"},"reached":"root"}
================================
================================
Pinging api in root
{"headers":{"Accept":"*/*","Accept-Encoding":"gzip","Host":"localhost","Referer":"","User-Agent":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)","X-Forwarded-For":"172.27.0.1","X-Forwarded-Host":"localhost","X-Forwarded-Port":"80","X-Forwarded-Prefix":"/","X-Forwarded-Proto":"http","X-Forwarded-Server":"33e77a2cb82d","X-Real-Ip":"172.27.0.1"},"reached":"root"}
================================
```

If the frontend rules are changed back to
```yml
    labels:
      - "traefik.backend=api"
      - "traefik.frontend.rule=PathPrefix:/api, /"
```

The routes to api are correctly routed again

```bash
$ ./ping_hosts.sh
================================
Pinging whoami1
Hostname: ed59cd0934c1
IP: 127.0.0.1
IP: 172.27.0.3
GET / HTTP/1.1
Host: whoami.localhost
User-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)
Accept: */*
Accept-Encoding: gzip
Referer:
X-Forwarded-For: 172.27.0.1
X-Forwarded-Host: whoami.localhost
X-Forwarded-Port: 80
X-Forwarded-Proto: http
X-Forwarded-Server: 33e77a2cb82d
X-Real-Ip: 172.27.0.1

================================
================================
Pinging api in /api
{"headers":{"Accept":"*/*","Accept-Encoding":"gzip","Host":"localhost","Referer":"","User-Agent":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)","X-Forwarded-For":"172.27.0.1","X-Forwarded-Host":"localhost","X-Forwarded-Port":"80","X-Forwarded-Proto":"http","X-Forwarded-Server":"33e77a2cb82d","X-Real-Ip":"172.27.0.1"},"reached":"api"}
================================
================================
Pinging api in root
{"headers":{"Accept":"*/*","Accept-Encoding":"gzip","Host":"localhost","Referer":"","User-Agent":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)","X-Forwarded-For":"172.27.0.1","X-Forwarded-Host":"localhost","X-Forwarded-Port":"80","X-Forwarded-Proto":"http","X-Forwarded-Server":"33e77a2cb82d","X-Real-Ip":"172.27.0.1"},"reached":"root"}
================================
```
