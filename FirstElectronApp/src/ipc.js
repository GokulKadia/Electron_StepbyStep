const electron=require('electron');

const ipc=electron.ipcRenderer;

const btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    ipc.send('open-error-dialog');
});