import { Image } from 'test/common';

describe('Grey transform', function () {
  it('From RGBA image give a grey image', function () {
    let image = new Image(2, 1,
      [
        100, 150, 200, 255,
        100, 150, 200, 0
      ]
    );

    expect(Array.from(image.grey().data)).toEqual([142, 0]);
    expect(Array.from(image.grey({ algorithm: 'min' }).data)).toEqual([100, 0]);
    expect(Array.from(image.grey({ algorithm: 'minimum' }).data)).toEqual([100, 0]);
    expect(Array.from(image.grey({ algorithm: 'max' }).data)).toEqual([200, 0]);
    expect(Array.from(image.grey({ algorithm: 'maximum' }).data)).toEqual([200, 0]);
    expect(Array.from(image.grey({ algorithm: 'brightness' }).data)).toEqual([200, 0]);
    expect(Array.from(image.grey({ algorithm: 'red' }).data)).toEqual([100, 0]);
    expect(Array.from(image.grey({ algorithm: 'green' }).data)).toEqual([150, 0]);
    expect(Array.from(image.grey({ algorithm: 'blue' }).data)).toEqual([200, 0]);
    expect(Array.from(image.grey({ algorithm: 'magenta' }).data)).toEqual([63, 0]);
    expect(Array.from(image.grey({ algorithm: 'cyan' }).data)).toEqual([127, 0]);
    expect(Array.from(image.grey({ algorithm: 'yellow' }).data)).toEqual([0, 0]);
    expect(Array.from(image.grey({ algorithm: 'black' }).data)).toEqual([55, 0]);
    expect(Array.from(image.grey({ algorithm: 'hue' }).data)).toEqual([148, 0]);
    expect(Array.from(image.grey({ algorithm: 'saturation' }).data)).toEqual([128, 0]);
    expect(Array.from(image.grey({ algorithm: 'lightness' }).data)).toEqual([150, 0]);
    expect(Array.from(image.grey({ algorithm: 'luminosity' }).data)).toEqual([150, 0]);
    expect(Array.from(image.grey({ algorithm: 'luminance' }).data)).toEqual([150, 0]);

    expect(Array.from(image.grey({ keepAlpha: true }).data)).toEqual([
      142, 255,
      142, 0
    ]);

    expect(Array.from(image.grey({ mergeAlpha: true }).data)).toEqual([
      142,
      0
    ]);


    expect(Array.from(image.grey({ algorithm: 'average', keepAlpha: true }).data)).toEqual([
      150, 255,
      150, 0
    ]);

    expect(Array.from(image.grey({ algorithm: 'maximum', keepAlpha: true }).data)).toEqual([
      200, 255,
      200, 0
    ]);

    expect(Array.from(image.grey({ algorithm: 'minmax', keepAlpha: true }).data)).toEqual([
      150, 255,
      150, 0
    ]);

    expect(Array.from(image.grey({ algorithm: 'luma601', keepAlpha: true }).data)).toEqual([
      140, 255,
      140, 0
    ]);

    expect(Array.from(image.grey({ algorithm: 'luma709', keepAlpha: true }).data)).toEqual([
      142, 255,
      142, 0
    ]);

    expect(function () {
      image.grey({ algorithm: 'XXX' });
    }).toThrowError(/Unsupported grey algorithm/);

  });


  it('From GreyA image throw an error except if allowed', function () {
    let image = new Image(2, 1,
      [
        100, 255,
        150, 0
      ],
      { kind: 'GREYA' }
    );

    expect(function () {
      image.grey();
    }).toThrowError(/only be applied/);

    expect(Array.from(image.grey({ allowGrey: true }).data)).toEqual([100, 0]);
    expect(Array.from(image.grey({ allowGrey: true, mergeAlpha: false }).data)).toEqual([100, 150]);

    expect(Array.from(image.grey({ allowGrey: true, keepAlpha: true }).data)).toEqual([
      100, 255,
      150, 0
    ]);


  });


});
