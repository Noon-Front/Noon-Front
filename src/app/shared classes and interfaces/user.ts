export class User {
  constructor(
    public Id? :string,
    public userName?: string,
    public email?: string,
    public password?: string,
    public confirmPassword?:string,
    public UserRoles?:any
  ){}
}
