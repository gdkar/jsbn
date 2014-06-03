buster.spec.expose();

describe('RSA', function() {

  var RSAKey = JSBN.Crypto.RSA.RSAKey;

  it('succeeds simple test', function() {
    var N = 'C4E3F7212602E1E396C0B6623CF11D26204ACE3E7D26685E037AD2507DCE82FC' +
            '28F2D5F8A67FC3AFAB89A6D818D1F4C28CFA548418BD9F8E7426789A67E73E41';
    var E = '10001';
    var D = '7cd1745aec69096129b1f42da52ac9eae0afebbe0bc2ec89253598dcf454960e' +
            '3e5e4ec9f8c87202b986601dd167253ee3fb3fa047e14f1dfd5ccd37e931b29d';
    var P = 'f0e4dd1eac5622bd3932860fc749bbc48662edabdf3d2826059acc0251ac0d3b';
    var Q = 'd13cb38fbcd06ee9bca330b4000b3dae5dae12b27e5173e4d888c325cda61ab3';
    var DMP1 = 'b3d5571197fc31b0eb6b4153b425e24c033b054d22b9c8282254fe69d8c8c593';
    var DMQ1 = '968ffe89e50d7b72585a79b65cfdb9c1da0963cceb56c3759e57334de5a0ac3f';
    var IQMP = 'd9bc4f420e93adad9f007d0e5744c2fe051c9ed9d3c9b65f439a18e13d6e3908';

    var rsa = new RSAKey();
    rsa.setPrivateEx(N, E, D, P, Q, DMP1, DMQ1, IQMP);

    var msg = rsa.encrypt('hello');
    expect(rsa.decrypt(msg)).toEqual('hello');
  });

  it('can generate keys', function() {
    var rsa = new RSAKey();
    rsa.generate(256, '10001');

    var msg = rsa.encrypt('hello');
    expect(rsa.decrypt(msg)).toEqual('hello');
  });

});
