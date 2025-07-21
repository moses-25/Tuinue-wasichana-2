tuinue-wasichana-frontend/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── assets/                        # All static files like images and icons
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/                    # Reusable components
│   │   ├── Button/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── HeroSection/
│   │   ├── ProgramCard/
│   │   ├── CharityCard/
│   │   ├── StoryCard/
│   │   ├── FAQItem/
│   │   └── Modal/
│   │
│   ├── layouts/                       # Shared layout wrappers
│   │   ├── MainLayout/
│   │   └── AuthLayout/
│   │
│   ├── pages/                         # Route-based views (user-facing)
│   │   ├── Home/
│   │   │   ├── Home.jsx               # Hero section, intro, CTA
│   │   │   └── Home.css
│   │   ├── About/
│   │   ├── Programs/
│   │   ├── Stories/
│   │   ├── Charities/
│   │   ├── CharityDetails/
│   │   ├── Donate/
│   │   ├── FAQ/
│   │   ├── Contact/
│   │   ├── NotFound/
│   │   └── Dashboard/                # Wrapper if you decide to generalize dashboard
│   │
│   ├── features/                     # Logic per feature (Redux slices, APIs)
│   │   ├── auth/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   ├── authSlice.js
│   │   │   └── authAPI.js
│   │   ├── charities/
│   │   │   ├── CharityList/
│   │   │   ├── CharityDetails/
│   │   │   ├── CharityApply/
│   │   │   ├── charitiesSlice.js
│   │   │   └── charitiesAPI.js
│   │   ├── donations/
│   │   │   ├── DonationForm/
│   │   │   ├── DonationHistory/
│   │   │   ├── donationsSlice.js
│   │   │   └── donationsAPI.js
│   │   ├── stories/
│   │   │   ├── StoriesList/
│   │   │   ├── StoryDetails/
│   │   │   ├── storiesSlice.js
│   │   │   └── storiesAPI.js
│   │   ├── admin/
│   │   │   ├── AdminDashboard/
│   │   │   ├── CharityApproval/
│   │   │   ├── adminSlice.js
│   │   │   └── adminAPI.js
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   └── usePagination.js
│   │
│   ├── services/                     # Axios setup + external services
│   │   ├── axiosInstance.js
│   │   └── api.js
│   │
│   ├── context/                      # React context for auth/user data
│   │   └── AuthContext.js
│   │
│   ├── utils/                        # Reusable helpers
│   │   ├── validators.js
│   │   └── formatters.js
│   │
│   ├── constants/                    # Static enums, roles, routes, etc.
│   │   ├── routes.js
│   │   └── roles.js
│   │
│   ├── app/                          # App setup and config
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── routes.jsx                # React Router setup
│   │   └── store.js                  # Redux store
│   │
│   ├── index.js                      # React root
│   └── index.css                     # Global reset + variables (if any)
│
├── tests/                            # Unit/integration tests (if needed)
│   ├── components/
│   ├── pages/
│   └── features/
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── vite.config.js (or CRA config)
