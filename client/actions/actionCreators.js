//increment
export function increment (index) {
	return {
		type:'INCREMENT_LIKES',
		index
	}
}

//add commnet
export function addComment (postId,author,commnet) {
	return {
		type:'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

//remove commnet
export function removeComment (postId,i) {
	return {
		type:'REMOVE_COMMENT',
		postId,
		i
	}
}