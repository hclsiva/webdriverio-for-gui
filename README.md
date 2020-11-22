## Quick start

1. Install dependencies required to run the tests:

```sh
npm install
```

2. Start docker selenium containers with `docker-compose`:

```sh
# starts the selenium hub and browser nodes in docker containers
npm run selenium
```

3. Run the tests and view the report:

```sh
# run tests and open the report
npm run test
```

4. To stop all the docker containers from step 2:

```sh
npm run selenium:stop
```
5. The File sample-test-output.log has the sample output