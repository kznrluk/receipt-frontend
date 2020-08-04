const textArea = document.getElementById('message');
const sendButton = document.getElementById('send');

const getHash = () => {
    const params = new URL(location.href).searchParams;
    if (params.has('h')) {
        return `WF-HASH: ${params.get('h')}\n`;
    }

    return `WF-HASH: (NONE)\n`
}

sendButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const text = getHash() + '\n' + textArea.value;

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
