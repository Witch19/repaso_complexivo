from django.contrib import admin
from .models import Show, Reservation


@admin.register(Show)
class ShowAdmin(admin.ModelAdmin):
    list_display = ("id", "movie_title", "room", "price", "available_seats")


@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ("id", "customer_name", "show", "seats", "status", "created_at")
