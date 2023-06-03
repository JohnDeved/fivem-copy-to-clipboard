fx_version 'bodacious'
game 'gta5'

author 'You'
version '1.0.0'

fxdk_watch_command 'yarn' {'watch'}
fxdk_build_command 'yarn' {'build'}

client_script 'dist/client.js'

ui_page 'index.html'

files {
  'index.html',
}
