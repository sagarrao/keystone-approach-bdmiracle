exports.reportProcessedMsg = 'Your report has arrived.';
exports.counsellingDoneMsg = 'Your conselling has been done today.';
exports.scanScheduledMsg = 'Congratulations! Your scan has been scheduled with us' ;
exports.scanTakenreportNotArrivedMsg = 'Your scan has been taken and we are processing your details, We shall inform you once report is avaialble with us';
exports.greetingMessage = 'Greetings for the day. Hope you are doing great.';
exports.closingMessage = 'Please contact us at +91 9686381336 or email us at anuraggupta86@gmail.com in case you need further details.';
exports.habitsWelcomeMessage = 'Welcome to Habit in 66 Days experience, which helps you build a HABIT of your choice.'+"\n\n"+
'Today is the first day of your program. Make sure you have collected the Tracker and follow the Guidelines.'+"\n\n"+
'In case of any doubts/questions/concerns reach out to us at 91-9739742036'+"\n\n"+
'Happy Habit Building.'+"\n\n"+
'Regards,'+"\n"+
'Team HabitIn66Days'
exports.reportProcessedSub = 'Find Your Talents : Scan Report is Generated.';
exports.counsellingDoneSub = 'Find Your Talents : Conuselling is Done.';
exports.scanScheduledSub = 'Find Your Talents : Scan has been schehduled.' ;
exports.scanTakenreportNotArrivedSub = 'Find Your Talents : Scan Taken, Waiting for your Report.';
exports.habitsProgramNotificationSubject = 'Welcome to the HabitIn66Days Family'
exports.signature = '\n' + 'Thanks and Regards,' + '\n' + 'Find Your Talents' + '\n' + 'Contact - 91 9739742036' + '\n' + 'Email : anuraggupta86@gmail.com';


exports.sendEmail =  function (fetchedUsers,content,subject){
	var sendgrid = require("sendgrid")(process.env.SENDGRID_API_KEY);
	var email = new sendgrid.Email();
	console.log("Should send an email:"+content);
	email.addTo(fetchedUsers[0]);
	email.setFrom("anuraggupta86@gmail.com");
	email.setSubject(subject);
	email.setHtml(content);
	sendgrid.send(email,function(result){
		console.log(result);
	},function(err, json) {
	  if (err) { return console.error(err); }
	  console.log(json);
	});
};