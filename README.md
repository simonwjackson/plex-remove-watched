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
```

```bash
docker exec -it beets /bin/bash -c 'beet import /downloads'
```
