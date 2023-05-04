import { ajax, apiUrls } from "../../api/urls"


export default{
    namespaced: true,
    state:{
        widgets: {widgets: [], tag_types : []}
    },
    mutations:{
        setWidgets(state, widgets){
            state.widgets = widgets
        }
    },
    actions:{
        fetchWidgetData({commit}, categorySlug){
            return ajax.get(apiUrls.categoryWidgets(categorySlug))
            .then(response => {
                commit("setWidgets", response.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }
    },
    getters:{
        categoryWidgets(state){
            const widgets = state.widgets.widgets
            const tags = state.widgets.tag_types.map(tags => {
                tags.type = "DROPDOWN_LIST"
                return tags
            })
            return widgets.concat(tags)
        },
        categoryTitle(state){
            return state.widgets.title
        }
    }

}