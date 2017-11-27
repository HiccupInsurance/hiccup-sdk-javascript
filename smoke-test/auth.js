function testAuthMe() {
    client.auth.me()
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.error(error)
        });
}
