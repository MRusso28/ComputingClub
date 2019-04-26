function reload(){
        var user = JSON.parse(sessionStorage.getItem("userInfo"));
        console.log(user);
        if(user != null){
          $('#signout-btn').show();
          $('#login-btn').hide();
          $('#apply-btn').hide();
          if(!user.officer){
            $('#checklist-tab').hide();
          }else if(!user.approved){
            $('#events-tab').hide();
          }else{
            $('#checklist-tab').show();
            $('#events-tab').show();
    
          }
        }else{
          $('#signout-btn').hide();
          $('#login-btn').show();
          $('#apply-btn').show();
          $('#checklist-tab').hide();
          $('#events-tab').hide();
        }
}