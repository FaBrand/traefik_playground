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
