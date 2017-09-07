
from django.conf.urls import url

from api import views

urlpatterns = [
    # url(r'users/$', views.UserList.as_view(), name='users'),
    url(r'^initData/$', views.initData, name='initData'),
    url(r'^', views.main, name='main'),
]
