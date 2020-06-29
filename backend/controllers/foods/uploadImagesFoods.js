const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose');
const formidable = require('formidable')
const UploadsModel = require('../../models/update.model');
const FoodsModel = require('../../models/foods.model')

exports.uploadImages = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.resourceId)){
      return res.status(404).json({ message: 'Foods not found.'});
    }

    const foods = await FoodsModel.findById(req.params.resourceId);
    
    if (!foods) {
      return res.status(404).json({ message: 'Foods not found.'});
    }
  } catch (err) {
    res.status(500).send(err);
  }
    console.log('ingresa al upload images...')

    const form = formidable({
      hash: 'sha256',
      multiples: true,
      keepExtensions: true
    });
    console.log('sale de form/formidable...')
    form.onPart = part => {
      console.log('ingresa form.onPart...')
      if (['image/jpeg', 'image/png', 'image/gif'].indexOf(part.mime) !== -1) {
          // Here is the invalid file types will be handled. 
          // You can listen on 'error' event
          // form._error(new Error('File type is not supported'));
          form.handlePart(part);
      }
    };
  
    const validateFiles = files => {
      console.log('ingresa al validate files image/...')
      let validfileTypes = ['image/jpeg', 'image/png', 'image/gif'];
      let result = true;
  
  
      for (let fieldName in files) {
        const fieldData = files[fieldName];
        
        if (Array.isArray(fieldData)) {
          fieldData.forEach(f => {
            if (
              f.type === null ||
              validfileTypes.indexOf(f.type) === -1
            ) {
              result = false;
            }
          });
        } else {
          if (
            fieldData.type === null ||
            validfileTypes.indexOf(fieldData.type) === -1
          ) {
            result = false;
          }
        }
      }
  
      return result;
    };
    console.log('sale del validate files...')
  
    form.parse(req, async (err, fields, files) => {
      console.log('ingresa form.parse...')
      const filesResult = [];
  
      if (!validateFiles(files)) {
        res.status(500).send({ message: 'File type(s) not supprted' });
        return;
      }
  
      for (let fieldName in files) {
        const fieldData = files[fieldName];
        
        if (Array.isArray(fieldData)) {
          fieldData.forEach(f => {
            const filename = path.basename(f.path);
            const newFileLocation = path.join(__dirname, '../../public', filename);
            fs.renameSync(f.path, newFileLocation);
            filesResult.push({ 
              fieldName,
              hash: f.hash,
              originalFileName: f.name,
              filename,
              sizeInBytes: f.size,
              mimeType: f.type
            });
          });
        } else {
          const filename = path.basename(fieldData.path);
          const newFileLocation = path.join(__dirname, '../../public', filename);
          fs.renameSync(fieldData.path, newFileLocation);
          filesResult.push({ 
            fieldName,
            hash: fieldData.hash,
            originalFileName: fieldData.name,
            filename,
            sizeInBytes: fieldData.size,
            mimeType: fieldData.type
          });
        }
      }
  
      const upload = new UploadsModel({
        resourceType: 'comida',
        resourceId: new mongoose.Types.ObjectId(req.params.resourceId),
        files: filesResult
      });

      try {
        await upload.save();
        await FoodsModel.findByIdAndUpdate(req.params.resourceId, { imageUrl: '/static/' + upload.files[0].filename }, { new: true });
        res.send(upload);
      } catch (err) {
        console.log(err)
        res.status(500).send(err);
      }
  
    });
  };