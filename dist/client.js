(() => {
  // client/client.ts
  console.log("[ts-default] Client Resource Started");
  globalThis.exports("copyToClipboard", (text) => {
    console.log("copyToClipboard", text);
    SendNuiMessage(JSON.stringify({
      type: "clipboard",
      data: text
    }));
    SetNotificationTextEntry("STRING");
    AddTextComponentString(`Copied ~y~${text}~s~ to clipboard`);
    DrawNotification(false, false);
  });
})();
