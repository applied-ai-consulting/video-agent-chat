export function useVideoDBAgent(config: any): {
    configStatus: import("vue").Ref<null, null>;
    collections: import("vue").Ref<never[], never[]>;
    sessions: import("vue").ComputedRef<never[]>;
    agents: import("vue").Ref<never[], never[]>;
    activeCollectionData: import("vue").Ref<null, null>;
    activeCollectionVideos: import("vue").Ref<null, null>;
    activeVideoData: import("vue").Ref<null, null>;
    conversations: {};
    addMessage: (message: any) => void;
    loadSession: (sessionId: any) => void;
    deleteSession: (sessionId: any) => void;
    uploadMedia: (uploadData: any) => Promise<Response | undefined>;
    refetchCollectionVideos: () => Promise<void>;
    isConnected: import("vue").Ref<boolean, boolean>;
    sessionId: import("vue").Ref<null, null>;
    videoId: import("vue").Ref<null, null>;
    collectionId: import("vue").Ref<string, string>;
};
