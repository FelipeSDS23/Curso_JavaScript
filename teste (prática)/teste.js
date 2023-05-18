const userName = 'FelipeSDS23';

fetch(`https://api.github.com/users/${userName}/repos`, {
    method: 'GET',
    headers: {
        Accept: 'aplication/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(`Houve algum erro: ${err}`)
});