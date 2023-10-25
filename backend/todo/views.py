from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo
from django.shortcuts import get_object_or_404

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    #queryset = Todo.objects.all()

    def get_object(self, querset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Todo, title = item)

    def get_queryset(self):
        return Todo.objects.all()
