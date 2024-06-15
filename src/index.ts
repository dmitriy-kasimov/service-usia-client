import * as alt from 'alt-client';
import * as native from 'natives';
import {WebView} from "alt-client";

let browserUSIA: WebView = null;
const playerid = alt.Player.local;

alt.onServer('s:c:showUSIA', () => {
    browserUSIA = new alt.WebView('http://resource/frontend/index.html');

    browserUSIA.focus();
    native.freezeEntityPosition(playerid, true);
    alt.toggleGameControls(false);
    alt.showCursor(true);

    browserUSIA.on('f:c:onAuthByLogin', (login: string, password: string) => {
        alt.emitServer('c:s:onAuthByLogin', login, password);
    });

    browserUSIA.on('f:c:onRegByLogin', (
        login: string,
        password: string,
        confirmPassword: string,
        isCheckRules: boolean
    ) => {
        alt.emitServer('c:s:onRegByLogin', login, password, confirmPassword, isCheckRules);
    });
});

alt.onServer('s:c:hideUSIA', () => {
    native.freezeEntityPosition(playerid, false);
    alt.toggleGameControls(true);
    alt.showCursor(false);

    browserUSIA.destroy();
})