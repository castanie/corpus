// console.log(`Messages: ${document.getElementsByClassName("mx_MTextBody").length}`);
// console.log(`Images: ${document.getElementsByClassName("mx_MImageBody").length}`);
// console.log(`Unknown: ${document.getElementsByClassName("mx_UnknownBody").length}`);

let users = {}

let msg_count = { "wollpulli": 0, "castanie": 0, "anonymous": 0 }
let wrd_count = { "wollpulli": 0, "castanie": 0, "anonymous": 0 }
let sym_count = { "wollpulli": 0, "castanie": 0, "anonymous": 0 }

users["wollpulli"] = document.querySelectorAll('.mx_Username_color6');
users["castanie"] = document.querySelectorAll('.mx_Username_color8');

let max_length = "";

for (const user in users) {
    for (const event of users[user]) {
        let message = event.parentNode.parentNode.children[2]
            .querySelector(".mx_MAudioBody, .mx_MFileBody, .mx_MImageBody, .mx_MPollBody, .mx_MTextBody, .mx_MVideoBody, .mx_RedactedBody, .mx_UnknownBody").textContent;
        if (message.length > 400) {
            continue;
        }
        msg_count[user] += 1;
        wrd_count[user] += (message.match(/\p{L}+/gu) ?? []).length;
        sym_count[user] += message.replace(" ", "").length;
        console.log(`${user}: ${message}`);
        max_length = message.length > max_length.length ? message : max_length;
    }
}

console.log(msg_count);
console.log(wrd_count);
console.log(sym_count);

console.log(max_length);