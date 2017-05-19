module.exports = {
    'Check Plans 30, 60, 120 and Normal': function (client) {
        var page = client.page.home();

        page.navigate()
            .waitForElementVisible('#formPlan', 10000)
            .setValue('@originField', '011')
            .setValue('@destinationField', '016')
            .setValue('@minutesField', '121')
            .waitForElementVisible('#plan-30 .price', 1000)
            .assert.containsText('#plan-30 .price', '190')
            .assert.containsText('#plan-30 .price-cents', '19')

            .assert.containsText('#plan-60 .price', '127')
            .assert.containsText('#plan-60 .price-cents', '49')

            .assert.containsText('#plan-120 .price', '2')
            .assert.containsText('#plan-120 .price-cents', '09')

            .assert.containsText('#plan-0 .price', '229')
            .assert.containsText('#plan-0 .price-cents', '90');

        client.end();
    },

    'Check DDD invalid': function (client) {
        var page = client.page.home();

        page.navigate()
            .waitForElementVisible('#formPlan', 10000)
            .setValue('@originField', '019')
            .setValue('@destinationField', '016')
            .setValue('@minutesField', '121')
            .waitForElementVisible('#plan-30 .price-null', 1000)
            .assert.containsText('#plan-30 .price-null', '-');

        client.end();
    },

    'Check DDD that has no plan': function (client) {
        var page = client.page.home();

        page.navigate()
            .waitForElementVisible('#formPlan', 10000)
            .setValue('@originField', '018')
            .setValue('@destinationField', '017')
            .setValue('@minutesField', '100')
            .waitForElementVisible('#plan-30 .price-null', 1000)
            .assert.containsText('#plan-30 .price-null', '-');

        client.end();
    }
};
