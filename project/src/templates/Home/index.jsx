import { Component } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button';

export class Home extends Component {
  state = {
      posts:[],
      allPosts: [],
      page: 0,
      postsPerPage: 10
    };

    // depois que o componente montar, preciso fazer uma chamada para uma API, enxer dados (prencher os posts):
    // usada para buscar dados sem ter que criar uma API: https://jsonplaceholder.typicode.com/
    
   async componentDidMount () {  
      await this.loadPosts();    
    }

    loadPosts = async () => {
      const { page, postsPerPage } = this.state;


      const postsAndPhotos = await loadPosts();
     this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
     });
    }

    loadMorePosts = () => { //não precisa ser async pois não vai buscar nada da API
      const {
        page,
        postsPerPage,
        allPosts,
        posts
      } = this.state;
      const nextPage = page + postsPerPage;
      const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
      posts.push(...nextPosts);
  
      this.setState({ posts, page: nextPage });
    }

  render() {
    const {posts, page, postsPerPage, allPosts} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className="container">
        <Posts posts={posts} />

        <div class="button-container">
          <Button
            text="Load more posts"
            onClick={this.loadMorePosts} //isso não é evento, é um atributo que está sendo passado 
            disabled={noMorePosts}
          />
        </div>
      </section>      
    );
  }
}

//o map deverá ser acompanhado pelo key

