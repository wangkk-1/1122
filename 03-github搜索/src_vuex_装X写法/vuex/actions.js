import axios from "axios";
export const actions = {
    async search({
        commit
    }, searchName) {
        //形参{commit} 相当于解构赋值 let {commit} = context
        commit("requesting")
        try {
            let response = await axios({
                url: 'https://api.github.com/search/users',
                method: 'GET',
                params: {
                    q: searchName
                }
            })
            let users = []
            response.data.items.forEach(item => {
                let user_name = item.login
                let user_img = item.avatar_url
                let user_url = item.url
                let obj = {
                    user_name,
                    user_img,
                    user_url
                }
                users.push(obj)
            })

            commit('request_success', users)

        } catch (error) {
            commit('request_faild', error.message)
        }

    }
}