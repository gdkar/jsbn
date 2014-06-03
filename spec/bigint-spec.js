buster.spec.expose();

describe('BigInteger', function() {

  var BigInteger = JSBN.Math.BigInteger;

  it('can execute common mathematical operations', function() {
    var a = BigInteger.fromInt(25);
    var b = BigInteger.fromInt(1002);

    expect(a.add(b).intValue()).toEqual(1027);

    var p = new BigInteger('e564d8b801a61f47', 16, true);
    var xp = new BigInteger('99246db2a3507fa', 16, true);

    xp = xp.add(p);

    expect(xp.toString(16)).toEqual('eef71f932bdb2741');
  });

  it('can be signed', function() {
    var a = new BigInteger('1');
    var b = new BigInteger('2');
    var c = a.subtract(b);
    var d = new BigInteger(c);

    expect(c.toByteArray().length).toEqual(1);
    expect(d.toByteArray().length).toEqual(1);
    expect(c.equals(d)).toBeTrue();

    a = BigInteger.fromInt(-13);
    expect(a.intValue()).toEqual(-13);
  });

  it('can be compared', function() {
    var a, b;

    a = new BigInteger('983741897234', 10);
    b = new BigInteger('123981238416', 10);
    expect(a.compareTo(b)).toBeGreaterThan(0);

    a = new BigInteger('-1', 10);
    b = new BigInteger('1', 10);
    expect(a.compareTo(b)).toBeLessThan(0);

    a = new BigInteger('1', 10);
    b = new BigInteger('-1', 10);
    expect(a.compareTo(b)).toBeGreaterThan(0);

    a = new BigInteger('1', 10);
    b = new BigInteger('1', 10);
    expect(a.compareTo(b)).toEqual(0);

    a = new BigInteger('0', 10);
    b = new BigInteger('0', 10);
    expect(a.compareTo(b)).toEqual(0);

    a = new BigInteger('-12461273864', 10);
    b = new BigInteger('29138479128374', 10);
    expect(a.compareTo(b)).toBeLessThan(0);

    a = new BigInteger('9223372036854775807', 10);
    b = new BigInteger('-9223372036854775808', 10);
    expect(a.compareTo(b)).toBeGreaterThan(0);

    a = new BigInteger('-1', 10);
    b = new BigInteger('-9223372036854775808', 10);
    expect(a.compareTo(b)).toBeGreaterThan(0);

    a = new BigInteger('-1', 10);
    b = new BigInteger('9223372036854775807', 10);
    expect(a.compareTo(b)).toBeLessThan(0);
  });

  it('can be converted to a string and vice versa', function() {
    var a;

    a = new BigInteger('1', 10);
    expect(a.toString(10)).toEqual('1');

    a = new BigInteger('112374128763487126349871263984761238', 10);
    expect(a.toString(10)).toEqual('112374128763487126349871263984761238');

    a = new BigInteger('0', 10);
    expect(a.toString(10)).toEqual('0');

    a = new BigInteger('-1', 10);
    expect(a.toString(10)).toEqual('-1');

    a = new BigInteger('-987341928347812763498237649812763498172634', 10);
    expect(a.toString(10)).toEqual('-987341928347812763498237649812763498172634');

    a = new BigInteger('ffff', 16, true);
    expect(a.toString(10)).toEqual('65535');
    expect(a.toString(16)).toEqual('ffff');
  });

  it('can be converted to a byte array and vice versa', function() {
    var a;
    var b;
    a = new BigInteger('0', 10);
    b = a.toByteArray();
    b.position = 0;
    expect(new BigInteger(b).toString(10)).toEqual('0');

    a = new BigInteger('1', 10);
    b = a.toByteArray();
    b.position = 0;
    expect(new BigInteger(b).toString(10)).toEqual('1');

    a = new BigInteger('-1', 10);
    b = a.toByteArray();
    b.position = 0;
    expect(new BigInteger(b).toString(10)).toEqual('-1');

    a = new BigInteger('123469827364987236498234', 10);
    b = a.toByteArray();
    b.position = 0;
    expect(new BigInteger(b).toString(10)).toEqual('123469827364987236498234');

    a = new BigInteger('-298471293048701923847', 10);
    b = a.toByteArray();
    b.position = 0;
    expect(new BigInteger(b).toString(10)).toEqual('-298471293048701923847');
  });

});
