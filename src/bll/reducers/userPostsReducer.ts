import {SetUserTreeType} from "bll/actions/userTreeActions";

export const userTreeReducerState = {
    id: 0,
    name: "",
    children: [] as ChildrenTreeType[]
}
export type ChildrenTreeType = {
    id: number,
    name: string
}
export type UserTreeReducerType = {
    id: number,
    name: string,
    children: ChildrenTreeType[]


}
export type UserTreeActionsType = SetUserTreeType

export const UserTreeReducer = (state: UserTreeReducerType = userTreeReducerState, action: UserTreeActionsType): UserTreeReducerType => {
    switch (action.type) {
        default:
            return state
    }
}
