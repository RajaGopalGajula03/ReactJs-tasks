import "./comments.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { formatDistanceToNow } from 'date-fns';

const CommentsApp = () => {

    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const colors = [
        '#0284c7', '#f59e0b', '#10b981', '#b91c1c', 
        '#0ea5e9', '#334155', '#94a3b8', '#64748b'
    ];

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const handleAddComment = () => {
        if (name && comment) {
            const newComment = {
                id: uuidv4(),
                name,
                comment,
                isLiked: false,
                color:getRandomColor(),
                timestamp: new Date()
            };
            setComments([...comments, newComment]);
            setName('');
            setComment('');
        }
    };

    const handleDeleteComment = (id) => {
        const filteredComments = comments.filter(comment => comment.id !== id);
        setComments(filteredComments);
    };

    const handleToggleLike = (id) => {
        const updatedComments = comments.map(comment => {
            if (comment.id === id) {
                return { ...comment, isLiked: !comment.isLiked };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    const getTimeAgo = (timestamp) => {
        return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
    };  

    return (
        <div className="app-container">
            <div className="top-section">
                <div className="left-side">
                    <h1 className="heading1">Comments</h1>
                    <input className="inputName" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <textarea className="textArea" rows="4" placeholder="Your Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                    <button className=" btn btn-primary" onClick={handleAddComment}>Add Comment</button>
                </div>
                <div className="right-side">
                    <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments"></img>
                </div>
            </div>
            <hr></hr>
            <div className="bottom-section">
                <div className="commentCount">
                    <span className="spanCount">{comments.length}</span>
                    <p className="comments-count">Comments</p>
                </div>
                <ul className="comments-list">
                    {comments.map((comment) => (
                        <li key={comment.id} className="comment-item">
                            <div className="comment-header">
                            <span className="firstLetter" style={{backgroundColor:comment.color}}>{comment.name[0].toUpperCase()}</span>
                                <p className="comment-name">{comment.name} <span className="time-ago">{getTimeAgo(comment.timestamp)}</span></p>
                            </div>
                            <div>
                                <p className="comment-content">{comment.comment}</p>
                            </div>
                            <div className="like-delete">
                                <button onClick={() => handleToggleLike(comment.id)}>
                                    <img src={comment.isLiked ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png" : "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"} alt="like"></img>
                                </button>
                                <button onClick={() => handleDeleteComment(comment.id)}>
                                    <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" alt="delete"></img>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CommentsApp;
