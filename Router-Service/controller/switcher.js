const getDataFromServiceOne=(req,res)=>{
    res.status(200).send({
        msg:"Hey its me .. Service - 1"
    })
}

const getDataFromServiceTwo=(req,res)=>{
    res.status(200).send({
        msg:"Hey its me .. Service - 2"
    })
}

module.exports={
    getDataFromServiceOne,
    getDataFromServiceTwo,
    
}