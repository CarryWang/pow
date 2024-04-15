# This rope just for Practice POW with asymmetric encryption

## Here are two short exercises on pow and rsa.

### Quiz#1

> Practice POW, write a program with their own nickname + nonce, constantly modify the nonce for sha256 Hash operation:
>
> 1. Until the Hash values starting with four zeros are met, the time spent, the Hash content, and the hash value are printed.
> 2. Run it again until five Hash values starting with 0 are met, printing out the time spent, the Hash content, and the hash value.

answer: run command

```
node pow.js
```

### Quiz#2

> Practice asymmetric encryption RSA:
>
> Mister into a public-private key pair
>
> - Use the private key to sign the "nickname + nonce" that matches
> - the hash value of POW 4 starts
> - Public key verification

answer: run command

```
node rsa.js
```
