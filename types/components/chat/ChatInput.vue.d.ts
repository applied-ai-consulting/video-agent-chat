declare const _default: import("vue").DefineComponent<{}, {
    focus: () => void;
    $emit: (event: "on-submit" | "on-change" | "tag-agent", ...args: any[]) => void;
    agents: unknown[];
    placeholder: string;
    contextData: Record<string, any>;
    $props: {
        readonly agents?: unknown[] | undefined;
        readonly placeholder?: string | undefined;
        readonly contextData?: Record<string, any> | undefined;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
