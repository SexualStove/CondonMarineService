import Api from '@/services/api'

export default {
    SendForm (data) {
      return Api().post('/DebtLodgement', data)
    },
    SendContact (data) {
        return Api().post('', data)
    },

}

// AuthenticationService.register({
//     email: 'test@gmail.com',
//     password:'1234'
// });