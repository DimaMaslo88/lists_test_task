import {instance} from "dal/instance";

export const UserTreeApi={
    getUserTree(treeName:string){
        return instance.post(`/api.user.tree.get/${treeName}`)
    },
    getUserChildrenTree(params:{parentNodeId:number,treeName:string,nodeName:string}){
        return instance.post(`/api.user.tree.node.create/${params}`)
    }
}
