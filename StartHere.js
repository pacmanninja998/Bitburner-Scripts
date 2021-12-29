/** @param {NS} ns **/
export async function main(ns) {
const baseUrl = "https://raw.githubusercontent.com/pacmanninja998/Bitburner-Scripts/main/"
const filesToDownload = [
'HackXP.script',
'start.script',
'stocks.js',
'deepscan-nuke.script',
'deepscan-hack.script',
'remote-hack.script',
'hacknet-auto.script'
]  
function localeHHMMSS(ms = 0) {
  if (!ms) {
    ms = new Date().getTime();
  }

  return new Date(ms).toLocaleTimeString();
}
  for (let i = 0; i < filesToDownload.length; i++) {
    const filename = filesToDownload[i]
    const path = baseUrl + filename
    await ns.scriptKill(filename, 'home');
    await ns.rm(filename);
    await ns.sleep(200);
    ns.tprint(`[${localeHHMMSS()}] Trying to download ${path}`);
    await ns.wget(path + '?ts=' + new Date().getTime(), filename);
    ns.tprint("All File Downloaded");
  }  
}
