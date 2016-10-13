(function () {
    var promise = new Promise((resolve, reject) => {
        var redirectWebsite = 'http://ducksarethebest.com/';

        setTimeout(function () {
            resolve(redirectWebsite);
        }, 2000)
    });

    promise
        .then(website => window.location.href = website);
}());