describe('pingPong', function() {
  it('it will print "pingpong" if userInputNumber is divisible by 15', function() {
    expect(pingPong(15)).to.equal("pingpong");
  })
  it('it will print "ping" if userInputNumber is divisible by 3', function() {
    expect(pingPong(3)).to.equal(1, 2, "ping");
  });
  it('it will print "pong" if userInputNumber is divisible by 5', function() {
    expect(pingPong(5)).to.equal(1, 2, "ping", 4, "pong");
  });
  it('it will print 1 if userInputNumber is not divisible by 3, 5, or 15', function() {
    expect(pingPong(1)).to.equal(1);
  });
});
