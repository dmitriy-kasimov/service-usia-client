import * as alt from 'alt-client';
import * as native from 'natives';
import {WebView} from "alt-client";
import {logger} from "./logger/logger";

let AuthBrowser: WebView = null;

alt.onServer('s:c:showUSIA', () => {

    logger()

    native.freezeEntityPosition(alt.Player.local, true);
    alt.toggleGameControls(false);

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
