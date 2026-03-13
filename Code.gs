function createStudyCircleForm() {
  var form = FormApp.create('Study Circle Enrollment Form');
  form.setIsQuiz(false);


  form.setTitle("Study Circle Enrollment Form");
  form.setDescription("This Study Circle is designed for learners from non-IT backgrounds, as well as some learners from technical backgrounds, who want to build practical IT knowledge and skills in a supportive learning environment. Sessions will be held twice a week on weekends, and each session will usually last 2 to 3 hours. This form will help us understand your background, current engagement, interests, future plans, and expectations so that we can better design the syllabus and learning experience.");

  var section = form.addPageBreakItem().setTitle("Section 1: Basic Information");

  var item = form.addTextItem().setTitle("Full Name");
  item.setRequired(true);

  var item = form.addTextItem().setTitle("Mobile Number");
  item.setRequired(true);

  var item = form.addTextItem().setTitle("Email Address");

  var item = form.addTextItem().setTitle("Age");
  item.setRequired(true);

  var item = form.addMultipleChoiceItem().setTitle("Gender");
  item.setChoices([item.createChoice("Male"), item.createChoice("Female"), item.createChoice("Prefer not to say"), item.createChoice("Other")]);

  var item = form.addTextItem().setTitle("Current Address / Area of Residence");

  var section = form.addPageBreakItem().setTitle("Section 2: Educational Background");

  var item = form.addMultipleChoiceItem().setTitle("What is your highest completed level of education?");
  item.setChoices([item.createChoice("SSC / Equivalent"), item.createChoice("HSC / Equivalent"), item.createChoice("Diploma"), item.createChoice("Bachelor\u2019s"), item.createChoice("Master\u2019s"), item.createChoice("Other")]);
  item.setRequired(true);

  var item = form.addTextItem().setTitle("What is your academic background / field of study?");
  item.setRequired(true);

  var item = form.addMultipleChoiceItem().setTitle("Are you currently a student?");
  item.setChoices([item.createChoice("Yes"), item.createChoice("No")]);
  item.setRequired(true);

  var item = form.addTextItem().setTitle("If yes, what are you currently studying?");

  var item = form.addTextItem().setTitle("Name of your current or most recent educational institution");

  var section = form.addPageBreakItem().setTitle("Section 3: Current Engagement");

  var item = form.addCheckboxItem().setTitle("What is your current status?");
  item.setChoices([item.createChoice("Student"), item.createChoice("Job holder"), item.createChoice("Business owner"), item.createChoice("Freelancer"), item.createChoice("Job seeker"), item.createChoice("Homemaker"), item.createChoice("Not currently engaged"), item.createChoice("Other")]);
  item.setRequired(true);

  var item = form.addParagraphTextItem().setTitle("If employed or engaged in work, what do you currently do?");

  var item = form.addMultipleChoiceItem().setTitle("Do you have any previous work experience?");
  item.setChoices([item.createChoice("Yes"), item.createChoice("No")]);
  item.setRequired(true);

  var item = form.addParagraphTextItem().setTitle("If yes, please briefly mention your work experience");

  var section = form.addPageBreakItem().setTitle("Section 4: Technology & Digital Skill Background");

  var item = form.addMultipleChoiceItem().setTitle("How would you describe your current level of computer/IT knowledge?");
  item.setChoices([item.createChoice("Complete beginner"), item.createChoice("Basic user"), item.createChoice("Intermediate"), item.createChoice("Advanced beginner"), item.createChoice("Technical background")]);
  item.setRequired(true);

  var item = form.addCheckboxItem().setTitle("Which of the following can you currently do?");
  item.setChoices([item.createChoice("Use a computer/laptop comfortably"), item.createChoice("Use Microsoft Word"), item.createChoice("Use Microsoft Excel"), item.createChoice("Create presentations in PowerPoint"), item.createChoice("Use email professionally"), item.createChoice("Browse and search effectively on the internet"), item.createChoice("Use Google Drive / online documents"), item.createChoice("Type in English"), item.createChoice("Type in Bangla"), item.createChoice("Use AI tools like ChatGPT"), item.createChoice("Basic graphic design"), item.createChoice("Basic video editing"), item.createChoice("None of the above"), item.createChoice("Other")]);

  var item = form.addCheckboxItem().setTitle("Do you own or have regular access to the following?");
  item.setChoices([item.createChoice("Smartphone"), item.createChoice("Laptop"), item.createChoice("Desktop computer"), item.createChoice("Stable internet connection"), item.createChoice("Personal email address")]);
  item.setRequired(true);

  var item = form.addMultipleChoiceItem().setTitle("Which device will you mainly use for this Study Circle?");
  item.setChoices([item.createChoice("Smartphone"), item.createChoice("Laptop"), item.createChoice("Desktop"), item.createChoice("Shared device"), item.createChoice("Not sure yet")]);
  item.setRequired(true);

  var item = form.addMultipleChoiceItem().setTitle("Have you attended any IT, computer, or digital skills training before?");
  item.setChoices([item.createChoice("Yes"), item.createChoice("No")]);
  item.setRequired(true);

  var item = form.addTextItem().setTitle("If yes, please mention the training/course name");

  var section = form.addPageBreakItem().setTitle("Section 5: Learning Interests");

  var item = form.addCheckboxItem().setTitle("Which topics are you most interested in learning?");
  item.setChoices([item.createChoice("Basic computer operation"), item.createChoice("Internet and email usage"), item.createChoice("Microsoft Word"), item.createChoice("Microsoft Excel"), item.createChoice("PowerPoint presentation"), item.createChoice("Google Workspace tools"), item.createChoice("Typing skills"), item.createChoice("Online research skills"), item.createChoice("Digital communication"), item.createChoice("AI tools for productivity"), item.createChoice("Freelancing basics"), item.createChoice("Graphic design basics"), item.createChoice("CV writing and job preparation"), item.createChoice("Digital marketing basics"), item.createChoice("Cyber safety / online security")]);
  item.setRequired(true);

  var item = form.addParagraphTextItem().setTitle("Which 3 topics are your highest priority?");
  item.setRequired(true);

  var item = form.addParagraphTextItem().setTitle("Why are you interested in joining this Study Circle?");
  item.setRequired(true);

  var section = form.addPageBreakItem().setTitle("Section 6: Goals, Future Plan & Motivation");

  var item = form.addMultipleChoiceItem().setTitle("What is your main goal for joining this Study Circle?");
  item.setChoices([item.createChoice("Learn basic IT skills"), item.createChoice("Improve academic performance"), item.createChoice("Become more confident with technology"), item.createChoice("Prepare for a job"), item.createChoice("Improve workplace skills"), item.createChoice("Start freelancing"), item.createChoice("Start a career in IT"), item.createChoice("Personal development"), item.createChoice("Other")]);
  item.setRequired(true);

  var item = form.addParagraphTextItem().setTitle("What are your future career or learning plans?");
  item.setRequired(true);

  var item = form.addCheckboxItem().setTitle("Do you want to pursue any of the following in future?");
  item.setChoices([item.createChoice("Office/job-related computer work"), item.createChoice("Freelancing"), item.createChoice("IT support / technical work"), item.createChoice("Graphic design"), item.createChoice("Digital marketing"), item.createChoice("Entrepreneurship / business"), item.createChoice("Higher studies"), item.createChoice("Not sure yet"), item.createChoice("Other")]);

  var item = form.addParagraphTextItem().setTitle("What motivates you most to learn new skills?");

  var section = form.addPageBreakItem().setTitle("Section 7: Availability & Commitment");

  var item = form.addMultipleChoiceItem().setTitle("Are you able to attend sessions twice a week on weekends?");
  item.setChoices([item.createChoice("Yes"), item.createChoice("Mostly yes"), item.createChoice("Not always"), item.createChoice("Not sure")]);
  item.setRequired(true);

  var item = form.addMultipleChoiceItem().setTitle("How many hours per week can you realistically give for learning and practice outside class?");
  item.setChoices([item.createChoice("Less than 2 hours"), item.createChoice("2 to 4 hours"), item.createChoice("4 to 6 hours"), item.createChoice("More than 6 hours")]);
  item.setRequired(true);

  var item = form.addMultipleChoiceItem().setTitle("Are you willing to complete assignments or practice tasks between sessions?");
  item.setChoices([item.createChoice("Yes"), item.createChoice("No"), item.createChoice("Sometimes")]);
  item.setRequired(true);

  var item = form.addMultipleChoiceItem().setTitle("What time on weekends is generally most convenient for you?");
  item.setChoices([item.createChoice("Morning"), item.createChoice("Afternoon"), item.createChoice("Evening"), item.createChoice("Flexible")]);
  item.setRequired(true);

  var section = form.addPageBreakItem().setTitle("Section 8: Expectations from the Study Circle");

  var item = form.addParagraphTextItem().setTitle("What do you expect from this Study Circle?");
  item.setRequired(true);

  var item = form.addCheckboxItem().setTitle("What kind of teaching method helps you learn best?");
  item.setChoices([item.createChoice("Lecture / explanation"), item.createChoice("Live demonstration"), item.createChoice("Hands-on practice"), item.createChoice("Group discussion"), item.createChoice("Q&A session"), item.createChoice("Real-life examples"), item.createChoice("Practice assignments"), item.createChoice("Step-by-step guided exercises")]);

  var item = form.addCheckboxItem().setTitle("What challenges do you think you may face while learning?");
  item.setChoices([item.createChoice("Lack of prior knowledge"), item.createChoice("Fear of technology"), item.createChoice("Lack of device"), item.createChoice("Internet problem"), item.createChoice("Lack of time"), item.createChoice("Lack of confidence"), item.createChoice("Language barrier"), item.createChoice("Difficulty practicing regularly"), item.createChoice("Other")]);

  var item = form.addParagraphTextItem().setTitle("Is there any specific support you would like from the mentor/facilitator?");

  var section = form.addPageBreakItem().setTitle("Section 9: Final Reflection");

  var item = form.addParagraphTextItem().setTitle("In one sentence, what would success in this Study Circle look like for you?");
  item.setRequired(true);

  var item = form.addParagraphTextItem().setTitle("Is there anything else you would like us to know about you?");

  var section = form.addPageBreakItem().setTitle("Section 10: Consent");

  var item = form.addMultipleChoiceItem().setTitle("Do you agree that the information you provide will be used only for training planning, student engagement, and Study Circle management purposes?");
  item.setChoices([item.createChoice("Yes"), item.createChoice("No")]);
  item.setRequired(true);

  Logger.log('Form created: ' + form.getEditUrl());
}