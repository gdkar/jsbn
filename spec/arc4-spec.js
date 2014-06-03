buster.spec.expose();

describe('ARC4', function() {

  var ARC4 = JSBN.crypto.prng.ARC4;

  it('can encrypt/decrypt data', function() {
    var encrypter = new ARC4();
    var decrypter = new ARC4();

    var key = [1, 3, 3, 7];

    encrypter.init(key);
    decrypter.init(key);

    var data = [1, 2, 3];
    encrypter.encrypt(data);

    expect(data).not.toEqual([1, 2, 3]);

    decrypter.decrypt(data);

    expect(data).toEqual([1, 2, 3]);
  });

});
