import { useRef, useState } from "react"

function Comments() {

  const [comments, setComments] = useState(getSavedComments());
  const [replies, setReplies] = useState([]);

  const commentInputRef = useRef();

  function getSavedComments() {
    let savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    return savedComments;
  }

  function handleAddComment() {
    let value = commentInputRef.current.value.trim();
    if (value) {
      setComments((currentComments) => {
        const newComment = {
          id: 'A-' + Date.now(),
          description: value,
          replies: []
        }
        currentComments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(currentComments));
        return [...currentComments];
      })
      commentInputRef.current.value = '';
    }
  }

  function handleReplyClick(ev, id) {
    if (ev.target.innerText != 'Add') {
      ev.target.previousElementSibling.style.display = 'block'
      ev.target.innerText = 'Add';
    } else {
      setReplies((currentReplies) => {

        const newId = Date.now();

        if (id.startsWith('A-')) {
          comments.map((comment) => comment.id == id ? { ...comment, links: [...comment.links, newId] } : comment);
        } else {
          replies.map((reply) => reply.id == id ? { ...reply, links: [...reply.links, newId] } : reply);
        }

        const newReply = {
          id: newId,
          description: ev.target.previousElementSibling.value,
          replies: []
        }
        currentReplies.push(newReply);
        localStorage.setItem('replies', JSON.stringify(currentReplies));
        return [...currentReplies];
      })
    }
  }

  return (
    <div className="main-container">
      <div className="input-section">
        <input type="text" className="comment-input" ref={commentInputRef} />
        <button onClick={handleAddComment}>Add comment</button>
      </div>
      <div className="replies">
        {
          comments.map(comment => <div key={comment.id} className="comment-reply">
            <p>{comment.description}</p>
            <div className="reply-input">
              <input type="text" style={{ display: 'none' }} />
              <button className={comment.id + ' add-reply'} onClick={(ev) => {
                handleReplyClick(ev, comment.id)
              }}>Reply</button>
            </div>
            <div className="see-replies-section">
              <p className={comment.id}>see replies</p>
              <div className="replies"></div>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default Comments