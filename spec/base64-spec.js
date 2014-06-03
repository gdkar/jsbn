buster.spec.expose();

describe('Base64', function() {

  var base64 = JSBN.util.base64;

  it('can be generated from hex', function() {
    expect(base64.fromHex('4a53424e')).toEqual('SlNCTg==');
  });

  it('can be converted to hex', function() {
    expect(base64.toHex('SlNCTg==')).toEqual('4a53424e');
  });

  it('can be converted to byte-array', function() {
    expect(base64.toByteArray('SlNCTg==')).toEqual([74, 83, 66, 78]);
  });

});
