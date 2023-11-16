import axios from "axios";

export class QueryDataUsers{
    constructor(uri,path,userToken){
        this.uri=uri;
        this.path=path
        this.userToken=userToken;
    }
    async getData(data){
        const config = {
            method: 'get',
            url:this.uri+this.path,
            headers:{
                "access-token-auth":this.userToken
            },
            params:{
                documentId:data.userDocumentId,
                password:data.userPassword
            }
            };
        return await axios(config);
    }
    async getSesion(userDocumentId){
        console.log(this.uri+this.path)
        const  config={
            method:'get',
            url:this.uri+this.path+userDocumentId,
            headers:{
                "access-token-auth":this.userToken
            }
        }
        return await axios(config);
    }
}
export class QueryDataOp{
    constructor(uri,path,userToken){
        this.uri=uri;
        this.path=path;
        this.userToken=userToken;
    }
    async getOPByUser(userDocumentId){
        const config = {
            method: 'get',
            url:this.uri+this.path+userDocumentId,
            headers:{
                "access-token-auth":this.userToken
            }
            };
        return await axios(config);
    }
    async openOp(data){
        const config={
            method:'post',
            url:this.uri+this.path,
            headers:{
                "access-token-auth":this.userToken
            },
            data
        };
        return await axios(config);
    }
    async getSpecificationOp(op){
        const config={
            method:'get',
            url:this.uri+this.path+op
        }
        return await axios(config);
    }
    async getAllSpecificationOp(op){
        const config={
            method:'get',
            url:this.uri+this.path+op
        }
        return await axios(config);
    }
    async getAllOp(){
        const config={
            method:'get',
            url:this.uri+this.path
        }
        return await axios(config);
    }
    async getOpCompleted(op){
        const config={
            method:'get',
            url:this.uri+this.path+op
        }
        return await axios(config);
    }
}
export class QueryDataOCR{
    constructor(uri,path,userToken){
        this.uri=uri;
        this.path=path;
        this.userToken=userToken;
    }
    async getOcrByUser(userDocumentId){
        const config = {
            method: 'get',
            url:this.uri+this.path+userDocumentId,
            headers:{
                "access-token-auth":this.userToken
            }
            };
        return await axios(config); 
    }
    async getOcrBySpeOp(data){
        const config= {
            method:'get',
            url:this.uri+this.path,
            params:data
        }
        return await axios(config);
    }
    async getAllOcr(ctg_id){
        const config={
            method:'get',
            url:this.uri+this.path+ctg_id
        }
        return await axios(config);
    }
    async registerOcr(data){
        const config={
            method:'post',
            url:this.uri+this.path,
            headers:{
                "access-token-auth":this.userToken
            },
            data
        }
        return await axios(config);
    }
    async registerSegundasOcr(data){
        const config={
            method:'post',
            url:this.uri+this.path,
            headers:{
                "access-token-auth":this.userToken
            },
            data
        }
        return await axios(config);
    }
    async checkInOcr(data){
        const config={
            method:'put',
            url:this.uri+this.path,
            headers:{
                "access-token-auth":this.userToken
            },
            data
        }
        return await axios(config);
    }
}
export class QueryDataModulo{
    constructor(uri,path,userToken){
        this.uri=uri;
        this.path=path;
        this.userToken=userToken;
    }
    async getOcrByModulo(moduloId){
        const config = {
            method: 'get',
            url:this.uri+this.path+moduloId,
            headers:{
                "access-token-auth":this.userToken
            }
            };
        return await axios(config); 
    }
    async getEmployeesByModulo(moduloId){
        const config = {
            method: 'get',
            url:this.uri+this.path+moduloId,
            headers:{
                "access-token-auth":this.userToken
            }
            };
        return await axios(config); 
    }
}
