From python:3.6-alpine

RUN pip install flask flask_cors

COPY api.py api.py

EXPOSE 5000
ENTRYPOINT ["python"]
CMD ["api.py"]


