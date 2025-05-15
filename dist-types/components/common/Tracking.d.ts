import React from 'react';
import { Resource } from '../../hooks/resource';
declare const Tracking: {
    View: React.FC<{
        ignore?: "EEC" | "CUSTOM";
    }>;
    Detail: React.FC<{
        resource: Resource;
        ignore?: "EEC" | "CUSTOM";
    }>;
    Impression: React.FC<{
        resources: (Resource | null)[];
        collection?: string;
        ignore?: "EEC" | "CUSTOM";
    }>;
    ViewCart: React.FC<{
        resources: Resource[];
        onViewCart?: () => void;
        ignore?: "EEC" | "CUSTOM";
    }>;
    Purchase: React.FC<{
        orderId: string;
        products: (Resource & {
            quantity: number;
        })[];
        discounts: {
            name: string;
            price: number;
        }[];
        ignore?: "EEC" | "CUSTOM";
        onTracked?: () => void;
    }>;
};
export default Tracking;
