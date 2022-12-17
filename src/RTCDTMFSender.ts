import { defineCustomEventTarget } from 'event-target-shim';
import { NativeModules } from 'react-native';

import { addListener, removeListener } from './EventEmitter';
import RTCDTMFToneChangeEvent from './RTCDTMFToneChangeEvent';

const { WebRTCModule } = NativeModules;

const DTMF_SENDER_EVENTS = [ 'tonechange' ];

export default class RTCDTMFSender extends defineCustomEventTarget(...DTMF_SENDER_EVENTS) {
    _id: string;
    _peerConnectionId: number;
    _tonebuffer: string;

    constructor(info: {
        peerConnectionId: number,
        id: string
    }) {
        super();

        this._id = info.id;
        this._peerConnectionId = info.peerConnectionId;
        this._tonebuffer = '';

        this._registerEvents();
    }

    insertDTMF(tones: string, diration?: number, interToneGap?: number): void {
        WebRTCModule.senderInsertDTMF();
    }

    _registerEvents(): void {

    }

    get tonebuffer() {
        return this._tonebuffer;
    }
}
