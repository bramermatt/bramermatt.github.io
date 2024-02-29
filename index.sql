-- Create the database
CREATE DATABASE IF NOT EXISTS my_website_db;
USE my_website_db;

-- Create the table for storing content (book reviews and blogs)
CREATE TABLE IF NOT EXISTS content (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('book_review', 'blog') NOT NULL,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    date_started DATE,
    review TEXT,
    quotes TEXT
);

-- Insert sample data for a book review
INSERT INTO content (type, title, author, date_started, review, quotes) VALUES 
(
    'book_review',
    'The Hobbit Book Review (Re-Read)',
    'J.R.R. Tolkien',
    '2024-02-26',
    'I can certainly say, the Hobbit is one of my favorite books I''ve ever read. [...]', -- (Paste the full review text here)
    '["I will give you a name," he said to it, "and I shall call you Sting".", "Flames unquenchable sprang high into the night. Another swoop and another, and another house and then another sprang afire and fell; and still no arrow hindered Smaug or hurt him more than a fly from the marshes."]' -- (Paste the quotes here)
);

-- Insert sample data for a blog post
INSERT INTO content (type, title, author, date_started, review, quotes) VALUES 
(
    'blog',
    'My First Blog Post',
    'John Doe',
    '2024-02-27',
    'This is my first blog post. [...]', -- (Paste the full blog post text here)
    NULL
);
