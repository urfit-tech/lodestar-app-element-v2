export interface LodestarWindow extends Window {
    lodestar: LodestarSDK;
}
type LodestarSDK = {
    getCurrentMember: () => {
        [key: string]: any;
    } | null;
    getDataLayerByEvent: (event: string) => {
        [key: string]: any;
    } | null;
};
export {};
