from django.urls import path
from . import views
from website.views import CreateUserView, ListUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
    path('home/', views.home, name='home'),
    path('register/', CreateUserView.as_view(), name='register' ),
    path('users/', ListUserView.as_view(), name='users'),
    path('token/', TokenObtainPairView.as_view(), name='get_token'),
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh_token')
]