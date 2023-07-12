export const commentData = {
    id: 1,
    body: 'test comment',
    postId: 1,
    user: {
        id: 1,
        username: 'test name'
    }
};

export const blogData = {
    body: 'test blog',
    id: 1,
    reactions: 5,
    tags: ['one', 'two'],
    title: 'test blog title',
    userId: 1
}

export const blogCommentsData = {
    comments: [commentData],
    total: 10
};