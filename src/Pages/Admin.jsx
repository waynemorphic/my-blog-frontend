import React, { useState, useEffect } from 'react'

const Admin = () => {
    const [posts, setPosts ] = useState([]) 

    // Using componentDidMount lifecyle method 
    useEffect(() => {
        const url = 'http://localhost:8081/blogger'

        fetch(url, {
            mode: 'cors',
            // credentials: 'include',
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setPosts(data)                
            })
            .catch((err) => {
                console.log(err.message)
            });
    }, []);

        return (
        <div>
            {posts.map((post) => {
                return(
                    <div key={post.id}>
                        <h3>{post.name}</h3>
                        <h3>{post.email}</h3>
                    </div>
                )
            })}

        </div>)
}

export default Admin