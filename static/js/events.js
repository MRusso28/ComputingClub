$('#learn-more-hackathon').on("click", function(){
  $('.hackathon-div').toggle();
})

$('#learn-more-github').on("click", function(){
  $('.github-div').toggle();
})


$(document).ready(function(){
  $('.hackathon-div').toggle();
  $('.github-div').toggle();
});

var event = {
  name: 'Hackathon',
  desc: 'Spring Hackathon',
  datetime: new Date('April 6, 2019 09:30:00'),
  location: 'CCE-030'
}


$('#addEventBtn').on('click', () =>{
  $.ajax({
    type: 'POST',
    data: JSON.stringify(event),
        contentType: 'application/json',
                url: 'http://localhost:3000/events',
                success: function(data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
            });
});

$('#addResourceBtn').on('click', () =>{
  $.ajax({
    type: 'POST',
    data: JSON.stringify(event),
        contentType: 'application/json',
                url: 'http://localhost:3000/careerResource',
                success: function(data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
            });
});
