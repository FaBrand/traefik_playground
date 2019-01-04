From python:3.6-alpine

RUN pip install flask

COPY api.py api.py

# This is not how a production server should be run. Use a uwsgi server instead.
# e.g. gunicorn
EXPOSE 5000
ENTRYPOINT ["python"]
CMD ["api.py"]


