import React , { useState } from 'react';
import './App.css';
import Card from './Card';
import FormMsm from './FormMsm';

// function App() {
//     const [stateArticle , setArticleState] = useState({
//       articles : [
//         { id : 1 , title : 'article 1' , body : 'this is article 1'},
//         { id : 2 , title : 'article 2' , body : 'this is article 2'},
//         { id : 3 , title : 'article 3' , body : 'this is article 3'},
//       ],ClassName
//     })
//
//     const [stateTitle , setTitleState] = useState({
//       title : 'hello roocket'
//     })
//
//
//     let articleList = stateArticle.articles.map((article , index) => <Card key={index} title={article.title} body={article.body} />)
//
//     const loadMore = (e) => {
//       let articles = [
//         { id : 4 , title : 'article 4' , body : 'this is article 4'},
//         { id : 5 , title : 'article 5' , body : 'this is article 5'},
//         { id : 6 , title : 'article 6' , body : 'this is article 6'},
//       ]
//
//
//       setArticleState(prevState => {
//         return {
//           articles : [...prevState.articles , ...articles],
//         }
//       })
//     }
//
//     console.log(stateArticle)
//     console.log(stateTitle)
//
//     return (
//       <div className="app">
//         {
//           articleList
//         }
//
//         <button onClick={loadMore}>load more</button>
//       </div>
//     );
// }

class App extends React.Component {
  state = {
    articles : [
      { id : 1 , title : 'article 1' , body : 'this is article 1'},
      { id : 2 , title : 'article 2' , body : 'this is article 2'},
      { id : 3 , title : 'article 3' , body : 'this is article 3'},
    ],
    title : 'this is roocket',
    loading : true
  }

  loadMore = () => {
      setTimeout(() => {
        let articles = [
          { id : 4 , title : 'article kir' , body : 'this is article kiri'},
          { id : 5 , title : 'article kos' , body : 'this is article kooooooni'},
          { id : 6 , title : 'article mame' , body : 'this is article lashi'},
        ]

      this.setState(prevState => {
        return {
          articles : [...prevState.articles , ...articles],
          loading : false
        }
      })
    }, 3000);
  }

  render() {
    console.log(this.state)
    let articleList = this.state.articles.map((article , index) => <Card key={index} title={article.title} body={article.body} />)

    return (
      <div className="app">
        {
          this.state.loading
          ? <div>loading . . .</div>
          : articleList
        }

        <button onClick={this.loadMore}>load more</button>
      </div>
    );
  }
}

export default App;
