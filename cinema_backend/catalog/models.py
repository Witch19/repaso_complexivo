from django.db import models


# Modelo Shows (funciones de cine)
class Show(models.Model):
    title = models.CharField(max_length=150)
    start_time = models.DateTimeField()
    room = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.title


# Modelo Reservations (reservas)
class Reservation(models.Model):
    customer_name = models.CharField(max_length=120)
    seats = models.IntegerField()
    status = models.CharField(max_length=30, default="pending")
    show = models.ForeignKey(Show, on_delete=models.CASCADE, related_name="reservations")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.customer_name} - {self.show.title}"
