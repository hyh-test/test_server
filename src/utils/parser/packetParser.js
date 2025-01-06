import { getProtoMessages } from "../../init/loadProtos.js"

export const packetParser = (data) => {
    const protoMessages = getProtoMessages();

    const Packet = protoMessages.common.Packet;
}