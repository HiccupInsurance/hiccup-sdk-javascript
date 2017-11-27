
/**
 *
 * @param {string|null} startDate
 * @param {string|null} endDate
 */
function testQuoteGetQuotes(startDate, endDate) {

    if (typeof startDate === 'undefined') {
        startDate = '2030-06-06';
    }

    if (typeof endDate === 'undefined') {
        endDate = '2030-06-06';
    }

    client.quote
        .getQuotes({
            title: 'Mr.',
            firstName: 'Budi',
            lastName: 'Arsana',
            email: 'budi.arsana@hiccup.com.au',
            phone: '+6288888888',
            ageMin: 21,
            ageMax: 27,
            product: 'RVE',
            startDate: startDate,
            endDate: endDate,
            country: 'AU',
            sourceCountry: 'AU',
            coupon: 'vip-you-know-nothing-jon-snow',
            vehicleClass: 'ECMR'
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.error(error)
        });
}
