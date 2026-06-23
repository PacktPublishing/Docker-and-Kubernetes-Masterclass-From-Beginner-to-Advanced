FROM python:latest

RUN apt-get update && apt-get install -y \
    curl \
    git \
    vim \
    build-essential

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

EXPOSE 5000

ENV FLASK_ENV=development
ENV DEBUG=true
ENV SECRET_KEY=supersecretkey123

CMD ["python", "app.py"]
