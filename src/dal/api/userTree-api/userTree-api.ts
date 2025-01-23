import {instance} from "dal/instance";

export const UserTreeApi={
    getUserTree(treeName:string){
        return instance.post<GetUserTreeType>(`/api.user.tree.get/${treeName}`)
    },
    getUserChildrenTree(params:{treeName:string,parentNodeId:number | null,nodeName:string}){
        return instance.post(`/api.user.tree.node.create/`,null,{params})
    },
    deleteNodeTree(params:{treeName:string,nodeId:number}){
        return instance.post(`/api.user.tree.node.create/`,null,{params})
    }
}

export type GetUserTreeType={
    id:number,
    name:string,
    children:[]
}
