FROM python
ENV PYTHONUBUFFRED 1
RUN mkdir /code
WORKDIR code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
EXPOSE 8000

