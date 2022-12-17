
export default class RTCDTMFToneChangeEvent {
    type: string;
    tone: string;
    constructor(type, eventInitDict: { tone: string }) {
        this.type = type.toString();
        this.tone = eventInitDict.tone.toString();
    }
}
