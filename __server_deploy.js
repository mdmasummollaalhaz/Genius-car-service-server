/**
 * 
 * ------------
 * ONE TIME
 * ------------
 * 1. create heroku account
 * 2. verify email
 * 3. install heroku CLI
 * 4. Heroku Login
 * 
 * 
 * ------------------------------
 * For each project
 * ------------------------------
 * 1. heroku create
 * 2. make sure: git add . & git commit -m'' & git push
 * 3. git push heroku main
 * 4. Gpp tp Heroku Dashboard > Current Project > settings > Reveal config
 * 5. copy-paste config vars from your .env file
 * 6. Make sure you have whitelisted all IP Address to access mongoDB
 * 
 * 
 * ------------------------------
 * UPDATE SERVER with new changes
 * ------------------------------
 * 1. Make changes
 * 2. make sure: git add . & git commit -m'' & git push
 * 3. git push heroku main
 * 
 * 
 * ------------------------------
 * Connect server with client and deploy client
 * ------------------------------
 * 1. replace localhost by heroku link
 * 2. npm run build
 * 3. firebase deploy
 * 
 */