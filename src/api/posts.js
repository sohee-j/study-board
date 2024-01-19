import { posts } from '.'

//전체조회
export function getPosts(params) {
	return posts.get('', { params })
}

//단건조회
export function getPostById(id) {
	return posts.get(`/${id}`)
}

export function createPost(data) {
	return posts.post('', data)
}

// put - 전체 데이터 수정
// patch - 일부 데이터만 수정
// export function updatePost(id, data) {
// 	return posts.put(`/${id}`, data)
// }
export function updatePost(id, data) {
	return posts.patch(`/${id}`, data)
}

export function deletePost(id) {
	return posts.delete(`/${id}`)
}
