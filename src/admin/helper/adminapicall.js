import { API } from "../../backend";

// category calls

// 1. create category
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}
// 2. get all category
export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET",
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}

// 3. update category



// product calls
// 1. create a product
export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => response.json())
        .catch(error => console.log(error));
}

// 2. get all products

export const getProducts = () => {
    return fetch(`${API}/products`, {
        method: "GET",
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

// 3. delete a product
export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    )
        .then(response => response.json())
        .catch(err => console.log(err))
}

// 4. get a product
export const getProduct = (productId) => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    })
        .then(response => response.json())
        .catch(err => console.log(err + "error @ fetch product by id"))

}

// 5. update a product
export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body : product
    }

    )
        .then(response => response.json())
        .catch(err => console.log(err))
}