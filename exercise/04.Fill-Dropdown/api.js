const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
export async function getOptions() {
    return fetch(url)
        .then(res => res.json())
        .then(options => Object.values(options))
        .catch(err => alert(err.message));
}

export async function postOption(text) {
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    };
    
    return fetch(url, options)
        .then(res => res.json())
        .catch(err => alert(err.message));
}
