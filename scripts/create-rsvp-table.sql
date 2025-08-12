-- Create RSVP table for storing wedding RSVP responses
CREATE TABLE IF NOT EXISTS rsvp_responses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  form_data TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create index on created_at for better query performance
CREATE INDEX idx_rsvp_created_at ON rsvp_responses(created_at);
