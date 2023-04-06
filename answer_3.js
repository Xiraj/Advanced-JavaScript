const urls = [
    "https://www.boredapi.com/api/activity",
    "https://www.boredapis.com/api/activity",
    "https://www.boredapis2.com/api/activity",
];

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    resolve(response.json());
                } else {
                    reject(`Error: ${response.status}`);
                }
            })
            .catch(error => {
                reject(`Error: ${error}`);
            });
    });
};