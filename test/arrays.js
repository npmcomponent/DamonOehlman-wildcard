var test = require('tape'),
    wildcard = require('../'),
    testdata = [
        'a.b.c',
        'a.b',
        'a',
        'a.b.d'
    ];

test('array result matching tests', function(t) {
    t.plan(4);

    t.equal(wildcard('a.*', testdata).length, 4, '4 matches found');
    t.equal(wildcard('a.b.*', testdata).length, 3, '3 matches found');
    t.equal(wildcard('a.*.c', testdata).length, 1);
    t.equal(wildcard('b.*.d', testdata).length, 0);
});