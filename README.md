## This is a API server for [Liteflix frontend](https://github.com/matiasgdev/liteflix)

Open [https://liteflix-server.onrender.com/health](https://liteflix-server.onrender.com) to see deployed API.


### /POST movie
```bash
  curl --location --request POST 'https://liteflix-server.onrender.com/v1/movies' \
  --form 'image=*.(png|webp|jpeg|gif|bmp)"' \
  --form 'title="Dead by daylight"'
```

### /GET movie
```bash
  curl --location --request GET 'https://liteflix-server.onrender.com/v1/movies'
```
