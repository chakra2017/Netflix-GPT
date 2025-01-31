# Netflix Clone Project with integrating OpenAI GPT search functionality for unique movie Recommendations.

## Technologies Used

- Front-end:
  `React`
  `Redux`
  `Tailwind CSS`
  `JavaScript`
  `React Router`
- User Authentication: `Firebase`
- API used : `The Movie Database[TMDB]` `OpenAI platform GPT API`

## Screenshot

- Sign Up / Sign In Page.
  <img width="1440" alt="signUpPage" src="/assests/Signup.png">
  <img width="1440" alt="signInPage" src="/assests/Login.png">

- Browse Page with GPT Search button, sign out functionality, video trailer streaming on background and movies section.
  <img width="1438" alt="BrowsePage" src="/assests/Home1.png">

- Browse Page with TMDB Movie Result Section
  <img width="1440" alt="BrowsePageMovieSection" src="/assests/Home2.png">

- GPT Search Page with Multi-language Feature in Search.
  <img width="1440" alt="GptSearchPage" src="/assests/GPTsearch1.png">

- Movie Result from GPT search functionality.
  <img width="1440" alt="GptSearchPageResult" src="/assests/GPTsearch.png">

---

## Setup the project

1. Fork the project
2. Clone project using `git clone https://github.com/<YOUR-USERNAME>/NetflixGPT.git`
3. Install dependencies `npm install`
4. In the root directory create a `.env` file and add the TMDB API KEY and OPENAI API KEY into it.

Example:

```
REACT_APP_OPENAI_KEY

REACT_APP_TMDB_API_KEY
```

5. Create a firebase project for web and enable Email/Password Authentication.
6. Inside utils folder -> edit the firebase.js file with your firebase config and also add `export const auth = getAuth();` in the file.

7. To run the server execute `npm start`

---

## Project Idea Overview

- Login/Sign Up [Firebase User Authentication]

  - Sign In /Sign up Form
  - Redirect to Browse Page

- Browse Page (after authentication)

  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N

- NetflixGPT
  - Search Bar
  - Movie Suggestions

---

## NetflixGPT Project Flow and Completed Task

- Create React App.
- Configured TailwindCSS.
- Header.
- Routing of App.
- Login Form.
- Sign up form.
- Form Validation.
- useRef Hook.
- Firebase Setup.
- Deployed our app to production.
- Create SignUp user account.
- Implement Sign In user API.
- Created Redux Store with userSlice.
- Implemented Sign out.
- Update Profile
- BugFix: Signup user display and profile picture update
- BugFix: If the user is not logged in redirect /browse to login page and vice versa
- UnSubscribed to the on onAuthStateChanged callback
- Add hardcoded values to the constant file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Container.
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- Get Open AI Api Key
- (BONUS) Multi-language Feature in our App
- GPT Search Page
- GPT Search Bar
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization - Memoization is used to optimize the performance of functions by caching the results of expensive function calls and reusing those results when the same inputs occur again.
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive.
- FIX: rectified the GptSearchPage data layer and clear the GptSearchPage when you click the GPT search button
