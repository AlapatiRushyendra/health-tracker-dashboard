
# Health Tracker Backend

## Setup Instructions for Render Deployment

### Environment Variables

- `DB_HOST`: Your PostgreSQL database host
- `DB_PORT`: PostgreSQL port (usually 5432)
- `DB_NAME`: Database name
- `DB_USER`: Database user
- `DB_PASSWORD`: Database password
- `PORT`: Port to run the Spring Boot application (Render will provide this)

### Build & Start Commands

- Build Command: `./mvnw clean install`
- Start Command: `java -jar target/healthtracker.jar`
