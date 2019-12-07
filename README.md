# ULTRAVIOLET
## by Lily Wang

### How to run the app.
1. Downloard and Install node js if you have not https://nodejs.org/en/download/
1. Clone the git repo 
	* Open the terminal and run:
	__git clone https://github.com/wangy184/ultraviolet-.git__
	* Navigate to the folder by running:
	__cd ultraviolet-__
1. Restore the packages by running npm install
	* _npm install_
1. Run the server by running in the terminal _npm start_
	* You can see the app in your browser at http://127.0.0.1:3000/

### How to deploy to Google Cloud.
1. After making changes, use git to commit your changes and push them to remote
	* _git add ._
	* _git commit -m "enter what are the changes you've made"_
	* _git push_
1. Run __gcloud app deploy__
1. Run _gcloud app browse_ to see the deployed app