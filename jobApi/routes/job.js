import express from 'express'
import { getAllJobs, getJob, createJob, deleteJob, updateJob } from '../controllers/job.js'

export const jobRouter = express.Router()


jobRouter.route('/').get(getAllJobs).post(createJob)
jobRouter.route('/:id').get(getJob).patch(updateJob).delete(deleteJob)