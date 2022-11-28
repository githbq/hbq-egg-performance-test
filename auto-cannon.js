const autocannon = require("autocannon");
// require('http').globalAgent.maxSockets = 20000
// async/await
async function foo() {
  const result = await autocannon({
    url: "http://localhost:7001",
    connections: 15000, 
    duration: 20,
    workers: 3,
  });
  console.log(result);
}

foo();

// 进程： 1master 7worker

// [压测服务器] 3000  =>    [ssr 服务器 3000   [ssr 服务：7001   3000] ]

// [压测服务器] 5000  =>    (可能在该环节丢失)[ssr 服务器 5000（可能只有2600）   [ssr 服务：7001 2600] ]
 

// [服务器 流量 网关(网卡) 流量=>  ssr:7001]