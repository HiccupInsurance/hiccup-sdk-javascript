function testAuthMe() {
    client.auth.me()
        .then(response => console.log(response))
        .catch(error => console.error(error));
}
