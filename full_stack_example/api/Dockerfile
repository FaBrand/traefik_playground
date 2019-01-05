From python:3.6-alpine

RUN apk update && apk add postgresql-dev gcc libc-dev
RUN pip install flask flask_cors flask_sqlalchemy flask_migrate psycopg2
RUN apk del gcc libc-dev

COPY api.py api.py

EXPOSE 5000
ENTRYPOINT ["python"]
CMD ["api.py"]


