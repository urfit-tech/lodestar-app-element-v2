"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("@apollo/client"),C=require("react"),a=(t,o,s=!1)=>{const n=o?.resource.filter(e=>e.id!==null).map(e=>{const r=e.id,[,c,d]=r.split(":");return{urn:r,id:d,type:c,title:e.name||"",owners:e.owners||[],price:e.price||0,categories:e.categories||[],tags:e.tags||[],variants:e.variants||[],sku:e.sku||void 0,metaId:e.meta_id||void 0}})||[],u=t.map(e=>n.find(c=>c.urn===e)??null);return s?u.map(r=>r?{...r,products:n.filter(c=>c.metaId===r.urn&&c.urn!==r.urn)}:null):u},g=async(t,o,s)=>{const{data:n}=await t.query({query:l,variables:{urns:o}});return a(o,n,s)},m=(t,o=!1)=>{const{data:s,loading:n}=i.useQuery(l,{variables:{urns:t}}),u=C.useMemo(()=>a(t,s,o),[s,t,o]);return{loading:n,resourceCollection:u}},l=i.gql`
  query GET_RESOURCE_COLLECTION($urns: [String!]!) {
    resource(where: { _or: [{ id: { _in: $urns } }, { meta_id: { _in: $urns } }] }) {
      id
      name
      price
      categories
      tags
      variants
      owners
      sku
      meta_id
    }
  }
`;exports.getResourceCollection=g;exports.useResourceCollection=m;
//# sourceMappingURL=index.cjs13.js.map
