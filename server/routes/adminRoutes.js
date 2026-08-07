import express from 'express'
import addImage from '../controllers/addImage.js'
import upload from '../middlewares/multer.js'

import deleteImage from '../controllers/deleteImage.js'

import adminImage from '../controllers/adminImage.js'
import getAdminImage from '../controllers/getAdminImage.js'

import addContact from '../controllers/addContact.js'
import login from '../controllers/login.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import getAllImages from '../controllers/getAllImages.js'
import  logout  from '../controllers/logout.js'
const adminRoutes=express.Router()

adminRoutes.post('/image/add',authMiddleware,upload.single('image'),addImage)
adminRoutes.get('/images',authMiddleware,getAllImages)
adminRoutes.delete('/:id',authMiddleware,deleteImage)
adminRoutes.post('/upload',upload.single('admin'),adminImage)
adminRoutes.post(
  "/contact",
  upload.single("image"),
  addContact
);
adminRoutes.post('/login',login)
adminRoutes.post('/logout',logout)

export default adminRoutes