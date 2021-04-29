import React from "react"
const Home = () => {

  return (
    <div className="container home-container" id="home-title">
      <div className="row">
        <div className="jumbotron home-title">
        <h1>Tweet Hunter</h1>
        <p className="lead">Welcome to the Tweet Hunter!</p>
        <hr className="my-4"></hr>
        <p>
          This website can be used to locate tweets utilizing the Twitter API. Use the navigation bar to look for tweets from your favorite users. The "Random Tweet" page will display random tweets from 5 of my favorite Twitter accounts. Feel free to use the random tweet button to display a random tweet from these users or simply go back to the search page to find any user your heart desires. Happy Hunting! 
        </p>
        </div>
      </div>
    </div>
  )
}

export default Home