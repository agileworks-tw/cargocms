# 透過 Docker 運行飯粒專案

## compose 定義

修改 `docker-compose2`

```
debug:
  container_name: debug
  image: agileworks/sails_sample_env
  command: "/bin/sh"

  expose:
    - "5001"
  ports:
    - "5001:5001"

  volumes:
    - ./:/sailsSample
  working_dir: /sailsSample

  depends_on:
    - "e2e-env"

  networks:
    - front-tier

e2e-env:
  container_name: e2e-env
  image: selenium/standalone-firefox-debug:2.53.0
  expose:
    - "4444"
  ports:
    - "5900:5900"
  networks:
    - front-tier


```

## 運行 docker-compose

```
docker-compose -f docker-compose2.yml run \
--service-ports \
--name debug debug
```

## 運行中

![](assets/README-52263.png)

## 在 docker 內啟動 server

`npm start`

存取 `http://localhost:5001/admin`

![](assets/README-4fdce.png)
