From python:3.6-alpine

RUN apk update && apk add postgresql-dev gcc libc-dev
RUN pip install flask flask_cors flask_sqlalchemy flask_migrate psycopg2 gunicorn flask_marshmallow marshmallow-sqlalchemy
RUN apk del gcc libc-dev

COPY api.py boot.sh ./
ADD migrations migrations
RUN chmod +x boot.sh

EXPOSE 5000
ENV FLASK_APP api.py

EXPOSE 5000
ENTRYPOINT ["sh"]
CMD ["boot.sh"]


