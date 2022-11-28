const childProcess = require("child_process");

async function start() {
  const cmd = childProcess.spawn("node", ["auto-cannon"], { cwd: __dirname });
  let promiseResolve;
  const promise = new Promise((resolve) => {
    promiseResolve = resolve;
  });
  let result = "";
  let errorResult = "";
  cmd.stdout.on("data", (data) => {
    result += `${data}`;
  });

  cmd.stderr.on("data", (data) => {
    errorResult += `${data}`;
  });

  cmd.on("exit", () => {
    promiseResolve({ result, errorResult });
  });

  const response = await promise;
  console.log(response);
  return response;
}

start()