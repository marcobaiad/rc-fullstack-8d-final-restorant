import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import '../Css/CreateFoodsPage.css'
import clienteAxios from '../config/axios';

const Editfoods = () => {
  const history = useHistory()
  const params = useParams()
  const wrapperRef = useRef(null)
  const [createFoods, setCreateFoods] = useState({
    title: '',
    description: '',
    summary: '',
    price: ''
  })

  const { title, description, summary, price } = createFoods
  const [previewImage, setPreviewImage] = useState('')
  const [image, setImage] = useState(null)


  const getFood = useCallback(async () => {
    const res = await clienteAxios.get(`api/v1/comidas/${params.id}`)
    setCreateFoods(res.data)
  }, [params.id])

  useEffect(() => {
    getFood()
  }, [getFood])

  const handlePutFood = async (e) => {
    e.preventDefault()
    try {
      await clienteAxios.put(`api/v1/comidas/${params.id}`, {
        title, description, summary, price
      }
      )
    } catch (error) {
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (image !== null) {
        const newFoods = await clienteAxios.post('/api/v1/comidas', createFoods)
        console.log(newFoods)
        const formData = new FormData()
        formData.append('file', image)
        await clienteAxios.post(`/api/v1/comidas/${newFoods.data._id}/upload`, formData, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
      }
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setCreateFoods({ ...createFoods, [e.target.name]: e.target.value })
  }

  const validateupload = e =>
    e.target.files[0].type == 'image/png' ||
    e.target.files[0].type == 'image/jpg' ||
    e.target.files[0].type == 'image/jpeg'


  const upload = e => {
    if (e.target.files[0].size <= 20000000) {
      let file = e.target.files[0];
      let reader = new FileReader()
      reader.onload = function (e) {
        setPreviewImage(e.target.result)
      }
      reader.readAsDataURL(file)
    } else {
      e.target.value = ''
      alert('subir algo min 2 mb')
    }
  }

  const onClickUpdateHandler = async () => {
    try {
      await clienteAxios.put(`/api/v1/comidas/${params.id}`)
      const formData = new FormData()
      formData.append('file', image)
      await clienteAxios.post(`/api/v1/comidas/${params.id}/upload`, formData, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token'),
          'content-type': 'multipart/form-data'
        }
      })
      console.log('llega?')
      history.goBack();
    }
    catch (e) {
      console.log('NO SE PUDO ACTUALIZAR');
    }
  };

  return (
    <div className='pb-5 mb-5'>
      <div className='text-center py-5'>
        <h1>Pagina para editar comidas</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <div className='d-flex justify-content-center'>
              <form onSubmit={onClickUpdateHandler}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Titulo</label>
                  <input
                    type="text"
                    name='title'
                    value={title}
                    className="form-control"
                    id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Descripción</label>
                  <input
                    type="text"
                    name='description'
                    value={description}
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Detalles</label>
                  <input
                    type="text"
                    name='summary'
                    value={summary}
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Precio</label>
                  <input
                    type="text"
                    name='price'
                    value={price}
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100"
                  onClick={handlePutFood}
                >Editar
                </button>
              </form>
            </div>
          </div>
          <div className="col col-6">
            <div>
              <form>
                <div className="form-group d-none">
                  <input
                    type="file"
                    className="form-control-file"
                    name='file'
                    onChange={(e) => {
                      setImage(e.target.files[0])
                      let file = e.target.files
                      if (file.length === 1 && validateupload(e)) {
                        upload(e)
                      } else {
                        e.target.value = ''
                        alert('cargar imagen')
                      }
                    }}
                    ref={wrapperRef}
                    accept='image/gif, image/jpg, image/png'
                  />
                </div>
                <div className='border border-dark' onClick={() => {
                  wrapperRef.current.click()
                }}>
                  <img src={previewImage} className='previewImagen' alt="" />
                  <input type="text" placeholder='Subir Imagen'
                    className=' border-0 borderInputImg' readOnly />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editfoods;