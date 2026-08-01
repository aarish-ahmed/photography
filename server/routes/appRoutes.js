import express from 'express'
import getAllImages from '../controllers/getAllImages.js';
import getOneImage from '../controllers/getOneImage.js';
import getContact from '../controllers/getContact.js';
import getAdminImage from '../controllers/getAdminImage.js';

const appRoutes=express.Router()


appRoutes.get('/images',getAllImages)
appRoutes.get('/image/:id',getOneImage)
appRoutes.get("/contact", getContact)
appRoutes.get('/about/image',getAdminImage)

export default appRoutes