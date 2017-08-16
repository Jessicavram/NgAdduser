
var UserLogin ={};

UserLogin.validate=function(data){
	var errors=[];
	if(!(!!data && !!data.username)){
		errors.push("username");
	}
	if(!(!!data && !!data.password)){
		errors.push("password");
	}
	return errors;
}
UserLogin.auth=function(data,callback){
	console.log('auth');
	console.log(data);
	var error=null;
	var response={};
	var errors=this.validate(data);
	if(errors.length>0){
		error:{status:400};
		response={code:'e_validation',message:'('+errors.join(',')+') ' +(errors.length>1?'are':'is')+' required'};
	}else{
		if(data.username === 'jc' && data.password == '123'){
			response={user:{id:1000,name:'Jhonatan Caceres'}};			
		}else{
			error={status:404}
			response={code:'user.notfound',message:' User '+data.username+'/*** not found.'};			
		}
	}
	callback(error,response);
}


module.exports = UserLogin;