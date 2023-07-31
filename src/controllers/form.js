const conexion = require('../database/db');

exports.save = (req, res)=>{
    const q1 = req.body.q1;
    const q2 = req.body.q2;
    const q3 = req.body.q3;
    const q4 = req.body.q4;
    const q5 = req.body.q5;
    const q6 = req.body.q6;
    const q7 = req.body.q7;
    const q8 = req.body.q8;
    const q9 = req.body.q9;
    const q10 = req.body.q10;
    const q11 = req.body.q11;
    const q12 = req.body.q12;
    const q13 = req.body.q13;
    const q14 = req.body.q14;
    const q15 = req.body.q15;
    const q16 = req.body.q16;
    const q17 = req.body.q17;
    const q18 = req.body.q18;
    const q19 = req.body.q19;
    const q20 = req.body.q20;
    const q21 = req.body.q21;
    const q22 = req.body.q22;
    const q23 = req.body.q23;
    const q24 = req.body.q24;
    const q25 = req.body.q25;
    const q26 = req.body.q26;
    const q27 = req.body.q27;
    conexion.query('INSERT INTO rasgos set ?',{adaptable:q1,amable:q2, amistoso:q3, carinoso: q4,critico: q5,confiable: q6,comunicativo: q7,caracFuerte: q8	
        ,estable: q9,elegante: q10,encantador: q11,extrovertido: q12,entusiasta: q13,leal: q14,lider: q15,inteligente: q16,persuasivo: 	q17,sentimental: q18	
        ,simpatico: q19,tenaz: q20,visionario: q21,valiente: q22,generoso: q23,pacifista: q24,observador: q25,creativo: q26, genero: q27},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}