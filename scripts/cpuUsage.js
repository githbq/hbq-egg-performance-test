const pidusage = require("pidusage");
const dayjs = require("dayjs");

function getCurrentTimeFormatted() {
  return dayjs().format("YYYY/MM/DD HH:mm:ss SSS");
}
let cpuScores = [];
function showCpuUsage() {
  pidusage(process.pid, function (err, stats) {
    console.log(`~~~~~~~ ${getCurrentTimeFormatted()} ~~~~~~~`);
    console.log("cpu", stats.cpu, "%");
    cpuScores.push(stats.cpu);
  });
}
showCpuUsage();
setInterval(showCpuUsage, 1000);

const during = 10;
setInterval(() => {
  const sum = cpuScores.reduce((num, sum) => sum + num);
  const avg = Math.floor((sum / cpuScores.length) * 100) / 100;
  console.log(`\n\n~~~~~~~~~~~${during}s cpu usage avg:${avg}%~~~~~~~~~~~\n\n`);
  cpuScores = [];
}, during * 1000);
