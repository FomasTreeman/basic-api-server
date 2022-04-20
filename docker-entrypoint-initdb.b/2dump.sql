INSERT INTO users VALUES ('fom_tree', 'Tom');

INSERT INTO users VALUES ('dadd', 'Dad');

INSERT INTO users VALUES ('muma', 'Mum');

INSERT INTO friends VALUES ('fom_tree', 'dadd');

INSERT INTO friends VALUES ('fom_tree', 'muma');

INSERT INTO friends VALUES ('fom_tree', 'jim');

INSERT INTO friends VALUES ('fom_tree', 'bob');

INSERT INTO friends VALUES ('dadd', 'muma');

INSERT INTO friends VALUES ('muma', 'dadd');

INSERT INTO friends VALUES ('muma', 'fom_tree');

INSERT INTO chats VALUES (1, 'muma');

INSERT INTO chats VALUES (2, 'Tesla fan boys');

INSERT INTO chats VALUES (3, 'family');

INSERT INTO chats VALUES (4, 'parents');

INSERT INTO usersChats VALUES (1, 'fom_tree');

INSERT INTO usersChats VALUES (2, 'fom_tree');

INSERT INTO usersChats VALUES (3, 'muma');

INSERT INTO usersChats VALUES (4, 'muma');

INSERT INTO usersChats VALUES (1, 'muma');

INSERT INTO usersChats VALUES (2, 'dadd');

INSERT INTO usersChats VALUES (3, 'dadd'); 

INSERT INTO usersChats VALUES (4, 'dadd');

INSERT INTO messages (chat_id, username, message) VALUES (1, 'fom_tree', 'Hello mum');

INSERT INTO messages (chat_id, username, message) VALUES (1, 'muma', 'Hello Tom');

INSERT INTO messages (chat_id, username, message) VALUES (2, 'dadd', 'Welcome to Tesla Fan boy club');

