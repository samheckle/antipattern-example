function glitch1() {
  const s = (myp5Instance) => {
    myp5Instance.setup = () => {
      myp5Instance.createCanvas(651, 279);
      myp5Instance.glitch = new Glitch(myp5Instance);

      // create the image for glitch to use
      myp5Instance.loadImage("img.png", (im) => {
        myp5Instance.glitch.loadImage(im);
      });
    };

    myp5Instance.draw = () => {
      // myp5Instance.background(0);
      myp5Instance.glitch.resetBytes();

      myp5Instance.glitch.replaceBytes(100, 104);

      myp5Instance.glitch.randomBytes(1);

      myp5Instance.glitch.buildImage();

      myp5Instance.image(myp5Instance.glitch.image, 0, 0);
    };
  };

  return new p5(s);
}
// glitch1()