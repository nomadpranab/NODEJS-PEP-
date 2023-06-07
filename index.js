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

  app.get('/countVowels',(req,res)=>{
    let string=req.body.str;
    let vowels=countVowels(string);
    res.send({"vow":vowels});
  })


