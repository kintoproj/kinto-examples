# A sample Rust app for [KintoHub](https://kintohub.com)

## :rocket: Deploying on KintoHub

- **Service Type:** Backend API
- **Repo:** https://github.com/kintoproj/kinto-examples/tree/main/rust
- **Branch:** main
- **Language:** Rust
- **Language version:** 1
- **Build Command:** `cargo build --release`
- **Start Command:** `./target/release/hello-web-server`
- **Port:** 3000

When complete, open the **Access** tab and open the external URL to see your Rust example!

:::tip
The **Rust** example can be deployed using `Dockerfile` on KintoHub
:::

### :dolphin: Deploying with Dockerfile

- **Service Type:** Backend API
- **Repo:** https://github.com/kintoproj/kinto-examples/tree/main/rust
- **Branch:** main
- **Language:** Dockerfile
- **Dockerfile Name:** Dockerfile
- **Port:** 3000

## :hammer: Running locally

**Pre-requisites:** Rust v1

- Clone the repository to a folder of choice.

```
$ git clone https://github.com/kintoproj/kinto-examples

$ cd rust
```

- Install the dependencies

```
$ cargo build --release
```

- To start the app

```
$ ./target/release/hello-web-server
```

After running this command, open `localhost:3000` in your browser to view the response sent.

#### Response sent
```
  Hello world
``` 

## :ambulance: Support

**Contact us:** https://www.kintohub.com/contact-us

**Discord:** https://kintohub.com/discord