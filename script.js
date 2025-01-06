document.getElementById('approveBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const items = inputText.split('\n').map(item => `- ${item}`).join('\n');

// Append today's date to the output
    const today = new Date();
    const formattedDate = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

    
    outputText.value = `Change/Update Approved. Note provider change(s):\n${items}` + "\n\n" + formattedDate + "\n" +'thompson';
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Copied to clipboard');
});



//Ignore, these are my test items for the list
/*
Item One
Item Two
Item Three
Is this thing working?

*****Reminder***** add the copy to clipboard command to code

*/