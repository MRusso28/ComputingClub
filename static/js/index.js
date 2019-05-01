function reload(){
        var user = JSON.parse(sessionStorage.getItem("userInfo"));
        console.log(user);
        if(user != null){
          $('#signout-btn').show();
          $('#login-btn').hide();
          $('#apply-btn').hide();

          if(user.officer){//officer

          }else if(user.approved){//approved members

          }else{//not approved members

    
          }
        }else{
          $('#signout-btn').hide();
          $('#login-btn').show();
          $('#apply-btn').show();

        }

}