const electron=require('electron');

const {app,BrowserWindow,globalShortcut,dialog,Tray,Menu}=electron;
const ipc=electron.ipcMain;
let mainwindow;
// function createWindow()
// {
//     mainwindow=new BrowserWindow({
//         width:600,
//         height:450,
//         webPreferences:true,
//         resizable:false,
//         alwaysOnTop:false,
//         title:"Gokul Kadia- First Electron App",
//         frame:true
//     });
//     mainwindow.loadFile("src/index.html");
// }

// app.whenReady().then(createWindow);
let templates=[
    {label:'File Menu',submenu:[{label:'File Menu'}]},
    {label:'Menu 2'}
];
let menu=Menu.buildFromTemplate(templates);
Menu.setApplicationMenu(menu);

app.on('ready',_=>{
    mainwindow=new BrowserWindow({
        width:1000,
        height:450,
        webPreferences:{
            nodeIntegration:true
        },
        resizable:false,
        alwaysOnTop:false,
        darkTheme:true,
        title:"Gokul Kadia- First Electron App",
        frame:true
    });
    let child=new BrowserWindow({parent:mainwindow});
    child.loadURL(`file://${__dirname}/index.html`);
    child.show();
    mainwindow.loadURL(`file://${__dirname}/index.html`);
    // globalShortcut.register('shift+k',()=>{
    //    // dialog.showMessageBox('Gokul');
    //     dialog.showOpenDialog({
    //         defaultPath:app.getPath('desktop'),
    //         buttonLabel:'select file'
    //     });
    // });
    
    // var tray=new Tray('src/R.png');
    // tray.setToolTip('Test App');
    // tray.on('click',_=>{
    //     mainwindow.isVisible()?mainwindow.hide():mainwindow.show();
    // });

    mainwindow.on('closed',_=>{
        mainwindow=null;
    });
    
});


// ipc.on('open-error-dialog',function(event){
//     dialog.showErrorBox('an Error','error is coming');

// });
