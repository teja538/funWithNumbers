//var readlineSync=require('readline-sync')
// var name=readlineSync.question("whats your name??")
// console.log(name)
// for(i=1;i<=5;i++)
// {
//   console.log(i+":"+"teja")
// }
// //homework: star pattern
// n=readlineSync.question("enter n: ")
// for(i=1;i<=n;i++)
// {
//   console.log("*".repeat(i))
// }

// //ex10: list grocery items to buy

// var glocery=["oil","turmeric","soaps","shampoo","snacks"];
// console.log(glocery[0])
// console.log(glocery[2])
// len=glocery.length
// console.log(glocery[len-1])

// //ex11: print every item on the list
// var glocery=["oil","turmeric","soaps","shampoo","snacks"];
// var n=glocery.length
// for(var i=0;i<n;i++)
// {
//   console.log(glocery[i])
// }
// superheroes=[
//   spiderman={
//     power:100,
//     height:120,
//     weight:50
//   },
//   batman={
//     power:200,
//     height:220,
//     weight:100
//   }
// ]
// console.log(superheroes[1])

var readlineSync=require('readline-sync')
console.log("*** Fun with numbers Quiz ***")
var name=readlineSync.question("whats your name??")
console.log("hey " + name + " lets start the quiz🧐")
queslistlevel1=[
  ques1= {
    ques:"operator to add two numbers?",
    ans:"+"
  },
  ques2={
    ques:"2+3 equals too?",
    ans:"5"
  },
  ques3={
    ques:"whats the value of 10+01?",
    ans:"11"
  }
]

queslistlevel2=[
  ques1= {
    ques:"operator to subtract two numbers?",
    ans:"-"
  },
  ques2={
    ques:"2-3 equals too?",
    ans:"-1"
  },
  ques3={
    ques:"whats the value of 10-01?",
    ans:"9"
  }
]


queslistlevel3=[
  ques1= {
    ques:"operator to multiply two numbers?",
    ans:"*"
  },
  ques2={
    ques:"2*3 equals too?",
    ans:"6"
  },
  ques3={
    ques:"whats the value of 10*01?",
    ans:"10"
  }
]

//chooses multiple choices
queslistlevel4=[
  ques1={
    ques:"what is the value of 0/2?",
    opt:["0","2","1","none"],
    ans:"0"
  },
  ques2={
    ques:"which the value of 0/0?",
    opt:["0","undefined","1","none"],
    ans:"undefined"
  },
  ques3={
    ques:"what 2539/0?",
    opt:["0","2539","undefined","none"],
    ans:"undefined"
  }
]




n1=queslistlevel1.length
score=0
highscore=0
//func quiz
function quiz(q,a)
{
  userans=readlineSync.question(q)
  if(userans==a)
  {
    score+=1
    console.log("Right answer😎")
  }
  else
  {
    //score=score-1
    console.log("wrong ans...")
  }
  console.log("present score is: "+score)
}
//func chooses quiz
function choosesquiz(q,opt,a)
{
  useransindex=readlineSync.keyInSelect(opt,q)
  if(opt[useransindex]==a)
  {
    score+=1
    console.log("Right answer😎")
  }
  else
  {
    //score=score-1
    console.log("wrong ans...")
  }
  console.log("present score is: "+score)
}


//level1
for(i=0;i<n1;i++)
{
  quiz(queslistlevel1[i].ques,queslistlevel1[i].ans)
}
//level2
if(score>=2)
{
  console.log("hey buddy! Level 1 completed and you are promoted to level 2🤩🤩")
  n2=queslistlevel1.length
  for(i=0;i<n2;i++)
  {
    quiz(queslistlevel2[i].ques,queslistlevel2[i].ans)
  }

}
//level3
if(score>=4)
{
  console.log("hey buddy! Level 3 completed and you are promoted to level 3🤩🤩🤩")
  n3=queslistlevel3.length
  for(i=0;i<n3;i++)
  {
    quiz(queslistlevel3[i].ques,queslistlevel3[i].ans)
  }

}

//level4
if(score>=6)
{
  console.log("hey fried! you completed level3 and welcome to level 4 (chooses😁)")
  n4=queslistlevel4.length
  for(i=0;i<n4;i++)
  {
    choosesquiz(queslistlevel4[i].ques,queslistlevel4[i].opt,queslistlevel4[i].ans)
  }

}


if(score>highscore)
{
  highscore=score
  console.log("hey!your score is the highiest....")
  console.log(score)
}
else
{
  console.log("high score is :"+highscore)
  console.log("yourscore is: "+score)
}




