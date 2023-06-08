const express=require('express');
const app=express();
app.use(express.json());



function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }


  //Get API
  app.get('/countVowels',(req,res)=>{
    let string=req.body.str;  //str is key in which the string value is requested
    let vowels=countVowels(string);
    res.send({"vow":vowels});
  })

  //Port+Ip= Socket
  const port =3001;
  const ip="localhost";
  app.listen(port,ip,()=>{
    console.log("Server is listening");
  });


