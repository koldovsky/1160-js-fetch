const chatBtn = document.querySelector('.chat__button');

chatBtn.addEventListener('click', sendChatMessage);

async function sendChatMessage() {
    const message = document.querySelector('.chat__text').value;
    const response = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({message}),
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        document.querySelector('.chat__response').innerText = data.data;
    }
}

async function refreshChatData() {
    const data = await (await fetch('/api/chat') ).json();
    document.querySelector('.chat__response').innerText = data.data;
}

// function refreshChatData() {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const data = JSON.parse(xhr.responseText);
//             document.querySelector('.chat__response').innerText = data.data;
//         }
//     }
//     xhr.open('get', '/api/chat', true);
//     xhr.send();
// }

document.querySelector('.chat__refresh').addEventListener('click', refreshChatData);

refreshChatData();