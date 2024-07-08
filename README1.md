- Create new project folder called Newsletter-Signup 
- create new app.js, signup.html,success.html,failure.html
- Initialise npm with default options
- Install body-parser,express and request npm modules
- Require the newly installed modules inside app.js

- Create a new express app and set it to listen on port 3000

- Once port is sset up, log "server is running on port 3000"

``` We can't post styles.css file that we created directly. So we create public/css and move styles.css into it ```

then ,
``` app.use(express.static("public")) ```