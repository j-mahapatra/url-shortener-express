# URL Shortener

This app is used to shorten URLs. User can enter the URL that they want to shorten and create the short URL for the entered URL. 
The app allows user authentication through cookies using JWT tokens. Views have been added for login, signup and home using the EJS template engine.
The site is rendered completely on the server. It follows the MVC architecture.

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

![Login](https://github.com/j-mahapatra/url-shortener-express/assets/107102771/57c3737c-47a3-4c9f-b180-db3931aad7e3)
![Signup](https://github.com/j-mahapatra/url-shortener-express/assets/107102771/4d514b3d-9b15-434d-b40b-ae740fbd9ede)
![Home](https://github.com/j-mahapatra/url-shortener-express/assets/107102771/3764b72c-2adc-4c34-81a8-ce317bf0433e)

# Tech Used

NodeJS, ExpressJS, MongoDB, EJS templating language
