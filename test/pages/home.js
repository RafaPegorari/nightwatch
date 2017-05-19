module.exports = {
    url: function () {
        return this.api.launch_url + '/';
    },
    elements: {
        originField: 'input[name="origin"]',
        destinationField: 'input[name="destination"]',
        minutesField: 'input[name="minutes"]'
    }
};
