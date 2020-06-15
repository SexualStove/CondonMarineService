import Api from './api'

export default {
    SendForm (data) {
      return Api().post('/DebtLodement', data)
    },

    createBlog (data) {
        return Api().post('/create', data)
    },
    getBlog (blogId) {
        return Api().get('/blog/'+blogId)
    },
    getAll (){
        return Api().get('/blog')
    },
    deleteBlog (blogId) {
        return Api().delete('/blog/'+blogId)
    }
    // uploadThumbnail (file){
    //     return Api().post('/create', file)
    // }
}

// AuthenticationService.register({
//     email: 'test@gmail.com',
//     password:'1234'
// });