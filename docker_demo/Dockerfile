FROM eclipse-temurin:25-jdk-alpine AS build
LABEL authors="Sudhanshu Chaubey"

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./

RUN ./mvnw dependency:go-offline

COPY src ./src

RUN ./mvnw clean package

FROM eclipse-temurin:25-jre-alpine
LABEL authors="Sudhanshu Chaubey"

WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]