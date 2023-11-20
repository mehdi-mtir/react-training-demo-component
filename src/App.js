import Comment from './components/Comment';

function App() {
  let comments = [
    {
      nom : "Stevie Feliciano",
      photo : "https://semantic-ui.com/images/avatar/small/stevie.jpg",
      date_publication : "17/11/2023",
      evaluation : "5",
      texte : "Hey guys, I hope this example comment is helping you read this documentation."
    },
    {
      nom : "Tom Lukic",
      photo : "https://semantic-ui.com/images/avatar/small/joe.jpg",
      date_publication : "19/11/2023",
      evaluation : "4",
      texte : "This will be great for business reports. I will definitely download this."
    },
    {
      nom : "Steve Jobes",
      photo : "https://semantic-ui.com/images/avatar/small/steve.jpg",
      date_publication : "20/11/2023",
      evaluation : "3",
      texte : "Revolutionary!"
    }
  ]
  return (
  <>
    {
    comments.map(comment => <Comment
                              nom={comment.nom}
                              photo={comment.photo}
                              date_publication={comment.date_publication}
                              evaluation={comment.evaluation}
                              texte = {comment.texte} />
                )
    }
  </>
  );
}

export default App;
