import {Image} from 'test/common';
import 'should';
import Matrix from 'ml-matrix';

describe('check the closing function', function () {
    it('check for GREY image 5x5', function () {
        let kernel = new Matrix([[1, 1, 1], [1, 1, 1], [1, 1, 1]]);
        let image = new Image(5, 5,
            [
                255, 255, 0, 255, 255,
                255, 0, 0, 0, 255,
                255, 0, 0, 0, 255,
                255, 0, 0, 0, 255,
                255, 255, 0, 255, 255
            ],
            {kind: 'GREY'}
        );

        Array.from(image.closing({kernel: kernel}).data).should.eql(
            [
                255, 255, 255, 255, 255,
                255, 0, 0, 0, 255,
                255, 0, 0, 0, 255,
                255, 0, 0, 0, 255,
                255, 255, 255, 255, 255
            ]
        );
    });

    it('check for GREY image 5x5 2 iterations', function () {
        let kernel = new Matrix([[1, 1, 1], [1, 1, 1], [1, 1, 1]]);
        let image = new Image(5, 5,
            [
                255, 255, 0, 255, 255,
                255, 0, 0, 0, 255,
                255, 0, 0, 0, 255,
                255, 0, 0, 0, 255,
                255, 255, 0, 255, 255
            ],
            {kind: 'GREY'}
        );

        Array.from(image.closing({kernel: kernel, iterations: 2}).data).should.eql(
            [
                255, 255, 255, 255, 255,
                255, 0, 0, 0, 255,
                255, 0, 0, 0, 255,
                255, 0, 0, 0, 255,
                255, 255, 255, 255, 255
            ]
        );
    });
});

