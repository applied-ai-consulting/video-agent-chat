export function useChatInterface(): {
    chatInput: import("vue").Ref<string, string>;
    setChatInput: (input: any) => void;
    messageHandlers: {};
    registerMessageHandler: (contentType: any, handler: any) => void;
};
