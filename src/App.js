import Comment from './components/Comment';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  let commentsInit = [
    {
      id : 1,
      nom : "Stevie Feliciano",
      photo : "https://semantic-ui.com/images/avatar/small/stevie.jpg",
      date_publication : "17/11/2023",
      evaluation : "5",
      texte : "Hey guys, I hope this example comment is helping you read this documentation.",
      etat : "en attente"
    },
    {
      id : 2,
      nom : "Tom Lukic",
      photo : "https://semantic-ui.com/images/avatar/small/joe.jpg",
      date_publication : "19/11/2023",
      evaluation : "4",
      texte : "This will be great for business reports. I will definitely download this.",
      etat : "en attente"
    },
    {
      id : 3,
      nom : "Steve Jobes",
      photo : "https://semantic-ui.com/images/avatar/small/steve.jpg",
      date_publication : "20/11/2023",
      evaluation : "3",
      texte : "Revolutionary!",
      etat : "en attente"
    }
  ]
  const [comments, setComments] = useState([...commentsInit])

  const approuve = (id)=>{
    //console.log('Commentaire ' + id + ' approuvé');
    setComments(comments.map(
      comment => (comment.id === id)?{...comment, etat:'approuvé'}:{...comment}
    ));
    //console.log(comments);
  };

  const decline = (id)=>{
    console.log(`Commentaire ${id} décliné`)
    setComments(comments.filter(
      comment => comment.id !== id
    ))
    //console.log(comments);
  };

  return (
    <div className="ui cards">
    {
    comments.map(comment => (
      <Card approuveRef={approuve} declineRef={decline} id={comment.id} key={comment.id}>
        <Comment  {...comment}/>
      </Card>
    )
      )
      /*return <Comment
                nom={comment.nom}
                photo={comment.photo}
                date_publication={comment.date_publication}
                evaluation={comment.evaluation}
                texte = {comment.texte} />
            })*/
  }
  </div>
  );
}

export default App;
