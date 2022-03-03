import HomePage from '../components/HomePage'
import Timeline from '../components/Timeline'
import faker from 'faker'
export default function Home() {
  
  let user = {'user_id': 1, 'username': 'John Doe', 'email': 'drew@devopsdoods.ca'}
  function getBlogs(){
    let temp = []
    for(let i = 0; i < 12; i++){
      let blog = {
        'blog_id': i,
        'title': faker.lorem.sentence(),
        'content': faker.lorem.paragraph(),
        'user_id': 1,
        'author': faker.name.firstName(),
        'email': faker.internet.email(),
        'created_at': faker.date.recent(),
        'published_at': '2002-02-02',
        'image': faker.image.imageUrl(),
        'likes': faker.random.number(),
      }
      temp.push(blog)
    }
    return temp;
  }

  let blogs = getBlogs();
  return (
	  <Timeline user={user} blogs={blogs} />
  );
}