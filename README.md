## Hardhat smart contract testing/deployment setup dockerized ##

To test/deploy in a docker container, git clone the repo and step inside of the root directory

To Build:
```
docker build . -t <tag>
```

To Run and initiated a node:
```
// run interactively in detached mode with a published port on 8545
docker run -it -d -p 8545:8545 --name <name> <tag>
```

To Deploy contracts:
```
docker exec -it <name> yarn docker_deploy:local
```

To Interact with the deployed contract(will use the first wallet address in the list given by hardhat):
```
docker exec -it hard_hat node client/signer.js
```

*For better dev experience, use [VSCode Remote Containers](https://code.visualstudio.com/docs/remote/containers-tutorial) plug-in

