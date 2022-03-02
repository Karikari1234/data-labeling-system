# data-labeling-system

Steps to use this project.

1. Install NodeJs on your computer. (https://nodejs.org/en/download/)
2. open the terminal.
3. Go to the root directory of the project.
4. run "npm install"
5. remove the sample2.json file (public/data/sample2.json), and keep your original data file with the same name "sample2.json". The format should be as follows for the code to run properly:
   [{
   "context":"This is the content of the JSON",
   "question":"What is question?"
   }
   ]
6. Once that is done, you need to run "npm run dev".
7. You can now access the website at http://localhost:3000/static/ from chrome.
8. Enter your Long and Short Answer there and press submit.
9. All the content will be saved in outputData.json. 