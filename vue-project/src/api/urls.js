import axios from 'axios'

export const ajax = axios.create({
    baseURL: 'https://stagingbpo.thecontractchair.co.uk/'
})


export const apiUrls = {
    // user urls
    login: '/rest/user/api-token-auth/',
    register: '/rest/user/register/',
    userData: '/rest/user/detail/',
    userUpdate: userId => `/rest/user/user/${userId}/admin/update/`,

    // product urls
    productList: '/rest/widgets/product/',
    productDetail: (productSlug) => `/rest/store/products/${productSlug}/`,

    // category urls
    productCategories: '/rest/widgets/category/header_listing/',
}

