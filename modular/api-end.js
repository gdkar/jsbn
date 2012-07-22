
    BigInteger.fromInt = nbi;

    return {
        crypto: {
            ec: {
                ECFieldElementFp: ECFieldElementFp,
                ECPointFp: ECPointFp,
                ECCurveFp: ECCurveFp
            },
            sec: {
                byName: getSECCurveByName,
                X9ECParameters: X9ECParameters
            },
            hash: {
                // TODO: Expose hashing functionality
            },
            prng: {
                Arcfour: Arcfour,
                SecureRandom: SecureRandom
            },
            rsa: {
              RSAKey: RSAKey
            }
        },
        math: {
            BigInteger: BigInteger
        },
        util: {
            base64: {
                fromHex: hex2b64,
                toHex: b64tohex,
                toByteArray: b64toBA
            }
        }
    };

}(this));
