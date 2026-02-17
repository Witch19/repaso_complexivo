from django.urls import path
from .views import ShowListView, ReservationListCreateView

urlpatterns = [
    path("shows/", ShowListView.as_view()),
    path("reservations/", ReservationListCreateView.as_view()),
]
