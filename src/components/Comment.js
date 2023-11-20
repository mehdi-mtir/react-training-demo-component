
const Comment = (props)=>{
  return (
  <div className="ui comments">
  <div className="comment">
    <a className="avatar">
      <img src={props.photo} />
    </a>
    <div className="content">
      <a className="author">{props.nom}</a>
      <div className="metadata">
        <div className="date">2 days ago</div>
        <div className="rating">
          <i className="star icon"></i>
          5 Faves
        </div>
      </div>
      <div className="text">
        Hey guys, I hope this example comment is helping you read this documentation.
      </div>
    </div>
  </div>
</div>
  );
}

export default Comment;

