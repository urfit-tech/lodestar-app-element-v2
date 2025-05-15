import { ApolloClient } from '@apollo/client';
import { Member } from '../types/data';
export type ResourceType = 'program_package' | 'program_package_plan' | 'program' | 'program_content' | 'program_plan' | 'activity' | 'activity_ticket' | 'podcast_album' | 'podcast_plan' | 'podcast_program' | 'member_shop' | 'merchandise' | 'merchandise_spec' | 'project' | 'project_plan' | 'post' | 'member' | 'unknown';
export type Resource = {
    id: string;
    urn: string;
    type: ResourceType;
    title: string;
    owners: Pick<Member, 'id' | 'name'>[];
    sku?: string;
    price?: number;
    categories?: string[];
    tags?: string[];
    variants?: string[];
    products?: (Resource | null)[];
    metaId?: string;
    options?: {
        [key: string]: any;
    };
};
export declare const getResourceCollection: (apolloClient: ApolloClient<unknown>, urns: string[], withProductType?: boolean) => Promise<(Resource | null)[]>;
export declare const useResourceCollection: (urns: string[], withProducts?: boolean) => {
    loading: boolean;
    resourceCollection: (Resource | null)[];
};
