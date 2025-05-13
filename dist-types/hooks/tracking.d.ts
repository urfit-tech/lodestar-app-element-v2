import { Member } from '../types/data';
import { Resource } from './resource';
type CwMemberShipCardDetails = {
    id: string;
    title: string;
    ended_at: string | null;
    delivered_at: string | null;
}[];
export declare const useTracking: (trackingOptions?: {
    separator: string;
}) => {
    view: (currentMember: Pick<Member, "id" | "name" | "username" | "email" | "pictureUrl" | "role" | "options"> | null, options?: {
        ignore?: "EEC" | "CUSTOM";
        utmSource?: string;
    }, memberShipCardDetails?: CwMemberShipCardDetails) => void;
    impress: (resources: (Resource | null)[], options?: {
        collection?: string;
        ignore?: "EEC" | "CUSTOM";
        utmSource?: string;
    }) => void;
    click: (resource: Resource, options?: {
        collection?: string;
        position?: number;
        ignore?: "EEC" | "CUSTOM";
    }) => void;
    detail: (resource: Resource, options?: {
        collection?: string;
        ignore?: "EEC" | "CUSTOM";
        utmSource?: string;
    }) => Promise<void>;
    addToCart: (resource: Resource, options?: {
        direct?: boolean;
        quantity?: number;
    }) => void;
    removeFromCart: (resource: Resource, options?: {
        quantity?: number;
    }) => void;
    viewCart: (resources: Resource[], options?: {
        step?: number;
        ignore?: "EEC" | "CUSTOM";
        utmSource?: string;
    }) => void;
    checkout: (resources: Resource[], coupon: {
        id: string;
        title: string;
        amount: number;
    } | null, options?: {
        step?: number;
        ignore?: "EEC" | "CUSTOM";
        utmSource?: string;
    }) => void;
    addPaymentInfo: (options?: {
        step?: number;
        gateway?: string;
        method?: string;
    }) => void;
    purchase: (orderId: string, orderProducts: (Resource & {
        quantity: number;
    })[], orderDiscounts: {
        name: string;
        price: number;
    }[], options?: {
        step?: number;
        ignore?: "EEC" | "CUSTOM";
        utmSource?: string;
    }) => void;
    login: () => void;
    register: (method: string, page: string) => void;
};
export declare const useMemberShipCardDetails: (memberId: string | undefined) => CwMemberShipCardDetails;
export {};
