Core functionality:
-connect to bank accounts
-spending habits
-recommendations

Clarifying assumptions:
-Front end
-Back end
-Connect to bank accounts
  -Via an API
    -Only information, not actions (GET requests)
    -Detailed transactions data
  -Security/authentication is an issue
-Analyse your spending habits
  -Engine to analyse habits
-Make recommendations
  -Rules based engine

-All very personalised
-Privacy - security

Assumptions:
  -Standardized set of transaction data from different banks
  -Transaction data is available
  -Don't have to worry about bank regulations etc. from different countries
  -Tax regimes by country and occupation probably matter
  -In addition to personal data, aggregate data is also of use

FRONTEND:
-Overall picture of finances for each user
-Connect to a bank account
  -Once connected, see some analytics
  -Ask for manual edits/additions by user (categorize spending etc.)
  -analyze and make recommendations

BACKEND:
Services architecture:
-Client service -> serves frontend files to client
-Database service -> stores user profile in database
-Analytics service -> crunches numbers and generates profiles
-Bank API service -> talks to Bank API and retrieves client's bank transactions

Client is shown page to sign up or login:
-sign up -> creates user account in database
-log in -> brings up user profile view
  -enter bank credentials
  -calls bank API for bank transactions
  -place transactions into database
  -inputs data into analytics service to generate profile
  -place analysed profile into database
  -updates client webpage with results and recommendations

Mobile and Web Desktop:
-Different interfaces and features
  -mobile -> less granular data and graphical explainations of recommendations
  -web -> space for more extensive visualizations
