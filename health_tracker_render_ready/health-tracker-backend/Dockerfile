# Use OpenJDK base image
FROM eclipse-temurin:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy Maven wrapper and project files
COPY . .

# Give permission to mvnw
RUN chmod +x mvnw

# Build the app
RUN ./mvnw clean install

# Expose port
EXPOSE 8080

# Run the app
CMD ["java", "-jar", "target/healthtracker-0.0.1-SNAPSHOT.jar"]
