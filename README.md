## Quick start
1. Installed Oracle Virtual Box (6.1) with Ubuntu 18.04.5 LTS

2. Installed docker, docker-compose

3. Add docker to root group
	https://github.com/sindresorhus/guides/blob/master/docker-without-sudo.md

4. Install NodeJs 

5. Install dependencies required to run the tests:

```sh
npm install
```

6. Start docker selenium containers with `docker-compose`:

```sh
# starts the selenium hub and browser nodes in docker containers
npm run selenium
```

7. Run the tests and view the report:

```sh
# run tests and open the report
npm run test
```

8. To stop all the docker containers from step 2:

```sh
npm run selenium:stop
```
9. The File sample-test-output.log has the sample output
