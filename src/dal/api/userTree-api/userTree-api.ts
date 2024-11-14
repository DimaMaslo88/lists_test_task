import {instance} from "dal/instance";

export const UserTreeApi={
    getUserTree(treeName:string){
        return instance.post(`/api.user.tree.get/${treeName}`)
    }
}
