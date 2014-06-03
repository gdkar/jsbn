# Changelog

### v1.3.2 - August 30, 2012
- ARC4 encrypt/decrypt methods.
- HMAC-SHA1 calculation with byte-arrays for key and data.

### v1.3.1 - July 25, 2012
- Support for SHA1 hashing of byte-arrays.
- BigInteger's third constructor parameter now indicates sign.
- BigInteger.toArray as an alternative for toByteArray.

### v1.3 - July 3, 2012
- Fixed bug when comparing negative integers of different word lengths.

### v1.2 - March 29, 2011
- Added square method to improve ECC performance.
- Use randomized bases in isProbablePrime.

### v1.1 - September 15, 2009
- Added support for utf-8 encoding of non-ASCII characters when PKCS1 encoding and decoding JavaScript strings.
- Fixed bug when creating a new BigInteger("0") in a non power-of-2 radix.
