
  // Hooks
  BigInteger.fromInt = nbv;

  // JSBN API
  return {
    Crypto: {
      EC: {
        ECFieldElementFp: ECFieldElementFp,
        ECPointFp: ECPointFp,
        ECCurveFp: ECCurveFp
      },
      Hash: {
        HMAC: {
          SHA1: {
            fromStrings: hex_hmac_sha1,
            fromArrays: ba_hmac_sha1
          }
        },
        SHA1: {
          fromString: hex_sha1,
          fromArray: ba_sha1
        }
      },
      PRNG: {
        ARC4: Arcfour,
        SecureRandom: SecureRandom
      },
      RSA: {
        RSAKey: RSAKey
      },
      SEC: {
        byName: getSECCurveByName,
        X9ECParameters: X9ECParameters
      }
    },
    Math: {
      BigInteger: BigInteger
    },
    Util: {
      Base64: {
        fromHex: hex2b64,
        toHex: b64tohex,
        toByteArray: b64toBA
      }
    }
  };

}(this));
