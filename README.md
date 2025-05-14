**Tech Stack**
- Frontend: React 19.1.0
- Runtime: Node.js 18.17.0
- Styling: Bootstrap 4, Custom CSS
- API: API calls are simulated with a local JSON file.

**Features**

- The application is fully responsive and works across all devices as per the Figma design.
- The code is modular, with reusable components and a structured layout to make future updates easier.
- API calls are simulated with a local JSON file, and API responses are handled accordingly.

src/
├── Api/           # Contains common API function(s)
├── Assets/        # All CSS and static styling files
├── Components/    # Common and reusable UI components
├── Routes/        # Defines all application routes
├── Views/         # Pages/views rendered in the browser
└── App.css        # Global styles

**Running the App**
- npm start

**Production Build**
- npm run build
- If deploying the production build to a subdirectory, update the basename in the router setup and add the homepage key in package.json with your hosting URL.

**env BaseURL**
REACT_APP_API_BASE_URL='http://localhost:3000'