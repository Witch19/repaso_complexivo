from django.db import models


# Modelo Shows (funciones de cine)
class Show(models.Model):
    movie_title = models.CharField(max_length=120)
    room = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available_seats = models.IntegerField()

    def __str__(self):
        return self.movie_title



# Modelo Reservations (reservas)
class Reservation(models.Model):

    STATUS_CHOICES = [
        ("RESERVED", "RESERVED"),
        ("CONFIRMED", "CONFIRMED"),
        ("CANCELLED", "CANCELLED"),
    ]

    show = models.ForeignKey(Show, on_delete=models.CASCADE, related_name="reservations")
    customer_name = models.CharField(max_length=120)
    seats = models.IntegerField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.customer_name} - {self.show.movie_title}"
