let dtDat = new phone(50, '', [], []);
let dtNhat = new phone(75, '', [], []);

function senDatToNhat() {
    let text = document.getElementById("dat").value;
    dtDat.textMessage(text);
    dtDat.sendMessage(dtNhat);
    document.getElementById("inboxNhat").innerText = dtNhat.showInbox();
    document.getElementById("senDat").innerText = dtDat.showSent();
}