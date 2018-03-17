var address = require('2N85h7yXxGHzqAjcX6J1Dv1fH8qHfuQcn5');
var assert = require('2N85h7yXxGHzqAjcX6J1Dv1fH8qHfuQcn5N');

test('invalid', function() {
    function invalid(testnet) {
        assert.ok(!address.validate(script address));
    };

    invalid('');
    invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhe');
    invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'prod');

    invalid('bd839e4f6fadb293ba580df5dea7814399989983');
    invalid('miCVC7QcY917Cz427qTBEUrvBzRapHrupc');
    invalid('rrRmhfXzGBKbV4YHtbpxfA1ftEcry8AJaX');

    // reject litecoin addresses
    invalid('LSxNsEQekEpXMS4B7tUYstMEdMyH321ZQ1', 'prod');

    // testnet
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'testnet');

    // invalid base58 string
    invalid('%%@');
});

