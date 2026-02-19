from rest_framework.generics import ListAPIView, ListCreateAPIView
from rest_framework.permissions import AllowAny
from django.conf import settings
from pymongo import MongoClient
from datetime import datetime

from .models import Show, Reservation
from .serializers import ShowSerializer, ReservationSerializer


# ========================
# Mongo connection
# ========================
client = MongoClient(settings.MONGO_URI)
mongo_db = client[settings.MONGO_DB]
reservation_events = mongo_db["reservation_events"]


# ========================
# GET /shows
# ========================
class ShowListView(ListAPIView):
    queryset = Show.objects.all().order_by("id")
    serializer_class = ShowSerializer
    permission_classes = [AllowAny]


# ========================
# GET /reservations
# POST /reservations
# ========================
class ReservationListCreateView(ListCreateAPIView):
    queryset = Reservation.objects.select_related("show").all().order_by("-id")
    serializer_class = ReservationSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        reservation = serializer.save()

        reservation_events.insert_one({
            "reservation_id": reservation.id,
            "event_type": "CREATED",
            "source": "WEB",
            "note": "Reservation created from Django API",
            "created_at": datetime.utcnow()
        })
