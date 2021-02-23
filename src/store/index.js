import { createStore } from 'vuex'
import moment from 'moment';

const store = createStore({
    state () {
        return {
            startTime: moment(Date.now() - 30 * 60 * 1000).format('yyyy/MM/DD HH:mm:ss'),
            endTime: moment().format('yyyy/MM/DD HH:mm:ss'),
        }
    },
    mutations: {

    },
    actions: {

    },
    getters:{

    }
})

export default store
