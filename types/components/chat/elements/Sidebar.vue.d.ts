declare const _default: import("vue").DefineComponent<{}, {
    toggleExploreAgents: (value: any) => void;
    toggleSessions: (value: any) => void;
    toggleCollections: (value: any) => void;
    triggerExploreAgentsFocusAnimation: () => void;
    toggleSidebar: () => void;
    $emit: (event: "create-new-session" | "session-click" | "delete-session" | "collection-click" | "agent-click", ...args: any[]) => void;
    status: string;
    agents: unknown[];
    sessions: unknown[];
    collections: unknown[];
    newSessionButtonStatus: string;
    config: Record<string, any>;
    selectedCollection: string;
    selectedSession: string;
    addDummySession: boolean;
    showSelectedCollection: boolean;
    initialExploreAgentsOpen: boolean;
    initialSessionsOpen: boolean;
    initialCollectionsOpen: boolean;
    sidebarSections: unknown[];
    $props: {
        readonly status?: string | undefined;
        readonly agents?: unknown[] | undefined;
        readonly sessions?: unknown[] | undefined;
        readonly collections?: unknown[] | undefined;
        readonly newSessionButtonStatus?: string | undefined;
        readonly config?: Record<string, any> | undefined;
        readonly selectedCollection?: string | undefined;
        readonly selectedSession?: string | undefined;
        readonly addDummySession?: boolean | undefined;
        readonly showSelectedCollection?: boolean | undefined;
        readonly initialExploreAgentsOpen?: boolean | undefined;
        readonly initialSessionsOpen?: boolean | undefined;
        readonly initialCollectionsOpen?: boolean | undefined;
        readonly sidebarSections?: unknown[] | undefined;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
