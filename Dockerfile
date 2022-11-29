FROM openjdk:19

ENV ENVIROMENT=prod

MAINTAINER Maria Weber <maria-weber@online.de>

EXPOSE 8080

ADD backend/target/app.jar app.jar

CMD ["sh", "-c", "java -jar /app.jar"]