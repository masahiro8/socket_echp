import Echo from "laravel-echo";
window.io = require("socket.io-client");

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//接続情報
window.Echo = new Echo({
  broadcaster: "socket.io",
  host: "https://shogatsu777.warasubo.jp",
  path: "/websocket/"
});

window.Echo.channel("chat_room_15").listen("MessageUpdate", (e) => {
  console.log(e);
});

console.log("load1");
