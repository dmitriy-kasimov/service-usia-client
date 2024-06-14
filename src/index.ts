import * as alt from 'alt-client';
import * as native from 'natives';

alt.log('USIA-client inited!'); // Only visible in 'F8' menu.

let AuthBrowser: any = null;

alt.onServer('s:c:onAuthByLogin', () => {
    if(AuthBrowser !== null) {
        AuthBrowser.destroy();
        AuthBrowser = null;
    }

    AuthBrowser = new alt.WebView('http://resource/frontend/index.html');
    AuthBrowser.focus();
    alt.showCursor(true);

    AuthBrowser.on('f:c:onAuthByLogin', (login: string, password: string) => {
        alt.emitServer('c:s:onAuthByLogin', login, password);
    });
});
