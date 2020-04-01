import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        comments : [
            {
            usersImg: require("../assets/images/ibro.jpg"), 
            name: "Shukurat Oyebode", 
            msgs: "Lovely workstation🤑🤑👨‍❤️‍💋‍👨"
            },
            
            {
            usersImg: require("../assets/images/naz.jpg"),
            name: "Nazih Ajanah",
            msgs: "Can we work remotely together👨‍❤️‍💋‍👨😍?"
            },
            {
            usersImg: require("../assets/images/tele.jpg"),
            name: "Ibrahim Shehu",
            msgs: "Remote work loading🤑😍😇"
        }
        ]
    },

    mutations: {
        addComments(state, comment){
            const commentObj = {
                msgs: comment,
                name: "Avatar",
                usersImg: require("../assets/images/cap.jpg") 
            };
            state.comments.push(commentObj)
        }

    }

});

export default store;