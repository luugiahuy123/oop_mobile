class phone {
    constructor(battery, draft, inbox, sent) {
        this.battery = battery;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
    }

    charge() {
        this.battery = 100;
    }

    // gan chuoi cho nhap thu
    textMessage(text) {
        this.draft = text;
    }

    showInbox() {
        return this.inbox;
    }

    showSent() {
        return this.sent;
    }

    sendMessage(phone) {
        this.sent.push(this.draft);
        phone.inbox.push(this.draft);
        this.draft = "";
    }
}