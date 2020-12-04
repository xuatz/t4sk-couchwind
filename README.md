# t4sk-couchwind

Yet another todolist. But this project objective is to practise using couchdb and tailwindcss.

## Features

- Create todo
- Edit/Delete
- Persist offline
- Create Account
  - migrate local state to remote state to persist session
- Login/Logout
- Todo (will not support multi-user todo due to complexity with couchdb, maybe next time ^^)
  - ~~created by~~
  - ~~assigned to~~
    - ~~user can key in the username of other users~~
- ~~Users can and only can see todo that are created by or assigned to them.~~

## Use Cases to achieve

### 1) When a task is sync to multiple devices, when they are modified separately offline, what happens when the devices come online?
