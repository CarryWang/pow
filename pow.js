const crypto = require("crypto");

const nickname = "CarryWang";
const prefixZero4 = 4;
const prefixZero5 = 5;

function findHash(prefixZeros) {
  const startTime = Date.now();
  let nonce = 0;
  let count = 0;

  while (true) {
    const hashStr = `${nickname}${nonce}`;
    const hash = crypto.createHash("sha256").update(hashStr).digest("hex");

    if (hash.startsWith("0".repeat(prefixZeros))) {
      const endTime = Date.now();
      const timeCost = endTime - startTime;

      console.log(`Found hash with ${prefixZeros} leading zeros: ${hash}`);
      console.log(`Time cost ${timeCost} seconds`);
      console.log(`Loop count: ${count}`);
      return;
    }

    nonce++;
    count++;
  }
}

findHash(prefixZero4);
findHash(prefixZero5);
