const btn = <HTMLElement>document.querySelector('.btn');

btn.addEventListener('click', () => {
    fetch('http://localhost:8000/').then((response) => {
    return response;
    }).then(({ url }) => {
        (<any> window).location = url;
    }).catch((error) => {
        console.error(error);
    });
})