import {instance} from "dal/instance";

export const UserTreeApi={
    getUserTree(treeName:string){
        return instance.post(`/api.user.tree.get/${treeName}`)
    },
    getUserChildrenTree(data:{treeName:string,parentNodeId:number,nodeName:string}){
        return instance.post(`/api.user.tree.node.create/${data}`)
    }
}
