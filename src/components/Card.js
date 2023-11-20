const Card = (props)=>{
  //console.log(props);
  return (
      <div className="card">
        <div className="content">
          {props.children}
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={()=>props.approuveRef(props.id)} disabled>Approve</div>
            <div className="ui basic red button" onClick={()=>props.declineRef(props.id)} disabled>Decline</div>
          </div>
        </div>
      </div>
  )
}

export default Card;
