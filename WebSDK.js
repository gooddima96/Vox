'use strict';

function handleSDKReady() {
    console.log('SDK ready!!!');
}
function handleConnectionEstablished() {
    if (typeof console !== 'undefined') {console.log(`Connected to VoxImplant:${ vox.connected()}`);}
}

function handleConnectionFailed(e) {
    if (typeof console !== 'undefined') {console.log(`Connection to VoxImplant failed:${ e.message}`);}
}

function handleConnectionClosed() {
    if (typeof console !== 'undefined') {console.log(`Connected to VoxImplant:${ vox.closed()}`);}
}
function handleAuthResult(e) {
    if (typeof console !== 'undefined') {console.log(`Authorized to VoxImplant:${ e.result } ${ (e.result) ? '' : e.code}`);}
}

var vox = VoxImplant.getInstance();

vox.addEventListener(VoxImplant.Events.SDKReady, handleSDKReady);
vox.addEventListener(VoxImplant.Events.ConnectionEstablished, handleConnectionEstablished);
vox.addEventListener(VoxImplant.Events.ConnectionFailed, handleConnectionFailed);
vox.addEventListener(VoxImplant.Events.ConnectionClosed, handleConnectionClosed);
vox.addEventListener(VoxImplant.Events.AuthResult, handleAuthResult);

vox.init({micRequired: true});
vox.connect().then(() => {
    vox.login('user1@conference.gooddima96.voximplant.com', 'foruser1').then((result) => {
        console.log(result.displayName);
    });
});

