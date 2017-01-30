front end
  -enter some text
  -click 'Create new paste'
  -reloads with a URL route to access this text, i.e. 'pastbin.com/abcd123'

back end
  -entering with the route serves the file

-server storing snippets as .txt file, i.e. 'abcd123.txt'
-route uses route params as the text file name to search for inside the server

fileread and filewrite of text files to place text content onto frontend