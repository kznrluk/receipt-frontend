const textArea = document.getElementById('message');
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const text = textArea.value;
    console.log( JSON.stringify({ string: text }))

    const result = await fetch('https://receipt.anyfrog.net/print', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ string: text }),
    }).then(r => r.text())

    if (result === 'OK') {
        alert('印刷しました');
    } else {
        alert('失敗しました')
    }
});
