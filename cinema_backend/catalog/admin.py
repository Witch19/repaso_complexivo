from django.contrib import admin
from .models import Show, Reservation


@admin.register(Show)
class ShowAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "start_time", "room", "price")


@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ("id", "customer_name", "show", "seats", "status", "created_at")
