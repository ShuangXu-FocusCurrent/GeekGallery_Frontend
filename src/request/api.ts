import service from "@/request/index";
import {LoginData} from "@/type/login";
interface loginData{
  username:String,
  password:string
}
export function login(data:loginData){
  return service({
    url:"/login",
    method:"post",
    data
  })
}

//PostsList api
export function getPostList(){
  return service({
    url:"/GetAll",
    method:"get"
  })
}