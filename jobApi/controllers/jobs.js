import { StatusCodes } from "http-status-codes"
import { Job } from "../models/job.js"


export const getAllJobs = async (req, res) => {
    res.send('All jobs')
}

export const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create({...req.body})
    res.status(StatusCodes.CREATED).json({job})
}

export const getJob = async (req, res) => {
    res.send('get job')
}

export const updateJob = async (req, res) => {
    res.send('upated job')
}

export const deleteJob =  async (req, res) => {
    res.send('delete job')
}
