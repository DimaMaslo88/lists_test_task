
export const  userTreeReducerState={
    id: 0,
    name: "",
    children: [] as ChildrenTreeType[]
}
export type ChildrenTreeType ={
    id:number,
    name:string
}
export type UserTreeReducerType = {
    id:number,
    name:string,
    children:ChildrenTreeType[]


}

export const UserTreeReducer =(state:any,action:any)=>{

}
