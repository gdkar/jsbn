
  // Hooks
  BigInteger.fromInt = nbv;

  // JSBN API
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
        hmac: {
          sha1: {
            fromStrings: hex_hmac_sha1,
            fromArrays: ba_hmac_sha1
          }
        },
        sha1: {
          fromString: hex_sha1,
          fromArray: ba_sha1
        }
      },
      prng: {
        ARC4: Arcfour,
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
