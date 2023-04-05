var btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    fetch('http://localhost:8000/').then(function (response) {
        return response;
    }).then(function (_a) {
        var url = _a.url;
        window.location = url;
    }).catch(function (error) {
        console.error(error);
    });
});
