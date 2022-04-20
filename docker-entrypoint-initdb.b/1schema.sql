USE comms; 

CREATE TABLE users(
    username varchar(20),
    display_name varchar(20),
    PRIMARY KEY(username)
);

CREATE TABLE chats(
    chat_id int NOT NULL AUTO_INCREMENT,
    chat_name varchar(20),
    PRIMARY KEY(chat_id)
);

CREATE TABLE usersChats(
    chat_id int NOT NULL AUTO_INCREMENT,
    username varchar(20),
    PRIMARY KEY(chat_id),
    FOREIGN KEY(chat_id) REFERENCES chats(chat_id),
    FOREIGN KEY(username) REFERENCES users(username)
);

CREATE TABLE friends(
    username varchar(20),
    friend varchar(20),
    FOREIGN KEY(username) REFERENCES users(username)
);

CREATE TABLE messages(
    message_id int NOT NULL AUTO_INCREMENT,
    chat_id int,
    username varchar(20),
    message text,
    time_stamp timestamp,
    PRIMARY KEY(message_id),
    FOREIGN KEY(chat_id) REFERENCES chats(chat_id),
    FOREIGN KEY(username) REFERENCES users(username)
);