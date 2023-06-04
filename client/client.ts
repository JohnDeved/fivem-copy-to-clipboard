console.log('[ts-default] Client Resource Started')

globalThis.exports('copyToClipboard', (text: string) => {
  console.log('copyToClipboard', text)
  SendNuiMessage(JSON.stringify({
    type: 'clipboard',
    data: text,
  }))
  SetNotificationTextEntry('STRING')
  AddTextComponentString(`Copied ~y~${text.length > 30 ? `${text.slice(0, 30)}...` : text}~s~ to clipboard`)
  DrawNotification(false, false)
})
