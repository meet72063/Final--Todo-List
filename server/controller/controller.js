const { response } = require('express')
const todoSchema = require('../modal/todo')


const getAlltodo =async(req,res)=>{
    try {
        const response = await todoSchema.find({})
        res.status(200).json(response)
    } catch (error) {
       res.status(500).json(error)
    }
}

const getSingleTodo = async(req,res)=>{
    const {id}=req.params
    
    try {
        const response = await todoSchema.find({_id:id})
    res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
   
}

const editSingleTodo = async(req,res)=>{
    const {id}=req.params
   
    try {
        const response = await todoSchema.findOneAndUpdate({_id:id},req.body)
        res.status(200).json(response)
        console.log(response)
    } catch (error) {
        res.status(500).json(error)
    }
   
}

const deleteSingleTodo =async (req,res)=>{
    const id=req.params.id
   try {
    const response = await todoSchema.findOneAndDelete({_id:id})
    res.status(200).json(response)
   } catch (error) {
    res.status(500).json(error)
   }
    
}

const createSingleTodo= async(req,res)=>{
   
    try {
        const response = await todoSchema.create(req.body)
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
    
   
    
}

const findCompleteTodo = async(req,res)=>{
    try {
        const response = await todoSchema.find({completed:true})
        res.status(200).json(response)
    } catch (error) {
       res.status(500).json(error)
    }
}

const findPendingTodo = async(req,res)=>{
    try {
        const response = await todoSchema.find({completed:false})
        res.status(200).json(response)
    } catch (error) {
       res.status(500).json(error)
    }
}



module.exports ={
    getAlltodo,
    getSingleTodo,
    editSingleTodo,
    deleteSingleTodo,
    createSingleTodo,
    findCompleteTodo,
    findPendingTodo
}