describe('pingPong', function() {
  it('it will print "ping" if userInputNumber is divisible by 3', function() {
    expect(pingPong(3)).to.equal("ping");
  });
  it('it will print "pong" if userInputNumber is divisible by 5', function() {
    expect(pingPong(5)).to.equal("pong");
  })
});
