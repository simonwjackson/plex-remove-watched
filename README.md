```yaml
---
version: "2"
services:
  sonarr:
    image: simonwjackson/plex-remove-watched
    container_name: plex-remove-watched
    environment:
      - HOSTNAME=<ip-or-host>
      - SECTION=<section-number>
      - USERNAME=<username>
      - PASSWORD=<password>
      - PORT=<port>
```

```bash
docker run --rm simonwjackson/plex-remove-watched",
```
