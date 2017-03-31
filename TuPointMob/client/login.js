

Template.login.onRendered(function() {
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
});

Template.login.events({
    'click #btnlogin': function(e){
       Router.go('mycourse');
    }
});
