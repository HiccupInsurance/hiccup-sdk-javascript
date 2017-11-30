function testPolicyPurchase() {
    client.policy
        .purchase({
            title: 'Mr',
            firstName: 'Budi',
            lastName: 'Arsana',
            email: 'budi.arsana@hiccup.com.au',
            phone: '+62888888',
            ageMin: 21,
            ageMax: 75,
            planId: 112,
            startDate: '2030-06-06',
            endDate: '2030-06-06',
            country: 'AU',
            sourceCountry: 'AU',
            pickupState: {
                abbrev: 'QLD'
            },
            paymentProcessor: 'stripe',
            paymentToken: 'tok_1Aqv4UAbtUZpTIibCKbvpPa0',
            product: 'RVE',
            cardFirstName: 'alpha',
            cardLastName: 'beta',
            rentalSupplier: 'Avis',
            vehicleClass: 'ECMR',
            depot: "Coolangatta Airport (Gold Coast Airport)",
            partnerConfirmation: '01012313414214',
            notifyWhenFail: false
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.error(error)
        });
}
