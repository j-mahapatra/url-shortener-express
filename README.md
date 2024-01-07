# URL Shortener

This app is used to shorten URLs. User can enter the URL that they want to shorten and create the short URL for the entered URL. 
The app allows user authentication through cookies using JWT tokens. Views have been added for login, signup and home using the EJS template engine.
The site is rendered on the server. It follows the MVC architecture.

# Routes

| Route  | Method | Description |
|---|---|---|
| ```/```  | ```GET``` | Homepage view |
| ```/login```  | ```GET``` | Login page view |
| ```/signup```  | ```GET``` | Signup page view |
| ```/create```  | ```POST``` | API route for creating a short URL |
| ```/details/:generatedId```  | ```GET``` | API route to get all the details of a particular short URL |
| ```/:generatedId```  | ```GET``` | API route to redirect to a short URL |
| ```/user/signup```  | ```POST``` | API route for signup |
| ```/:generatedId```  | ```POST``` | API route for login |

# Environment Variables

- ```PORT```: Port number of the server
- ```MONGODB_URI```: URI of the mongoDB server
- ```JWT_SECRET_KEY```: Secret Key for JWT token

# Screenshots

![signup](https://github.com/j-mahapatra/url-shortener-express/assets/107102771/e0cedb1b-bd6f-4186-b10a-b5ce0145d20f)
![login](https://github.com/j-mahapatra/url-shortener-express/assets/107102771/c568e6af-c744-4962-939c-931956a10b19)
![home](https://github.com/j-mahapatra/url-shortener-express/assets/107102771/1799b9cb-2b48-400b-96e1-1c005c52d2ff)

# Tech Used

NodeJS, ExpressJS, MongoDB, EJS templating language
