## Hardhat smart contract testing/deployment setup ##

To develop in a docker container, execute the following command:

Build:
```
docker build . -t <tag>
```

Run and initiated a node:
```
docker run -it -d -p 8545:8545 --name <name> <tag>
```

Deploy contracts:
```
docker exec -it <name> yarn docker_deploy:local
```

Interact with the deployed contract(will use the first wallet address in the list given by hardhat):
```
docker exec -it hard_hat node client/signer.js
```

*For better dev experience, use [VSCode Remote Containers](https://code.visualstudio.com/docs/remote/containers-tutorial) plug-in

