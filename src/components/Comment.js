
const Comment = ({photo, nom, date_publication, evaluation, texte})=>{
  return (
  <div className="ui comments">
  <div className="comment">
    <a className="avatar">
      <img src={photo} />
    </a>
    <div className="content">
      <a className="author">{nom}</a>
      <div className="metadata">
        <div className="date">{date_publication}</div>
        <div className="rating">
          <i className="star icon"></i>
          {evaluation} Faves
        </div>
      </div>
      <div className="text">
        {texte}
      </div>
    </div>
  </div>
</div>
  );
}

export default Comment;

