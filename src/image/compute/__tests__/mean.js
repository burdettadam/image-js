import { Image } from 'test/common';

describe('check sum', function () {
  it('should yield the correct array', function () {

    let image = new Image(1, 2, [230, 84, 121, 255, 100, 140, 13, 255]);
    expect(image.mean).toEqual([165, 112, 67]);
    expect(image.getMean()).toEqual([165, 112, 67]);

    image = new Image(1, 2, [230, 84, 121, 255, 100, 140, 13, 0]);
    expect(image.mean).toEqual([230, 84, 121]);
    expect(image.getMean()).toEqual([230, 84, 121]);
  });
});

