const crypto = require("crypto");

function generatePOW() {
  const nickname = "CarryWang";
  const prefixZero4 = 4;
  let nonce = 0;

  while (true) {
    const hashStr = `${nickname}${nonce}`;
    const hash = crypto.createHash("sha256").update(hashStr).digest("hex");

    if (hash.startsWith("0".repeat(prefixZero4))) {
      return hash;
    }

    nonce++;
  }
}

// Generate RSA key pair
function generateRSAKeypair() {
  return new Promise((resolve, reject) => {
    crypto.generateKeyPair(
      "rsa",
      {
        modulusLength: 2048, // Key length in bits
        publicKeyEncoding: { type: "spki", format: "pem" },
        privateKeyEncoding: { type: "pkcs1", format: "pem" },
      },
      (err, publicKey, privateKey) => {
        if (err) {
          reject(err);
          return;
        }

        resolve({ publicKey, privateKey });
      }
    );
  });
}

// Sign message with private key
function signMessage(privateKey, message) {
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(message);
  const signature = signer.sign(privateKey, "hex");
  return signature;
}

// Verify signature with public key
function verifySignature(publicKey, message, signature) {
  const verifier = crypto.createVerify("RSA-SHA256");
  verifier.update(message);
  return verifier.verify(publicKey, signature, "hex");
}

const hash = generatePOW(); // Message to be signed

(async () => {
  const { privateKey, publicKey } = await generateRSAKeypair();

  // Sign the message with private key
  const signature = signMessage(privateKey, hash);

  // Verify the signature with public key
  const isValid = verifySignature(publicKey, hash, signature);

  console.log("Message:", hash);
  console.log("Signature:", signature);
  console.log("Verification result:", isValid);
})();
