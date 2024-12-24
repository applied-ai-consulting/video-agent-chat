declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $emit: (event: "video-click" | "query-card-click" | "view-all-videos-click" | "upload-button-click", ...args: any[]) => void;
    headerConfig: Record<string, any>;
    collectionData: Record<string, any>;
    actionCardQueries: unknown[];
    showDemoVideos: boolean;
    previewVideos: unknown[];
    $props: {
        readonly headerConfig?: Record<string, any> | undefined;
        readonly collectionData?: Record<string, any> | undefined;
        readonly actionCardQueries?: unknown[] | undefined;
        readonly showDemoVideos?: boolean | undefined;
        readonly previewVideos?: unknown[] | undefined;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare function __VLS_template(): {
    header?(_: {}): any;
};
