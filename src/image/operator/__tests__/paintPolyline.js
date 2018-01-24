import { Image } from 'test/common';

describe('we check paintPolyline', function () {
  it('should yield the painted image with a line', function () {
    let size = 5;
    let data = new Array(size * size * 3);
    for (let i = 0; i < data.length; i++) {
      data[i] = i;
    }
    let image = new Image(size, size, data, { kind: 'RGB' });

    let points = [[1, 1], [3, 3]];
    image.paintPolyline(points);

    let painted = [
      0, 0, 0, 0, 0,
      0, 1, 0, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 0, 1, 0,
      0, 0, 0, 0, 0
    ];

    let exptected = getExpected(painted, [255, 0, 0]);

    expect(Array.from(image.data)).toEqual(exptected);
  });

  it('should yield the painted image with a rectangle', function () {
    let size = 5;
    let data = new Array(size * size * 3);
    for (let i = 0; i < data.length; i++) {
      data[i] = i;
    }
    let image = new Image(size, size, data, { kind: 'RGB' });

    let points = [[1, 1], [4, 1], [4, 3], [1, 3]];
    image.paintPolyline(points);

    let painted = [
      0, 0, 0, 0, 0,
      0, 1, 1, 1, 1,
      0, 0, 0, 0, 1,
      0, 1, 1, 1, 1,
      0, 0, 0, 0, 0
    ];

    let exptected = getExpected(painted, [255, 0, 0]);

    expect(Array.from(image.data)).toEqual(exptected);
  });

  it('should yield the painted image B/W image with a triangle', function () {
    let size = 5;
    let data = new Array(size * size);
    for (let i = 0; i < data.length; i++) {
      data[i] = i;
    }
    let image = new Image(size, size, data, { kind: 'GREY' });

    let points = [[2, 0], [4, 2], [0, 2]];
    image.paintPolyline(points);

    let painted = [
      0, 0, 1, 0, 0,
      0, 0, 0, 1, 0,
      1, 1, 1, 1, 1,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0
    ];

    let exptected = getExpectedGrey(painted, [255, 0, 0]);
    expect(Array.from(image.data)).toEqual(exptected);
  });
});


function getExpected(painted, color) {
  let result = new Array(painted.length * 3);
  for (let i = 0; i < result.length; i++) {
    result[i] = i;
  }
  for (let i = 0; i < result.length / 3; i++) {
    if (painted[i] === 1) {
      result[i * 3] = color[0];
      result[i * 3 + 1] = color[1];
      result[i * 3 + 2] = color[2];
    }
  }
  return result;
}

function getExpectedGrey(painted, color) {
  let result = new Array(painted.length);
  for (let i = 0; i < result.length; i++) {
    result[i] = i;
  }
  for (let i = 0; i < result.length; i++) {
    if (painted[i] === 1) {
      result[i] = color[0];
    }
  }
  return result;
}
