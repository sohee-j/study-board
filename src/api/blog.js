import axios from 'axios'

export function getBlogList() {
	return axios.get(`${import.meta.env.VITE_APP_API_URL}blog`)
}

export function getBlogListById(id) {
	return axios.get(`${import.meta.env.VITE_APP_API_URL}blog/${id}`)
}

export function createBlog(data) {
	return axios.post('http://localhost:5000/blog', data)
}

export function updateBlog(id, data) {
	return axios.patch(`${import.meta.env.VITE_APP_API_URL}blog/${id}`, data)
}

export function deleteBlog(id) {
	return axios.delete(`${import.meta.env.VITE_APP_API_URL}blog/${id}`)
}
