import express from 'express'
import { getAllJobs, createJob, getJob, updateJob, deleteJob } from '../controllers/jobs.js'

export const jobRouter = express.Router()

jobRouter.route('/').get(getAllJobs).post(createJob)
jobRouter.route('/:id').get(getJob).patch(updateJob).delete(deleteJob)
