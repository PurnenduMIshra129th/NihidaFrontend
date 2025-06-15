export interface ILoginApiData {
    token: string
    user: {
        email: string
        name: string
        password: string
        role: string
        __v: number
        _id: string
    }
}