/** @param {NS} ns **/
export async function main(ns) {
    // Expose webpack_require if not already available
    globalThis.webpack_require ?? webpackChunkbitburner.push([[-1], {}, w => globalThis.webpack_require = w]);

    // === Max Player Money and Stats ===
    let player = null;
    for (const k of Object.keys(globalThis.webpack_require.m)) {
        const mod = globalThis.webpack_require(k);
        for (const val of Object.values(mod)) {
            if (
                val && typeof val === "object" &&
                val.money !== undefined && val.skills !== undefined && val.exp !== undefined
            ) {
                player = val;
            }
        }
    }
    if (player) {
        player.money = 1e308;
        player.skills.hacking = player.skills.strength = player.skills.defense =
            player.skills.dexterity = player.skills.agility = player.skills.charisma = 99999;
        ns.tprint("Player money and stats set.");
    } else {
        ns.tprint("Could not find player object.");
    }
}
