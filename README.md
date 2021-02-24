# crypto-dashboard

### Signup/Signin page
* signup/signin available with google account
* store user "id"
* logout function
### Settings/Intro Page
* greeting page, ask user to choose favorites
* provide default 5 coins as favorites/complete list of all coins
* fuzzy search functionality
* hovering/selecting coins
* adding/removing coins
* disabling out chosen coins
* confirmation of favorited coin (remember those values for user, generates dashboard prices/historical data)

### Dashboard
* data instantiates from remembered favs and/or forwards to settings page
* display 5 major cards for first 5 favs/ compant cards for next 5
* line chart for 10 historical ploints on current fav coin symbol
* select coins changes /re-fetches data, remembers current fav
* select to render histoprical point on Date (days, weeks, months)
* display name/image of oin next to chart

### Discover Us page
* info on each team member
* separate, navigatable link
* links to github/linkedin profiles
* coherent theme


### Technologies
* styled-components
* css-grid
  * auto-fill v auto-fit
  * place-self = align-self(y-axis) + justify-self(x-axis)
* context (React.createContext)
  * wrapped in Provider
  * rendered via Consumer 
  * shadow over appBar texts changes due to context
* lodash 
  * debounce function (prevents rapid-fire clicking, etc.)
  * removeCoin 
  * isInFavorites - asks if key is already contained within given array
* fuzzy (search, filter)
* Highcharts
* moment
  * date manipulation lib (add, subtract dates using interface)