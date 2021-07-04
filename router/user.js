const router = require('express').Router();
const User = require('../users/userschema');
const {v4:uuid4}= require('uuid');
const qrcode = require('qrcode');
const mailsend = require('../mailgun/mail');

router.post('/scan',async (req,res)=>{
    const {name,age,email} = req.body;
    const result = new User({
        name,
        age,
        email,
        uuid: uuid4()
    });
    const result3 = await result.save();
    const result2 = `${process.env.hosturl}/api/users/${result3.uuid}`
    qrcode.toDataURL(result2,(err,url)=>{
        res.render('qr',{
            qr:url,
            data:result2 
        })
        mailsend(result3.email,`
        Name: ${result3.name} <br>
        Age: ${result3.age} <br>
        email: ${result3.email}<br>
        ${result2}`
        );
    })
    
    
    
})

router.get('/users/:uuid',async(req,res)=>{    
    try{
        
        const user = await User.findOne({uuid:req.params.uuid});
        if(!user){
            res.json({
                error: 'user not found'
            })
        }return res.render('show',{
            name: user.name,
            age: user.age,
            email: user.email
        })
            
      
    }catch(err){
        console.log('invalid request');
        
    }
})










module.exports = router;